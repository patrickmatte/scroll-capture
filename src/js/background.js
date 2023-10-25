import { trackEvent, trackPage } from "./model/GA";

let mediaStream;
let isRecording;
let mediaRecorder;
let recordedBlobs;

export function initBackgroundPage() {
    chrome.action.onClicked.addListener(async (tab) => {

        const existingContexts = await chrome.runtime.getContexts({});
        let recording = false;
      
        const offscreenDocument = existingContexts.find(
          (c) => c.contextType === 'OFFSCREEN_DOCUMENT'
        );
      
        // If an offscreen document is not already open, create one.
        if (!offscreenDocument) {
          // Create an offscreen document.
          await chrome.offscreen.createDocument({
            url: 'offscreen.html',
            reasons: ['USER_MEDIA'],
            justification: 'Recording from chrome.tabCapture API'
          });
        } else {
          recording = offscreenDocument.documentUrl.endsWith('#recording');
        }
      
        if (recording) {
        //   stopRecording({'stopped with button'});
        }

        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ['content.js']
        });

        // globalThis.tabId = tab.id;
        chrome.storage.local.set({ tabId: tab.id });

        chrome.windows.getCurrent({ populate: false }, (win) => {
            globalThis.chromeSize = {
                width: win.width - tab.width,
                height: win.height - tab.height
            };
        });
    });
}


chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    // console.log('chrome.runtime.onMessage msg', msg);
    switch (msg.type) {
        case "scrollCaptureStartRecording":
            startRecording(msg);
            break;
        case "scrollCaptureStopRecording":
            stopRecording(msg);
            break;
        case "scrollCaptureResizeWindow":
            resizeWindow(msg.width, msg.height);
            break;
        case "scrollCaptureTrackEvent":
            // trackEvent(msg.category, msg.action, msg.label);
            break;
        case "scrollCaptureTrackPage":
            // trackPage(msg.path);
            break;
    }
});

function resizeWindow(width, height) {
    let options = { width: width + globalThis.chromeSize.width, height: height + globalThis.chromeSize.height };
    chrome.windows.getCurrent({ populate: false }, (win) => {
        chrome.windows.update(win.id, options);
    });
}

function changeIcon(color = "") {
    chrome.action.setIcon({
        path: {
            '16': chrome.runtime.getURL("assets/images/get_started16" + color + ".png"),
            '32': chrome.runtime.getURL("assets/images/get_started32" + color + ".png"),
            '48': chrome.runtime.getURL("assets/images/get_started48" + color + ".png"),
            '128': chrome.runtime.getURL("assets/images/get_started128" + color + ".png"),
        }
    });
}


async function startRecording(data) {
    console.log('background.startRecording data=', data);
    changeIcon("_red");

    const streamId = await chrome.tabCapture.getMediaStreamId({
        targetTabId: data.tabId
    });

    // chrome.windows.create({url: "player.html", type: "popup"});

    const message = Object.assign({}, data);
    Object.assign(message, {
        type: 'scrollCaptureStartOffscreenRecording',
        target: 'offscreen',
        streamId: streamId
    });

    console.log('background.startRecording message=', message);
    chrome.runtime.sendMessage(message);
}


function stopRecording(message) {
    console.log('background.stopRecording message=', message);

    changeIcon();

    chrome.runtime.sendMessage({
        type: 'scrollCaptureStopOffscreenRecording',
        target: 'offscreen'
    });

    // if (mediaRecorder) mediaRecorder.stop();
    // let videoBlob = new Blob(recordedBlobs, { type: 'video/webm' });
    // let msg = { txt: "scrollCaptureVideoURL", videoURL: globalThis.videoURL };
    // chrome.runtime.sendMessage(msg);

    // if (mediaStream) {
    //     let tracks = mediaStream.getTracks();
    //     for (var i = 0; i < tracks.length; ++i) {
    //         tracks[i].stop();
    //     }
    // }
    // mediaRecorder = null;
    // mediaStream = null;
    // isRecording = false;
}

// function handleDataAvailable(event) {
//     if (event.data && event.data.size > 0) {
//         recordedBlobs.push(event.data);
//     }
// }

// function _startTabCapture(tab) {
    // isRecording = true;

    // Note: this method must be invoked by the user as defined
    // in https://crbug.com/489258, e.g. chrome.action.onClicked.

    // console.log("getSupportedConstraints", navigator.mediaDevices.getSupportedConstraints());

    // let captureOptions = {
    //     audio: true,
    //     video: true,
    //     audioConstraints: {
    //         mandatory: {
    //             chromeMediaSource: 'tab',
    //         },
    //     },
    //     videoConstraints: {
    //         mandatory: {
    //             chromeMediaSource: 'tab',
    //             minWidth: tab.width,
    //             maxWidth: tab.width,
    //             minHeight: tab.height,
    //             maxHeight: tab.height,
    //             minFrameRate: 30,
    //             maxFrameRate: 60
    //         },
    //     },
    // };
    // chrome.tabCapture.capture(captureOptions, _setStream);

    // const streamId = await chrome.tabCapture.getMediaStreamId({
    //     targetTabId: globalThis.tabId
    // });
      
    // const media = await navigator.mediaDevices.getUserMedia({
    //     audio: {
    //       mandatory: {
    //         chromeMediaSource: 'tab',
    //         chromeMediaSourceId: streamId
    //       }
    //     },
    //     video: {
    //       mandatory: {
    //         chromeMediaSource: 'tab',
    //         chromeMediaSourceId: streamId
    //       }
    //     }
    //   });
    
      // Continue to play the captured audio to the user.
    //   const output = new AudioContext();
    //   const source = output.createMediaStreamSource(media);
    //   source.connect(output.destination);
    
    //   mediaStream = media;
// }

// function _setStream(stream) {
    // if(stream) {
        // mediaStream = stream;
    // } else {
    //     alert('Stream creation failed: ' + chrome.runtime.lastError.message);
    // }

    // let tracks = mediaStream.getTracks();
    // for (var i = 0; i < tracks.length; ++i) {
    //     let track = tracks[i];
    //     console.log("---- track", track);
    //     for (let j in track) console.log(j, "=", track[j]);
    //     let settings = track.getSettings();
    //     console.log("----- settings");
    //     for (let k in settings) console.log(k, "=", settings[k]);
    // }
    
    // recordedBlobs = [];

    // chrome.storage.local.get(["json"], _createMediaRecorder);
// }

// function _createMediaRecorder(result) {
   
//     let videoCodec = "vp8";
//     let audioCodec = "opus";
//     let videoBitsPerSecond = 8;
//     let audioBitsPerSecond = 128;

//     if (result.json) {
//         let data = JSON.parse(result.json);
//         if (data.settings) {
//             videoCodec = data.settings.videoCodec || videoCodec;
//             audioCodec = data.settings.audioCodec || audioCodec;
//             audioBitsPerSecond = data.settings.audioBitsPerSecond || audioBitsPerSecond;
//             videoBitsPerSecond = data.settings.videoBitsPerSecond || videoBitsPerSecond;
//        }
//     }

//     // let options = { mimeType: "video/webm;codecs=h264" };
//     let options = { mimeType: 'video/webm;codecs=' + videoCodec + "," + audioCodec};

//     if (!MediaRecorder.isTypeSupported(options.mimeType)) {
//         options = { mimeType: 'video/webm;codecs=vp9' };
//         if (!MediaRecorder.isTypeSupported(options.mimeType)) {
//             options = { mimeType: 'video/webm;codecs=vp8' };
//             if (!MediaRecorder.isTypeSupported(options.mimeType)) {
//                 options = { mimeType: 'video/webm' };
//                 if (!MediaRecorder.isTypeSupported(options.mimeType)) {
//                     options = { mimeType: '' };
//                 }
//             }
//         }
//     }

//     options.audioBitsPerSecond = audioBitsPerSecond * 1000; // 128 Kbit/sec
//     options.videoBitsPerSecond = videoBitsPerSecond * 1000000; // 8 Mbit/sec

//     try {
//         mediaRecorder = new MediaRecorder(mediaStream, options);
//     } catch (e) {
//         console.error('Exception while creating MediaRecorder:', e);
//         console.log(`Exception while creating MediaRecorder: ${JSON.stringify(e)}`);
//         return;
//     }

//     // console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
//     // mediaRecorder.onstop = (event) => {
//     //     console.log('Recorder stopped: ', event);
//     //     console.log('Recorded Blobs: ', recordedBlobs);
//     // };
//     mediaRecorder.ondataavailable = handleDataAvailable;
//     mediaRecorder.start(10); // collect 10ms of data
// }
