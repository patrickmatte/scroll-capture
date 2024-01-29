import { sendTrackEventMessage } from './model/GABridge';

chrome.storage.local.get(['json'], (result) => {
  let colorTheme = 'Dark';
  if (result) {
    if (result.json) {
      let data = JSON.parse(result.json);
      if (data.settings) {
        colorTheme = data.settings.colorThemes;
      }
    }
  }
  let isColorThemeLight;
  switch (colorTheme) {
    case 'Dark':
    case 'Light':
      isColorThemeLight = colorTheme == 'Light';
      break;
    default:
      let darkModeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)');
      let isDarkMode = darkModeMatchMedia.matches;
      isColorThemeLight = !isDarkMode;
      break;
  }
  document.body.querySelector('.sc-default').setAttribute('data-theme-light', isColorThemeLight);
});

window.addEventListener('resize', () => {
  dispatchVideoHeight();
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  switch (msg.type) {
    case 'scrollCaptureColorTheme':
      document.body.querySelector('.sc-default').setAttribute('data-theme-light', msg.isColorThemeLight);
      break;
    case 'scrollCaptureUnloadVideo':
      unloadVideo();
      break;
    case 'scrollCaptureShowVideo':
      dispatchVideoHeight();
      break;
    case 'scrollCaptureVideoURL':
      updateVideo(msg);
      break;
  }
});

let player = document.querySelector('.sc-video-player');
player.setAttribute('muted', 'true');
player.setAttribute('autoplay', 'true');
player.setAttribute('playsinline', 'true');
player.setAttribute('controls', '1');
player.addEventListener('canplay', () => {
  dispatchVideoHeight();
});

function dispatchVideoHeight() {
  chrome.storage.local.get(['tabId']).then((tabId) => {
    let msg = {
      type: 'scrollCaptureVideoHeight',
      height: document.body.scrollHeight,
    };
    chrome.tabs.sendMessage(tabId.tabId, msg);
  });
}

function updateVideo(message) {
  let videoFileName = message.fileName;
  const videoURL = message.videoURL;
  player.src = videoURL;
  player.download = videoFileName;
  let buttons = document.querySelectorAll('a.sc-download-button');
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.href = videoURL;
    button.download = videoFileName;
    button.addEventListener('click', () => {
      sendTrackEventMessage('download', { media: 'video' });
    });
  }
  let fileNameButton = document.querySelector('.sc-video-filename a.sc-download-button');
  fileNameButton.textContent = videoFileName;
}

function unloadVideo() {
  player.pause();
  // player.removeAttribute('src');
  // player.load();
}
