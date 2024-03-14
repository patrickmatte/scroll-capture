import { analytics } from './analytics';

export function initBackgroundPage() {
  chrome.runtime.onMessage.addListener(onMessageHandler);
  chrome.action.onClicked.addListener((tab) => {
    showMainPanel(tab.id, tab.url);
  });
}

async function showMainPanel(tabId) {
  const existingContexts = await chrome.runtime.getContexts({});
  let recording = false;

  const offscreenDocument = existingContexts.find((c) => c.contextType === 'OFFSCREEN_DOCUMENT');

  // If an offscreen document is not already open, create one.
  if (!offscreenDocument) {
    // Create an offscreen document.
    await chrome.offscreen.createDocument({
      url: 'offscreen.html',
      reasons: ['USER_MEDIA'],
      justification: 'Recording from chrome.tabCapture API',
    });
  } else {
    recording = offscreenDocument.documentUrl.endsWith('#recording');
  }

  executeContentScript(tabId).then(() => {
    if (recording) {
      chrome.tabs.sendMessage(tabId, {
        type: 'scrollCaptureLocation',
        location: 'stop',
        tabId,
      });
    } else {
      changeIcon('');
      sendDefaultLocation(tabId);
    }
  });
}

let canvas;

function onMessageHandler(msg, sender, sendResponse) {
  const tabId = msg.tabId;
  switch (msg.type) {
    case 'scrollCaptureShowMainPanel':
      showMainPanel(tabId);
      sendResponse({ mainPanel: true });
      break;
    case 'scrollCaptureStartRecording':
      startRecording(msg);
      break;
    case 'scrollCaptureStopRecording':
      stopRecording();
      break;
    case 'scrollCaptureResizeWindow':
      resizeWindow(msg.width, msg.height);
      break;
    case 'scrollCaptureTrackEvent':
      analytics.fireEvent(msg.category, msg.params);
      break;
    case 'scrollCaptureTrackPage':
      analytics.firePageViewEvent(msg.path.split('/').pop(), msg.path);
      break;
    case 'scrollCaptureUpdatedTabListener':
      let handler;
      switch (msg.location) {
        case 'scenario':
          chrome.storage.local.set({ tabId });
          handler = updatedTabHandlerScenario;
          break;
        case 'play':
        default:
          handler = updatedTabHandlerPlay;
          break;
      }
      if (msg.enabled) {
        chrome.tabs.onUpdated.addListener(handler);
      } else {
        chrome.tabs.onUpdated.removeListener(handler);
      }
      break;
    case 'scrollCaptureInsertCSS':
      // chrome.storage.local.get('tabId').then((obj) => {
      chrome.scripting.insertCSS({
        target: { tabId },
        css: msg.css,
      });
      // });
      break;
    case 'scrollCaptureImageCaptureCanvas':
      canvas = new OffscreenCanvas(msg.width, msg.height);
      break;
    case 'scrollCaptureVisibleTab':
      chrome.tabs.captureVisibleTab(null, {}, (dataUrl) => {
        sendResponse({ dataUrl });
      });
      break;
    case 'scrollCaptureImageCaptureStart':
      startImageCapture(msg);
      break;
    case 'scrollCaptureImageCaptureStop':
      stopImageCapture(msg);
      break;
    case 'scrollCaptureVideoURLBackground':
      msg.type = 'scrollCaptureVideoURL';
      chrome.tabs.sendMessage(tabId, msg);
      break;
    case 'scrollCaptureFFmpegLogToSW':
      msg.type = 'scrollCaptureFFmpegLogToCC';
      chrome.tabs.sendMessage(tabId, msg);
      break;
    case 'scrollCaptureExecuteScript':
      console.log('scrollCaptureExecuteScript', msg);
      chrome.scripting
        .executeScript({
          target: { tabId },
          func: (body) => {
            return new Function(body)();
          },
          args: [msg.code],
          world: 'MAIN',
        })
        .then((val) => {
          console.log('executeScript then', val);
          sendResponse(val[0].result);
        });
      break;
    case 'scrollCaptureSetScroll':
      const code = `
        document.documentElement.scrollLeft = x;
        document.documentElement.scrollTop = y;
      `;
      chrome.scripting.executeScript({
        target: { tabId },
        func: (body, x, y) => {
          return new Function('x', 'y', body)(x, y);
        },
        args: [msg.code, msg.x, msg.y],
        world: 'MAIN',
      });
      break;
    case 'scrollCaptureGetScroll':
      const code2 = 'return {x:window.scrollX, y:window.scrollY};';
      chrome.scripting
        .executeScript({
          target: { tabId },
          func: (body) => {
            return new Function(body)();
          },
          args: [msg.code],
          world: 'MAIN',
        })
        .then((val) => {
          console.log('scrollCaptureGetScroll then', val);
          sendResponse(val[0].result);
        });
      break;
  }
  return true;
}

function updatedTabHandlerPlay(tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    executeContentScript(tab.id).then(() => {
      chrome.runtime.getContexts({}).then((existingContexts) => {
        const offscreenDocument = existingContexts.find((c) => c.contextType === 'OFFSCREEN_DOCUMENT');
        const recording = offscreenDocument.documentUrl.endsWith('#recording');
        chrome.tabs.sendMessage(tab.id, {
          type: 'scrollCaptureLocation',
          location: recording ? 'record' : 'play',
          tabId,
        });
      });
    });
  }
}

function updatedTabHandlerScenario(tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    chrome.storage.local.get('tabId').then((obj) => {
      if (obj.tabId == tabId) {
        executeContentScript(tab.id).then(() => {
          sendDefaultLocation(tab.id);
        });
      }
    });
  }
}

function sendDefaultLocation(tabId) {
  chrome.storage.local.get(['defaultLocation']).then((result) => {
    const location = result.defaultLocation || 'scroll-capture';
    chrome.tabs.sendMessage(tabId, {
      type: 'scrollCaptureLocation',
      location,
      tabId,
    });
  });
}

function executeContentScript(tabId) {
  return chrome.scripting.executeScript({
    target: { tabId },
    files: ['content.js'],
  });
}

function resizeWindow(width, height) {
  let options = {
    width,
    height,
  };
  chrome.windows.getCurrent({ populate: false }, (win) => {
    chrome.windows.update(win.id, options);
  });
}

function changeIcon(color = '') {
  chrome.action.setIcon({
    path: {
      16: chrome.runtime.getURL('assets/images/get_started16' + color + '.png'),
      32: chrome.runtime.getURL('assets/images/get_started32' + color + '.png'),
      48: chrome.runtime.getURL('assets/images/get_started48' + color + '.png'),
      128: chrome.runtime.getURL('assets/images/get_started128' + color + '.png'),
    },
  });
}

async function startRecording(data) {
  changeIcon('_red');

  const streamId = await chrome.tabCapture.getMediaStreamId({
    targetTabId: data.tabId,
  });

  const message = Object.assign({}, data);
  Object.assign(message, {
    type: 'scrollCaptureStartOffscreenRecording',
    target: 'offscreen',
    streamId,
    tabId: data.tabId,
  });
  chrome.runtime.sendMessage(message);
}

function stopRecording() {
  changeIcon();

  chrome.runtime.sendMessage({
    type: 'scrollCaptureStopOffscreenRecording',
    target: 'offscreen',
  });
}

function startImageCapture() {
  changeIcon('_red');
}

function stopImageCapture() {
  changeIcon();
}
