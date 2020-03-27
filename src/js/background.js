// let page = chrome.extension.getBackgroundPage();

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    switch (msg.txt) {
        case "scrollCaptureStartRecording":
            startRecording();
            break;
        case "scrollCaptureStopRecording":
            stopRecording();
            break;
    }
});

let mediaStream;

function setStream(stream) {
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
    window.selectedTab = tab;
    captureTab(selectedTab);
    let msg = { txt: "scrollCaptureScenario" };
    chrome.tabs.sendMessage(selectedTab.id, msg);
});

let mediaRecorder;
let recordedBlobs;
let sourceBuffer;

function handleDataAvailable(event) {
    if (event.data && event.data.size > 0) {
        recordedBlobs.push(event.data);
    }
}

function startRecording() {
    recordedBlobs = [];
    let options = { mimeType: 'video/webm;codecs=vp9' };
    // let options = { mimeType: "video/webm;codecs=h264" };
    
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        options = { mimeType: 'video/webm;codecs=vp8' };
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
            options = { mimeType: 'video/webm' };
            if (!MediaRecorder.isTypeSupported(options.mimeType)) {
                options = { mimeType: '' };
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

    // console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
    // recordButton.textContent = 'Stop Recording';
    // playButton.disabled = true;
    // downloadButton.disabled = true;
    mediaRecorder.onstop = (event) => {
        // console.log('Recorder stopped: ', event);
        // console.log('Recorded Blobs: ', recordedBlobs);
    };
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start(10); // collect 10ms of data
}

let videoURL;

function stopRecording() {
    mediaRecorder.stop();
    videoBlob = new Blob(recordedBlobs, { type: 'video/webm' });
    videoURL = window.URL.createObjectURL(videoBlob);
    window.videoURL = videoURL;
    // let msg = { txt: "scrollCaptureVideoSource", videoBlob: videoBlob, videoURL: videoURL };
    // chrome.tabs.sendMessage(selectedTab.id, msg);
}