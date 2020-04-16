import { getSearchParams } from "./tsunami/window";
import { timeAMPM } from "./tsunami/utils/date";
import { addLeadingZero } from "./tsunami/utils/number";

let params = getSearchParams();
let tabId = Number(params.tabId);

chrome.storage.local.get(["json"], (result) => {
    let data = JSON.parse(result.json);
    let colorTheme = data.settings.colorThemes;
    let isColorThemeLight;
    switch (colorTheme) {
        case "Dark":
        case "Light":
            isColorThemeLight = (colorTheme == "Light");
            break;
        default:
            let darkModeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)');
            let isDarkMode = darkModeMatchMedia.matches;
            isColorThemeLight = !isDarkMode;
            break;
    }
    document.body.querySelector(".sc-default").setAttribute("data-theme-light", isColorThemeLight);
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    switch (msg.txt) {
        case "scrollCaptureColorTheme":
            document.body.querySelector(".sc-default").setAttribute("data-theme-light", msg.isColorThemeLight);
            break;
    }
});

let player = document.querySelector('.sc-video-player');
player.addEventListener('canplay', function () {
    this.muted = true;
    player.setAttribute('controls', '1');
    this.play();
    let msg = { txt: "scrollCaptureVideoHeigth", height: document.body.scrollHeight };
    chrome.tabs.sendMessage(tabId, msg);
});

// let backButton = document.querySelector(".sc-back-button");
// if (backButton) {
//     backButton.addEventListener("click", () => {
//         let msg = { txt: "scrollCaptureLocation", location: "scroll-capture/scenario" };
//         chrome.tabs.sendMessage(tabId, msg);
//     });
// }

chrome.runtime.getBackgroundPage((page) => {
    if (page.videoURL) {
        console.log("page.videoURL", page.videoURL);
        player.src = page.videoURL;
        let date = new Date();
        let ampmTime = timeAMPM(date);
        // Screen Shot 2020-03-20 at 4.35.14 PM
        let dateData = {
            year: date.getFullYear(),
            month: addLeadingZero(date.getMonth() + 1),
            date: addLeadingZero(date.getDate())
        };
        ampmTime.ampm = ampmTime.ampm.toUpperCase();
        let videoFileName = `Scroll Capture ${dateData.year}-${dateData.month}-${dateData.date} at ${ampmTime.hours}.${ampmTime.minutes}.${ampmTime.seconds} ${ampmTime.ampm}.webm`;
        
        let buttons = document.querySelectorAll("a.sc-download-button");
        for (let i = 0; i < buttons.length; i++) {
            let button = buttons[i];
            button.href = page.videoURL;
            button.download = videoFileName;
        }
        let fileNameButton = document.querySelector(".sc-video-filename a.sc-download-button");
        fileNameButton.innerHTML = videoFileName;
    }
});

