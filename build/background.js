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
      //   stopRecording({'stopped with button'});
    }
    chrome.scripting.executeScript({
      target: {
        tabId: tab.id
      },
      files: ['content.js']
    });

    // globalThis.tabId = tab.id;
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
  });
}
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log('backgorund chrome.runtime.onMessage msg', msg);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovLy8uL2pzL21vZGVsL0dBLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2pzL2JhY2tncm91bmQtZGV2ZWxvcG1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJhY2tFdmVudCwgdHJhY2tQYWdlIH0gZnJvbSBcIi4vbW9kZWwvR0FcIjtcblxubGV0IG1lZGlhU3RyZWFtO1xubGV0IGlzUmVjb3JkaW5nO1xubGV0IG1lZGlhUmVjb3JkZXI7XG5sZXQgcmVjb3JkZWRCbG9icztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCYWNrZ3JvdW5kUGFnZSgpIHtcbiAgICBjaHJvbWUuYWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihhc3luYyAodGFiKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdDb250ZXh0cyA9IGF3YWl0IGNocm9tZS5ydW50aW1lLmdldENvbnRleHRzKHt9KTtcbiAgICAgICAgbGV0IHJlY29yZGluZyA9IGZhbHNlO1xuICAgICAgXG4gICAgICAgIGNvbnN0IG9mZnNjcmVlbkRvY3VtZW50ID0gZXhpc3RpbmdDb250ZXh0cy5maW5kKFxuICAgICAgICAgIChjKSA9PiBjLmNvbnRleHRUeXBlID09PSAnT0ZGU0NSRUVOX0RPQ1VNRU5UJ1xuICAgICAgICApO1xuICAgICAgXG4gICAgICAgIC8vIElmIGFuIG9mZnNjcmVlbiBkb2N1bWVudCBpcyBub3QgYWxyZWFkeSBvcGVuLCBjcmVhdGUgb25lLlxuICAgICAgICBpZiAoIW9mZnNjcmVlbkRvY3VtZW50KSB7XG4gICAgICAgICAgLy8gQ3JlYXRlIGFuIG9mZnNjcmVlbiBkb2N1bWVudC5cbiAgICAgICAgICBhd2FpdCBjaHJvbWUub2Zmc2NyZWVuLmNyZWF0ZURvY3VtZW50KHtcbiAgICAgICAgICAgIHVybDogJ29mZnNjcmVlbi5odG1sJyxcbiAgICAgICAgICAgIHJlYXNvbnM6IFsnVVNFUl9NRURJQSddLFxuICAgICAgICAgICAganVzdGlmaWNhdGlvbjogJ1JlY29yZGluZyBmcm9tIGNocm9tZS50YWJDYXB0dXJlIEFQSSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWNvcmRpbmcgPSBvZmZzY3JlZW5Eb2N1bWVudC5kb2N1bWVudFVybC5lbmRzV2l0aCgnI3JlY29yZGluZycpO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgaWYgKHJlY29yZGluZykge1xuICAgICAgICAvLyAgIHN0b3BSZWNvcmRpbmcoeydzdG9wcGVkIHdpdGggYnV0dG9uJ30pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgICAgIHRhcmdldDoge3RhYklkOiB0YWIuaWR9LFxuICAgICAgICAgICAgZmlsZXM6IFsnY29udGVudC5qcyddXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGdsb2JhbFRoaXMudGFiSWQgPSB0YWIuaWQ7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHRhYklkOiB0YWIuaWQgfSk7XG5cbiAgICAgICAgY2hyb21lLndpbmRvd3MuZ2V0Q3VycmVudCh7IHBvcHVsYXRlOiBmYWxzZSB9LCAod2luKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWxUaGlzLmNocm9tZVNpemUgPSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpbi53aWR0aCAtIHRhYi53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpbi5oZWlnaHQgLSB0YWIuaGVpZ2h0XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1zZywgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBjb25zb2xlLmxvZygnYmFja2dvcnVuZCBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UgbXNnJywgbXNnKTtcbiAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJzY3JvbGxDYXB0dXJlU3RhcnRSZWNvcmRpbmdcIjpcbiAgICAgICAgICAgIHN0YXJ0UmVjb3JkaW5nKG1zZyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVTdG9wUmVjb3JkaW5nXCI6XG4gICAgICAgICAgICBzdG9wUmVjb3JkaW5nKG1zZyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVSZXNpemVXaW5kb3dcIjpcbiAgICAgICAgICAgIHJlc2l6ZVdpbmRvdyhtc2cud2lkdGgsIG1zZy5oZWlnaHQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzY3JvbGxDYXB0dXJlVHJhY2tFdmVudFwiOlxuICAgICAgICAgICAgLy8gdHJhY2tFdmVudChtc2cuY2F0ZWdvcnksIG1zZy5hY3Rpb24sIG1zZy5sYWJlbCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVUcmFja1BhZ2VcIjpcbiAgICAgICAgICAgIC8vIHRyYWNrUGFnZShtc2cucGF0aCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gcmVzaXplV2luZG93KHdpZHRoLCBoZWlnaHQpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHsgd2lkdGg6IHdpZHRoICsgZ2xvYmFsVGhpcy5jaHJvbWVTaXplLndpZHRoLCBoZWlnaHQ6IGhlaWdodCArIGdsb2JhbFRoaXMuY2hyb21lU2l6ZS5oZWlnaHQgfTtcbiAgICBjaHJvbWUud2luZG93cy5nZXRDdXJyZW50KHsgcG9wdWxhdGU6IGZhbHNlIH0sICh3aW4pID0+IHtcbiAgICAgICAgY2hyb21lLndpbmRvd3MudXBkYXRlKHdpbi5pZCwgb3B0aW9ucyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUljb24oY29sb3IgPSBcIlwiKSB7XG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICAgICAgcGF0aDoge1xuICAgICAgICAgICAgJzE2JzogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKFwiYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDE2XCIgKyBjb2xvciArIFwiLnBuZ1wiKSxcbiAgICAgICAgICAgICczMic6IGNocm9tZS5ydW50aW1lLmdldFVSTChcImFzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQzMlwiICsgY29sb3IgKyBcIi5wbmdcIiksXG4gICAgICAgICAgICAnNDgnOiBjaHJvbWUucnVudGltZS5nZXRVUkwoXCJhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkNDhcIiArIGNvbG9yICsgXCIucG5nXCIpLFxuICAgICAgICAgICAgJzEyOCc6IGNocm9tZS5ydW50aW1lLmdldFVSTChcImFzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQxMjhcIiArIGNvbG9yICsgXCIucG5nXCIpLFxuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gc3RhcnRSZWNvcmRpbmcoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKCdiYWNrZ3JvdW5kLnN0YXJ0UmVjb3JkaW5nIGRhdGE9JywgZGF0YSk7XG4gICAgY2hhbmdlSWNvbihcIl9yZWRcIik7XG5cbiAgICBjb25zdCBzdHJlYW1JZCA9IGF3YWl0IGNocm9tZS50YWJDYXB0dXJlLmdldE1lZGlhU3RyZWFtSWQoe1xuICAgICAgICB0YXJnZXRUYWJJZDogZGF0YS50YWJJZFxuICAgIH0pO1xuXG4gICAgLy8gY2hyb21lLndpbmRvd3MuY3JlYXRlKHt1cmw6IFwicGxheWVyLmh0bWxcIiwgdHlwZTogXCJwb3B1cFwifSk7XG5cbiAgICBjb25zdCBtZXNzYWdlID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSk7XG4gICAgT2JqZWN0LmFzc2lnbihtZXNzYWdlLCB7XG4gICAgICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlU3RhcnRPZmZzY3JlZW5SZWNvcmRpbmcnLFxuICAgICAgICB0YXJnZXQ6ICdvZmZzY3JlZW4nLFxuICAgICAgICBzdHJlYW1JZDogc3RyZWFtSWRcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdiYWNrZ3JvdW5kLnN0YXJ0UmVjb3JkaW5nIG1lc3NhZ2U9JywgbWVzc2FnZSk7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG59XG5cblxuZnVuY3Rpb24gc3RvcFJlY29yZGluZyhtZXNzYWdlKSB7XG4gICAgY29uc29sZS5sb2coJ2JhY2tncm91bmQuc3RvcFJlY29yZGluZyBtZXNzYWdlPScsIG1lc3NhZ2UpO1xuXG4gICAgY2hhbmdlSWNvbigpO1xuXG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVN0b3BPZmZzY3JlZW5SZWNvcmRpbmcnLFxuICAgICAgICB0YXJnZXQ6ICdvZmZzY3JlZW4nXG4gICAgfSk7XG5cbiAgICAvLyBpZiAobWVkaWFSZWNvcmRlcikgbWVkaWFSZWNvcmRlci5zdG9wKCk7XG4gICAgLy8gbGV0IHZpZGVvQmxvYiA9IG5ldyBCbG9iKHJlY29yZGVkQmxvYnMsIHsgdHlwZTogJ3ZpZGVvL3dlYm0nIH0pO1xuICAgIC8vIGxldCBtc2cgPSB7IHR4dDogXCJzY3JvbGxDYXB0dXJlVmlkZW9VUkxcIiwgdmlkZW9VUkw6IGdsb2JhbFRoaXMudmlkZW9VUkwgfTtcbiAgICAvLyBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShtc2cpO1xuXG4gICAgLy8gaWYgKG1lZGlhU3RyZWFtKSB7XG4gICAgLy8gICAgIGxldCB0cmFja3MgPSBtZWRpYVN0cmVhbS5nZXRUcmFja3MoKTtcbiAgICAvLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmFja3MubGVuZ3RoOyArK2kpIHtcbiAgICAvLyAgICAgICAgIHRyYWNrc1tpXS5zdG9wKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy8gbWVkaWFSZWNvcmRlciA9IG51bGw7XG4gICAgLy8gbWVkaWFTdHJlYW0gPSBudWxsO1xuICAgIC8vIGlzUmVjb3JkaW5nID0gZmFsc2U7XG59XG5cbi8vIGZ1bmN0aW9uIGhhbmRsZURhdGFBdmFpbGFibGUoZXZlbnQpIHtcbi8vICAgICBpZiAoZXZlbnQuZGF0YSAmJiBldmVudC5kYXRhLnNpemUgPiAwKSB7XG4vLyAgICAgICAgIHJlY29yZGVkQmxvYnMucHVzaChldmVudC5kYXRhKTtcbi8vICAgICB9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIF9zdGFydFRhYkNhcHR1cmUodGFiKSB7XG4gICAgLy8gaXNSZWNvcmRpbmcgPSB0cnVlO1xuXG4gICAgLy8gTm90ZTogdGhpcyBtZXRob2QgbXVzdCBiZSBpbnZva2VkIGJ5IHRoZSB1c2VyIGFzIGRlZmluZWRcbiAgICAvLyBpbiBodHRwczovL2NyYnVnLmNvbS80ODkyNTgsIGUuZy4gY2hyb21lLmFjdGlvbi5vbkNsaWNrZWQuXG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImdldFN1cHBvcnRlZENvbnN0cmFpbnRzXCIsIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0U3VwcG9ydGVkQ29uc3RyYWludHMoKSk7XG5cbiAgICAvLyBsZXQgY2FwdHVyZU9wdGlvbnMgPSB7XG4gICAgLy8gICAgIGF1ZGlvOiB0cnVlLFxuICAgIC8vICAgICB2aWRlbzogdHJ1ZSxcbiAgICAvLyAgICAgYXVkaW9Db25zdHJhaW50czoge1xuICAgIC8vICAgICAgICAgbWFuZGF0b3J5OiB7XG4gICAgLy8gICAgICAgICAgICAgY2hyb21lTWVkaWFTb3VyY2U6ICd0YWInLFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgdmlkZW9Db25zdHJhaW50czoge1xuICAgIC8vICAgICAgICAgbWFuZGF0b3J5OiB7XG4gICAgLy8gICAgICAgICAgICAgY2hyb21lTWVkaWFTb3VyY2U6ICd0YWInLFxuICAgIC8vICAgICAgICAgICAgIG1pbldpZHRoOiB0YWIud2lkdGgsXG4gICAgLy8gICAgICAgICAgICAgbWF4V2lkdGg6IHRhYi53aWR0aCxcbiAgICAvLyAgICAgICAgICAgICBtaW5IZWlnaHQ6IHRhYi5oZWlnaHQsXG4gICAgLy8gICAgICAgICAgICAgbWF4SGVpZ2h0OiB0YWIuaGVpZ2h0LFxuICAgIC8vICAgICAgICAgICAgIG1pbkZyYW1lUmF0ZTogMzAsXG4gICAgLy8gICAgICAgICAgICAgbWF4RnJhbWVSYXRlOiA2MFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgfSxcbiAgICAvLyB9O1xuICAgIC8vIGNocm9tZS50YWJDYXB0dXJlLmNhcHR1cmUoY2FwdHVyZU9wdGlvbnMsIF9zZXRTdHJlYW0pO1xuXG4gICAgLy8gY29uc3Qgc3RyZWFtSWQgPSBhd2FpdCBjaHJvbWUudGFiQ2FwdHVyZS5nZXRNZWRpYVN0cmVhbUlkKHtcbiAgICAvLyAgICAgdGFyZ2V0VGFiSWQ6IGdsb2JhbFRoaXMudGFiSWRcbiAgICAvLyB9KTtcbiAgICAgIFxuICAgIC8vIGNvbnN0IG1lZGlhID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xuICAgIC8vICAgICBhdWRpbzoge1xuICAgIC8vICAgICAgIG1hbmRhdG9yeToge1xuICAgIC8vICAgICAgICAgY2hyb21lTWVkaWFTb3VyY2U6ICd0YWInLFxuICAgIC8vICAgICAgICAgY2hyb21lTWVkaWFTb3VyY2VJZDogc3RyZWFtSWRcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHZpZGVvOiB7XG4gICAgLy8gICAgICAgbWFuZGF0b3J5OiB7XG4gICAgLy8gICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZTogJ3RhYicsXG4gICAgLy8gICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZUlkOiBzdHJlYW1JZFxuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSk7XG4gICAgXG4gICAgICAvLyBDb250aW51ZSB0byBwbGF5IHRoZSBjYXB0dXJlZCBhdWRpbyB0byB0aGUgdXNlci5cbiAgICAvLyAgIGNvbnN0IG91dHB1dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICAvLyAgIGNvbnN0IHNvdXJjZSA9IG91dHB1dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShtZWRpYSk7XG4gICAgLy8gICBzb3VyY2UuY29ubmVjdChvdXRwdXQuZGVzdGluYXRpb24pO1xuICAgIFxuICAgIC8vICAgbWVkaWFTdHJlYW0gPSBtZWRpYTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gX3NldFN0cmVhbShzdHJlYW0pIHtcbiAgICAvLyBpZihzdHJlYW0pIHtcbiAgICAgICAgLy8gbWVkaWFTdHJlYW0gPSBzdHJlYW07XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgICAgYWxlcnQoJ1N0cmVhbSBjcmVhdGlvbiBmYWlsZWQ6ICcgKyBjaHJvbWUucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSk7XG4gICAgLy8gfVxuXG4gICAgLy8gbGV0IHRyYWNrcyA9IG1lZGlhU3RyZWFtLmdldFRyYWNrcygpO1xuICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgdHJhY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gICAgIGxldCB0cmFjayA9IHRyYWNrc1tpXTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCItLS0tIHRyYWNrXCIsIHRyYWNrKTtcbiAgICAvLyAgICAgZm9yIChsZXQgaiBpbiB0cmFjaykgY29uc29sZS5sb2coaiwgXCI9XCIsIHRyYWNrW2pdKTtcbiAgICAvLyAgICAgbGV0IHNldHRpbmdzID0gdHJhY2suZ2V0U2V0dGluZ3MoKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCItLS0tLSBzZXR0aW5nc1wiKTtcbiAgICAvLyAgICAgZm9yIChsZXQgayBpbiBzZXR0aW5ncykgY29uc29sZS5sb2coaywgXCI9XCIsIHNldHRpbmdzW2tdKTtcbiAgICAvLyB9XG4gICAgXG4gICAgLy8gcmVjb3JkZWRCbG9icyA9IFtdO1xuXG4gICAgLy8gY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcImpzb25cIl0sIF9jcmVhdGVNZWRpYVJlY29yZGVyKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gX2NyZWF0ZU1lZGlhUmVjb3JkZXIocmVzdWx0KSB7XG4gICBcbi8vICAgICBsZXQgdmlkZW9Db2RlYyA9IFwidnA4XCI7XG4vLyAgICAgbGV0IGF1ZGlvQ29kZWMgPSBcIm9wdXNcIjtcbi8vICAgICBsZXQgdmlkZW9CaXRzUGVyU2Vjb25kID0gODtcbi8vICAgICBsZXQgYXVkaW9CaXRzUGVyU2Vjb25kID0gMTI4O1xuXG4vLyAgICAgaWYgKHJlc3VsdC5qc29uKSB7XG4vLyAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShyZXN1bHQuanNvbik7XG4vLyAgICAgICAgIGlmIChkYXRhLnNldHRpbmdzKSB7XG4vLyAgICAgICAgICAgICB2aWRlb0NvZGVjID0gZGF0YS5zZXR0aW5ncy52aWRlb0NvZGVjIHx8IHZpZGVvQ29kZWM7XG4vLyAgICAgICAgICAgICBhdWRpb0NvZGVjID0gZGF0YS5zZXR0aW5ncy5hdWRpb0NvZGVjIHx8IGF1ZGlvQ29kZWM7XG4vLyAgICAgICAgICAgICBhdWRpb0JpdHNQZXJTZWNvbmQgPSBkYXRhLnNldHRpbmdzLmF1ZGlvQml0c1BlclNlY29uZCB8fCBhdWRpb0JpdHNQZXJTZWNvbmQ7XG4vLyAgICAgICAgICAgICB2aWRlb0JpdHNQZXJTZWNvbmQgPSBkYXRhLnNldHRpbmdzLnZpZGVvQml0c1BlclNlY29uZCB8fCB2aWRlb0JpdHNQZXJTZWNvbmQ7XG4vLyAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIC8vIGxldCBvcHRpb25zID0geyBtaW1lVHlwZTogXCJ2aWRlby93ZWJtO2NvZGVjcz1oMjY0XCIgfTtcbi8vICAgICBsZXQgb3B0aW9ucyA9IHsgbWltZVR5cGU6ICd2aWRlby93ZWJtO2NvZGVjcz0nICsgdmlkZW9Db2RlYyArIFwiLFwiICsgYXVkaW9Db2RlY307XG5cbi8vICAgICBpZiAoIU1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkKG9wdGlvbnMubWltZVR5cGUpKSB7XG4vLyAgICAgICAgIG9wdGlvbnMgPSB7IG1pbWVUeXBlOiAndmlkZW8vd2VibTtjb2RlY3M9dnA5JyB9O1xuLy8gICAgICAgICBpZiAoIU1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkKG9wdGlvbnMubWltZVR5cGUpKSB7XG4vLyAgICAgICAgICAgICBvcHRpb25zID0geyBtaW1lVHlwZTogJ3ZpZGVvL3dlYm07Y29kZWNzPXZwOCcgfTtcbi8vICAgICAgICAgICAgIGlmICghTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQob3B0aW9ucy5taW1lVHlwZSkpIHtcbi8vICAgICAgICAgICAgICAgICBvcHRpb25zID0geyBtaW1lVHlwZTogJ3ZpZGVvL3dlYm0nIH07XG4vLyAgICAgICAgICAgICAgICAgaWYgKCFNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZChvcHRpb25zLm1pbWVUeXBlKSkge1xuLy8gICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0geyBtaW1lVHlwZTogJycgfTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICBvcHRpb25zLmF1ZGlvQml0c1BlclNlY29uZCA9IGF1ZGlvQml0c1BlclNlY29uZCAqIDEwMDA7IC8vIDEyOCBLYml0L3NlY1xuLy8gICAgIG9wdGlvbnMudmlkZW9CaXRzUGVyU2Vjb25kID0gdmlkZW9CaXRzUGVyU2Vjb25kICogMTAwMDAwMDsgLy8gOCBNYml0L3NlY1xuXG4vLyAgICAgdHJ5IHtcbi8vICAgICAgICAgbWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKG1lZGlhU3RyZWFtLCBvcHRpb25zKTtcbi8vICAgICB9IGNhdGNoIChlKSB7XG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0V4Y2VwdGlvbiB3aGlsZSBjcmVhdGluZyBNZWRpYVJlY29yZGVyOicsIGUpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhgRXhjZXB0aW9uIHdoaWxlIGNyZWF0aW5nIE1lZGlhUmVjb3JkZXI6ICR7SlNPTi5zdHJpbmdpZnkoZSl9YCk7XG4vLyAgICAgICAgIHJldHVybjtcbi8vICAgICB9XG5cbi8vICAgICAvLyBjb25zb2xlLmxvZygnQ3JlYXRlZCBNZWRpYVJlY29yZGVyJywgbWVkaWFSZWNvcmRlciwgJ3dpdGggb3B0aW9ucycsIG9wdGlvbnMpO1xuLy8gICAgIC8vIG1lZGlhUmVjb3JkZXIub25zdG9wID0gKGV2ZW50KSA9PiB7XG4vLyAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdSZWNvcmRlciBzdG9wcGVkOiAnLCBldmVudCk7XG4vLyAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdSZWNvcmRlZCBCbG9iczogJywgcmVjb3JkZWRCbG9icyk7XG4vLyAgICAgLy8gfTtcbi8vICAgICBtZWRpYVJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IGhhbmRsZURhdGFBdmFpbGFibGU7XG4vLyAgICAgbWVkaWFSZWNvcmRlci5zdGFydCgxMCk7IC8vIGNvbGxlY3QgMTBtcyBvZiBkYXRhXG4vLyB9XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTIgVGhlIENocm9taXVtIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4vLyBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxuXG4gLyoqXG4gKiBCZWxvdyBpcyBhIG1vZGlmaWVkIHZlcnNpb24gb2YgdGhlIEdvb2dsZSBBbmFseXRpY3MgYXN5bmNocm9ub3VzIHRyYWNraW5nXG4gKiBjb2RlIHNuaXBwZXQuICBJdCBoYXMgYmVlbiBtb2RpZmllZCB0byBwdWxsIHRoZSBIVFRQUyB2ZXJzaW9uIG9mIGdhLmpzXG4gKiBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IEhUVFAgdmVyc2lvbi4gIEl0IGlzIHJlY29tbWVuZGVkIHRoYXQgeW91IHVzZSB0aGlzXG4gKiBzbmlwcGV0IGluc3RlYWQgb2YgdGhlIHN0YW5kYXJkIHRyYWNraW5nIHNuaXBwZXQgcHJvdmlkZWQgd2hlbiBzZXR0aW5nIHVwXG4gKiBhIEdvb2dsZSBBbmFseXRpY3MgYWNjb3VudC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEFuYWx5dGljcyhhbmFseXRpY3NJRCkge1xuICAgIHdpbmRvdy5fZ2FxID0gd2luZG93Ll9nYXEgfHwgW107XG4gICAgd2luZG93Ll9nYXEucHVzaChbJ19zZXRBY2NvdW50JywgYW5hbHl0aWNzSURdKTtcbiAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3RyYWNrUGFnZXZpZXcnXSk7XG5cbiAgICBsZXQgZ2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBnYS50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgZ2EuYXN5bmMgPSB0cnVlO1xuICAgIGdhLnNyYyA9ICdodHRwczovL3NzbC5nb29nbGUtYW5hbHl0aWNzLmNvbS9nYS5qcyc7XG4gICAgbGV0IHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShnYSwgcyk7XG4gfVxuXG4vKipcbiAqIFRyYWNrIGEgY2xpY2sgb24gYSBidXR0b24gdXNpbmcgdGhlIGFzeW5jaHJvbm91cyB0cmFja2luZyBBUEkuXG4gKiBTZWUgaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9hcGlzL2FuYWx5dGljcy9kb2NzL3RyYWNraW5nL2FzeW5jVHJhY2tpbmcuaHRtbFxuICogZm9yIGluZm9ybWF0aW9uIG9uIGhvdyB0byB1c2UgdGhlIGFzeW5jaHJvbm91cyB0cmFja2luZyBBUEkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFja0V2ZW50KGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsID0gXCJcIikge1xuICAgIGxldCBldmVudCA9IFsnX3RyYWNrRXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uXTtcbiAgICBpZiAobGFiZWwpIGV2ZW50LnB1c2gobGFiZWwpO1xuICAgIHdpbmRvdy5fZ2FxLnB1c2goZXZlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhY2tQYWdlKHBhdGgpIHtcbiAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3NldCcsICdwYWdlJywgcGF0aF0pO1xuICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfdHJhY2tQYWdldmlldyddKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IHsgaW5pdEFuYWx5dGljcyB9IGZyb20gXCIuL21vZGVsL0dBXCI7XG5pbXBvcnQgeyBpbml0QmFja2dyb3VuZFBhZ2UgfSBmcm9tIFwiLi9iYWNrZ3JvdW5kXCI7XG5cbi8vIGluaXRBbmFseXRpY3MoXCJVQS0xNjE0MDQ2MjctMVwiKTtcbmluaXRCYWNrZ3JvdW5kUGFnZSgpOyJdLCJuYW1lcyI6WyJ0cmFja0V2ZW50IiwidHJhY2tQYWdlIiwibWVkaWFTdHJlYW0iLCJpc1JlY29yZGluZyIsIm1lZGlhUmVjb3JkZXIiLCJyZWNvcmRlZEJsb2JzIiwiaW5pdEJhY2tncm91bmRQYWdlIiwiY2hyb21lIiwiYWN0aW9uIiwib25DbGlja2VkIiwiYWRkTGlzdGVuZXIiLCJ0YWIiLCJleGlzdGluZ0NvbnRleHRzIiwicnVudGltZSIsImdldENvbnRleHRzIiwicmVjb3JkaW5nIiwib2Zmc2NyZWVuRG9jdW1lbnQiLCJmaW5kIiwiYyIsImNvbnRleHRUeXBlIiwib2Zmc2NyZWVuIiwiY3JlYXRlRG9jdW1lbnQiLCJ1cmwiLCJyZWFzb25zIiwianVzdGlmaWNhdGlvbiIsImRvY3VtZW50VXJsIiwiZW5kc1dpdGgiLCJzY3JpcHRpbmciLCJleGVjdXRlU2NyaXB0IiwidGFyZ2V0IiwidGFiSWQiLCJpZCIsImZpbGVzIiwic3RvcmFnZSIsImxvY2FsIiwic2V0Iiwid2luZG93cyIsImdldEN1cnJlbnQiLCJwb3B1bGF0ZSIsIndpbiIsImdsb2JhbFRoaXMiLCJjaHJvbWVTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJvbk1lc3NhZ2UiLCJtc2ciLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInN0YXJ0UmVjb3JkaW5nIiwic3RvcFJlY29yZGluZyIsInJlc2l6ZVdpbmRvdyIsIm9wdGlvbnMiLCJ1cGRhdGUiLCJjaGFuZ2VJY29uIiwiY29sb3IiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzZXRJY29uIiwicGF0aCIsImdldFVSTCIsImRhdGEiLCJzdHJlYW1JZCIsInRhYkNhcHR1cmUiLCJnZXRNZWRpYVN0cmVhbUlkIiwidGFyZ2V0VGFiSWQiLCJtZXNzYWdlIiwiT2JqZWN0IiwiYXNzaWduIiwic2VuZE1lc3NhZ2UiLCJpbml0QW5hbHl0aWNzIiwiYW5hbHl0aWNzSUQiLCJ3aW5kb3ciLCJfZ2FxIiwicHVzaCIsImdhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXN5bmMiLCJzcmMiLCJzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiY2F0ZWdvcnkiLCJsYWJlbCIsImV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==