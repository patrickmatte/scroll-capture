import { analytics } from './analytics';

export function initBackgroundPage() {
  chrome.action.onClicked.addListener(async (tab) => {
    chrome.storage.local.set({ tabId: tab.id });

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

    executeScript(tab).then(() => {
      if (recording) {
        chrome.tabs.sendMessage(tab.id, {
          type: 'scrollCaptureLocation',
          location: 'stop',
        });
      } else {
        changeIcon('');
        sendDefaultLocation(tab.id);
      }
    });
  });

  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    switch (msg.type) {
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
        chrome.storage.local.get('tabId').then((obj) => {
          chrome.scripting.insertCSS({
            target: { tabId: obj.tabId },
            css: msg.css,
          });
        });
        break;
      case 'scrollCaptureVisibleTab':
        chrome.tabs.captureVisibleTab(null, {}, (dataUrl) => {
          sendResponse({ dataUrl });
        });
        break;
    }
    return true;
  });
}

function updatedTabHandlerPlay(tabId, changeInfo, tab) {
  executeScript(tab).then(() => {
    chrome.runtime.getContexts({}).then((existingContexts) => {
      const offscreenDocument = existingContexts.find((c) => c.contextType === 'OFFSCREEN_DOCUMENT');
      const recording = offscreenDocument.documentUrl.endsWith('#recording');
      chrome.tabs.sendMessage(tab.id, {
        type: 'scrollCaptureLocation',
        location: recording ? 'record' : 'play',
      });
    });
  });
}

function updatedTabHandlerScenario(tabId, changeInfo, tab) {
  chrome.storage.local.get('tabId').then((obj) => {
    if (obj.tabId == tabId) {
      executeScript(tab).then(() => {
        sendDefaultLocation(tab.id);
      });
    }
  });
}

function sendDefaultLocation(tabId) {
  chrome.storage.local.get(['defaultLocation']).then((result) => {
    const location = result.defaultLocation || 'scroll-capture';
    chrome.tabs.sendMessage(tabId, {
      type: 'scrollCaptureLocation',
      location,
    });
  });
}

function executeScript(tab) {
  return chrome.scripting.executeScript({
    target: { tabId: tab.id },
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
