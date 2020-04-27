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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./js/view/GA.js
// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Add your Analytics tracking ID here.
 */
// dev
// let _analyticsID = 'UA-161404627-1';
// prod
var _analyticsID = 'UA-161404627-2';
/**
 * Below is a modified version of the Google Analytics asynchronous tracking
 * code snippet.  It has been modified to pull the HTTPS version of ga.js
 * instead of the default HTTP version.  It is recommended that you use this
 * snippet instead of the standard tracking snippet provided when setting up
 * a Google Analytics account.
 */

window._gaq = window._gaq || [];

window._gaq.push(['_setAccount', _analyticsID]);

window._gaq.push(['_trackPageview']);

var ga = document.createElement('script');
ga.type = 'text/javascript';
ga.async = true;
ga.src = 'https://ssl.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(ga, s);
/**
 * Track a click on a button using the asynchronous tracking API.
 * See http://code.google.com/apis/analytics/docs/tracking/asyncTracking.html
 * for information on how to use the asynchronous tracking API.
 */

function trackEvent(category, action) {
  var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var event = ['_trackEvent', category, action];
  if (label) event.push(label);

  window._gaq.push(event);
}
function trackPage(path) {
  window._gaq.push(['_set', 'page', path]);

  window._gaq.push(['_trackPageview']);
}
// CONCATENATED MODULE: ./js/background.js
// let page = chrome.extension.getBackgroundPage();

var mediaStream;
var isRecording;
var mediaRecorder;
var recordedBlobs;
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  switch (msg.txt) {
    case "scrollCaptureStartRecording":
      startRecording(msg.tabId);
      break;

    case "scrollCaptureStopRecording":
      stopRecording();
      break;

    case "scrollCaptureTrackEvent":
      trackEvent(msg.category, msg.action, msg.label);
      break;

    case "scrollCaptureTrackPage":
      trackPage(msg.path);
      break;
  }
});
chrome.browserAction.onClicked.addListener(function (tab) {
  if (isRecording) stopRecording();
  chrome.tabs.executeScript({
    file: 'content.js'
  });
  window.tabId = tab.id; // let msg = { txt: "scrollCaptureBrowserAction", tabId: tab.id};
  // chrome.tabs.sendMessage(tab.id, msg);
});

function handleDataAvailable(event) {
  if (event.data && event.data.size > 0) {
    recordedBlobs.push(event.data);
  }
}

function changeIcon() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  chrome.browserAction.setIcon({
    path: {
      '16': chrome.extension.getURL("assets/images/get_started16" + color + ".png"),
      '32': chrome.extension.getURL("assets/images/get_started32" + color + ".png"),
      '48': chrome.extension.getURL("assets/images/get_started48" + color + ".png"),
      '128': chrome.extension.getURL("assets/images/get_started128" + color + ".png")
    }
  });
}

function startRecording() {
  changeIcon("_red");
  chrome.tabs.get(window.tabId, _startTabCapture); // chrome.tabs.query({ active: true }, _startTabCapture);
}

function _startTabCapture(tab) {
  isRecording = true; // Note: this method must be invoked by the user as defined
  // in https://crbug.com/489258, e.g. chrome.browserAction.onClicked.
  // console.log("getSupportedConstraints", navigator.mediaDevices.getSupportedConstraints());

  var captureOptions = {
    audio: true,
    video: true,
    audioConstraints: {
      mandatory: {
        chromeMediaSource: 'tab'
      }
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
      }
    }
  };
  chrome.tabCapture.capture(captureOptions, _setStream);
}

function _setStream(stream) {
  if (stream) {
    mediaStream = stream;
  } else {
    alert('Stream creation failed: ' + chrome.runtime.lastError.message);
  } // let tracks = mediaStream.getTracks();
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
  var videoCodec = "vp8";
  var audioCodec = "opus";
  var videoBitsPerSecond = 8;
  var audioBitsPerSecond = 128;

  if (result.json) {
    var data = JSON.parse(result.json);

    if (data.settings) {
      videoCodec = data.settings.videoCodec || videoCodec;
      audioCodec = data.settings.audioCodec || audioCodec;
      audioBitsPerSecond = data.settings.audioBitsPerSecond || audioBitsPerSecond;
      videoBitsPerSecond = data.settings.videoBitsPerSecond || videoBitsPerSecond;
    }
  } // let options = { mimeType: "video/webm;codecs=h264" };


  var options = {
    mimeType: 'video/webm;codecs=' + videoCodec + "," + audioCodec
  };

  if (!MediaRecorder.isTypeSupported(options.mimeType)) {
    options = {
      mimeType: 'video/webm;codecs=vp9'
    };

    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
      options = {
        mimeType: 'video/webm;codecs=vp8'
      };

      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        options = {
          mimeType: 'video/webm'
        };

        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
          options = {
            mimeType: ''
          };
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
    console.log("Exception while creating MediaRecorder: ".concat(JSON.stringify(e)));
    return;
  } // console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
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
  var videoBlob = new Blob(recordedBlobs, {
    type: 'video/webm'
  });
  window.videoURL = window.URL.createObjectURL(videoBlob);

  if (mediaStream) {
    var tracks = mediaStream.getTracks();

    for (var i = 0; i < tracks.length; ++i) {
      tracks[i].stop();
    }
  }

  mediaRecorder = null;
  mediaStream = null;
  isRecording = false;
}

/***/ })

/******/ });