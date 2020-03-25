// console.log("videoCapture!!!!!!!!");
// console.log("videoCapture chrome.tabs", chrome.tabs);
// console.log("chrome.browserAction", chrome.browserAction);

// player.addEventListener('canplay', function () {
//     this.volume = 0.75;
//     this.muted = false;
//     player.setAttribute('controls', '1');
//     this.play();
// });

let icoFont = chrome.extension.getURL('assets/fonts/icofont.woff');

let page = chrome.extension.getBackgroundPage();
console.log("*** page", page);
console.log("*** page.videoBlob", page.videoBlob);
console.log("*** page.videoURL", page.videoURL);
if (page.videoURL) {
    let player = document.querySelector('.video-player');
    player.src = page.videoURL;
    let button = document.querySelector(".download-button");
    button.href = page.videoURL;
    let date = new Date();
    console.log("date.toDateString()", date.toDateString());
    console.log("date.toString()", date.toString());
    console.log("date.toUTCString()", date.toUTCString());
    let dateString = date.toDateString();
    button.download = `scroll-capture-${dateString}.webm`;
}

// let videoBlob;

// chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
//     console.log("videoCapture chrome.runtime.onMessage", msg);
//     switch (msg.txt) {
//         case "scrollCaptureVideoSource":
            
//             let page = chrome.extension.getBackgroundPage();
//             console.log("*** page", page);
//             console.log("*** page.videoBlob", page.videoBlob);
//             console.log("*** page.videoURL", page.videoURL);

//             console.log("---- scrollCaptureVideoSource!!!", msg);
//             console.log("msg.videoBlob", msg.videoBlob);
//             console.log("window", window);
//             console.log("window.URL", window.URL);
//             console.log("window.URL.createObjectURL", window.URL.createObjectURL);
//             videoBlob = msg.videoBlob;
//             let videoURL = window.URL.createObjectURL(videoBlob);

//             player.srcObject = videoURL;
//             break;
//     }
// });
