// let page = chrome.extension.getBackgroundPage();

let mediaStream = null;
let selectedTabId = null;
let isRecording = false;
let mediaRecorder = null;
let recordedBlobs = [];

let startLocation = "scroll-capture/scenario";

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    switch (msg.txt) {
        case "scrollCaptureStartRecording":
            startRecording();
            break;
        case "scrollCaptureStopRecording":
            stopRecording();
            break;
        case "scrollCaptureChangeStartLocation":
            startLocation = msg.startLocation;
            break;
    }
});

chrome.browserAction.onClicked.addListener((tab) => {
    if (isRecording) stopRecording();
    selectedTabId = tab.id;
    window.selectedTabId = selectedTabId;
    let msg = { txt: "scrollCaptureLocation", location:startLocation};
    chrome.tabs.sendMessage(selectedTabId, msg);
});

function handleDataAvailable(event) {
    if (event.data && event.data.size > 0) {
        recordedBlobs.push(event.data);
    }
}

function changeIcon(color = "") {
    chrome.browserAction.setIcon({
        path: {
            '16': chrome.extension.getURL("assets/images/get_started16" + color + ".png"),
            '32': chrome.extension.getURL("assets/images/get_started32" + color + ".png"),
            '48': chrome.extension.getURL("assets/images/get_started48" + color + ".png"),
            '128': chrome.extension.getURL("assets/images/get_started128" + color + ".png"),
        }
    });
}

function startRecording() {
    changeIcon("_red");
    chrome.tabs.get(selectedTabId, _startTabCapture);
}

function _startTabCapture(tab) {
    isRecording = true;

    // Note: this method must be invoked by the user as defined
    // in https://crbug.com/489258, e.g. chrome.browserAction.onClicked.

    // console.log("getSupportedConstraints", navigator.mediaDevices.getSupportedConstraints());

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
    chrome.tabCapture.capture(captureOptions, _setStream);
}

function _setStream(stream) {
    if(stream) {
        mediaStream = stream;
    } else {
        alert('Stream creation failed: ' + chrome.runtime.lastError.message);
    }

    // let tracks = mediaStream.getTracks();
    // for (var i = 0; i < tracks.length; ++i) {
    //     let track = tracks[i];
    //     console.log("---- track", track);
    //     for (let j in track) console.log(j, "=", track[j]);
    //     let settings = track.getSettings();
    //     console.log("----- settings");
    //     for (let k in settings) console.log(k, "=", settings[k]);
    // }
    
    recordedBlobs = [];

    chrome.storage.sync.get(["json"], _createMediaRecorder);
}

function _createMediaRecorder(result) {
    
    let videoCodec = "vp8";
    let audioCodec = "opus";
    let videoBitsPerSecond = 8;
    let audioBitsPerSecond = 128;

    if (result.json) {
        let data = JSON.parse(result.json);
        if (data.settings) {
            videoCodec = data.settings.videoCodec || videoCodec;
            audioCodec = data.settings.audioCodec || audioCodec;
            audioBitsPerSecond = data.settings.audioBitsPerSecond || audioBitsPerSecond;
            videoBitsPerSecond = data.settings.videoBitsPerSecond || videoBitsPerSecond;
       }
    }

    // let options = { mimeType: "video/webm;codecs=h264" };
    let options = { mimeType: 'video/webm;codecs=' + videoCodec + "," + audioCodec};

    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        options = { mimeType: 'video/webm;codecs=vp9' };
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
            options = { mimeType: 'video/webm;codecs=vp8' };
            if (!MediaRecorder.isTypeSupported(options.mimeType)) {
                options = { mimeType: 'video/webm' };
                if (!MediaRecorder.isTypeSupported(options.mimeType)) {
                    options = { mimeType: '' };
                }
            }
        }
    }


    options.audioBitsPerSecond = audioBitsPerSecond * 1000; // 128 Kbit/sec
    options.videoBitsPerSecond = videoBitsPerSecond * 1000000; // 8 Mbit/sec

    try {
        mediaRecorder = new MediaRecorder(mediaStream, options);
    } catch (e) {
        console.error('Exception while creating MediaRecorder:', e);
        console.log(`Exception while creating MediaRecorder: ${JSON.stringify(e)}`);
        return;
    }

    // console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
    mediaRecorder.onstop = (event) => {
        // console.log('Recorder stopped: ', event);
        // console.log('Recorded Blobs: ', recordedBlobs);
    };
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start(10); // collect 10ms of data
}

function stopRecording() {
    changeIcon();
    if (mediaRecorder) mediaRecorder.stop();
    let videoBlob = new Blob(recordedBlobs, { type: 'video/webm' });
    window.videoURL = window.URL.createObjectURL(videoBlob);

    if (mediaStream) {
        let tracks = mediaStream.getTracks();
        for (var i = 0; i < tracks.length; ++i) {
            tracks[i].stop();
        }
    }
    mediaRecorder = null;
    mediaStream = null;
    isRecording = false;

    // let msg = { txt: "scrollCaptureVideoSource", videoBlob: videoBlob, videoURL: videoURL };
    // chrome.tabs.sendMessage(selectedTabId, msg);
}

// if (chrome.tabs) {
//     chrome.tabs.onUpdated.addListener((event) => { console.log("tabs.onUpdated", event) });
//     chrome.tabs.onZoomChange.addListener((event) => { console.log("tabs.onZoomChange", event) });
//     chrome.tabs.onUpdated.addListener((event) => { console.log("tabs.onUpdated", event) });
// }
// if (chrome.webNavigation) {
//     chrome.webNavigation.onBeforeNavigate.addListener((event) => { console.log("webNavigation.onBeforeNavigate", event) });
//     chrome.webNavigation.onCommitted.addListener((event) => { console.log("webNavigation.onCommitted", event) });
//     chrome.webNavigation.onDOMContentLoaded.addListener((event) => { console.log("webNavigation.onDOMContentLoaded", event) });
//     chrome.webNavigation.onCompleted.addListener((event) => { console.log("webNavigation.onCompleted", event) });
// }
// if (chrome.history) {
//     chrome.history.onVisited.addListener((event) => { console.log("history.onVisited", event) });
// }
