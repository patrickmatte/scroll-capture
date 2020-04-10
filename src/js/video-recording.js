import { timeAMPM } from "./tsunami/utils/date";
import { addLeadingZero } from "./tsunami/utils/number";

chrome.storage.sync.get(["json"], (result) => {
    let data = JSON.parse(result.json);
    document.body.querySelector(".sc-default").setAttribute("data-theme-light", data.settings.theme);
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    switch (msg.txt) {
        case "scrollCaptureColorTheme":
            document.body.querySelector(".sc-default").setAttribute("data-theme-light", msg.theme);
            break;
    }
});



let page = chrome.extension.getBackgroundPage();

let player = document.querySelector('.sc-video-player');
player.addEventListener('canplay', function () {
    this.muted = true;
    player.setAttribute('controls', '1');
    this.play();
    let msg = { txt: "scrollCaptureVideoHeigth", height:document.body.scrollHeight};
    chrome.tabs.sendMessage(page.selectedTabId, msg);
});

let backButton = document.querySelector(".sc-back-button");
if (backButton) {
    backButton.addEventListener("click", () => {
        let msg = { txt: "scrollCaptureLocation", location: "scroll-capture/scenario" };
        chrome.tabs.sendMessage(page.selectedTabId, msg);
    });
}

if (page.videoURL) {
    player.src = page.videoURL;
    let button = document.querySelector(".sc-download-button");
    button.href = page.videoURL;
    let date = new Date();
    let ampmTime = timeAMPM(date);
    // Screen Shot 2020-03-20 at 4.35.14 PM
    let dateData = {
        year:date.getFullYear(),
        month: addLeadingZero(date.getMonth() + 1),
        date: addLeadingZero(date.getDate())
    };
    ampmTime.ampm = ampmTime.ampm.toUpperCase();
    let download = `Scroll Capture ${dateData.year}-${dateData.month}-${dateData.date} at ${ampmTime.hours}.${ampmTime.minutes}.${ampmTime.seconds} ${ampmTime.ampm}.webm`;
    button.download = download;
}
