/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/background.js":
/*!**************************!*\
  !*** ./js/background.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initBackgroundPage: () => (/* binding */ initBackgroundPage)
/* harmony export */ });
/* harmony import */ var _model_GA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/GA */ "./js/model/GA.js");
// let page = chrome.extension.getBackgroundPage();


let mediaStream;
let isRecording;
let mediaRecorder;
let recordedBlobs;
function initBackgroundPage() {
  chrome.action.onClicked.addListener(async tab => {
    const existingContexts = await chrome.runtime.getContexts({});
    let recording = false;
    const offscreenDocument = existingContexts.find(c => c.contextType === 'OFFSCREEN_DOCUMENT');

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
      stopRecording();
    }
    chrome.scripting.executeScript({
      target: {
        tabId: tab.id
      },
      files: ['content.js']
    });
    globalThis.tabId = tab.id;
    chrome.storage.local.set({
      tabId: tab.id
    });
    chrome.windows.getCurrent({
      populate: false
    }, win => {
      globalThis.chromeSize = {
        width: win.width - tab.width,
        height: win.height - tab.height
      };
    });

    // let msg = { type: "scrollCaptureBrowserAction", tabId: tab.id};
    // chrome.tabs.sendMessage(tab.id, msg);
  });
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  switch (msg.type) {
    case "scrollCaptureStartRecording":
      startRecording(msg.tabId);
      break;
    case "scrollCaptureStopRecording":
      stopRecording();
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
  let options = {
    width: width + globalThis.chromeSize.width,
    height: height + globalThis.chromeSize.height
  };
  chrome.windows.getCurrent({
    populate: false
  }, win => {
    chrome.windows.update(win.id, options);
  });
}

// function handleDataAvailable(event) {
//     if (event.data && event.data.size > 0) {
//         recordedBlobs.push(event.data);
//     }
// }

function changeIcon() {
  let color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  chrome.action.setIcon({
    path: {
      '16': chrome.runtime.getURL("assets/images/get_started16" + color + ".png"),
      '32': chrome.runtime.getURL("assets/images/get_started32" + color + ".png"),
      '48': chrome.runtime.getURL("assets/images/get_started48" + color + ".png"),
      '128': chrome.runtime.getURL("assets/images/get_started128" + color + ".png")
    }
  });
}
async function startRecording(tabId) {
  changeIcon("_red");

  // Get a MediaStream for the active tab.
  const streamId = await chrome.tabCapture.getMediaStreamId({
    targetTabId: tabId
  });

  // Send the stream ID to the offscreen document to start recording.
  chrome.runtime.sendMessage({
    type: 'scrollCaptureStartOffscreenRecording',
    target: 'offscreen',
    data: streamId
  });

  // chrome.tabs.get(globalThis.tabId, _startTabCapture);
  // chrome.tabs.query({ active: true }, _startTabCapture);
}

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

function stopRecording() {
  changeIcon();
  chrome.runtime.sendMessage({
    type: 'scrollCaptureStopOffscreenRecording',
    target: 'offscreen'
  });

  // if (mediaRecorder) mediaRecorder.stop();
  // let videoBlob = new Blob(recordedBlobs, { type: 'video/webm' });
  // console.log("saveTheVideo");
  // globalThis.videoURL = globalThis.URL.createObjectURL(videoBlob);
  // chrome.storage.local.set({ videoURL: globalThis.videoURL });

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

/***/ }),

/***/ "./js/model/GA.js":
/*!************************!*\
  !*** ./js/model/GA.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initAnalytics: () => (/* binding */ initAnalytics),
/* harmony export */   trackEvent: () => (/* binding */ trackEvent),
/* harmony export */   trackPage: () => (/* binding */ trackPage)
/* harmony export */ });
// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
* Below is a modified version of the Google Analytics asynchronous tracking
* code snippet.  It has been modified to pull the HTTPS version of ga.js
* instead of the default HTTP version.  It is recommended that you use this
* snippet instead of the standard tracking snippet provided when setting up
* a Google Analytics account.
*/

function initAnalytics(analyticsID) {
  window._gaq = window._gaq || [];
  window._gaq.push(['_setAccount', analyticsID]);
  window._gaq.push(['_trackPageview']);
  let ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  let s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
}

/**
 * Track a click on a button using the asynchronous tracking API.
 * See http://code.google.com/apis/analytics/docs/tracking/asyncTracking.html
 * for information on how to use the asynchronous tracking API.
 */
function trackEvent(category, action) {
  let label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  let event = ['_trackEvent', category, action];
  if (label) event.push(label);
  window._gaq.push(event);
}
function trackPage(path) {
  window._gaq.push(['_set', 'page', path]);
  window._gaq.push(['_trackPageview']);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./js/background-development.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ "./js/background.js");
// import { initAnalytics } from "./model/GA";


// initAnalytics("UA-161404627-1");
(0,_background__WEBPACK_IMPORTED_MODULE_0__.initBackgroundPage)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFbUQ7QUFFbkQsSUFBSUUsV0FBVztBQUNmLElBQUlDLFdBQVc7QUFDZixJQUFJQyxhQUFhO0FBQ2pCLElBQUlDLGFBQWE7QUFFVixTQUFTQyxrQkFBa0JBLENBQUEsRUFBRztFQUNqQ0MsTUFBTSxDQUFDQyxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDLE1BQU9DLEdBQUcsSUFBSztJQUUvQyxNQUFNQyxnQkFBZ0IsR0FBRyxNQUFNTCxNQUFNLENBQUNNLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdELElBQUlDLFNBQVMsR0FBRyxLQUFLO0lBRXJCLE1BQU1DLGlCQUFpQixHQUFHSixnQkFBZ0IsQ0FBQ0ssSUFBSSxDQUM1Q0MsQ0FBQyxJQUFLQSxDQUFDLENBQUNDLFdBQVcsS0FBSyxvQkFDM0IsQ0FBQzs7SUFFRDtJQUNBLElBQUksQ0FBQ0gsaUJBQWlCLEVBQUU7TUFDdEI7TUFDQSxNQUFNVCxNQUFNLENBQUNhLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDO1FBQ3BDQyxHQUFHLEVBQUUsZ0JBQWdCO1FBQ3JCQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDdkJDLGFBQWEsRUFBRTtNQUNqQixDQUFDLENBQUM7SUFDSixDQUFDLE1BQU07TUFDTFQsU0FBUyxHQUFHQyxpQkFBaUIsQ0FBQ1MsV0FBVyxDQUFDQyxRQUFRLENBQUMsWUFBWSxDQUFDO0lBQ2xFO0lBRUEsSUFBSVgsU0FBUyxFQUFFO01BQ2JZLGFBQWEsQ0FBQyxDQUFDO0lBQ2pCO0lBRUFwQixNQUFNLENBQUNxQixTQUFTLENBQUNDLGFBQWEsQ0FBQztNQUMzQkMsTUFBTSxFQUFFO1FBQUNDLEtBQUssRUFBRXBCLEdBQUcsQ0FBQ3FCO01BQUUsQ0FBQztNQUN2QkMsS0FBSyxFQUFFLENBQUMsWUFBWTtJQUN4QixDQUFDLENBQUM7SUFFRkMsVUFBVSxDQUFDSCxLQUFLLEdBQUdwQixHQUFHLENBQUNxQixFQUFFO0lBQ3pCekIsTUFBTSxDQUFDNEIsT0FBTyxDQUFDQyxLQUFLLENBQUNDLEdBQUcsQ0FBQztNQUFFTixLQUFLLEVBQUVwQixHQUFHLENBQUNxQjtJQUFHLENBQUMsQ0FBQztJQUUzQ3pCLE1BQU0sQ0FBQytCLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDO01BQUVDLFFBQVEsRUFBRTtJQUFNLENBQUMsRUFBR0MsR0FBRyxJQUFLO01BQ3BEUCxVQUFVLENBQUNRLFVBQVUsR0FBRztRQUNwQkMsS0FBSyxFQUFFRixHQUFHLENBQUNFLEtBQUssR0FBR2hDLEdBQUcsQ0FBQ2dDLEtBQUs7UUFDNUJDLE1BQU0sRUFBRUgsR0FBRyxDQUFDRyxNQUFNLEdBQUdqQyxHQUFHLENBQUNpQztNQUM3QixDQUFDO0lBQ0wsQ0FBQyxDQUFDOztJQUVGO0lBQ0E7RUFDSixDQUFDLENBQUM7QUFDTjs7QUFHQXJDLE1BQU0sQ0FBQ00sT0FBTyxDQUFDZ0MsU0FBUyxDQUFDbkMsV0FBVyxDQUFDLENBQUNvQyxHQUFHLEVBQUVDLE1BQU0sRUFBRUMsWUFBWSxLQUFLO0VBQ2hFLFFBQVFGLEdBQUcsQ0FBQ0csSUFBSTtJQUNaLEtBQUssNkJBQTZCO01BQzlCQyxjQUFjLENBQUNKLEdBQUcsQ0FBQ2YsS0FBSyxDQUFDO01BQ3pCO0lBQ0osS0FBSyw0QkFBNEI7TUFDN0JKLGFBQWEsQ0FBQyxDQUFDO01BQ2Y7SUFDSixLQUFLLDJCQUEyQjtNQUM1QndCLFlBQVksQ0FBQ0wsR0FBRyxDQUFDSCxLQUFLLEVBQUVHLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDO01BQ25DO0lBQ0osS0FBSyx5QkFBeUI7TUFDMUI7TUFDQTtJQUNKLEtBQUssd0JBQXdCO01BQ3pCO01BQ0E7RUFDUjtBQUNKLENBQUMsQ0FBQztBQUVGLFNBQVNPLFlBQVlBLENBQUNSLEtBQUssRUFBRUMsTUFBTSxFQUFFO0VBQ2pDLElBQUlRLE9BQU8sR0FBRztJQUFFVCxLQUFLLEVBQUVBLEtBQUssR0FBR1QsVUFBVSxDQUFDUSxVQUFVLENBQUNDLEtBQUs7SUFBRUMsTUFBTSxFQUFFQSxNQUFNLEdBQUdWLFVBQVUsQ0FBQ1EsVUFBVSxDQUFDRTtFQUFPLENBQUM7RUFDM0dyQyxNQUFNLENBQUMrQixPQUFPLENBQUNDLFVBQVUsQ0FBQztJQUFFQyxRQUFRLEVBQUU7RUFBTSxDQUFDLEVBQUdDLEdBQUcsSUFBSztJQUNwRGxDLE1BQU0sQ0FBQytCLE9BQU8sQ0FBQ2UsTUFBTSxDQUFDWixHQUFHLENBQUNULEVBQUUsRUFBRW9CLE9BQU8sQ0FBQztFQUMxQyxDQUFDLENBQUM7QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNFLFVBQVVBLENBQUEsRUFBYTtFQUFBLElBQVpDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsRUFBRTtFQUMxQmpELE1BQU0sQ0FBQ0MsTUFBTSxDQUFDbUQsT0FBTyxDQUFDO0lBQ2xCQyxJQUFJLEVBQUU7TUFDRixJQUFJLEVBQUVyRCxNQUFNLENBQUNNLE9BQU8sQ0FBQ2dELE1BQU0sQ0FBQyw2QkFBNkIsR0FBR04sS0FBSyxHQUFHLE1BQU0sQ0FBQztNQUMzRSxJQUFJLEVBQUVoRCxNQUFNLENBQUNNLE9BQU8sQ0FBQ2dELE1BQU0sQ0FBQyw2QkFBNkIsR0FBR04sS0FBSyxHQUFHLE1BQU0sQ0FBQztNQUMzRSxJQUFJLEVBQUVoRCxNQUFNLENBQUNNLE9BQU8sQ0FBQ2dELE1BQU0sQ0FBQyw2QkFBNkIsR0FBR04sS0FBSyxHQUFHLE1BQU0sQ0FBQztNQUMzRSxLQUFLLEVBQUVoRCxNQUFNLENBQUNNLE9BQU8sQ0FBQ2dELE1BQU0sQ0FBQyw4QkFBOEIsR0FBR04sS0FBSyxHQUFHLE1BQU07SUFDaEY7RUFDSixDQUFDLENBQUM7QUFDTjtBQUdBLGVBQWVMLGNBQWNBLENBQUNuQixLQUFLLEVBQUU7RUFDakN1QixVQUFVLENBQUMsTUFBTSxDQUFDOztFQUVsQjtFQUNBLE1BQU1RLFFBQVEsR0FBRyxNQUFNdkQsTUFBTSxDQUFDd0QsVUFBVSxDQUFDQyxnQkFBZ0IsQ0FBQztJQUN0REMsV0FBVyxFQUFFbEM7RUFDakIsQ0FBQyxDQUFDOztFQUVGO0VBQ0F4QixNQUFNLENBQUNNLE9BQU8sQ0FBQ3FELFdBQVcsQ0FBQztJQUN2QmpCLElBQUksRUFBRSxzQ0FBc0M7SUFDNUNuQixNQUFNLEVBQUUsV0FBVztJQUNuQnFDLElBQUksRUFBRUw7RUFDVixDQUFDLENBQUM7O0VBR0Y7RUFDQTtBQUNKOztBQUVBO0FBQ0k7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDSjs7QUFFQTtBQUNJO0FBQ0k7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0o7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTbkMsYUFBYUEsQ0FBQSxFQUFHO0VBQ3JCMkIsVUFBVSxDQUFDLENBQUM7RUFFWi9DLE1BQU0sQ0FBQ00sT0FBTyxDQUFDcUQsV0FBVyxDQUFDO0lBQ3ZCakIsSUFBSSxFQUFFLHFDQUFxQztJQUMzQ25CLE1BQU0sRUFBRTtFQUNaLENBQUMsQ0FBQzs7RUFFRjtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4UkE7QUFDQTtBQUNBOztBQUVDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLFNBQVNzQyxhQUFhQSxDQUFDQyxXQUFXLEVBQUU7RUFDdkNDLE1BQU0sQ0FBQ0MsSUFBSSxHQUFHRCxNQUFNLENBQUNDLElBQUksSUFBSSxFQUFFO0VBQy9CRCxNQUFNLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFSCxXQUFXLENBQUMsQ0FBQztFQUM5Q0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7RUFFcEMsSUFBSUMsRUFBRSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDekNGLEVBQUUsQ0FBQ3hCLElBQUksR0FBRyxpQkFBaUI7RUFDM0J3QixFQUFFLENBQUNHLEtBQUssR0FBRyxJQUFJO0VBQ2ZILEVBQUUsQ0FBQ0ksR0FBRyxHQUFHLHdDQUF3QztFQUNqRCxJQUFJQyxDQUFDLEdBQUdKLFFBQVEsQ0FBQ0ssb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2xERCxDQUFDLENBQUNFLFVBQVUsQ0FBQ0MsWUFBWSxDQUFDUixFQUFFLEVBQUVLLENBQUMsQ0FBQztBQUNuQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBUzlFLFVBQVVBLENBQUNrRixRQUFRLEVBQUUxRSxNQUFNLEVBQWM7RUFBQSxJQUFaMkUsS0FBSyxHQUFBM0IsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsRUFBRTtFQUNuRCxJQUFJNEIsS0FBSyxHQUFHLENBQUMsYUFBYSxFQUFFRixRQUFRLEVBQUUxRSxNQUFNLENBQUM7RUFDN0MsSUFBSTJFLEtBQUssRUFBRUMsS0FBSyxDQUFDWixJQUFJLENBQUNXLEtBQUssQ0FBQztFQUM1QmIsTUFBTSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQ1ksS0FBSyxDQUFDO0FBQzNCO0FBRU8sU0FBU25GLFNBQVNBLENBQUMyRCxJQUFJLEVBQUU7RUFDNUJVLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFWixJQUFJLENBQUMsQ0FBQztFQUN4Q1UsTUFBTSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDeEM7Ozs7OztVQ3ZDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDa0Q7O0FBRWxEO0FBQ0FsRSwrREFBa0IsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL2pzL21vZGVsL0dBLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2pzL2JhY2tncm91bmQtZGV2ZWxvcG1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBsZXQgcGFnZSA9IGNocm9tZS5leHRlbnNpb24uZ2V0QmFja2dyb3VuZFBhZ2UoKTtcblxuaW1wb3J0IHsgdHJhY2tFdmVudCwgdHJhY2tQYWdlIH0gZnJvbSBcIi4vbW9kZWwvR0FcIjtcblxubGV0IG1lZGlhU3RyZWFtO1xubGV0IGlzUmVjb3JkaW5nO1xubGV0IG1lZGlhUmVjb3JkZXI7XG5sZXQgcmVjb3JkZWRCbG9icztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCYWNrZ3JvdW5kUGFnZSgpIHtcbiAgICBjaHJvbWUuYWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihhc3luYyAodGFiKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdDb250ZXh0cyA9IGF3YWl0IGNocm9tZS5ydW50aW1lLmdldENvbnRleHRzKHt9KTtcbiAgICAgICAgbGV0IHJlY29yZGluZyA9IGZhbHNlO1xuICAgICAgXG4gICAgICAgIGNvbnN0IG9mZnNjcmVlbkRvY3VtZW50ID0gZXhpc3RpbmdDb250ZXh0cy5maW5kKFxuICAgICAgICAgIChjKSA9PiBjLmNvbnRleHRUeXBlID09PSAnT0ZGU0NSRUVOX0RPQ1VNRU5UJ1xuICAgICAgICApO1xuICAgICAgXG4gICAgICAgIC8vIElmIGFuIG9mZnNjcmVlbiBkb2N1bWVudCBpcyBub3QgYWxyZWFkeSBvcGVuLCBjcmVhdGUgb25lLlxuICAgICAgICBpZiAoIW9mZnNjcmVlbkRvY3VtZW50KSB7XG4gICAgICAgICAgLy8gQ3JlYXRlIGFuIG9mZnNjcmVlbiBkb2N1bWVudC5cbiAgICAgICAgICBhd2FpdCBjaHJvbWUub2Zmc2NyZWVuLmNyZWF0ZURvY3VtZW50KHtcbiAgICAgICAgICAgIHVybDogJ29mZnNjcmVlbi5odG1sJyxcbiAgICAgICAgICAgIHJlYXNvbnM6IFsnVVNFUl9NRURJQSddLFxuICAgICAgICAgICAganVzdGlmaWNhdGlvbjogJ1JlY29yZGluZyBmcm9tIGNocm9tZS50YWJDYXB0dXJlIEFQSSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWNvcmRpbmcgPSBvZmZzY3JlZW5Eb2N1bWVudC5kb2N1bWVudFVybC5lbmRzV2l0aCgnI3JlY29yZGluZycpO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgaWYgKHJlY29yZGluZykge1xuICAgICAgICAgIHN0b3BSZWNvcmRpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgICAgICB0YXJnZXQ6IHt0YWJJZDogdGFiLmlkfSxcbiAgICAgICAgICAgIGZpbGVzOiBbJ2NvbnRlbnQuanMnXVxuICAgICAgICB9KTtcblxuICAgICAgICBnbG9iYWxUaGlzLnRhYklkID0gdGFiLmlkO1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyB0YWJJZDogdGFiLmlkIH0pO1xuXG4gICAgICAgIGNocm9tZS53aW5kb3dzLmdldEN1cnJlbnQoeyBwb3B1bGF0ZTogZmFsc2UgfSwgKHdpbikgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsVGhpcy5jaHJvbWVTaXplID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB3aW4ud2lkdGggLSB0YWIud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW4uaGVpZ2h0IC0gdGFiLmhlaWdodFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbGV0IG1zZyA9IHsgdHlwZTogXCJzY3JvbGxDYXB0dXJlQnJvd3NlckFjdGlvblwiLCB0YWJJZDogdGFiLmlkfTtcbiAgICAgICAgLy8gY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpO1xuICAgIH0pO1xufVxuXG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobXNnLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVTdGFydFJlY29yZGluZ1wiOlxuICAgICAgICAgICAgc3RhcnRSZWNvcmRpbmcobXNnLnRhYklkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZVN0b3BSZWNvcmRpbmdcIjpcbiAgICAgICAgICAgIHN0b3BSZWNvcmRpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZVJlc2l6ZVdpbmRvd1wiOlxuICAgICAgICAgICAgcmVzaXplV2luZG93KG1zZy53aWR0aCwgbXNnLmhlaWdodCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVUcmFja0V2ZW50XCI6XG4gICAgICAgICAgICAvLyB0cmFja0V2ZW50KG1zZy5jYXRlZ29yeSwgbXNnLmFjdGlvbiwgbXNnLmxhYmVsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZVRyYWNrUGFnZVwiOlxuICAgICAgICAgICAgLy8gdHJhY2tQYWdlKG1zZy5wYXRoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiByZXNpemVXaW5kb3cod2lkdGgsIGhlaWdodCkge1xuICAgIGxldCBvcHRpb25zID0geyB3aWR0aDogd2lkdGggKyBnbG9iYWxUaGlzLmNocm9tZVNpemUud2lkdGgsIGhlaWdodDogaGVpZ2h0ICsgZ2xvYmFsVGhpcy5jaHJvbWVTaXplLmhlaWdodCB9O1xuICAgIGNocm9tZS53aW5kb3dzLmdldEN1cnJlbnQoeyBwb3B1bGF0ZTogZmFsc2UgfSwgKHdpbikgPT4ge1xuICAgICAgICBjaHJvbWUud2luZG93cy51cGRhdGUod2luLmlkLCBvcHRpb25zKTtcbiAgICB9KTtcbn1cblxuLy8gZnVuY3Rpb24gaGFuZGxlRGF0YUF2YWlsYWJsZShldmVudCkge1xuLy8gICAgIGlmIChldmVudC5kYXRhICYmIGV2ZW50LmRhdGEuc2l6ZSA+IDApIHtcbi8vICAgICAgICAgcmVjb3JkZWRCbG9icy5wdXNoKGV2ZW50LmRhdGEpO1xuLy8gICAgIH1cbi8vIH1cblxuZnVuY3Rpb24gY2hhbmdlSWNvbihjb2xvciA9IFwiXCIpIHtcbiAgICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICAnMTYnOiBjaHJvbWUucnVudGltZS5nZXRVUkwoXCJhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkMTZcIiArIGNvbG9yICsgXCIucG5nXCIpLFxuICAgICAgICAgICAgJzMyJzogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKFwiYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDMyXCIgKyBjb2xvciArIFwiLnBuZ1wiKSxcbiAgICAgICAgICAgICc0OCc6IGNocm9tZS5ydW50aW1lLmdldFVSTChcImFzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQ0OFwiICsgY29sb3IgKyBcIi5wbmdcIiksXG4gICAgICAgICAgICAnMTI4JzogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKFwiYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDEyOFwiICsgY29sb3IgKyBcIi5wbmdcIiksXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBzdGFydFJlY29yZGluZyh0YWJJZCkge1xuICAgIGNoYW5nZUljb24oXCJfcmVkXCIpO1xuXG4gICAgLy8gR2V0IGEgTWVkaWFTdHJlYW0gZm9yIHRoZSBhY3RpdmUgdGFiLlxuICAgIGNvbnN0IHN0cmVhbUlkID0gYXdhaXQgY2hyb21lLnRhYkNhcHR1cmUuZ2V0TWVkaWFTdHJlYW1JZCh7XG4gICAgICAgIHRhcmdldFRhYklkOiB0YWJJZFxuICAgIH0pO1xuXG4gICAgLy8gU2VuZCB0aGUgc3RyZWFtIElEIHRvIHRoZSBvZmZzY3JlZW4gZG9jdW1lbnQgdG8gc3RhcnQgcmVjb3JkaW5nLlxuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogJ3Njcm9sbENhcHR1cmVTdGFydE9mZnNjcmVlblJlY29yZGluZycsXG4gICAgICAgIHRhcmdldDogJ29mZnNjcmVlbicsXG4gICAgICAgIGRhdGE6IHN0cmVhbUlkXG4gICAgfSk7XG5cbiAgICAgICAgICAgICAgXG4gICAgLy8gY2hyb21lLnRhYnMuZ2V0KGdsb2JhbFRoaXMudGFiSWQsIF9zdGFydFRhYkNhcHR1cmUpO1xuICAgIC8vIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0sIF9zdGFydFRhYkNhcHR1cmUpO1xufVxuXG4vLyBmdW5jdGlvbiBfc3RhcnRUYWJDYXB0dXJlKHRhYikge1xuICAgIC8vIGlzUmVjb3JkaW5nID0gdHJ1ZTtcblxuICAgIC8vIE5vdGU6IHRoaXMgbWV0aG9kIG11c3QgYmUgaW52b2tlZCBieSB0aGUgdXNlciBhcyBkZWZpbmVkXG4gICAgLy8gaW4gaHR0cHM6Ly9jcmJ1Zy5jb20vNDg5MjU4LCBlLmcuIGNocm9tZS5hY3Rpb24ub25DbGlja2VkLlxuXG4gICAgLy8gY29uc29sZS5sb2coXCJnZXRTdXBwb3J0ZWRDb25zdHJhaW50c1wiLCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFN1cHBvcnRlZENvbnN0cmFpbnRzKCkpO1xuXG4gICAgLy8gbGV0IGNhcHR1cmVPcHRpb25zID0ge1xuICAgIC8vICAgICBhdWRpbzogdHJ1ZSxcbiAgICAvLyAgICAgdmlkZW86IHRydWUsXG4gICAgLy8gICAgIGF1ZGlvQ29uc3RyYWludHM6IHtcbiAgICAvLyAgICAgICAgIG1hbmRhdG9yeToge1xuICAgIC8vICAgICAgICAgICAgIGNocm9tZU1lZGlhU291cmNlOiAndGFiJyxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHZpZGVvQ29uc3RyYWludHM6IHtcbiAgICAvLyAgICAgICAgIG1hbmRhdG9yeToge1xuICAgIC8vICAgICAgICAgICAgIGNocm9tZU1lZGlhU291cmNlOiAndGFiJyxcbiAgICAvLyAgICAgICAgICAgICBtaW5XaWR0aDogdGFiLndpZHRoLFxuICAgIC8vICAgICAgICAgICAgIG1heFdpZHRoOiB0YWIud2lkdGgsXG4gICAgLy8gICAgICAgICAgICAgbWluSGVpZ2h0OiB0YWIuaGVpZ2h0LFxuICAgIC8vICAgICAgICAgICAgIG1heEhlaWdodDogdGFiLmhlaWdodCxcbiAgICAvLyAgICAgICAgICAgICBtaW5GcmFtZVJhdGU6IDMwLFxuICAgIC8vICAgICAgICAgICAgIG1heEZyYW1lUmF0ZTogNjBcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgIH0sXG4gICAgLy8gfTtcbiAgICAvLyBjaHJvbWUudGFiQ2FwdHVyZS5jYXB0dXJlKGNhcHR1cmVPcHRpb25zLCBfc2V0U3RyZWFtKTtcblxuICAgIC8vIGNvbnN0IHN0cmVhbUlkID0gYXdhaXQgY2hyb21lLnRhYkNhcHR1cmUuZ2V0TWVkaWFTdHJlYW1JZCh7XG4gICAgLy8gICAgIHRhcmdldFRhYklkOiBnbG9iYWxUaGlzLnRhYklkXG4gICAgLy8gfSk7XG4gICAgICBcbiAgICAvLyBjb25zdCBtZWRpYSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcbiAgICAvLyAgICAgYXVkaW86IHtcbiAgICAvLyAgICAgICBtYW5kYXRvcnk6IHtcbiAgICAvLyAgICAgICAgIGNocm9tZU1lZGlhU291cmNlOiAndGFiJyxcbiAgICAvLyAgICAgICAgIGNocm9tZU1lZGlhU291cmNlSWQ6IHN0cmVhbUlkXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB2aWRlbzoge1xuICAgIC8vICAgICAgIG1hbmRhdG9yeToge1xuICAgIC8vICAgICAgICAgY2hyb21lTWVkaWFTb3VyY2U6ICd0YWInLFxuICAgIC8vICAgICAgICAgY2hyb21lTWVkaWFTb3VyY2VJZDogc3RyZWFtSWRcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pO1xuICAgIFxuICAgICAgLy8gQ29udGludWUgdG8gcGxheSB0aGUgY2FwdHVyZWQgYXVkaW8gdG8gdGhlIHVzZXIuXG4gICAgLy8gICBjb25zdCBvdXRwdXQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgLy8gICBjb25zdCBzb3VyY2UgPSBvdXRwdXQuY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UobWVkaWEpO1xuICAgIC8vICAgc291cmNlLmNvbm5lY3Qob3V0cHV0LmRlc3RpbmF0aW9uKTtcbiAgICBcbiAgICAvLyAgIG1lZGlhU3RyZWFtID0gbWVkaWE7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIF9zZXRTdHJlYW0oc3RyZWFtKSB7XG4gICAgLy8gaWYoc3RyZWFtKSB7XG4gICAgICAgIC8vIG1lZGlhU3RyZWFtID0gc3RyZWFtO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICAgIGFsZXJ0KCdTdHJlYW0gY3JlYXRpb24gZmFpbGVkOiAnICsgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpO1xuICAgIC8vIH1cblxuICAgIC8vIGxldCB0cmFja3MgPSBtZWRpYVN0cmVhbS5nZXRUcmFja3MoKTtcbiAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IHRyYWNrcy5sZW5ndGg7ICsraSkge1xuICAgIC8vICAgICBsZXQgdHJhY2sgPSB0cmFja3NbaV07XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiLS0tLSB0cmFja1wiLCB0cmFjayk7XG4gICAgLy8gICAgIGZvciAobGV0IGogaW4gdHJhY2spIGNvbnNvbGUubG9nKGosIFwiPVwiLCB0cmFja1tqXSk7XG4gICAgLy8gICAgIGxldCBzZXR0aW5ncyA9IHRyYWNrLmdldFNldHRpbmdzKCk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiLS0tLS0gc2V0dGluZ3NcIik7XG4gICAgLy8gICAgIGZvciAobGV0IGsgaW4gc2V0dGluZ3MpIGNvbnNvbGUubG9nKGssIFwiPVwiLCBzZXR0aW5nc1trXSk7XG4gICAgLy8gfVxuICAgIFxuICAgIC8vIHJlY29yZGVkQmxvYnMgPSBbXTtcblxuICAgIC8vIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJqc29uXCJdLCBfY3JlYXRlTWVkaWFSZWNvcmRlcik7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIF9jcmVhdGVNZWRpYVJlY29yZGVyKHJlc3VsdCkge1xuICAgXG4vLyAgICAgbGV0IHZpZGVvQ29kZWMgPSBcInZwOFwiO1xuLy8gICAgIGxldCBhdWRpb0NvZGVjID0gXCJvcHVzXCI7XG4vLyAgICAgbGV0IHZpZGVvQml0c1BlclNlY29uZCA9IDg7XG4vLyAgICAgbGV0IGF1ZGlvQml0c1BlclNlY29uZCA9IDEyODtcblxuLy8gICAgIGlmIChyZXN1bHQuanNvbikge1xuLy8gICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UocmVzdWx0Lmpzb24pO1xuLy8gICAgICAgICBpZiAoZGF0YS5zZXR0aW5ncykge1xuLy8gICAgICAgICAgICAgdmlkZW9Db2RlYyA9IGRhdGEuc2V0dGluZ3MudmlkZW9Db2RlYyB8fCB2aWRlb0NvZGVjO1xuLy8gICAgICAgICAgICAgYXVkaW9Db2RlYyA9IGRhdGEuc2V0dGluZ3MuYXVkaW9Db2RlYyB8fCBhdWRpb0NvZGVjO1xuLy8gICAgICAgICAgICAgYXVkaW9CaXRzUGVyU2Vjb25kID0gZGF0YS5zZXR0aW5ncy5hdWRpb0JpdHNQZXJTZWNvbmQgfHwgYXVkaW9CaXRzUGVyU2Vjb25kO1xuLy8gICAgICAgICAgICAgdmlkZW9CaXRzUGVyU2Vjb25kID0gZGF0YS5zZXR0aW5ncy52aWRlb0JpdHNQZXJTZWNvbmQgfHwgdmlkZW9CaXRzUGVyU2Vjb25kO1xuLy8gICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAvLyBsZXQgb3B0aW9ucyA9IHsgbWltZVR5cGU6IFwidmlkZW8vd2VibTtjb2RlY3M9aDI2NFwiIH07XG4vLyAgICAgbGV0IG9wdGlvbnMgPSB7IG1pbWVUeXBlOiAndmlkZW8vd2VibTtjb2RlY3M9JyArIHZpZGVvQ29kZWMgKyBcIixcIiArIGF1ZGlvQ29kZWN9O1xuXG4vLyAgICAgaWYgKCFNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZChvcHRpb25zLm1pbWVUeXBlKSkge1xuLy8gICAgICAgICBvcHRpb25zID0geyBtaW1lVHlwZTogJ3ZpZGVvL3dlYm07Y29kZWNzPXZwOScgfTtcbi8vICAgICAgICAgaWYgKCFNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZChvcHRpb25zLm1pbWVUeXBlKSkge1xuLy8gICAgICAgICAgICAgb3B0aW9ucyA9IHsgbWltZVR5cGU6ICd2aWRlby93ZWJtO2NvZGVjcz12cDgnIH07XG4vLyAgICAgICAgICAgICBpZiAoIU1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkKG9wdGlvbnMubWltZVR5cGUpKSB7XG4vLyAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHsgbWltZVR5cGU6ICd2aWRlby93ZWJtJyB9O1xuLy8gICAgICAgICAgICAgICAgIGlmICghTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQob3B0aW9ucy5taW1lVHlwZSkpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHsgbWltZVR5cGU6ICcnIH07XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgb3B0aW9ucy5hdWRpb0JpdHNQZXJTZWNvbmQgPSBhdWRpb0JpdHNQZXJTZWNvbmQgKiAxMDAwOyAvLyAxMjggS2JpdC9zZWNcbi8vICAgICBvcHRpb25zLnZpZGVvQml0c1BlclNlY29uZCA9IHZpZGVvQml0c1BlclNlY29uZCAqIDEwMDAwMDA7IC8vIDggTWJpdC9zZWNcblxuLy8gICAgIHRyeSB7XG4vLyAgICAgICAgIG1lZGlhUmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihtZWRpYVN0cmVhbSwgb3B0aW9ucyk7XG4vLyAgICAgfSBjYXRjaCAoZSkge1xuLy8gICAgICAgICBjb25zb2xlLmVycm9yKCdFeGNlcHRpb24gd2hpbGUgY3JlYXRpbmcgTWVkaWFSZWNvcmRlcjonLCBlKTtcbi8vICAgICAgICAgY29uc29sZS5sb2coYEV4Y2VwdGlvbiB3aGlsZSBjcmVhdGluZyBNZWRpYVJlY29yZGVyOiAke0pTT04uc3RyaW5naWZ5KGUpfWApO1xuLy8gICAgICAgICByZXR1cm47XG4vLyAgICAgfVxuXG4vLyAgICAgLy8gY29uc29sZS5sb2coJ0NyZWF0ZWQgTWVkaWFSZWNvcmRlcicsIG1lZGlhUmVjb3JkZXIsICd3aXRoIG9wdGlvbnMnLCBvcHRpb25zKTtcbi8vICAgICAvLyBtZWRpYVJlY29yZGVyLm9uc3RvcCA9IChldmVudCkgPT4ge1xuLy8gICAgIC8vICAgICBjb25zb2xlLmxvZygnUmVjb3JkZXIgc3RvcHBlZDogJywgZXZlbnQpO1xuLy8gICAgIC8vICAgICBjb25zb2xlLmxvZygnUmVjb3JkZWQgQmxvYnM6ICcsIHJlY29yZGVkQmxvYnMpO1xuLy8gICAgIC8vIH07XG4vLyAgICAgbWVkaWFSZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSBoYW5kbGVEYXRhQXZhaWxhYmxlO1xuLy8gICAgIG1lZGlhUmVjb3JkZXIuc3RhcnQoMTApOyAvLyBjb2xsZWN0IDEwbXMgb2YgZGF0YVxuLy8gfVxuXG5mdW5jdGlvbiBzdG9wUmVjb3JkaW5nKCkge1xuICAgIGNoYW5nZUljb24oKTtcblxuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogJ3Njcm9sbENhcHR1cmVTdG9wT2Zmc2NyZWVuUmVjb3JkaW5nJyxcbiAgICAgICAgdGFyZ2V0OiAnb2Zmc2NyZWVuJ1xuICAgIH0pO1xuXG4gICAgLy8gaWYgKG1lZGlhUmVjb3JkZXIpIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xuICAgIC8vIGxldCB2aWRlb0Jsb2IgPSBuZXcgQmxvYihyZWNvcmRlZEJsb2JzLCB7IHR5cGU6ICd2aWRlby93ZWJtJyB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNhdmVUaGVWaWRlb1wiKTtcbiAgICAvLyBnbG9iYWxUaGlzLnZpZGVvVVJMID0gZ2xvYmFsVGhpcy5VUkwuY3JlYXRlT2JqZWN0VVJMKHZpZGVvQmxvYik7XG4gICAgLy8gY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgdmlkZW9VUkw6IGdsb2JhbFRoaXMudmlkZW9VUkwgfSk7XG5cbiAgICAvLyBsZXQgbXNnID0geyB0eHQ6IFwic2Nyb2xsQ2FwdHVyZVZpZGVvVVJMXCIsIHZpZGVvVVJMOiBnbG9iYWxUaGlzLnZpZGVvVVJMIH07XG4gICAgLy8gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKTtcblxuICAgIC8vIGlmIChtZWRpYVN0cmVhbSkge1xuICAgIC8vICAgICBsZXQgdHJhY2tzID0gbWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCk7XG4gICAgLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJhY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gICAgICAgICB0cmFja3NbaV0uc3RvcCgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC8vIG1lZGlhUmVjb3JkZXIgPSBudWxsO1xuICAgIC8vIG1lZGlhU3RyZWFtID0gbnVsbDtcbiAgICAvLyBpc1JlY29yZGluZyA9IGZhbHNlO1xufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDEyIFRoZSBDaHJvbWl1bSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuLy8gZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cblxuIC8qKlxuICogQmVsb3cgaXMgYSBtb2RpZmllZCB2ZXJzaW9uIG9mIHRoZSBHb29nbGUgQW5hbHl0aWNzIGFzeW5jaHJvbm91cyB0cmFja2luZ1xuICogY29kZSBzbmlwcGV0LiAgSXQgaGFzIGJlZW4gbW9kaWZpZWQgdG8gcHVsbCB0aGUgSFRUUFMgdmVyc2lvbiBvZiBnYS5qc1xuICogaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBIVFRQIHZlcnNpb24uICBJdCBpcyByZWNvbW1lbmRlZCB0aGF0IHlvdSB1c2UgdGhpc1xuICogc25pcHBldCBpbnN0ZWFkIG9mIHRoZSBzdGFuZGFyZCB0cmFja2luZyBzbmlwcGV0IHByb3ZpZGVkIHdoZW4gc2V0dGluZyB1cFxuICogYSBHb29nbGUgQW5hbHl0aWNzIGFjY291bnQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRBbmFseXRpY3MoYW5hbHl0aWNzSUQpIHtcbiAgICB3aW5kb3cuX2dhcSA9IHdpbmRvdy5fZ2FxIHx8IFtdO1xuICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfc2V0QWNjb3VudCcsIGFuYWx5dGljc0lEXSk7XG4gICAgd2luZG93Ll9nYXEucHVzaChbJ190cmFja1BhZ2V2aWV3J10pO1xuXG4gICAgbGV0IGdhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgZ2EudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIGdhLmFzeW5jID0gdHJ1ZTtcbiAgICBnYS5zcmMgPSAnaHR0cHM6Ly9zc2wuZ29vZ2xlLWFuYWx5dGljcy5jb20vZ2EuanMnO1xuICAgIGxldCBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZ2EsIHMpO1xuIH1cblxuLyoqXG4gKiBUcmFjayBhIGNsaWNrIG9uIGEgYnV0dG9uIHVzaW5nIHRoZSBhc3luY2hyb25vdXMgdHJhY2tpbmcgQVBJLlxuICogU2VlIGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vYXBpcy9hbmFseXRpY3MvZG9jcy90cmFja2luZy9hc3luY1RyYWNraW5nLmh0bWxcbiAqIGZvciBpbmZvcm1hdGlvbiBvbiBob3cgdG8gdXNlIHRoZSBhc3luY2hyb25vdXMgdHJhY2tpbmcgQVBJLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhY2tFdmVudChjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCA9IFwiXCIpIHtcbiAgICBsZXQgZXZlbnQgPSBbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbl07XG4gICAgaWYgKGxhYmVsKSBldmVudC5wdXNoKGxhYmVsKTtcbiAgICB3aW5kb3cuX2dhcS5wdXNoKGV2ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYWNrUGFnZShwYXRoKSB7XG4gICAgd2luZG93Ll9nYXEucHVzaChbJ19zZXQnLCAncGFnZScsIHBhdGhdKTtcbiAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3RyYWNrUGFnZXZpZXcnXSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCB7IGluaXRBbmFseXRpY3MgfSBmcm9tIFwiLi9tb2RlbC9HQVwiO1xuaW1wb3J0IHsgaW5pdEJhY2tncm91bmRQYWdlIH0gZnJvbSBcIi4vYmFja2dyb3VuZFwiO1xuXG4vLyBpbml0QW5hbHl0aWNzKFwiVUEtMTYxNDA0NjI3LTFcIik7XG5pbml0QmFja2dyb3VuZFBhZ2UoKTsiXSwibmFtZXMiOlsidHJhY2tFdmVudCIsInRyYWNrUGFnZSIsIm1lZGlhU3RyZWFtIiwiaXNSZWNvcmRpbmciLCJtZWRpYVJlY29yZGVyIiwicmVjb3JkZWRCbG9icyIsImluaXRCYWNrZ3JvdW5kUGFnZSIsImNocm9tZSIsImFjdGlvbiIsIm9uQ2xpY2tlZCIsImFkZExpc3RlbmVyIiwidGFiIiwiZXhpc3RpbmdDb250ZXh0cyIsInJ1bnRpbWUiLCJnZXRDb250ZXh0cyIsInJlY29yZGluZyIsIm9mZnNjcmVlbkRvY3VtZW50IiwiZmluZCIsImMiLCJjb250ZXh0VHlwZSIsIm9mZnNjcmVlbiIsImNyZWF0ZURvY3VtZW50IiwidXJsIiwicmVhc29ucyIsImp1c3RpZmljYXRpb24iLCJkb2N1bWVudFVybCIsImVuZHNXaXRoIiwic3RvcFJlY29yZGluZyIsInNjcmlwdGluZyIsImV4ZWN1dGVTY3JpcHQiLCJ0YXJnZXQiLCJ0YWJJZCIsImlkIiwiZmlsZXMiLCJnbG9iYWxUaGlzIiwic3RvcmFnZSIsImxvY2FsIiwic2V0Iiwid2luZG93cyIsImdldEN1cnJlbnQiLCJwb3B1bGF0ZSIsIndpbiIsImNocm9tZVNpemUiLCJ3aWR0aCIsImhlaWdodCIsIm9uTWVzc2FnZSIsIm1zZyIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsInR5cGUiLCJzdGFydFJlY29yZGluZyIsInJlc2l6ZVdpbmRvdyIsIm9wdGlvbnMiLCJ1cGRhdGUiLCJjaGFuZ2VJY29uIiwiY29sb3IiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzZXRJY29uIiwicGF0aCIsImdldFVSTCIsInN0cmVhbUlkIiwidGFiQ2FwdHVyZSIsImdldE1lZGlhU3RyZWFtSWQiLCJ0YXJnZXRUYWJJZCIsInNlbmRNZXNzYWdlIiwiZGF0YSIsImluaXRBbmFseXRpY3MiLCJhbmFseXRpY3NJRCIsIndpbmRvdyIsIl9nYXEiLCJwdXNoIiwiZ2EiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhc3luYyIsInNyYyIsInMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJjYXRlZ29yeSIsImxhYmVsIiwiZXZlbnQiXSwic291cmNlUm9vdCI6IiJ9