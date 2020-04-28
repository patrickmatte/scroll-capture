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
* Below is a modified version of the Google Analytics asynchronous tracking
* code snippet.  It has been modified to pull the HTTPS version of ga.js
* instead of the default HTTP version.  It is recommended that you use this
* snippet instead of the standard tracking snippet provided when setting up
* a Google Analytics account.
*/
function initAnalytics(analyticsID) {
  console.log("initAnalytics", analyticsID);
  window._gaq = window._gaq || [];

  window._gaq.push(['_setAccount', analyticsID]);

  window._gaq.push(['_trackPageview']);

  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
}
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
function initBackgroundPage() {
  chrome.browserAction.onClicked.addListener(function (tab) {
    if (isRecording) stopRecording();
    chrome.tabs.executeScript({
      file: 'content.js'
    });
    window.tabId = tab.id; // let msg = { txt: "scrollCaptureBrowserAction", tabId: tab.id};
    // chrome.tabs.sendMessage(tab.id, msg);
  });
}

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
// CONCATENATED MODULE: ./js/background-development.js


initAnalytics("UA-161404627-1");
initBackgroundPage();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvdmlldy9HQS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL2pzL2JhY2tncm91bmQtZGV2ZWxvcG1lbnQuanMiXSwibmFtZXMiOlsiaW5pdEFuYWx5dGljcyIsImFuYWx5dGljc0lEIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsIl9nYXEiLCJwdXNoIiwiZ2EiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiYXN5bmMiLCJzcmMiLCJzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwidHJhY2tFdmVudCIsImNhdGVnb3J5IiwiYWN0aW9uIiwibGFiZWwiLCJldmVudCIsInRyYWNrUGFnZSIsInBhdGgiLCJtZWRpYVN0cmVhbSIsImlzUmVjb3JkaW5nIiwibWVkaWFSZWNvcmRlciIsInJlY29yZGVkQmxvYnMiLCJjaHJvbWUiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJtc2ciLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJ0eHQiLCJzdGFydFJlY29yZGluZyIsInRhYklkIiwic3RvcFJlY29yZGluZyIsImluaXRCYWNrZ3JvdW5kUGFnZSIsImJyb3dzZXJBY3Rpb24iLCJvbkNsaWNrZWQiLCJ0YWIiLCJ0YWJzIiwiZXhlY3V0ZVNjcmlwdCIsImZpbGUiLCJpZCIsImhhbmRsZURhdGFBdmFpbGFibGUiLCJkYXRhIiwic2l6ZSIsImNoYW5nZUljb24iLCJjb2xvciIsInNldEljb24iLCJleHRlbnNpb24iLCJnZXRVUkwiLCJnZXQiLCJfc3RhcnRUYWJDYXB0dXJlIiwiY2FwdHVyZU9wdGlvbnMiLCJhdWRpbyIsInZpZGVvIiwiYXVkaW9Db25zdHJhaW50cyIsIm1hbmRhdG9yeSIsImNocm9tZU1lZGlhU291cmNlIiwidmlkZW9Db25zdHJhaW50cyIsIm1pbldpZHRoIiwid2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsImhlaWdodCIsIm1heEhlaWdodCIsIm1pbkZyYW1lUmF0ZSIsIm1heEZyYW1lUmF0ZSIsInRhYkNhcHR1cmUiLCJjYXB0dXJlIiwiX3NldFN0cmVhbSIsInN0cmVhbSIsImFsZXJ0IiwibGFzdEVycm9yIiwibWVzc2FnZSIsInN0b3JhZ2UiLCJsb2NhbCIsIl9jcmVhdGVNZWRpYVJlY29yZGVyIiwicmVzdWx0IiwidmlkZW9Db2RlYyIsImF1ZGlvQ29kZWMiLCJ2aWRlb0JpdHNQZXJTZWNvbmQiLCJhdWRpb0JpdHNQZXJTZWNvbmQiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwic2V0dGluZ3MiLCJvcHRpb25zIiwibWltZVR5cGUiLCJNZWRpYVJlY29yZGVyIiwiaXNUeXBlU3VwcG9ydGVkIiwiZSIsImVycm9yIiwic3RyaW5naWZ5Iiwib25kYXRhYXZhaWxhYmxlIiwic3RhcnQiLCJzdG9wIiwidmlkZW9CbG9iIiwiQmxvYiIsInZpZGVvVVJMIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwidHJhY2tzIiwiZ2V0VHJhY2tzIiwiaSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNB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aUI7QUFDYixRQUFJa0YsTUFBTSxHQUFHbEYsV0FBVyxDQUFDbUYsU0FBWixFQUFiOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsTUFBTSxDQUFDRyxNQUEzQixFQUFtQyxFQUFFRCxDQUFyQyxFQUF3QztBQUNwQ0YsWUFBTSxDQUFDRSxDQUFELENBQU4sQ0FBVVIsSUFBVjtBQUNIO0FBQ0o7O0FBQ0QxRSxlQUFhLEdBQUcsSUFBaEI7QUFDQUYsYUFBVyxHQUFHLElBQWQ7QUFDQUMsYUFBVyxHQUFHLEtBQWQ7QUFDSCxDOztBQzNMRDtBQUNBO0FBRUF6QixhQUFhLENBQUMsZ0JBQUQsQ0FBYjtBQUNBdUMsa0JBQWtCLEciLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxMiBUaGUgQ2hyb21pdW0gQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbi8vIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXG5cbiAvKipcbiAqIEJlbG93IGlzIGEgbW9kaWZpZWQgdmVyc2lvbiBvZiB0aGUgR29vZ2xlIEFuYWx5dGljcyBhc3luY2hyb25vdXMgdHJhY2tpbmdcbiAqIGNvZGUgc25pcHBldC4gIEl0IGhhcyBiZWVuIG1vZGlmaWVkIHRvIHB1bGwgdGhlIEhUVFBTIHZlcnNpb24gb2YgZ2EuanNcbiAqIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgSFRUUCB2ZXJzaW9uLiAgSXQgaXMgcmVjb21tZW5kZWQgdGhhdCB5b3UgdXNlIHRoaXNcbiAqIHNuaXBwZXQgaW5zdGVhZCBvZiB0aGUgc3RhbmRhcmQgdHJhY2tpbmcgc25pcHBldCBwcm92aWRlZCB3aGVuIHNldHRpbmcgdXBcbiAqIGEgR29vZ2xlIEFuYWx5dGljcyBhY2NvdW50LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QW5hbHl0aWNzKGFuYWx5dGljc0lEKSB7XG4gICAgY29uc29sZS5sb2coXCJpbml0QW5hbHl0aWNzXCIsIGFuYWx5dGljc0lEKTtcbiAgICB3aW5kb3cuX2dhcSA9IHdpbmRvdy5fZ2FxIHx8IFtdO1xuICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfc2V0QWNjb3VudCcsIGFuYWx5dGljc0lEXSk7XG4gICAgd2luZG93Ll9nYXEucHVzaChbJ190cmFja1BhZ2V2aWV3J10pO1xuXG4gICAgbGV0IGdhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgZ2EudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIGdhLmFzeW5jID0gdHJ1ZTtcbiAgICBnYS5zcmMgPSAnaHR0cHM6Ly9zc2wuZ29vZ2xlLWFuYWx5dGljcy5jb20vZ2EuanMnO1xuICAgIGxldCBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZ2EsIHMpO1xuIH1cblxuLyoqXG4gKiBUcmFjayBhIGNsaWNrIG9uIGEgYnV0dG9uIHVzaW5nIHRoZSBhc3luY2hyb25vdXMgdHJhY2tpbmcgQVBJLlxuICogU2VlIGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vYXBpcy9hbmFseXRpY3MvZG9jcy90cmFja2luZy9hc3luY1RyYWNraW5nLmh0bWxcbiAqIGZvciBpbmZvcm1hdGlvbiBvbiBob3cgdG8gdXNlIHRoZSBhc3luY2hyb25vdXMgdHJhY2tpbmcgQVBJLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhY2tFdmVudChjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCA9IFwiXCIpIHtcbiAgICBsZXQgZXZlbnQgPSBbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbl07XG4gICAgaWYgKGxhYmVsKSBldmVudC5wdXNoKGxhYmVsKTtcbiAgICB3aW5kb3cuX2dhcS5wdXNoKGV2ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYWNrUGFnZShwYXRoKSB7XG4gICAgd2luZG93Ll9nYXEucHVzaChbJ19zZXQnLCAncGFnZScsIHBhdGhdKTtcbiAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3RyYWNrUGFnZXZpZXcnXSk7XG59XG4iLCJcbi8vIGxldCBwYWdlID0gY2hyb21lLmV4dGVuc2lvbi5nZXRCYWNrZ3JvdW5kUGFnZSgpO1xuXG5pbXBvcnQgeyB0cmFja0V2ZW50LCB0cmFja1BhZ2UgfSBmcm9tIFwiLi92aWV3L0dBXCI7XG5cbmxldCBtZWRpYVN0cmVhbTtcbmxldCBpc1JlY29yZGluZztcbmxldCBtZWRpYVJlY29yZGVyO1xubGV0IHJlY29yZGVkQmxvYnM7XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobXNnLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIHN3aXRjaCAobXNnLnR4dCkge1xuICAgICAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZVN0YXJ0UmVjb3JkaW5nXCI6XG4gICAgICAgICAgICBzdGFydFJlY29yZGluZyhtc2cudGFiSWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzY3JvbGxDYXB0dXJlU3RvcFJlY29yZGluZ1wiOlxuICAgICAgICAgICAgc3RvcFJlY29yZGluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzY3JvbGxDYXB0dXJlVHJhY2tFdmVudFwiOlxuICAgICAgICAgICAgdHJhY2tFdmVudChtc2cuY2F0ZWdvcnksIG1zZy5hY3Rpb24sIG1zZy5sYWJlbCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVUcmFja1BhZ2VcIjpcbiAgICAgICAgICAgIHRyYWNrUGFnZShtc2cucGF0aCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCYWNrZ3JvdW5kUGFnZSgpIHtcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoKHRhYikgPT4ge1xuICAgICAgICBpZiAoaXNSZWNvcmRpbmcpIHN0b3BSZWNvcmRpbmcoKTtcblxuICAgICAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgICAgIGZpbGU6ICdjb250ZW50LmpzJ1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cudGFiSWQgPSB0YWIuaWQ7XG5cbiAgICAgICAgLy8gbGV0IG1zZyA9IHsgdHh0OiBcInNjcm9sbENhcHR1cmVCcm93c2VyQWN0aW9uXCIsIHRhYklkOiB0YWIuaWR9O1xuICAgICAgICAvLyBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURhdGFBdmFpbGFibGUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZGF0YSAmJiBldmVudC5kYXRhLnNpemUgPiAwKSB7XG4gICAgICAgIHJlY29yZGVkQmxvYnMucHVzaChldmVudC5kYXRhKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUljb24oY29sb3IgPSBcIlwiKSB7XG4gICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0SWNvbih7XG4gICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgICcxNic6IGNocm9tZS5leHRlbnNpb24uZ2V0VVJMKFwiYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDE2XCIgKyBjb2xvciArIFwiLnBuZ1wiKSxcbiAgICAgICAgICAgICczMic6IGNocm9tZS5leHRlbnNpb24uZ2V0VVJMKFwiYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDMyXCIgKyBjb2xvciArIFwiLnBuZ1wiKSxcbiAgICAgICAgICAgICc0OCc6IGNocm9tZS5leHRlbnNpb24uZ2V0VVJMKFwiYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDQ4XCIgKyBjb2xvciArIFwiLnBuZ1wiKSxcbiAgICAgICAgICAgICcxMjgnOiBjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTChcImFzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQxMjhcIiArIGNvbG9yICsgXCIucG5nXCIpLFxuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuZnVuY3Rpb24gc3RhcnRSZWNvcmRpbmcoKSB7XG4gICAgY2hhbmdlSWNvbihcIl9yZWRcIik7XG4gICAgY2hyb21lLnRhYnMuZ2V0KHdpbmRvdy50YWJJZCwgX3N0YXJ0VGFiQ2FwdHVyZSk7XG4gICAgLy8gY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSwgX3N0YXJ0VGFiQ2FwdHVyZSk7XG59XG5cbmZ1bmN0aW9uIF9zdGFydFRhYkNhcHR1cmUodGFiKSB7XG4gICAgaXNSZWNvcmRpbmcgPSB0cnVlO1xuXG4gICAgLy8gTm90ZTogdGhpcyBtZXRob2QgbXVzdCBiZSBpbnZva2VkIGJ5IHRoZSB1c2VyIGFzIGRlZmluZWRcbiAgICAvLyBpbiBodHRwczovL2NyYnVnLmNvbS80ODkyNTgsIGUuZy4gY2hyb21lLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLlxuXG4gICAgLy8gY29uc29sZS5sb2coXCJnZXRTdXBwb3J0ZWRDb25zdHJhaW50c1wiLCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFN1cHBvcnRlZENvbnN0cmFpbnRzKCkpO1xuXG4gICAgbGV0IGNhcHR1cmVPcHRpb25zID0ge1xuICAgICAgICBhdWRpbzogdHJ1ZSxcbiAgICAgICAgdmlkZW86IHRydWUsXG4gICAgICAgIGF1ZGlvQ29uc3RyYWludHM6IHtcbiAgICAgICAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICAgICAgICAgIGNocm9tZU1lZGlhU291cmNlOiAndGFiJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHZpZGVvQ29uc3RyYWludHM6IHtcbiAgICAgICAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICAgICAgICAgIGNocm9tZU1lZGlhU291cmNlOiAndGFiJyxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogdGFiLndpZHRoLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiB0YWIud2lkdGgsXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiB0YWIuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogdGFiLmhlaWdodCxcbiAgICAgICAgICAgICAgICBtaW5GcmFtZVJhdGU6IDMwLFxuICAgICAgICAgICAgICAgIG1heEZyYW1lUmF0ZTogNjBcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBjaHJvbWUudGFiQ2FwdHVyZS5jYXB0dXJlKGNhcHR1cmVPcHRpb25zLCBfc2V0U3RyZWFtKTtcbn1cblxuZnVuY3Rpb24gX3NldFN0cmVhbShzdHJlYW0pIHtcbiAgICBpZihzdHJlYW0pIHtcbiAgICAgICAgbWVkaWFTdHJlYW0gPSBzdHJlYW07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ1N0cmVhbSBjcmVhdGlvbiBmYWlsZWQ6ICcgKyBjaHJvbWUucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLy8gbGV0IHRyYWNrcyA9IG1lZGlhU3RyZWFtLmdldFRyYWNrcygpO1xuICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgdHJhY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gICAgIGxldCB0cmFjayA9IHRyYWNrc1tpXTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCItLS0tIHRyYWNrXCIsIHRyYWNrKTtcbiAgICAvLyAgICAgZm9yIChsZXQgaiBpbiB0cmFjaykgY29uc29sZS5sb2coaiwgXCI9XCIsIHRyYWNrW2pdKTtcbiAgICAvLyAgICAgbGV0IHNldHRpbmdzID0gdHJhY2suZ2V0U2V0dGluZ3MoKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCItLS0tLSBzZXR0aW5nc1wiKTtcbiAgICAvLyAgICAgZm9yIChsZXQgayBpbiBzZXR0aW5ncykgY29uc29sZS5sb2coaywgXCI9XCIsIHNldHRpbmdzW2tdKTtcbiAgICAvLyB9XG4gICAgXG4gICAgcmVjb3JkZWRCbG9icyA9IFtdO1xuXG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcImpzb25cIl0sIF9jcmVhdGVNZWRpYVJlY29yZGVyKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZU1lZGlhUmVjb3JkZXIocmVzdWx0KSB7XG4gICBcbiAgICBsZXQgdmlkZW9Db2RlYyA9IFwidnA4XCI7XG4gICAgbGV0IGF1ZGlvQ29kZWMgPSBcIm9wdXNcIjtcbiAgICBsZXQgdmlkZW9CaXRzUGVyU2Vjb25kID0gODtcbiAgICBsZXQgYXVkaW9CaXRzUGVyU2Vjb25kID0gMTI4O1xuXG4gICAgaWYgKHJlc3VsdC5qc29uKSB7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShyZXN1bHQuanNvbik7XG4gICAgICAgIGlmIChkYXRhLnNldHRpbmdzKSB7XG4gICAgICAgICAgICB2aWRlb0NvZGVjID0gZGF0YS5zZXR0aW5ncy52aWRlb0NvZGVjIHx8IHZpZGVvQ29kZWM7XG4gICAgICAgICAgICBhdWRpb0NvZGVjID0gZGF0YS5zZXR0aW5ncy5hdWRpb0NvZGVjIHx8IGF1ZGlvQ29kZWM7XG4gICAgICAgICAgICBhdWRpb0JpdHNQZXJTZWNvbmQgPSBkYXRhLnNldHRpbmdzLmF1ZGlvQml0c1BlclNlY29uZCB8fCBhdWRpb0JpdHNQZXJTZWNvbmQ7XG4gICAgICAgICAgICB2aWRlb0JpdHNQZXJTZWNvbmQgPSBkYXRhLnNldHRpbmdzLnZpZGVvQml0c1BlclNlY29uZCB8fCB2aWRlb0JpdHNQZXJTZWNvbmQ7XG4gICAgICAgfVxuICAgIH1cblxuICAgIC8vIGxldCBvcHRpb25zID0geyBtaW1lVHlwZTogXCJ2aWRlby93ZWJtO2NvZGVjcz1oMjY0XCIgfTtcbiAgICBsZXQgb3B0aW9ucyA9IHsgbWltZVR5cGU6ICd2aWRlby93ZWJtO2NvZGVjcz0nICsgdmlkZW9Db2RlYyArIFwiLFwiICsgYXVkaW9Db2RlY307XG5cbiAgICBpZiAoIU1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkKG9wdGlvbnMubWltZVR5cGUpKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7IG1pbWVUeXBlOiAndmlkZW8vd2VibTtjb2RlY3M9dnA5JyB9O1xuICAgICAgICBpZiAoIU1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkKG9wdGlvbnMubWltZVR5cGUpKSB7XG4gICAgICAgICAgICBvcHRpb25zID0geyBtaW1lVHlwZTogJ3ZpZGVvL3dlYm07Y29kZWNzPXZwOCcgfTtcbiAgICAgICAgICAgIGlmICghTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQob3B0aW9ucy5taW1lVHlwZSkpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0geyBtaW1lVHlwZTogJ3ZpZGVvL3dlYm0nIH07XG4gICAgICAgICAgICAgICAgaWYgKCFNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZChvcHRpb25zLm1pbWVUeXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0geyBtaW1lVHlwZTogJycgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcHRpb25zLmF1ZGlvQml0c1BlclNlY29uZCA9IGF1ZGlvQml0c1BlclNlY29uZCAqIDEwMDA7IC8vIDEyOCBLYml0L3NlY1xuICAgIG9wdGlvbnMudmlkZW9CaXRzUGVyU2Vjb25kID0gdmlkZW9CaXRzUGVyU2Vjb25kICogMTAwMDAwMDsgLy8gOCBNYml0L3NlY1xuXG4gICAgdHJ5IHtcbiAgICAgICAgbWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKG1lZGlhU3RyZWFtLCBvcHRpb25zKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0V4Y2VwdGlvbiB3aGlsZSBjcmVhdGluZyBNZWRpYVJlY29yZGVyOicsIGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhgRXhjZXB0aW9uIHdoaWxlIGNyZWF0aW5nIE1lZGlhUmVjb3JkZXI6ICR7SlNPTi5zdHJpbmdpZnkoZSl9YCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZygnQ3JlYXRlZCBNZWRpYVJlY29yZGVyJywgbWVkaWFSZWNvcmRlciwgJ3dpdGggb3B0aW9ucycsIG9wdGlvbnMpO1xuICAgIC8vIG1lZGlhUmVjb3JkZXIub25zdG9wID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdSZWNvcmRlciBzdG9wcGVkOiAnLCBldmVudCk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdSZWNvcmRlZCBCbG9iczogJywgcmVjb3JkZWRCbG9icyk7XG4gICAgLy8gfTtcbiAgICBtZWRpYVJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IGhhbmRsZURhdGFBdmFpbGFibGU7XG4gICAgbWVkaWFSZWNvcmRlci5zdGFydCgxMCk7IC8vIGNvbGxlY3QgMTBtcyBvZiBkYXRhXG59XG5cbmZ1bmN0aW9uIHN0b3BSZWNvcmRpbmcoKSB7XG4gICAgY2hhbmdlSWNvbigpO1xuICAgIGlmIChtZWRpYVJlY29yZGVyKSBtZWRpYVJlY29yZGVyLnN0b3AoKTtcbiAgICBsZXQgdmlkZW9CbG9iID0gbmV3IEJsb2IocmVjb3JkZWRCbG9icywgeyB0eXBlOiAndmlkZW8vd2VibScgfSk7XG4gICAgd2luZG93LnZpZGVvVVJMID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwodmlkZW9CbG9iKTtcblxuICAgIGlmIChtZWRpYVN0cmVhbSkge1xuICAgICAgICBsZXQgdHJhY2tzID0gbWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJhY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB0cmFja3NbaV0uc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1lZGlhUmVjb3JkZXIgPSBudWxsO1xuICAgIG1lZGlhU3RyZWFtID0gbnVsbDtcbiAgICBpc1JlY29yZGluZyA9IGZhbHNlO1xufVxuIiwiaW1wb3J0IHsgaW5pdEFuYWx5dGljcyB9IGZyb20gXCIuL3ZpZXcvR0FcIjtcbmltcG9ydCB7IGluaXRCYWNrZ3JvdW5kUGFnZSB9IGZyb20gXCIuL2JhY2tncm91bmRcIjtcblxuaW5pdEFuYWx5dGljcyhcIlVBLTE2MTQwNDYyNy0xXCIpO1xuaW5pdEJhY2tncm91bmRQYWdlKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==