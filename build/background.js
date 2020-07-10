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
  chrome.browserAction.onClicked.addListener(function (tab) {
    if (isRecording) stopRecording();
    chrome.tabs.executeScript({
      file: 'content.js'
    });
    window.tabId = tab.id;
    chrome.windows.getCurrent({
      populate: false
    }, function (win) {
      window.chromeSize = {
        width: win.width - tab.width,
        height: win.height - tab.height
      };
    }); // let msg = { txt: "scrollCaptureBrowserAction", tabId: tab.id};
    // chrome.tabs.sendMessage(tab.id, msg);
  });
}

function resizeWindow(width, height) {
  var options = {
    width: width + window.chromeSize.width,
    height: height + window.chromeSize.height
  };
  chrome.windows.getCurrent({
    populate: false
  }, function (win) {
    chrome.windows.update(win.id, options);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbW9kZWwvR0EuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iYWNrZ3JvdW5kLWRldmVsb3BtZW50LmpzIl0sIm5hbWVzIjpbImluaXRBbmFseXRpY3MiLCJhbmFseXRpY3NJRCIsIndpbmRvdyIsIl9nYXEiLCJwdXNoIiwiZ2EiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiYXN5bmMiLCJzcmMiLCJzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwidHJhY2tFdmVudCIsImNhdGVnb3J5IiwiYWN0aW9uIiwibGFiZWwiLCJldmVudCIsInRyYWNrUGFnZSIsInBhdGgiLCJtZWRpYVN0cmVhbSIsImlzUmVjb3JkaW5nIiwibWVkaWFSZWNvcmRlciIsInJlY29yZGVkQmxvYnMiLCJjaHJvbWUiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJtc2ciLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJ0eHQiLCJzdGFydFJlY29yZGluZyIsInRhYklkIiwic3RvcFJlY29yZGluZyIsInJlc2l6ZVdpbmRvdyIsIndpZHRoIiwiaGVpZ2h0IiwiaW5pdEJhY2tncm91bmRQYWdlIiwiYnJvd3NlckFjdGlvbiIsIm9uQ2xpY2tlZCIsInRhYiIsInRhYnMiLCJleGVjdXRlU2NyaXB0IiwiZmlsZSIsImlkIiwid2luZG93cyIsImdldEN1cnJlbnQiLCJwb3B1bGF0ZSIsIndpbiIsImNocm9tZVNpemUiLCJvcHRpb25zIiwidXBkYXRlIiwiaGFuZGxlRGF0YUF2YWlsYWJsZSIsImRhdGEiLCJzaXplIiwiY2hhbmdlSWNvbiIsImNvbG9yIiwic2V0SWNvbiIsImV4dGVuc2lvbiIsImdldFVSTCIsImdldCIsIl9zdGFydFRhYkNhcHR1cmUiLCJjYXB0dXJlT3B0aW9ucyIsImF1ZGlvIiwidmlkZW8iLCJhdWRpb0NvbnN0cmFpbnRzIiwibWFuZGF0b3J5IiwiY2hyb21lTWVkaWFTb3VyY2UiLCJ2aWRlb0NvbnN0cmFpbnRzIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsIm1pbkZyYW1lUmF0ZSIsIm1heEZyYW1lUmF0ZSIsInRhYkNhcHR1cmUiLCJjYXB0dXJlIiwiX3NldFN0cmVhbSIsInN0cmVhbSIsImFsZXJ0IiwibGFzdEVycm9yIiwibWVzc2FnZSIsInN0b3JhZ2UiLCJsb2NhbCIsIl9jcmVhdGVNZWRpYVJlY29yZGVyIiwicmVzdWx0IiwidmlkZW9Db2RlYyIsImF1ZGlvQ29kZWMiLCJ2aWRlb0JpdHNQZXJTZWNvbmQiLCJhdWRpb0JpdHNQZXJTZWNvbmQiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwic2V0dGluZ3MiLCJtaW1lVHlwZSIsIk1lZGlhUmVjb3JkZXIiLCJpc1R5cGVTdXBwb3J0ZWQiLCJlIiwiY29uc29sZSIsImVycm9yIiwibG9nIiwic3RyaW5naWZ5Iiwib25kYXRhYXZhaWxhYmxlIiwic3RhcnQiLCJzdG9wIiwidmlkZW9CbG9iIiwiQmxvYiIsInZpZGVvVVJMIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwidHJhY2tzIiwiZ2V0VHJhY2tzIiwiaSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QyxFQUF3QztBQUNwQ0YsWUFBTSxDQUFDRSxDQUFELENBQU4sQ0FBVVIsSUFBVjtBQUNIO0FBQ0o7O0FBQ0RuRixlQUFhLEdBQUcsSUFBaEI7QUFDQUYsYUFBVyxHQUFHLElBQWQ7QUFDQUMsYUFBVyxHQUFHLEtBQWQ7QUFDSCxDOztBQzdNRDtBQUNBO0FBRUF2QixhQUFhLENBQUMsZ0JBQUQsQ0FBYjtBQUNBd0Msa0JBQWtCLEciLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxMiBUaGUgQ2hyb21pdW0gQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbi8vIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXG5cbiAvKipcbiAqIEJlbG93IGlzIGEgbW9kaWZpZWQgdmVyc2lvbiBvZiB0aGUgR29vZ2xlIEFuYWx5dGljcyBhc3luY2hyb25vdXMgdHJhY2tpbmdcbiAqIGNvZGUgc25pcHBldC4gIEl0IGhhcyBiZWVuIG1vZGlmaWVkIHRvIHB1bGwgdGhlIEhUVFBTIHZlcnNpb24gb2YgZ2EuanNcbiAqIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgSFRUUCB2ZXJzaW9uLiAgSXQgaXMgcmVjb21tZW5kZWQgdGhhdCB5b3UgdXNlIHRoaXNcbiAqIHNuaXBwZXQgaW5zdGVhZCBvZiB0aGUgc3RhbmRhcmQgdHJhY2tpbmcgc25pcHBldCBwcm92aWRlZCB3aGVuIHNldHRpbmcgdXBcbiAqIGEgR29vZ2xlIEFuYWx5dGljcyBhY2NvdW50LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QW5hbHl0aWNzKGFuYWx5dGljc0lEKSB7XG4gICAgd2luZG93Ll9nYXEgPSB3aW5kb3cuX2dhcSB8fCBbXTtcbiAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3NldEFjY291bnQnLCBhbmFseXRpY3NJRF0pO1xuICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfdHJhY2tQYWdldmlldyddKTtcblxuICAgIGxldCBnYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIGdhLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICBnYS5hc3luYyA9IHRydWU7XG4gICAgZ2Euc3JjID0gJ2h0dHBzOi8vc3NsLmdvb2dsZS1hbmFseXRpY3MuY29tL2dhLmpzJztcbiAgICBsZXQgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGdhLCBzKTtcbiB9XG5cbi8qKlxuICogVHJhY2sgYSBjbGljayBvbiBhIGJ1dHRvbiB1c2luZyB0aGUgYXN5bmNocm9ub3VzIHRyYWNraW5nIEFQSS5cbiAqIFNlZSBodHRwOi8vY29kZS5nb29nbGUuY29tL2FwaXMvYW5hbHl0aWNzL2RvY3MvdHJhY2tpbmcvYXN5bmNUcmFja2luZy5odG1sXG4gKiBmb3IgaW5mb3JtYXRpb24gb24gaG93IHRvIHVzZSB0aGUgYXN5bmNocm9ub3VzIHRyYWNraW5nIEFQSS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYWNrRXZlbnQoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwgPSBcIlwiKSB7XG4gICAgbGV0IGV2ZW50ID0gWydfdHJhY2tFdmVudCcsIGNhdGVnb3J5LCBhY3Rpb25dO1xuICAgIGlmIChsYWJlbCkgZXZlbnQucHVzaChsYWJlbCk7XG4gICAgd2luZG93Ll9nYXEucHVzaChldmVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFja1BhZ2UocGF0aCkge1xuICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfc2V0JywgJ3BhZ2UnLCBwYXRoXSk7XG4gICAgd2luZG93Ll9nYXEucHVzaChbJ190cmFja1BhZ2V2aWV3J10pO1xufVxuIiwiXG4vLyBsZXQgcGFnZSA9IGNocm9tZS5leHRlbnNpb24uZ2V0QmFja2dyb3VuZFBhZ2UoKTtcblxuaW1wb3J0IHsgdHJhY2tFdmVudCwgdHJhY2tQYWdlIH0gZnJvbSBcIi4vbW9kZWwvR0FcIjtcblxubGV0IG1lZGlhU3RyZWFtO1xubGV0IGlzUmVjb3JkaW5nO1xubGV0IG1lZGlhUmVjb3JkZXI7XG5sZXQgcmVjb3JkZWRCbG9icztcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtc2csIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgc3dpdGNoIChtc2cudHh0KSB7XG4gICAgICAgIGNhc2UgXCJzY3JvbGxDYXB0dXJlU3RhcnRSZWNvcmRpbmdcIjpcbiAgICAgICAgICAgIHN0YXJ0UmVjb3JkaW5nKG1zZy50YWJJZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVTdG9wUmVjb3JkaW5nXCI6XG4gICAgICAgICAgICBzdG9wUmVjb3JkaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVSZXNpemVXaW5kb3dcIjpcbiAgICAgICAgICAgIHJlc2l6ZVdpbmRvdyhtc2cud2lkdGgsIG1zZy5oZWlnaHQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzY3JvbGxDYXB0dXJlVHJhY2tFdmVudFwiOlxuICAgICAgICAgICAgdHJhY2tFdmVudChtc2cuY2F0ZWdvcnksIG1zZy5hY3Rpb24sIG1zZy5sYWJlbCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVUcmFja1BhZ2VcIjpcbiAgICAgICAgICAgIHRyYWNrUGFnZShtc2cucGF0aCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCYWNrZ3JvdW5kUGFnZSgpIHtcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoKHRhYikgPT4ge1xuXG4gICAgICAgIGlmIChpc1JlY29yZGluZykgc3RvcFJlY29yZGluZygpO1xuXG4gICAgICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICAgICAgZmlsZTogJ2NvbnRlbnQuanMnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy50YWJJZCA9IHRhYi5pZDtcblxuICAgICAgICBjaHJvbWUud2luZG93cy5nZXRDdXJyZW50KHsgcG9wdWxhdGU6IGZhbHNlIH0sICh3aW4pID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5jaHJvbWVTaXplID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB3aW4ud2lkdGggLSB0YWIud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW4uaGVpZ2h0IC0gdGFiLmhlaWdodFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbGV0IG1zZyA9IHsgdHh0OiBcInNjcm9sbENhcHR1cmVCcm93c2VyQWN0aW9uXCIsIHRhYklkOiB0YWIuaWR9O1xuICAgICAgICAvLyBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZVdpbmRvdyh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7IHdpZHRoOiB3aWR0aCArIHdpbmRvdy5jaHJvbWVTaXplLndpZHRoLCBoZWlnaHQ6IGhlaWdodCArIHdpbmRvdy5jaHJvbWVTaXplLmhlaWdodCB9O1xuICAgIGNocm9tZS53aW5kb3dzLmdldEN1cnJlbnQoeyBwb3B1bGF0ZTogZmFsc2UgfSwgKHdpbikgPT4ge1xuICAgICAgICBjaHJvbWUud2luZG93cy51cGRhdGUod2luLmlkLCBvcHRpb25zKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRGF0YUF2YWlsYWJsZShldmVudCkge1xuICAgIGlmIChldmVudC5kYXRhICYmIGV2ZW50LmRhdGEuc2l6ZSA+IDApIHtcbiAgICAgICAgcmVjb3JkZWRCbG9icy5wdXNoKGV2ZW50LmRhdGEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlSWNvbihjb2xvciA9IFwiXCIpIHtcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRJY29uKHtcbiAgICAgICAgcGF0aDoge1xuICAgICAgICAgICAgJzE2JzogY2hyb21lLmV4dGVuc2lvbi5nZXRVUkwoXCJhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkMTZcIiArIGNvbG9yICsgXCIucG5nXCIpLFxuICAgICAgICAgICAgJzMyJzogY2hyb21lLmV4dGVuc2lvbi5nZXRVUkwoXCJhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkMzJcIiArIGNvbG9yICsgXCIucG5nXCIpLFxuICAgICAgICAgICAgJzQ4JzogY2hyb21lLmV4dGVuc2lvbi5nZXRVUkwoXCJhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkNDhcIiArIGNvbG9yICsgXCIucG5nXCIpLFxuICAgICAgICAgICAgJzEyOCc6IGNocm9tZS5leHRlbnNpb24uZ2V0VVJMKFwiYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDEyOFwiICsgY29sb3IgKyBcIi5wbmdcIiksXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5mdW5jdGlvbiBzdGFydFJlY29yZGluZygpIHtcbiAgICBjaGFuZ2VJY29uKFwiX3JlZFwiKTtcbiAgICBjaHJvbWUudGFicy5nZXQod2luZG93LnRhYklkLCBfc3RhcnRUYWJDYXB0dXJlKTtcbiAgICAvLyBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9LCBfc3RhcnRUYWJDYXB0dXJlKTtcbn1cblxuZnVuY3Rpb24gX3N0YXJ0VGFiQ2FwdHVyZSh0YWIpIHtcbiAgICBpc1JlY29yZGluZyA9IHRydWU7XG5cbiAgICAvLyBOb3RlOiB0aGlzIG1ldGhvZCBtdXN0IGJlIGludm9rZWQgYnkgdGhlIHVzZXIgYXMgZGVmaW5lZFxuICAgIC8vIGluIGh0dHBzOi8vY3JidWcuY29tLzQ4OTI1OCwgZS5nLiBjaHJvbWUuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQuXG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImdldFN1cHBvcnRlZENvbnN0cmFpbnRzXCIsIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0U3VwcG9ydGVkQ29uc3RyYWludHMoKSk7XG5cbiAgICBsZXQgY2FwdHVyZU9wdGlvbnMgPSB7XG4gICAgICAgIGF1ZGlvOiB0cnVlLFxuICAgICAgICB2aWRlbzogdHJ1ZSxcbiAgICAgICAgYXVkaW9Db25zdHJhaW50czoge1xuICAgICAgICAgICAgbWFuZGF0b3J5OiB7XG4gICAgICAgICAgICAgICAgY2hyb21lTWVkaWFTb3VyY2U6ICd0YWInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdmlkZW9Db25zdHJhaW50czoge1xuICAgICAgICAgICAgbWFuZGF0b3J5OiB7XG4gICAgICAgICAgICAgICAgY2hyb21lTWVkaWFTb3VyY2U6ICd0YWInLFxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiB0YWIud2lkdGgsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IHRhYi53aWR0aCxcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHRhYi5oZWlnaHQsXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiB0YWIuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIG1pbkZyYW1lUmF0ZTogMzAsXG4gICAgICAgICAgICAgICAgbWF4RnJhbWVSYXRlOiA2MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNocm9tZS50YWJDYXB0dXJlLmNhcHR1cmUoY2FwdHVyZU9wdGlvbnMsIF9zZXRTdHJlYW0pO1xufVxuXG5mdW5jdGlvbiBfc2V0U3RyZWFtKHN0cmVhbSkge1xuICAgIGlmKHN0cmVhbSkge1xuICAgICAgICBtZWRpYVN0cmVhbSA9IHN0cmVhbTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnU3RyZWFtIGNyZWF0aW9uIGZhaWxlZDogJyArIGNocm9tZS5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvLyBsZXQgdHJhY2tzID0gbWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCk7XG4gICAgLy8gZm9yICh2YXIgaSA9IDA7IGkgPCB0cmFja3MubGVuZ3RoOyArK2kpIHtcbiAgICAvLyAgICAgbGV0IHRyYWNrID0gdHJhY2tzW2ldO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIi0tLS0gdHJhY2tcIiwgdHJhY2spO1xuICAgIC8vICAgICBmb3IgKGxldCBqIGluIHRyYWNrKSBjb25zb2xlLmxvZyhqLCBcIj1cIiwgdHJhY2tbal0pO1xuICAgIC8vICAgICBsZXQgc2V0dGluZ3MgPSB0cmFjay5nZXRTZXR0aW5ncygpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIi0tLS0tIHNldHRpbmdzXCIpO1xuICAgIC8vICAgICBmb3IgKGxldCBrIGluIHNldHRpbmdzKSBjb25zb2xlLmxvZyhrLCBcIj1cIiwgc2V0dGluZ3Nba10pO1xuICAgIC8vIH1cbiAgICBcbiAgICByZWNvcmRlZEJsb2JzID0gW107XG5cbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1wianNvblwiXSwgX2NyZWF0ZU1lZGlhUmVjb3JkZXIpO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlTWVkaWFSZWNvcmRlcihyZXN1bHQpIHtcbiAgIFxuICAgIGxldCB2aWRlb0NvZGVjID0gXCJ2cDhcIjtcbiAgICBsZXQgYXVkaW9Db2RlYyA9IFwib3B1c1wiO1xuICAgIGxldCB2aWRlb0JpdHNQZXJTZWNvbmQgPSA4O1xuICAgIGxldCBhdWRpb0JpdHNQZXJTZWNvbmQgPSAxMjg7XG5cbiAgICBpZiAocmVzdWx0Lmpzb24pIHtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3VsdC5qc29uKTtcbiAgICAgICAgaWYgKGRhdGEuc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIHZpZGVvQ29kZWMgPSBkYXRhLnNldHRpbmdzLnZpZGVvQ29kZWMgfHwgdmlkZW9Db2RlYztcbiAgICAgICAgICAgIGF1ZGlvQ29kZWMgPSBkYXRhLnNldHRpbmdzLmF1ZGlvQ29kZWMgfHwgYXVkaW9Db2RlYztcbiAgICAgICAgICAgIGF1ZGlvQml0c1BlclNlY29uZCA9IGRhdGEuc2V0dGluZ3MuYXVkaW9CaXRzUGVyU2Vjb25kIHx8IGF1ZGlvQml0c1BlclNlY29uZDtcbiAgICAgICAgICAgIHZpZGVvQml0c1BlclNlY29uZCA9IGRhdGEuc2V0dGluZ3MudmlkZW9CaXRzUGVyU2Vjb25kIHx8IHZpZGVvQml0c1BlclNlY29uZDtcbiAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbGV0IG9wdGlvbnMgPSB7IG1pbWVUeXBlOiBcInZpZGVvL3dlYm07Y29kZWNzPWgyNjRcIiB9O1xuICAgIGxldCBvcHRpb25zID0geyBtaW1lVHlwZTogJ3ZpZGVvL3dlYm07Y29kZWNzPScgKyB2aWRlb0NvZGVjICsgXCIsXCIgKyBhdWRpb0NvZGVjfTtcblxuICAgIGlmICghTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQob3B0aW9ucy5taW1lVHlwZSkpIHtcbiAgICAgICAgb3B0aW9ucyA9IHsgbWltZVR5cGU6ICd2aWRlby93ZWJtO2NvZGVjcz12cDknIH07XG4gICAgICAgIGlmICghTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQob3B0aW9ucy5taW1lVHlwZSkpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7IG1pbWVUeXBlOiAndmlkZW8vd2VibTtjb2RlY3M9dnA4JyB9O1xuICAgICAgICAgICAgaWYgKCFNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZChvcHRpb25zLm1pbWVUeXBlKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7IG1pbWVUeXBlOiAndmlkZW8vd2VibScgfTtcbiAgICAgICAgICAgICAgICBpZiAoIU1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkKG9wdGlvbnMubWltZVR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7IG1pbWVUeXBlOiAnJyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wdGlvbnMuYXVkaW9CaXRzUGVyU2Vjb25kID0gYXVkaW9CaXRzUGVyU2Vjb25kICogMTAwMDsgLy8gMTI4IEtiaXQvc2VjXG4gICAgb3B0aW9ucy52aWRlb0JpdHNQZXJTZWNvbmQgPSB2aWRlb0JpdHNQZXJTZWNvbmQgKiAxMDAwMDAwOyAvLyA4IE1iaXQvc2VjXG5cbiAgICB0cnkge1xuICAgICAgICBtZWRpYVJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIobWVkaWFTdHJlYW0sIG9wdGlvbnMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXhjZXB0aW9uIHdoaWxlIGNyZWF0aW5nIE1lZGlhUmVjb3JkZXI6JywgZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBFeGNlcHRpb24gd2hpbGUgY3JlYXRpbmcgTWVkaWFSZWNvcmRlcjogJHtKU09OLnN0cmluZ2lmeShlKX1gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKCdDcmVhdGVkIE1lZGlhUmVjb3JkZXInLCBtZWRpYVJlY29yZGVyLCAnd2l0aCBvcHRpb25zJywgb3B0aW9ucyk7XG4gICAgLy8gbWVkaWFSZWNvcmRlci5vbnN0b3AgPSAoZXZlbnQpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ1JlY29yZGVyIHN0b3BwZWQ6ICcsIGV2ZW50KTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ1JlY29yZGVkIEJsb2JzOiAnLCByZWNvcmRlZEJsb2JzKTtcbiAgICAvLyB9O1xuICAgIG1lZGlhUmVjb3JkZXIub25kYXRhYXZhaWxhYmxlID0gaGFuZGxlRGF0YUF2YWlsYWJsZTtcbiAgICBtZWRpYVJlY29yZGVyLnN0YXJ0KDEwKTsgLy8gY29sbGVjdCAxMG1zIG9mIGRhdGFcbn1cblxuZnVuY3Rpb24gc3RvcFJlY29yZGluZygpIHtcbiAgICBjaGFuZ2VJY29uKCk7XG4gICAgaWYgKG1lZGlhUmVjb3JkZXIpIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xuICAgIGxldCB2aWRlb0Jsb2IgPSBuZXcgQmxvYihyZWNvcmRlZEJsb2JzLCB7IHR5cGU6ICd2aWRlby93ZWJtJyB9KTtcbiAgICB3aW5kb3cudmlkZW9VUkwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCh2aWRlb0Jsb2IpO1xuXG4gICAgaWYgKG1lZGlhU3RyZWFtKSB7XG4gICAgICAgIGxldCB0cmFja3MgPSBtZWRpYVN0cmVhbS5nZXRUcmFja3MoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmFja3MubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHRyYWNrc1tpXS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWVkaWFSZWNvcmRlciA9IG51bGw7XG4gICAgbWVkaWFTdHJlYW0gPSBudWxsO1xuICAgIGlzUmVjb3JkaW5nID0gZmFsc2U7XG59XG4iLCJpbXBvcnQgeyBpbml0QW5hbHl0aWNzIH0gZnJvbSBcIi4vbW9kZWwvR0FcIjtcbmltcG9ydCB7IGluaXRCYWNrZ3JvdW5kUGFnZSB9IGZyb20gXCIuL2JhY2tncm91bmRcIjtcblxuaW5pdEFuYWx5dGljcyhcIlVBLTE2MTQwNDYyNy0xXCIpO1xuaW5pdEJhY2tncm91bmRQYWdlKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==