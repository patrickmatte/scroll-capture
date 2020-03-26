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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),

/***/ 24:
/***/ (function(module, exports) {

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
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
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
var mediaStream;

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
  } // Note: this method must be invoked by the user as defined
  // in https://crbug.com/489258, e.g. chrome.browserAction.onClicked.


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
  chrome.tabCapture.capture(captureOptions, setStream);
}

var selectedTab;
chrome.browserAction.onClicked.addListener(function (tab) {
  selectedTab = tab;
  console.log("*** window.selectedTab", window.selectedTab);
  window.selectedTab = tab;
  console.log("chrome.browserAction.onClicked", tab);
  captureTab(selectedTab);
  var msg = {
    txt: "scrollCaptureScenario"
  };
  chrome.tabs.sendMessage(selectedTab.id, msg);
});
var mediaRecorder;
var recordedBlobs;
var sourceBuffer;

function handleDataAvailable(event) {
  // console.log('handleDataAvailable', event);
  if (event.data && event.data.size > 0) {
    recordedBlobs.push(event.data);
  }
}

function startRecording() {
  console.log("background startRecording");
  recordedBlobs = [];
  var options = {
    mimeType: 'video/webm;codecs=vp9'
  }; // let options = { mimeType: "video/webm;codecs=h264" };

  if (!MediaRecorder.isTypeSupported(options.mimeType)) {
    console.log("".concat(options.mimeType, " is not Supported"));
    options = {
      mimeType: 'video/webm;codecs=vp9'
    };

    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
      console.log("".concat(options.mimeType, " is not Supported"));
      options = {
        mimeType: 'video/webm;codecs=vp8'
      };

      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.log("".concat(options.mimeType, " is not Supported"));
        options = {
          mimeType: 'video/webm'
        };

        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
          console.log("".concat(options.mimeType, " is not Supported"));
          options = {
            mimeType: ''
          };
        }
      }
    }
  }

  options.videoBitsPerSecond = 1024 * 1024 * 16;

  try {
    mediaRecorder = new MediaRecorder(mediaStream, options);
  } catch (e) {
    console.error('Exception while creating MediaRecorder:', e);
    console.log("Exception while creating MediaRecorder: ".concat(JSON.stringify(e)));
    return;
  }

  console.log('Created MediaRecorder', mediaRecorder, 'with options', options); // recordButton.textContent = 'Stop Recording';
  // playButton.disabled = true;
  // downloadButton.disabled = true;

  mediaRecorder.onstop = function (event) {
    console.log('Recorder stopped: ', event);
    console.log('Recorded Blobs: ', recordedBlobs);
  };

  mediaRecorder.ondataavailable = handleDataAvailable;
  mediaRecorder.start(10); // collect 10ms of data

  console.log('MediaRecorder started', mediaRecorder);
}

var videoBlob;
var videoURL;

function stopRecording() {
  console.log("background stopRecording");
  mediaRecorder.stop();
  videoBlob = new Blob(recordedBlobs, {
    type: 'video/webm'
  });
  window.videoBlob = videoBlob;
  console.log("videoBlob", videoBlob);
  videoURL = window.URL.createObjectURL(videoBlob);
  window.videoURL = videoURL;
  console.log("videoURL", videoURL);
  var msg = {
    txt: "scrollCaptureVideoSource",
    videoBlob: videoBlob,
    videoURL: videoURL
  };
  chrome.tabs.sendMessage(selectedTab.id, msg);
}

/***/ })

/******/ });