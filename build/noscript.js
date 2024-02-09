console.log('noScript!!!');
let queryOptions = { active: true, lastFocusedWindow: true };
chrome.tabs.query(queryOptions).then((tab) => {
  console.log('tab!!! ', tab);
  console.log('noScript chrome.scripting', chrome.scripting);
  console.log('noScript chrome.scripting.executeScript', chrome.scripting.executeScript);
  try {
    const injection = {
      target: { tabId: tab[0].id },
      func: () => {
        console.log('Scripting test');
      },
    };
    console.log('!!injection', injection);
    chrome.scripting.executeScript(injection).then(() => console.log('injected a function'));
  } catch (error) {
    console.log(error);
  }
  chrome.action.setPopup({ popup: '' });
});

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
