/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./js/model/GA.js
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
function trackEvent(category, action, label = "") {
    let event = ['_trackEvent', category, action];
    if (label) event.push(label);
    window._gaq.push(event);
}

function trackPage(path) {
    window._gaq.push(['_set', 'page', path]);
    window._gaq.push(['_trackPageview']);
}

// CONCATENATED MODULE: ./js/background.js

// let page = chrome.extension.getBackgroundPage();



let mediaStream;
let isRecording;
let mediaRecorder;
let recordedBlobs;

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    switch (msg.txt) {
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
            trackEvent(msg.category, msg.action, msg.label);
            break;
        case "scrollCaptureTrackPage":
            trackPage(msg.path);
            break;
    }
});

function initBackgroundPage() {
    chrome.browserAction.onClicked.addListener((tab) => {

        if (isRecording) stopRecording();

        chrome.tabs.executeScript({
            file: 'content.js'
        });

        window.tabId = tab.id;

        chrome.windows.getCurrent({ populate: false }, (win) => {
            window.chromeSize = {
                width: win.width - tab.width,
                height: win.height - tab.height
            };
        });

        // let msg = { txt: "scrollCaptureBrowserAction", tabId: tab.id};
        // chrome.tabs.sendMessage(tab.id, msg);
    });
}

function resizeWindow(width, height) {
    let options = { width: width + window.chromeSize.width, height: height + window.chromeSize.height };
    chrome.windows.getCurrent({ populate: false }, (win) => {
        chrome.windows.update(win.id, options);
    });
}

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
    chrome.tabs.get(window.tabId, _startTabCapture);
    // chrome.tabs.query({ active: true }, _startTabCapture);
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

    chrome.storage.local.get(["json"], _createMediaRecorder);
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
    // mediaRecorder.onstop = (event) => {
    //     console.log('Recorder stopped: ', event);
    //     console.log('Recorded Blobs: ', recordedBlobs);
    // };
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
}

// CONCATENATED MODULE: ./js/background-development.js



initAnalytics("UA-161404627-1");
initBackgroundPage();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbW9kZWwvR0EuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iYWNrZ3JvdW5kLWRldmVsb3BtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7QUN0Q0E7O0FBRW1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBLG1DQUFtQyxrQkFBa0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULHNCQUFzQjtBQUN0QjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQiwrQkFBK0Isa0JBQWtCO0FBQ2pEO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGVBQWU7QUFDekM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbUJBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQix1QkFBdUI7QUFDN0MsbUJBQW1CLHVCQUF1Qjs7QUFFMUM7QUFDQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyREFBMkQ7QUFDM0QsOERBQThEOztBQUU5RDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsK0RBQStELGtCQUFrQjtBQUNqRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMscUJBQXFCO0FBQ2xFOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM3TTJDO0FBQ087O0FBRWxELGFBQWE7QUFDYixrQkFBa0IsRyIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDEyIFRoZSBDaHJvbWl1bSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuLy8gZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cblxuIC8qKlxuICogQmVsb3cgaXMgYSBtb2RpZmllZCB2ZXJzaW9uIG9mIHRoZSBHb29nbGUgQW5hbHl0aWNzIGFzeW5jaHJvbm91cyB0cmFja2luZ1xuICogY29kZSBzbmlwcGV0LiAgSXQgaGFzIGJlZW4gbW9kaWZpZWQgdG8gcHVsbCB0aGUgSFRUUFMgdmVyc2lvbiBvZiBnYS5qc1xuICogaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBIVFRQIHZlcnNpb24uICBJdCBpcyByZWNvbW1lbmRlZCB0aGF0IHlvdSB1c2UgdGhpc1xuICogc25pcHBldCBpbnN0ZWFkIG9mIHRoZSBzdGFuZGFyZCB0cmFja2luZyBzbmlwcGV0IHByb3ZpZGVkIHdoZW4gc2V0dGluZyB1cFxuICogYSBHb29nbGUgQW5hbHl0aWNzIGFjY291bnQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRBbmFseXRpY3MoYW5hbHl0aWNzSUQpIHtcbiAgICB3aW5kb3cuX2dhcSA9IHdpbmRvdy5fZ2FxIHx8IFtdO1xuICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfc2V0QWNjb3VudCcsIGFuYWx5dGljc0lEXSk7XG4gICAgd2luZG93Ll9nYXEucHVzaChbJ190cmFja1BhZ2V2aWV3J10pO1xuXG4gICAgbGV0IGdhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgZ2EudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIGdhLmFzeW5jID0gdHJ1ZTtcbiAgICBnYS5zcmMgPSAnaHR0cHM6Ly9zc2wuZ29vZ2xlLWFuYWx5dGljcy5jb20vZ2EuanMnO1xuICAgIGxldCBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZ2EsIHMpO1xuIH1cblxuLyoqXG4gKiBUcmFjayBhIGNsaWNrIG9uIGEgYnV0dG9uIHVzaW5nIHRoZSBhc3luY2hyb25vdXMgdHJhY2tpbmcgQVBJLlxuICogU2VlIGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vYXBpcy9hbmFseXRpY3MvZG9jcy90cmFja2luZy9hc3luY1RyYWNraW5nLmh0bWxcbiAqIGZvciBpbmZvcm1hdGlvbiBvbiBob3cgdG8gdXNlIHRoZSBhc3luY2hyb25vdXMgdHJhY2tpbmcgQVBJLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhY2tFdmVudChjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCA9IFwiXCIpIHtcbiAgICBsZXQgZXZlbnQgPSBbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbl07XG4gICAgaWYgKGxhYmVsKSBldmVudC5wdXNoKGxhYmVsKTtcbiAgICB3aW5kb3cuX2dhcS5wdXNoKGV2ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYWNrUGFnZShwYXRoKSB7XG4gICAgd2luZG93Ll9nYXEucHVzaChbJ19zZXQnLCAncGFnZScsIHBhdGhdKTtcbiAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3RyYWNrUGFnZXZpZXcnXSk7XG59XG4iLCJcbi8vIGxldCBwYWdlID0gY2hyb21lLmV4dGVuc2lvbi5nZXRCYWNrZ3JvdW5kUGFnZSgpO1xuXG5pbXBvcnQgeyB0cmFja0V2ZW50LCB0cmFja1BhZ2UgfSBmcm9tIFwiLi9tb2RlbC9HQVwiO1xuXG5sZXQgbWVkaWFTdHJlYW07XG5sZXQgaXNSZWNvcmRpbmc7XG5sZXQgbWVkaWFSZWNvcmRlcjtcbmxldCByZWNvcmRlZEJsb2JzO1xuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1zZywgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBzd2l0Y2ggKG1zZy50eHQpIHtcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVTdGFydFJlY29yZGluZ1wiOlxuICAgICAgICAgICAgc3RhcnRSZWNvcmRpbmcobXNnLnRhYklkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZVN0b3BSZWNvcmRpbmdcIjpcbiAgICAgICAgICAgIHN0b3BSZWNvcmRpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZVJlc2l6ZVdpbmRvd1wiOlxuICAgICAgICAgICAgcmVzaXplV2luZG93KG1zZy53aWR0aCwgbXNnLmhlaWdodCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVUcmFja0V2ZW50XCI6XG4gICAgICAgICAgICB0cmFja0V2ZW50KG1zZy5jYXRlZ29yeSwgbXNnLmFjdGlvbiwgbXNnLmxhYmVsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZVRyYWNrUGFnZVwiOlxuICAgICAgICAgICAgdHJhY2tQYWdlKG1zZy5wYXRoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEJhY2tncm91bmRQYWdlKCkge1xuICAgIGNocm9tZS5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcigodGFiKSA9PiB7XG5cbiAgICAgICAgaWYgKGlzUmVjb3JkaW5nKSBzdG9wUmVjb3JkaW5nKCk7XG5cbiAgICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgICAgICBmaWxlOiAnY29udGVudC5qcydcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LnRhYklkID0gdGFiLmlkO1xuXG4gICAgICAgIGNocm9tZS53aW5kb3dzLmdldEN1cnJlbnQoeyBwb3B1bGF0ZTogZmFsc2UgfSwgKHdpbikgPT4ge1xuICAgICAgICAgICAgd2luZG93LmNocm9tZVNpemUgPSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpbi53aWR0aCAtIHRhYi53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpbi5oZWlnaHQgLSB0YWIuaGVpZ2h0XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBsZXQgbXNnID0geyB0eHQ6IFwic2Nyb2xsQ2FwdHVyZUJyb3dzZXJBY3Rpb25cIiwgdGFiSWQ6IHRhYi5pZH07XG4gICAgICAgIC8vIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzaXplV2luZG93KHdpZHRoLCBoZWlnaHQpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHsgd2lkdGg6IHdpZHRoICsgd2luZG93LmNocm9tZVNpemUud2lkdGgsIGhlaWdodDogaGVpZ2h0ICsgd2luZG93LmNocm9tZVNpemUuaGVpZ2h0IH07XG4gICAgY2hyb21lLndpbmRvd3MuZ2V0Q3VycmVudCh7IHBvcHVsYXRlOiBmYWxzZSB9LCAod2luKSA9PiB7XG4gICAgICAgIGNocm9tZS53aW5kb3dzLnVwZGF0ZSh3aW4uaWQsIG9wdGlvbnMpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEYXRhQXZhaWxhYmxlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmRhdGEgJiYgZXZlbnQuZGF0YS5zaXplID4gMCkge1xuICAgICAgICByZWNvcmRlZEJsb2JzLnB1c2goZXZlbnQuZGF0YSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VJY29uKGNvbG9yID0gXCJcIikge1xuICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEljb24oe1xuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICAnMTYnOiBjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTChcImFzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQxNlwiICsgY29sb3IgKyBcIi5wbmdcIiksXG4gICAgICAgICAgICAnMzInOiBjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTChcImFzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQzMlwiICsgY29sb3IgKyBcIi5wbmdcIiksXG4gICAgICAgICAgICAnNDgnOiBjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTChcImFzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQ0OFwiICsgY29sb3IgKyBcIi5wbmdcIiksXG4gICAgICAgICAgICAnMTI4JzogY2hyb21lLmV4dGVuc2lvbi5nZXRVUkwoXCJhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkMTI4XCIgKyBjb2xvciArIFwiLnBuZ1wiKSxcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbmZ1bmN0aW9uIHN0YXJ0UmVjb3JkaW5nKCkge1xuICAgIGNoYW5nZUljb24oXCJfcmVkXCIpO1xuICAgIGNocm9tZS50YWJzLmdldCh3aW5kb3cudGFiSWQsIF9zdGFydFRhYkNhcHR1cmUpO1xuICAgIC8vIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0sIF9zdGFydFRhYkNhcHR1cmUpO1xufVxuXG5mdW5jdGlvbiBfc3RhcnRUYWJDYXB0dXJlKHRhYikge1xuICAgIGlzUmVjb3JkaW5nID0gdHJ1ZTtcblxuICAgIC8vIE5vdGU6IHRoaXMgbWV0aG9kIG11c3QgYmUgaW52b2tlZCBieSB0aGUgdXNlciBhcyBkZWZpbmVkXG4gICAgLy8gaW4gaHR0cHM6Ly9jcmJ1Zy5jb20vNDg5MjU4LCBlLmcuIGNocm9tZS5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5cblxuICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0U3VwcG9ydGVkQ29uc3RyYWludHNcIiwgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRTdXBwb3J0ZWRDb25zdHJhaW50cygpKTtcblxuICAgIGxldCBjYXB0dXJlT3B0aW9ucyA9IHtcbiAgICAgICAgYXVkaW86IHRydWUsXG4gICAgICAgIHZpZGVvOiB0cnVlLFxuICAgICAgICBhdWRpb0NvbnN0cmFpbnRzOiB7XG4gICAgICAgICAgICBtYW5kYXRvcnk6IHtcbiAgICAgICAgICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZTogJ3RhYicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB2aWRlb0NvbnN0cmFpbnRzOiB7XG4gICAgICAgICAgICBtYW5kYXRvcnk6IHtcbiAgICAgICAgICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZTogJ3RhYicsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IHRhYi53aWR0aCxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogdGFiLndpZHRoLFxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogdGFiLmhlaWdodCxcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IHRhYi5oZWlnaHQsXG4gICAgICAgICAgICAgICAgbWluRnJhbWVSYXRlOiAzMCxcbiAgICAgICAgICAgICAgICBtYXhGcmFtZVJhdGU6IDYwXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH07XG4gICAgY2hyb21lLnRhYkNhcHR1cmUuY2FwdHVyZShjYXB0dXJlT3B0aW9ucywgX3NldFN0cmVhbSk7XG59XG5cbmZ1bmN0aW9uIF9zZXRTdHJlYW0oc3RyZWFtKSB7XG4gICAgaWYoc3RyZWFtKSB7XG4gICAgICAgIG1lZGlhU3RyZWFtID0gc3RyZWFtO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdTdHJlYW0gY3JlYXRpb24gZmFpbGVkOiAnICsgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8vIGxldCB0cmFja3MgPSBtZWRpYVN0cmVhbS5nZXRUcmFja3MoKTtcbiAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IHRyYWNrcy5sZW5ndGg7ICsraSkge1xuICAgIC8vICAgICBsZXQgdHJhY2sgPSB0cmFja3NbaV07XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiLS0tLSB0cmFja1wiLCB0cmFjayk7XG4gICAgLy8gICAgIGZvciAobGV0IGogaW4gdHJhY2spIGNvbnNvbGUubG9nKGosIFwiPVwiLCB0cmFja1tqXSk7XG4gICAgLy8gICAgIGxldCBzZXR0aW5ncyA9IHRyYWNrLmdldFNldHRpbmdzKCk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiLS0tLS0gc2V0dGluZ3NcIik7XG4gICAgLy8gICAgIGZvciAobGV0IGsgaW4gc2V0dGluZ3MpIGNvbnNvbGUubG9nKGssIFwiPVwiLCBzZXR0aW5nc1trXSk7XG4gICAgLy8gfVxuICAgIFxuICAgIHJlY29yZGVkQmxvYnMgPSBbXTtcblxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJqc29uXCJdLCBfY3JlYXRlTWVkaWFSZWNvcmRlcik7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVNZWRpYVJlY29yZGVyKHJlc3VsdCkge1xuICAgXG4gICAgbGV0IHZpZGVvQ29kZWMgPSBcInZwOFwiO1xuICAgIGxldCBhdWRpb0NvZGVjID0gXCJvcHVzXCI7XG4gICAgbGV0IHZpZGVvQml0c1BlclNlY29uZCA9IDg7XG4gICAgbGV0IGF1ZGlvQml0c1BlclNlY29uZCA9IDEyODtcblxuICAgIGlmIChyZXN1bHQuanNvbikge1xuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UocmVzdWx0Lmpzb24pO1xuICAgICAgICBpZiAoZGF0YS5zZXR0aW5ncykge1xuICAgICAgICAgICAgdmlkZW9Db2RlYyA9IGRhdGEuc2V0dGluZ3MudmlkZW9Db2RlYyB8fCB2aWRlb0NvZGVjO1xuICAgICAgICAgICAgYXVkaW9Db2RlYyA9IGRhdGEuc2V0dGluZ3MuYXVkaW9Db2RlYyB8fCBhdWRpb0NvZGVjO1xuICAgICAgICAgICAgYXVkaW9CaXRzUGVyU2Vjb25kID0gZGF0YS5zZXR0aW5ncy5hdWRpb0JpdHNQZXJTZWNvbmQgfHwgYXVkaW9CaXRzUGVyU2Vjb25kO1xuICAgICAgICAgICAgdmlkZW9CaXRzUGVyU2Vjb25kID0gZGF0YS5zZXR0aW5ncy52aWRlb0JpdHNQZXJTZWNvbmQgfHwgdmlkZW9CaXRzUGVyU2Vjb25kO1xuICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsZXQgb3B0aW9ucyA9IHsgbWltZVR5cGU6IFwidmlkZW8vd2VibTtjb2RlY3M9aDI2NFwiIH07XG4gICAgbGV0IG9wdGlvbnMgPSB7IG1pbWVUeXBlOiAndmlkZW8vd2VibTtjb2RlY3M9JyArIHZpZGVvQ29kZWMgKyBcIixcIiArIGF1ZGlvQ29kZWN9O1xuXG4gICAgaWYgKCFNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZChvcHRpb25zLm1pbWVUeXBlKSkge1xuICAgICAgICBvcHRpb25zID0geyBtaW1lVHlwZTogJ3ZpZGVvL3dlYm07Y29kZWNzPXZwOScgfTtcbiAgICAgICAgaWYgKCFNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZChvcHRpb25zLm1pbWVUeXBlKSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHsgbWltZVR5cGU6ICd2aWRlby93ZWJtO2NvZGVjcz12cDgnIH07XG4gICAgICAgICAgICBpZiAoIU1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkKG9wdGlvbnMubWltZVR5cGUpKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHsgbWltZVR5cGU6ICd2aWRlby93ZWJtJyB9O1xuICAgICAgICAgICAgICAgIGlmICghTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQob3B0aW9ucy5taW1lVHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHsgbWltZVR5cGU6ICcnIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9ucy5hdWRpb0JpdHNQZXJTZWNvbmQgPSBhdWRpb0JpdHNQZXJTZWNvbmQgKiAxMDAwOyAvLyAxMjggS2JpdC9zZWNcbiAgICBvcHRpb25zLnZpZGVvQml0c1BlclNlY29uZCA9IHZpZGVvQml0c1BlclNlY29uZCAqIDEwMDAwMDA7IC8vIDggTWJpdC9zZWNcblxuICAgIHRyeSB7XG4gICAgICAgIG1lZGlhUmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihtZWRpYVN0cmVhbSwgb3B0aW9ucyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFeGNlcHRpb24gd2hpbGUgY3JlYXRpbmcgTWVkaWFSZWNvcmRlcjonLCBlKTtcbiAgICAgICAgY29uc29sZS5sb2coYEV4Y2VwdGlvbiB3aGlsZSBjcmVhdGluZyBNZWRpYVJlY29yZGVyOiAke0pTT04uc3RyaW5naWZ5KGUpfWApO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coJ0NyZWF0ZWQgTWVkaWFSZWNvcmRlcicsIG1lZGlhUmVjb3JkZXIsICd3aXRoIG9wdGlvbnMnLCBvcHRpb25zKTtcbiAgICAvLyBtZWRpYVJlY29yZGVyLm9uc3RvcCA9IChldmVudCkgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnUmVjb3JkZXIgc3RvcHBlZDogJywgZXZlbnQpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnUmVjb3JkZWQgQmxvYnM6ICcsIHJlY29yZGVkQmxvYnMpO1xuICAgIC8vIH07XG4gICAgbWVkaWFSZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSBoYW5kbGVEYXRhQXZhaWxhYmxlO1xuICAgIG1lZGlhUmVjb3JkZXIuc3RhcnQoMTApOyAvLyBjb2xsZWN0IDEwbXMgb2YgZGF0YVxufVxuXG5mdW5jdGlvbiBzdG9wUmVjb3JkaW5nKCkge1xuICAgIGNoYW5nZUljb24oKTtcbiAgICBpZiAobWVkaWFSZWNvcmRlcikgbWVkaWFSZWNvcmRlci5zdG9wKCk7XG4gICAgbGV0IHZpZGVvQmxvYiA9IG5ldyBCbG9iKHJlY29yZGVkQmxvYnMsIHsgdHlwZTogJ3ZpZGVvL3dlYm0nIH0pO1xuICAgIHdpbmRvdy52aWRlb1VSTCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHZpZGVvQmxvYik7XG5cbiAgICBpZiAobWVkaWFTdHJlYW0pIHtcbiAgICAgICAgbGV0IHRyYWNrcyA9IG1lZGlhU3RyZWFtLmdldFRyYWNrcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyYWNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdHJhY2tzW2ldLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtZWRpYVJlY29yZGVyID0gbnVsbDtcbiAgICBtZWRpYVN0cmVhbSA9IG51bGw7XG4gICAgaXNSZWNvcmRpbmcgPSBmYWxzZTtcbn1cbiIsImltcG9ydCB7IGluaXRBbmFseXRpY3MgfSBmcm9tIFwiLi9tb2RlbC9HQVwiO1xuaW1wb3J0IHsgaW5pdEJhY2tncm91bmRQYWdlIH0gZnJvbSBcIi4vYmFja2dyb3VuZFwiO1xuXG5pbml0QW5hbHl0aWNzKFwiVUEtMTYxNDA0NjI3LTFcIik7XG5pbml0QmFja2dyb3VuZFBhZ2UoKTsiXSwic291cmNlUm9vdCI6IiJ9