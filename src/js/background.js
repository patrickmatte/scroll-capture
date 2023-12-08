import { analytics } from './analytics';

export function initBackgroundPage() {
  chrome.action.onClicked.addListener(async (tab) => {
    chrome.storage.local.set({ tabId: tab.id });
    console.log('chrome.action.onClicked', tab.id);

    const existingContexts = await chrome.runtime.getContexts({});
    let recording = false;

    const offscreenDocument = existingContexts.find((c) => c.contextType === 'OFFSCREEN_DOCUMENT');

    // If an offscreen document is not already open, create one.
    if (!offscreenDocument) {
      console.log('!!!!! Create an offscreen document');
      // Create an offscreen document.
      await chrome.offscreen.createDocument({
        url: 'offscreen.html',
        reasons: ['USER_MEDIA'],
        justification: 'Recording from chrome.tabCapture API',
      });
    } else {
      recording = offscreenDocument.documentUrl.endsWith('#recording');
      console.log('recording=', recording);
    }

    chrome.windows.getCurrent({ populate: false }, (win) => {
      globalThis.chromeSize = {
        width: win.width - tab.width,
        height: win.height - tab.height,
      };
    });

    console.log('executeScript start');
    const scriptPromise = chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js'],
    });
    scriptPromise.then(() => {
      console.log('executeScript done');
      if (recording) {
        console.log('Stop recording with extension button');
        chrome.tabs.sendMessage(tab.id, {
          type: 'scrollCaptureLocation',
          location: 'stop',
        });
      } else {
        changeIcon('');
        chrome.tabs.sendMessage(tab.id, {
          type: 'scrollCaptureLocation',
          location: '',
        });
      }
    });
  });
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  switch (msg.type) {
    case 'scrollCaptureStartRecording':
      startRecording(msg);
      break;
    case 'scrollCaptureStopRecording':
      console.log('Stop recording from UI when actions complete');
      stopRecording();
      break;
    case 'scrollCaptureResizeWindow':
      resizeWindow(msg.width, msg.height);
      break;
    case 'scrollCaptureTrackEvent':
      analytics.fireEvent(msg.category, {
        action: msg.action,
        label: msg.label,
      });
      break;
    case 'scrollCaptureTrackPage':
      analytics.firePageViewEvent(msg.path.split('/').pop(), msg.path);
      break;
  }
});

function resizeWindow(width, height) {
  let options = {
    width: width + globalThis.chromeSize.width,
    height: height + globalThis.chromeSize.height,
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
  console.log('background.startRecording');
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
  console.log('background.stopRecording');
  changeIcon();

  chrome.runtime.sendMessage({
    type: 'scrollCaptureStopOffscreenRecording',
    target: 'offscreen',
  });
}
