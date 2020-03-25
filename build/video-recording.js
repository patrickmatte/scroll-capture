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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8);
module.exports = __webpack_require__(9);


/***/ }),

/***/ 8:
/***/ (function(module, exports) {

// console.log("videoCapture!!!!!!!!");
// console.log("videoCapture chrome.tabs", chrome.tabs);
// console.log("chrome.browserAction", chrome.browserAction);
// player.addEventListener('canplay', function () {
//     this.volume = 0.75;
//     this.muted = false;
//     player.setAttribute('controls', '1');
//     this.play();
// });
var icoFont = chrome.extension.getURL('assets/fonts/icofont.woff');
var page = chrome.extension.getBackgroundPage();
console.log("*** page", page);
console.log("*** page.videoBlob", page.videoBlob);
console.log("*** page.videoURL", page.videoURL);

if (page.videoURL) {
  var player = document.querySelector('.video-player');
  player.src = page.videoURL;
  var button = document.querySelector(".download-button");
  button.href = page.videoURL;
  var date = new Date();
  console.log("date.toDateString()", date.toDateString());
  console.log("date.toString()", date.toString());
  console.log("date.toUTCString()", date.toUTCString());
  var dateString = date.toDateString();
  button.download = "scroll-capture-".concat(dateString, ".webm");
} // let videoBlob;
// chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
//     console.log("videoCapture chrome.runtime.onMessage", msg);
//     switch (msg.txt) {
//         case "scrollCaptureVideoSource":
//             let page = chrome.extension.getBackgroundPage();
//             console.log("*** page", page);
//             console.log("*** page.videoBlob", page.videoBlob);
//             console.log("*** page.videoURL", page.videoURL);
//             console.log("---- scrollCaptureVideoSource!!!", msg);
//             console.log("msg.videoBlob", msg.videoBlob);
//             console.log("window", window);
//             console.log("window.URL", window.URL);
//             console.log("window.URL.createObjectURL", window.URL.createObjectURL);
//             videoBlob = msg.videoBlob;
//             let videoURL = window.URL.createObjectURL(videoBlob);
//             player.srcObject = videoURL;
//             break;
//     }
// });

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });