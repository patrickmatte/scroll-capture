// chrome.runtime.onInstalled.addListener(function() {
//   console.log("chrome", chrome);
//   console.log("chrome.declarativeContent", chrome.declarativeContent);
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     chrome.declarativeContent.onPageChanged.addRules([{
//       conditions: [new chrome.declarativeContent.PageStateMatcher({
//         pageUrl: {hostEquals: 'developer.chrome.com'},
//       })],
//       actions: [new chrome.declarativeContent.ShowPageAction()]
//     }]);
//   });
// });

// let page = chrome.extension.getBackgroundPage();

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log("chrome.runtime.onMessage", msg);
    switch (msg.txt) {
        case "scrollCaptureStartRecording":
            startRecording();
            break;
        case "scrollCaptureStopRecording":
            stopRecording();
            break;
        case "scrollCaptureSendVideoCapture":
            sendVideoCapture();
            break;
    }
});

let mediaStream;

function setStream(stream) {
    console.log("setStream", stream);
    mediaStream = stream;
    if (!stream) {
        alert('Stream creation failed: ' + chrome.runtime.lastError.message);
    }
}

function captureTab(tab) {
    if (mediaStream) {
        return;
    }
    // Note: this method must be invoked by the user as defined
    // in https://crbug.com/489258, e.g. chrome.browserAction.onClicked.

    let captureOptions = {
        audio: true,
        video: true,
        audioConstraints: {
            mandatory: {
                chromeMediaSource: 'tab',
            },
        },
        videoConstraints: {
            mandatory: {
                chromeMediaSource: 'tab',
                minWidth: tab.width,
                maxWidth: tab.width,
                minHeight: tab.height,
                maxHeight: tab.height,
                minFrameRate: 30,
                maxFrameRate: 60
            },
        },
    };
    chrome.tabCapture.capture(captureOptions, setStream);
}

let selectedTab;

chrome.browserAction.onClicked.addListener((tab) => {
    selectedTab = tab;
    console.log("*** window.selectedTab", window.selectedTab);
    window.selectedTab = tab;
    console.log("chrome.browserAction.onClicked", tab);
    captureTab(selectedTab);
    let msg = { txt: "scrollCaptureScenario" };
    chrome.tabs.sendMessage(selectedTab.id, msg);
});

let mediaRecorder;
let recordedBlobs;
let sourceBuffer;

function handleDataAvailable(event) {
    // console.log('handleDataAvailable', event);
    if (event.data && event.data.size > 0) {
        recordedBlobs.push(event.data);
    }
}

function startRecording() {
    console.log("background startRecording");
    recordedBlobs = [];
    let options = { mimeType: 'video/webm;codecs=vp9' };
    // let options = { mimeType: "video/webm;codecs=h264" };
    
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.log(`${options.mimeType} is not Supported`);
        options = { mimeType: 'video/webm;codecs=vp9' };
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
            console.log(`${options.mimeType} is not Supported`);
            options = { mimeType: 'video/webm;codecs=vp8' };
            if (!MediaRecorder.isTypeSupported(options.mimeType)) {
                console.log(`${options.mimeType} is not Supported`);
                options = { mimeType: 'video/webm' };
                if (!MediaRecorder.isTypeSupported(options.mimeType)) {
                    console.log(`${options.mimeType} is not Supported`);
                    options = { mimeType: '' };
                }
            }
        }
    }

    options.videoBitsPerSecond = 1024 * 1024 * 16;

    try {
        mediaRecorder = new MediaRecorder(mediaStream, options);
    } catch (e) {
        console.error('Exception while creating MediaRecorder:', e);
        console.log(`Exception while creating MediaRecorder: ${JSON.stringify(e)}`);
        return;
    }

    console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
    // recordButton.textContent = 'Stop Recording';
    // playButton.disabled = true;
    // downloadButton.disabled = true;
    mediaRecorder.onstop = (event) => {
        console.log('Recorder stopped: ', event);
        console.log('Recorded Blobs: ', recordedBlobs);
    };
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start(10); // collect 10ms of data
    console.log('MediaRecorder started', mediaRecorder);
}

let videoBlob;
let videoURL;

function stopRecording() {
    console.log("background stopRecording");
    mediaRecorder.stop();
    videoBlob = new Blob(recordedBlobs, { type: 'video/webm' });
    window.videoBlob = videoBlob;
    console.log("videoBlob", videoBlob);
    videoURL = window.URL.createObjectURL(videoBlob);
    window.videoURL = videoURL;
    console.log("videoURL", videoURL);
    let msg = { txt: "scrollCaptureVideoSource", videoBlob: videoBlob, videoURL: videoURL };
    chrome.tabs.sendMessage(selectedTab.id, msg);
}