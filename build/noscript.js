console.log('noScript!!!');
let queryOptions = { active: true, lastFocusedWindow: true };
chrome.tabs.query(queryOptions).then((tab) => {
  const tabId = tab[0].id;
  try {
    const injection = {
      target: { tabId },
      func: () => {
        return document.title;
      },
    };
    const promise = chrome.scripting.executeScript(injection);
    promise.then((title) => {
      chrome.runtime.sendMessage({ type: 'scrollCaptureShowMainPanel', tabId }, (response) => {
        window.close();
      });
    });
    promise.catch((error) => {
      setup();
    });
  } catch (error) {
    setup();
  }
  //   chrome.action.setPopup({ popup: '' });
});

function setup() {
  console.log('setup');
  document.body.setAttribute('data-display', 'true');
  document.querySelector('button.close').addEventListener('click', () => {
    window.close();
  });

  const darkModeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)');
  const isDarkMode = darkModeMatchMedia.matches;
  const isColorThemeLight = !isDarkMode;
  if (isColorThemeLight) {
    document.body.style.backgroundColor = '#c0c0c0';
  } else {
    document.body.style.backgroundColor = '#404040';
  }

  document.body.querySelector('.sc-default').setAttribute('data-theme-light', isColorThemeLight);
}
