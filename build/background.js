/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/analytics.js":
/*!*************************!*\
  !*** ./js/analytics.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   analytics: () => (/* binding */ analytics),
/* harmony export */   initAnalytics: () => (/* binding */ initAnalytics)
/* harmony export */ });
const GA_ENDPOINT = 'https://www.google-analytics.com/mp/collect';
const GA_DEBUG_ENDPOINT = 'https://www.google-analytics.com/debug/mp/collect';

// Get via https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events?client_type=gtag#recommended_parameters_for_reports
let MEASUREMENT_ID = '<measurement_id>';
let API_SECRET = '<api_secret>';
const DEFAULT_ENGAGEMENT_TIME_MSEC = 100;

// Duration of inactivity after which a new session is created
const SESSION_EXPIRATION_IN_MIN = 30;
function initAnalytics(id, secret) {
  MEASUREMENT_ID = id;
  API_SECRET = secret;
}
class Analytics {
  constructor() {
    let debug = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    this.debug = debug;
  }

  // Returns the client id, or creates a new one if one doesn't exist.
  // Stores client id in local storage to keep the same client id as long as
  // the extension is installed.
  async getOrCreateClientId() {
    let {
      clientId
    } = await chrome.storage.local.get('clientId');
    if (!clientId) {
      // Generate a unique client ID, the actual value is not relevant
      clientId = self.crypto.randomUUID();
      await chrome.storage.local.set({
        clientId
      });
    }
    return clientId;
  }

  // Returns the current session id, or creates a new one if one doesn't exist or
  // the previous one has expired.
  async getOrCreateSessionId() {
    // Use storage.session because it is only in memory
    let {
      sessionData
    } = await chrome.storage.session.get('sessionData');
    const currentTimeInMs = Date.now();
    // Check if session exists and is still valid
    if (sessionData && sessionData.timestamp) {
      // Calculate how long ago the session was last updated
      const durationInMin = (currentTimeInMs - sessionData.timestamp) / 60000;
      // Check if last update lays past the session expiration threshold
      if (durationInMin > SESSION_EXPIRATION_IN_MIN) {
        // Clear old session id to start a new session
        sessionData = null;
      } else {
        // Update timestamp to keep session alive
        sessionData.timestamp = currentTimeInMs;
        await chrome.storage.session.set({
          sessionData
        });
      }
    }
    if (!sessionData) {
      // Create and store a new session
      sessionData = {
        session_id: currentTimeInMs.toString(),
        timestamp: currentTimeInMs.toString()
      };
      await chrome.storage.session.set({
        sessionData
      });
    }
    return sessionData.session_id;
  }

  // Fires an event with optional params. Event names must only include letters and underscores.
  async fireEvent(name) {
    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // Configure session id and engagement time if not present, for more details see:
    // https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events?client_type=gtag#recommended_parameters_for_reports
    if (!params.session_id) {
      params.session_id = await this.getOrCreateSessionId();
    }
    if (!params.engagement_time_msec) {
      params.engagement_time_msec = DEFAULT_ENGAGEMENT_TIME_MSEC;
    }
    try {
      const response = await fetch(`${this.debug ? GA_DEBUG_ENDPOINT : GA_ENDPOINT}?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}`, {
        method: 'POST',
        body: JSON.stringify({
          client_id: await this.getOrCreateClientId(),
          events: [{
            name,
            params
          }]
        })
      });
      if (!this.debug) {
        return;
      }
      console.log(await response.text());
    } catch (e) {
      console.error('Google Analytics request failed with an exception', e);
    }
  }

  // Fire a page view event.
  async firePageViewEvent(pageTitle, pageLocation) {
    let additionalParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return this.fireEvent('page_view', {
      page_title: pageTitle,
      page_location: pageLocation,
      ...additionalParams
    });
  }

  // Fire an error event.
  async fireErrorEvent(error) {
    let additionalParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // Note: 'error' is a reserved event name and cannot be used
    // see https://developers.google.com/analytics/devguides/collection/protocol/ga4/reference?client_type=gtag#reserved_names
    return this.fireEvent('extension_error', {
      ...error,
      ...additionalParams
    });
  }
}
const analytics = new Analytics();

/***/ }),

/***/ "./js/background.js":
/*!**************************!*\
  !*** ./js/background.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initBackgroundPage: () => (/* binding */ initBackgroundPage)
/* harmony export */ });
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics */ "./js/analytics.js");

function initBackgroundPage() {
  chrome.runtime.onMessage.addListener(onMessageHandler);
  chrome.action.onClicked.addListener(tab => {
    showMainPanel(tab.id, tab.url);
  });
}
async function showMainPanel(tabId) {
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
  executeContentScript(tabId).then(() => {
    if (recording) {
      chrome.tabs.sendMessage(tabId, {
        type: 'scrollCaptureLocation',
        location: 'stop',
        tabId
      });
    } else {
      changeIcon('');
      sendDefaultLocation(tabId);
    }
  });
}
let canvas;
function onMessageHandler(msg, sender, sendResponse) {
  const tabId = msg.tabId;
  switch (msg.type) {
    case 'scrollCaptureShowMainPanel':
      showMainPanel(tabId);
      sendResponse({
        mainPanel: true
      });
      break;
    case 'scrollCaptureStartRecording':
      startRecording(msg);
      break;
    case 'scrollCaptureStopRecording':
      stopRecording();
      break;
    case 'scrollCaptureResizeWindow':
      resizeWindow(msg.width, msg.height);
      break;
    case 'scrollCaptureTrackEvent':
      _analytics__WEBPACK_IMPORTED_MODULE_0__.analytics.fireEvent(msg.category, msg.params);
      break;
    case 'scrollCaptureTrackPage':
      _analytics__WEBPACK_IMPORTED_MODULE_0__.analytics.firePageViewEvent(msg.path.split('/').pop(), msg.path);
      break;
    case 'scrollCaptureUpdatedTabListener':
      let handler;
      switch (msg.location) {
        case 'scenario':
          chrome.storage.local.set({
            tabId
          });
          handler = updatedTabHandlerScenario;
          break;
        case 'play':
        default:
          handler = updatedTabHandlerPlay;
          break;
      }
      if (msg.enabled) {
        chrome.tabs.onUpdated.addListener(handler);
      } else {
        chrome.tabs.onUpdated.removeListener(handler);
      }
      break;
    case 'scrollCaptureInsertCSS':
      // chrome.storage.local.get('tabId').then((obj) => {
      chrome.scripting.insertCSS({
        target: {
          tabId
        },
        css: msg.css
      });
      // });
      break;
    case 'scrollCaptureImageCaptureCanvas':
      canvas = new OffscreenCanvas(msg.width, msg.height);
      break;
    case 'scrollCaptureVisibleTab':
      chrome.tabs.captureVisibleTab(null, {}, dataUrl => {
        sendResponse({
          dataUrl
        });
      });
      break;
    case 'scrollCaptureImageCaptureStart':
      startImageCapture(msg);
      break;
    case 'scrollCaptureImageCaptureStop':
      stopImageCapture(msg);
      break;
    case 'scrollCaptureVideoURLBackground':
      msg.type = 'scrollCaptureVideoURL';
      chrome.tabs.sendMessage(tabId, msg);
      break;
    case 'scrollCaptureFFmpegLogToSW':
      msg.type = 'scrollCaptureFFmpegLogToCC';
      chrome.tabs.sendMessage(tabId, msg);
      break;
    case 'scrollCaptureExecuteScript':
      chrome.scripting.executeScript({
        target: {
          tabId
        },
        func: body => {
          return new Function(body)();
        },
        args: [msg.code],
        world: 'MAIN'
      }).then(val => {
        sendResponse(val[0].result);
      });
      break;
    case 'scrollCaptureSetScroll':
      chrome.scripting.executeScript({
        target: {
          tabId
        },
        func: (body, x, y) => {
          return new Function('x', 'y', body)(x, y);
        },
        args: [msg.code, msg.x, msg.y],
        world: 'MAIN'
      });
      break;
    case 'scrollCaptureGetScroll':
      chrome.scripting.executeScript({
        target: {
          tabId
        },
        func: body => {
          return new Function(body)();
        },
        args: [msg.code],
        world: 'MAIN'
      }).then(val => {
        sendResponse(val[0].result);
      });
      break;
  }
  return true;
}
function updatedTabHandlerPlay(tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    executeContentScript(tab.id).then(() => {
      chrome.runtime.getContexts({}).then(existingContexts => {
        const offscreenDocument = existingContexts.find(c => c.contextType === 'OFFSCREEN_DOCUMENT');
        const recording = offscreenDocument.documentUrl.endsWith('#recording');
        chrome.tabs.sendMessage(tab.id, {
          type: 'scrollCaptureLocation',
          location: recording ? 'record' : 'play',
          tabId
        });
      });
    });
  }
}
function updatedTabHandlerScenario(tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    chrome.storage.local.get('tabId').then(obj => {
      if (obj.tabId == tabId) {
        executeContentScript(tab.id).then(() => {
          sendDefaultLocation(tab.id);
        });
      }
    });
  }
}
function sendDefaultLocation(tabId) {
  chrome.storage.local.get(['defaultLocation']).then(result => {
    const location = result.defaultLocation || 'scroll-capture';
    chrome.tabs.sendMessage(tabId, {
      type: 'scrollCaptureLocation',
      location,
      tabId
    });
  });
}
function executeContentScript(tabId) {
  return chrome.scripting.executeScript({
    target: {
      tabId
    },
    files: ['content.js']
  });
}
function resizeWindow(width, height) {
  let options = {
    width,
    height
  };
  chrome.windows.getCurrent({
    populate: false
  }, win => {
    chrome.windows.update(win.id, options);
  });
}
function changeIcon() {
  let color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  chrome.action.setIcon({
    path: {
      16: chrome.runtime.getURL('assets/images/get_started16' + color + '.png'),
      32: chrome.runtime.getURL('assets/images/get_started32' + color + '.png'),
      48: chrome.runtime.getURL('assets/images/get_started48' + color + '.png'),
      128: chrome.runtime.getURL('assets/images/get_started128' + color + '.png')
    }
  });
}
async function startRecording(msg) {
  changeIcon('_red');
  const streamId = await chrome.tabCapture.getMediaStreamId({
    targetTabId: msg.tabId
  });
  const message = Object.assign({}, msg);
  Object.assign(message, {
    type: 'scrollCaptureStartOffscreenRecording',
    target: 'offscreen',
    streamId
  });
  chrome.runtime.sendMessage(message);
}
function stopRecording() {
  changeIcon();
  chrome.runtime.sendMessage({
    type: 'scrollCaptureStopOffscreenRecording',
    target: 'offscreen'
  });
}
function startImageCapture() {
  changeIcon('_red');
}
function stopImageCapture() {
  changeIcon();
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
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics */ "./js/analytics.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ "./js/background.js");


(0,_analytics__WEBPACK_IMPORTED_MODULE_0__.initAnalytics)('G-X33EHHBL5G', '_V0JusLKQd2bfn0sSOns3Q');
(0,_background__WEBPACK_IMPORTED_MODULE_1__.initBackgroundPage)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7QUFDSjtBQUVBLFNBQVNLLGlCQUFpQkEsQ0FBQSxFQUFHO0VBQzNCN0IsVUFBVSxDQUFDLE1BQU0sQ0FBQztBQUNwQjtBQUVBLFNBQVM4QixnQkFBZ0JBLENBQUEsRUFBRztFQUMxQjlCLFVBQVUsQ0FBQyxDQUFDO0FBQ2Q7Ozs7OztVQzdQQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QztBQUNNO0FBRWxEcEYseURBQWEsQ0FBQyxjQUFjLEVBQUUsd0JBQXdCLENBQUM7QUFDdkRzRCwrREFBa0IsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hbmFseXRpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy9iYWNrZ3JvdW5kLWRldmVsb3BtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdBX0VORFBPSU5UID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL21wL2NvbGxlY3QnO1xuY29uc3QgR0FfREVCVUdfRU5EUE9JTlQgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vZGVidWcvbXAvY29sbGVjdCc7XG5cbi8vIEdldCB2aWEgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL3Byb3RvY29sL2dhNC9zZW5kaW5nLWV2ZW50cz9jbGllbnRfdHlwZT1ndGFnI3JlY29tbWVuZGVkX3BhcmFtZXRlcnNfZm9yX3JlcG9ydHNcbmxldCBNRUFTVVJFTUVOVF9JRCA9ICc8bWVhc3VyZW1lbnRfaWQ+JztcbmxldCBBUElfU0VDUkVUID0gJzxhcGlfc2VjcmV0Pic7XG5jb25zdCBERUZBVUxUX0VOR0FHRU1FTlRfVElNRV9NU0VDID0gMTAwO1xuXG4vLyBEdXJhdGlvbiBvZiBpbmFjdGl2aXR5IGFmdGVyIHdoaWNoIGEgbmV3IHNlc3Npb24gaXMgY3JlYXRlZFxuY29uc3QgU0VTU0lPTl9FWFBJUkFUSU9OX0lOX01JTiA9IDMwO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEFuYWx5dGljcyhpZCwgc2VjcmV0KSB7XG4gIE1FQVNVUkVNRU5UX0lEID0gaWQ7XG4gIEFQSV9TRUNSRVQgPSBzZWNyZXQ7XG59XG5cbmNsYXNzIEFuYWx5dGljcyB7XG4gIGNvbnN0cnVjdG9yKGRlYnVnID0gZmFsc2UpIHtcbiAgICB0aGlzLmRlYnVnID0gZGVidWc7XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSBjbGllbnQgaWQsIG9yIGNyZWF0ZXMgYSBuZXcgb25lIGlmIG9uZSBkb2Vzbid0IGV4aXN0LlxuICAvLyBTdG9yZXMgY2xpZW50IGlkIGluIGxvY2FsIHN0b3JhZ2UgdG8ga2VlcCB0aGUgc2FtZSBjbGllbnQgaWQgYXMgbG9uZyBhc1xuICAvLyB0aGUgZXh0ZW5zaW9uIGlzIGluc3RhbGxlZC5cbiAgYXN5bmMgZ2V0T3JDcmVhdGVDbGllbnRJZCgpIHtcbiAgICBsZXQgeyBjbGllbnRJZCB9ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCdjbGllbnRJZCcpO1xuICAgIGlmICghY2xpZW50SWQpIHtcbiAgICAgIC8vIEdlbmVyYXRlIGEgdW5pcXVlIGNsaWVudCBJRCwgdGhlIGFjdHVhbCB2YWx1ZSBpcyBub3QgcmVsZXZhbnRcbiAgICAgIGNsaWVudElkID0gc2VsZi5jcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgY2xpZW50SWQgfSk7XG4gICAgfVxuICAgIHJldHVybiBjbGllbnRJZDtcbiAgfVxuXG4gIC8vIFJldHVybnMgdGhlIGN1cnJlbnQgc2Vzc2lvbiBpZCwgb3IgY3JlYXRlcyBhIG5ldyBvbmUgaWYgb25lIGRvZXNuJ3QgZXhpc3Qgb3JcbiAgLy8gdGhlIHByZXZpb3VzIG9uZSBoYXMgZXhwaXJlZC5cbiAgYXN5bmMgZ2V0T3JDcmVhdGVTZXNzaW9uSWQoKSB7XG4gICAgLy8gVXNlIHN0b3JhZ2Uuc2Vzc2lvbiBiZWNhdXNlIGl0IGlzIG9ubHkgaW4gbWVtb3J5XG4gICAgbGV0IHsgc2Vzc2lvbkRhdGEgfSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLnNlc3Npb24uZ2V0KCdzZXNzaW9uRGF0YScpO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lSW5NcyA9IERhdGUubm93KCk7XG4gICAgLy8gQ2hlY2sgaWYgc2Vzc2lvbiBleGlzdHMgYW5kIGlzIHN0aWxsIHZhbGlkXG4gICAgaWYgKHNlc3Npb25EYXRhICYmIHNlc3Npb25EYXRhLnRpbWVzdGFtcCkge1xuICAgICAgLy8gQ2FsY3VsYXRlIGhvdyBsb25nIGFnbyB0aGUgc2Vzc2lvbiB3YXMgbGFzdCB1cGRhdGVkXG4gICAgICBjb25zdCBkdXJhdGlvbkluTWluID0gKGN1cnJlbnRUaW1lSW5NcyAtIHNlc3Npb25EYXRhLnRpbWVzdGFtcCkgLyA2MDAwMDtcbiAgICAgIC8vIENoZWNrIGlmIGxhc3QgdXBkYXRlIGxheXMgcGFzdCB0aGUgc2Vzc2lvbiBleHBpcmF0aW9uIHRocmVzaG9sZFxuICAgICAgaWYgKGR1cmF0aW9uSW5NaW4gPiBTRVNTSU9OX0VYUElSQVRJT05fSU5fTUlOKSB7XG4gICAgICAgIC8vIENsZWFyIG9sZCBzZXNzaW9uIGlkIHRvIHN0YXJ0IGEgbmV3IHNlc3Npb25cbiAgICAgICAgc2Vzc2lvbkRhdGEgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVXBkYXRlIHRpbWVzdGFtcCB0byBrZWVwIHNlc3Npb24gYWxpdmVcbiAgICAgICAgc2Vzc2lvbkRhdGEudGltZXN0YW1wID0gY3VycmVudFRpbWVJbk1zO1xuICAgICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zZXNzaW9uLnNldCh7IHNlc3Npb25EYXRhIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXNlc3Npb25EYXRhKSB7XG4gICAgICAvLyBDcmVhdGUgYW5kIHN0b3JlIGEgbmV3IHNlc3Npb25cbiAgICAgIHNlc3Npb25EYXRhID0ge1xuICAgICAgICBzZXNzaW9uX2lkOiBjdXJyZW50VGltZUluTXMudG9TdHJpbmcoKSxcbiAgICAgICAgdGltZXN0YW1wOiBjdXJyZW50VGltZUluTXMudG9TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zZXNzaW9uLnNldCh7IHNlc3Npb25EYXRhIH0pO1xuICAgIH1cbiAgICByZXR1cm4gc2Vzc2lvbkRhdGEuc2Vzc2lvbl9pZDtcbiAgfVxuXG4gIC8vIEZpcmVzIGFuIGV2ZW50IHdpdGggb3B0aW9uYWwgcGFyYW1zLiBFdmVudCBuYW1lcyBtdXN0IG9ubHkgaW5jbHVkZSBsZXR0ZXJzIGFuZCB1bmRlcnNjb3Jlcy5cbiAgYXN5bmMgZmlyZUV2ZW50KG5hbWUsIHBhcmFtcyA9IHt9KSB7XG4gICAgLy8gQ29uZmlndXJlIHNlc3Npb24gaWQgYW5kIGVuZ2FnZW1lbnQgdGltZSBpZiBub3QgcHJlc2VudCwgZm9yIG1vcmUgZGV0YWlscyBzZWU6XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL3Byb3RvY29sL2dhNC9zZW5kaW5nLWV2ZW50cz9jbGllbnRfdHlwZT1ndGFnI3JlY29tbWVuZGVkX3BhcmFtZXRlcnNfZm9yX3JlcG9ydHNcbiAgICBpZiAoIXBhcmFtcy5zZXNzaW9uX2lkKSB7XG4gICAgICBwYXJhbXMuc2Vzc2lvbl9pZCA9IGF3YWl0IHRoaXMuZ2V0T3JDcmVhdGVTZXNzaW9uSWQoKTtcbiAgICB9XG4gICAgaWYgKCFwYXJhbXMuZW5nYWdlbWVudF90aW1lX21zZWMpIHtcbiAgICAgIHBhcmFtcy5lbmdhZ2VtZW50X3RpbWVfbXNlYyA9IERFRkFVTFRfRU5HQUdFTUVOVF9USU1FX01TRUM7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5kZWJ1ZyA/IEdBX0RFQlVHX0VORFBPSU5UIDogR0FfRU5EUE9JTlR9P21lYXN1cmVtZW50X2lkPSR7TUVBU1VSRU1FTlRfSUR9JmFwaV9zZWNyZXQ9JHtBUElfU0VDUkVUfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBjbGllbnRfaWQ6IGF3YWl0IHRoaXMuZ2V0T3JDcmVhdGVDbGllbnRJZCgpLFxuICAgICAgICAgIGV2ZW50czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgICBpZiAoIXRoaXMuZGVidWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdHb29nbGUgQW5hbHl0aWNzIHJlcXVlc3QgZmFpbGVkIHdpdGggYW4gZXhjZXB0aW9uJywgZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmlyZSBhIHBhZ2UgdmlldyBldmVudC5cbiAgYXN5bmMgZmlyZVBhZ2VWaWV3RXZlbnQocGFnZVRpdGxlLCBwYWdlTG9jYXRpb24sIGFkZGl0aW9uYWxQYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmZpcmVFdmVudCgncGFnZV92aWV3Jywge1xuICAgICAgcGFnZV90aXRsZTogcGFnZVRpdGxlLFxuICAgICAgcGFnZV9sb2NhdGlvbjogcGFnZUxvY2F0aW9uLFxuICAgICAgLi4uYWRkaXRpb25hbFBhcmFtcyxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEZpcmUgYW4gZXJyb3IgZXZlbnQuXG4gIGFzeW5jIGZpcmVFcnJvckV2ZW50KGVycm9yLCBhZGRpdGlvbmFsUGFyYW1zID0ge30pIHtcbiAgICAvLyBOb3RlOiAnZXJyb3InIGlzIGEgcmVzZXJ2ZWQgZXZlbnQgbmFtZSBhbmQgY2Fubm90IGJlIHVzZWRcbiAgICAvLyBzZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL3Byb3RvY29sL2dhNC9yZWZlcmVuY2U/Y2xpZW50X3R5cGU9Z3RhZyNyZXNlcnZlZF9uYW1lc1xuICAgIHJldHVybiB0aGlzLmZpcmVFdmVudCgnZXh0ZW5zaW9uX2Vycm9yJywge1xuICAgICAgLi4uZXJyb3IsXG4gICAgICAuLi5hZGRpdGlvbmFsUGFyYW1zLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhbmFseXRpY3MgPSBuZXcgQW5hbHl0aWNzKCk7XG4iLCJpbXBvcnQgeyBhbmFseXRpY3MgfSBmcm9tICcuL2FuYWx5dGljcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QmFja2dyb3VuZFBhZ2UoKSB7XG4gIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihvbk1lc3NhZ2VIYW5kbGVyKTtcbiAgY2hyb21lLmFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoKHRhYikgPT4ge1xuICAgIHNob3dNYWluUGFuZWwodGFiLmlkLCB0YWIudXJsKTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNob3dNYWluUGFuZWwodGFiSWQpIHtcbiAgY29uc3QgZXhpc3RpbmdDb250ZXh0cyA9IGF3YWl0IGNocm9tZS5ydW50aW1lLmdldENvbnRleHRzKHt9KTtcbiAgbGV0IHJlY29yZGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0IG9mZnNjcmVlbkRvY3VtZW50ID0gZXhpc3RpbmdDb250ZXh0cy5maW5kKChjKSA9PiBjLmNvbnRleHRUeXBlID09PSAnT0ZGU0NSRUVOX0RPQ1VNRU5UJyk7XG5cbiAgLy8gSWYgYW4gb2Zmc2NyZWVuIGRvY3VtZW50IGlzIG5vdCBhbHJlYWR5IG9wZW4sIGNyZWF0ZSBvbmUuXG4gIGlmICghb2Zmc2NyZWVuRG9jdW1lbnQpIHtcbiAgICAvLyBDcmVhdGUgYW4gb2Zmc2NyZWVuIGRvY3VtZW50LlxuICAgIGF3YWl0IGNocm9tZS5vZmZzY3JlZW4uY3JlYXRlRG9jdW1lbnQoe1xuICAgICAgdXJsOiAnb2Zmc2NyZWVuLmh0bWwnLFxuICAgICAgcmVhc29uczogWydVU0VSX01FRElBJ10sXG4gICAgICBqdXN0aWZpY2F0aW9uOiAnUmVjb3JkaW5nIGZyb20gY2hyb21lLnRhYkNhcHR1cmUgQVBJJyxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZWNvcmRpbmcgPSBvZmZzY3JlZW5Eb2N1bWVudC5kb2N1bWVudFVybC5lbmRzV2l0aCgnI3JlY29yZGluZycpO1xuICB9XG5cbiAgZXhlY3V0ZUNvbnRlbnRTY3JpcHQodGFiSWQpLnRoZW4oKCkgPT4ge1xuICAgIGlmIChyZWNvcmRpbmcpIHtcbiAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlTG9jYXRpb24nLFxuICAgICAgICBsb2NhdGlvbjogJ3N0b3AnLFxuICAgICAgICB0YWJJZCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFuZ2VJY29uKCcnKTtcbiAgICAgIHNlbmREZWZhdWx0TG9jYXRpb24odGFiSWQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmxldCBjYW52YXM7XG5cbmZ1bmN0aW9uIG9uTWVzc2FnZUhhbmRsZXIobXNnLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICBjb25zdCB0YWJJZCA9IG1zZy50YWJJZDtcbiAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVTaG93TWFpblBhbmVsJzpcbiAgICAgIHNob3dNYWluUGFuZWwodGFiSWQpO1xuICAgICAgc2VuZFJlc3BvbnNlKHsgbWFpblBhbmVsOiB0cnVlIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVN0YXJ0UmVjb3JkaW5nJzpcbiAgICAgIHN0YXJ0UmVjb3JkaW5nKG1zZyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlU3RvcFJlY29yZGluZyc6XG4gICAgICBzdG9wUmVjb3JkaW5nKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlUmVzaXplV2luZG93JzpcbiAgICAgIHJlc2l6ZVdpbmRvdyhtc2cud2lkdGgsIG1zZy5oZWlnaHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVRyYWNrRXZlbnQnOlxuICAgICAgYW5hbHl0aWNzLmZpcmVFdmVudChtc2cuY2F0ZWdvcnksIG1zZy5wYXJhbXMpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVRyYWNrUGFnZSc6XG4gICAgICBhbmFseXRpY3MuZmlyZVBhZ2VWaWV3RXZlbnQobXNnLnBhdGguc3BsaXQoJy8nKS5wb3AoKSwgbXNnLnBhdGgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVVwZGF0ZWRUYWJMaXN0ZW5lcic6XG4gICAgICBsZXQgaGFuZGxlcjtcbiAgICAgIHN3aXRjaCAobXNnLmxvY2F0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3NjZW5hcmlvJzpcbiAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyB0YWJJZCB9KTtcbiAgICAgICAgICBoYW5kbGVyID0gdXBkYXRlZFRhYkhhbmRsZXJTY2VuYXJpbztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGxheSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaGFuZGxlciA9IHVwZGF0ZWRUYWJIYW5kbGVyUGxheTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChtc2cuZW5hYmxlZCkge1xuICAgICAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoaGFuZGxlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQucmVtb3ZlTGlzdGVuZXIoaGFuZGxlcik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlSW5zZXJ0Q1NTJzpcbiAgICAgIC8vIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndGFiSWQnKS50aGVuKChvYmopID0+IHtcbiAgICAgIGNocm9tZS5zY3JpcHRpbmcuaW5zZXJ0Q1NTKHtcbiAgICAgICAgdGFyZ2V0OiB7IHRhYklkIH0sXG4gICAgICAgIGNzczogbXNnLmNzcyxcbiAgICAgIH0pO1xuICAgICAgLy8gfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlSW1hZ2VDYXB0dXJlQ2FudmFzJzpcbiAgICAgIGNhbnZhcyA9IG5ldyBPZmZzY3JlZW5DYW52YXMobXNnLndpZHRoLCBtc2cuaGVpZ2h0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVWaXNpYmxlVGFiJzpcbiAgICAgIGNocm9tZS50YWJzLmNhcHR1cmVWaXNpYmxlVGFiKG51bGwsIHt9LCAoZGF0YVVybCkgPT4ge1xuICAgICAgICBzZW5kUmVzcG9uc2UoeyBkYXRhVXJsIH0pO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlSW1hZ2VDYXB0dXJlU3RhcnQnOlxuICAgICAgc3RhcnRJbWFnZUNhcHR1cmUobXNnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVJbWFnZUNhcHR1cmVTdG9wJzpcbiAgICAgIHN0b3BJbWFnZUNhcHR1cmUobXNnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVWaWRlb1VSTEJhY2tncm91bmQnOlxuICAgICAgbXNnLnR5cGUgPSAnc2Nyb2xsQ2FwdHVyZVZpZGVvVVJMJztcbiAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCBtc2cpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZUZGbXBlZ0xvZ1RvU1cnOlxuICAgICAgbXNnLnR5cGUgPSAnc2Nyb2xsQ2FwdHVyZUZGbXBlZ0xvZ1RvQ0MnO1xuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIG1zZyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlRXhlY3V0ZVNjcmlwdCc6XG4gICAgICBjaHJvbWUuc2NyaXB0aW5nXG4gICAgICAgIC5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQgfSxcbiAgICAgICAgICBmdW5jOiAoYm9keSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbihib2R5KSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYXJnczogW21zZy5jb2RlXSxcbiAgICAgICAgICB3b3JsZDogJ01BSU4nLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigodmFsKSA9PiB7XG4gICAgICAgICAgc2VuZFJlc3BvbnNlKHZhbFswXS5yZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVTZXRTY3JvbGwnOlxuICAgICAgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgdGFyZ2V0OiB7IHRhYklkIH0sXG4gICAgICAgIGZ1bmM6IChib2R5LCB4LCB5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbigneCcsICd5JywgYm9keSkoeCwgeSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFyZ3M6IFttc2cuY29kZSwgbXNnLngsIG1zZy55XSxcbiAgICAgICAgd29ybGQ6ICdNQUlOJyxcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZUdldFNjcm9sbCc6XG4gICAgICBjaHJvbWUuc2NyaXB0aW5nXG4gICAgICAgIC5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQgfSxcbiAgICAgICAgICBmdW5jOiAoYm9keSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbihib2R5KSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYXJnczogW21zZy5jb2RlXSxcbiAgICAgICAgICB3b3JsZDogJ01BSU4nLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigodmFsKSA9PiB7XG4gICAgICAgICAgc2VuZFJlc3BvbnNlKHZhbFswXS5yZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVkVGFiSGFuZGxlclBsYXkodGFiSWQsIGNoYW5nZUluZm8sIHRhYikge1xuICBpZiAoY2hhbmdlSW5mby5zdGF0dXMgPT0gJ2NvbXBsZXRlJykge1xuICAgIGV4ZWN1dGVDb250ZW50U2NyaXB0KHRhYi5pZCkudGhlbigoKSA9PiB7XG4gICAgICBjaHJvbWUucnVudGltZS5nZXRDb250ZXh0cyh7fSkudGhlbigoZXhpc3RpbmdDb250ZXh0cykgPT4ge1xuICAgICAgICBjb25zdCBvZmZzY3JlZW5Eb2N1bWVudCA9IGV4aXN0aW5nQ29udGV4dHMuZmluZCgoYykgPT4gYy5jb250ZXh0VHlwZSA9PT0gJ09GRlNDUkVFTl9ET0NVTUVOVCcpO1xuICAgICAgICBjb25zdCByZWNvcmRpbmcgPSBvZmZzY3JlZW5Eb2N1bWVudC5kb2N1bWVudFVybC5lbmRzV2l0aCgnI3JlY29yZGluZycpO1xuICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIHtcbiAgICAgICAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZUxvY2F0aW9uJyxcbiAgICAgICAgICBsb2NhdGlvbjogcmVjb3JkaW5nID8gJ3JlY29yZCcgOiAncGxheScsXG4gICAgICAgICAgdGFiSWQsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlZFRhYkhhbmRsZXJTY2VuYXJpbyh0YWJJZCwgY2hhbmdlSW5mbywgdGFiKSB7XG4gIGlmIChjaGFuZ2VJbmZvLnN0YXR1cyA9PSAnY29tcGxldGUnKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCd0YWJJZCcpLnRoZW4oKG9iaikgPT4ge1xuICAgICAgaWYgKG9iai50YWJJZCA9PSB0YWJJZCkge1xuICAgICAgICBleGVjdXRlQ29udGVudFNjcmlwdCh0YWIuaWQpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHNlbmREZWZhdWx0TG9jYXRpb24odGFiLmlkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VuZERlZmF1bHRMb2NhdGlvbih0YWJJZCkge1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydkZWZhdWx0TG9jYXRpb24nXSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgbG9jYXRpb24gPSByZXN1bHQuZGVmYXVsdExvY2F0aW9uIHx8ICdzY3JvbGwtY2FwdHVyZSc7XG4gICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlTG9jYXRpb24nLFxuICAgICAgbG9jYXRpb24sXG4gICAgICB0YWJJZCxcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVDb250ZW50U2NyaXB0KHRhYklkKSB7XG4gIHJldHVybiBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgIHRhcmdldDogeyB0YWJJZCB9LFxuICAgIGZpbGVzOiBbJ2NvbnRlbnQuanMnXSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZVdpbmRvdyh3aWR0aCwgaGVpZ2h0KSB7XG4gIGxldCBvcHRpb25zID0ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgfTtcbiAgY2hyb21lLndpbmRvd3MuZ2V0Q3VycmVudCh7IHBvcHVsYXRlOiBmYWxzZSB9LCAod2luKSA9PiB7XG4gICAgY2hyb21lLndpbmRvd3MudXBkYXRlKHdpbi5pZCwgb3B0aW9ucyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VJY29uKGNvbG9yID0gJycpIHtcbiAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICBwYXRoOiB7XG4gICAgICAxNjogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkMTYnICsgY29sb3IgKyAnLnBuZycpLFxuICAgICAgMzI6IGNocm9tZS5ydW50aW1lLmdldFVSTCgnYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDMyJyArIGNvbG9yICsgJy5wbmcnKSxcbiAgICAgIDQ4OiBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2Fzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQ0OCcgKyBjb2xvciArICcucG5nJyksXG4gICAgICAxMjg6IGNocm9tZS5ydW50aW1lLmdldFVSTCgnYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDEyOCcgKyBjb2xvciArICcucG5nJyksXG4gICAgfSxcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0UmVjb3JkaW5nKG1zZykge1xuICBjaGFuZ2VJY29uKCdfcmVkJyk7XG5cbiAgY29uc3Qgc3RyZWFtSWQgPSBhd2FpdCBjaHJvbWUudGFiQ2FwdHVyZS5nZXRNZWRpYVN0cmVhbUlkKHtcbiAgICB0YXJnZXRUYWJJZDogbXNnLnRhYklkLFxuICB9KTtcblxuICBjb25zdCBtZXNzYWdlID0gT2JqZWN0LmFzc2lnbih7fSwgbXNnKTtcbiAgT2JqZWN0LmFzc2lnbihtZXNzYWdlLCB7XG4gICAgdHlwZTogJ3Njcm9sbENhcHR1cmVTdGFydE9mZnNjcmVlblJlY29yZGluZycsXG4gICAgdGFyZ2V0OiAnb2Zmc2NyZWVuJyxcbiAgICBzdHJlYW1JZCxcbiAgfSk7XG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBzdG9wUmVjb3JkaW5nKCkge1xuICBjaGFuZ2VJY29uKCk7XG5cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlU3RvcE9mZnNjcmVlblJlY29yZGluZycsXG4gICAgdGFyZ2V0OiAnb2Zmc2NyZWVuJyxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0SW1hZ2VDYXB0dXJlKCkge1xuICBjaGFuZ2VJY29uKCdfcmVkJyk7XG59XG5cbmZ1bmN0aW9uIHN0b3BJbWFnZUNhcHR1cmUoKSB7XG4gIGNoYW5nZUljb24oKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdEFuYWx5dGljcyB9IGZyb20gJy4vYW5hbHl0aWNzJztcbmltcG9ydCB7IGluaXRCYWNrZ3JvdW5kUGFnZSB9IGZyb20gJy4vYmFja2dyb3VuZCc7XG5cbmluaXRBbmFseXRpY3MoJ0ctWDMzRUhIQkw1RycsICdfVjBKdXNMS1FkMmJmbjBzU09uczNRJyk7XG5pbml0QmFja2dyb3VuZFBhZ2UoKTtcbiJdLCJuYW1lcyI6WyJHQV9FTkRQT0lOVCIsIkdBX0RFQlVHX0VORFBPSU5UIiwiTUVBU1VSRU1FTlRfSUQiLCJBUElfU0VDUkVUIiwiREVGQVVMVF9FTkdBR0VNRU5UX1RJTUVfTVNFQyIsIlNFU1NJT05fRVhQSVJBVElPTl9JTl9NSU4iLCJpbml0QW5hbHl0aWNzIiwiaWQiLCJzZWNyZXQiLCJBbmFseXRpY3MiLCJjb25zdHJ1Y3RvciIsImRlYnVnIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZ2V0T3JDcmVhdGVDbGllbnRJZCIsImNsaWVudElkIiwiY2hyb21lIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0Iiwic2VsZiIsImNyeXB0byIsInJhbmRvbVVVSUQiLCJzZXQiLCJnZXRPckNyZWF0ZVNlc3Npb25JZCIsInNlc3Npb25EYXRhIiwic2Vzc2lvbiIsImN1cnJlbnRUaW1lSW5NcyIsIkRhdGUiLCJub3ciLCJ0aW1lc3RhbXAiLCJkdXJhdGlvbkluTWluIiwic2Vzc2lvbl9pZCIsInRvU3RyaW5nIiwiZmlyZUV2ZW50IiwibmFtZSIsInBhcmFtcyIsImVuZ2FnZW1lbnRfdGltZV9tc2VjIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xpZW50X2lkIiwiZXZlbnRzIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJlIiwiZXJyb3IiLCJmaXJlUGFnZVZpZXdFdmVudCIsInBhZ2VUaXRsZSIsInBhZ2VMb2NhdGlvbiIsImFkZGl0aW9uYWxQYXJhbXMiLCJwYWdlX3RpdGxlIiwicGFnZV9sb2NhdGlvbiIsImZpcmVFcnJvckV2ZW50IiwiYW5hbHl0aWNzIiwiaW5pdEJhY2tncm91bmRQYWdlIiwicnVudGltZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwib25NZXNzYWdlSGFuZGxlciIsImFjdGlvbiIsIm9uQ2xpY2tlZCIsInRhYiIsInNob3dNYWluUGFuZWwiLCJ1cmwiLCJ0YWJJZCIsImV4aXN0aW5nQ29udGV4dHMiLCJnZXRDb250ZXh0cyIsInJlY29yZGluZyIsIm9mZnNjcmVlbkRvY3VtZW50IiwiZmluZCIsImMiLCJjb250ZXh0VHlwZSIsIm9mZnNjcmVlbiIsImNyZWF0ZURvY3VtZW50IiwicmVhc29ucyIsImp1c3RpZmljYXRpb24iLCJkb2N1bWVudFVybCIsImVuZHNXaXRoIiwiZXhlY3V0ZUNvbnRlbnRTY3JpcHQiLCJ0aGVuIiwidGFicyIsInNlbmRNZXNzYWdlIiwidHlwZSIsImxvY2F0aW9uIiwiY2hhbmdlSWNvbiIsInNlbmREZWZhdWx0TG9jYXRpb24iLCJjYW52YXMiLCJtc2ciLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJtYWluUGFuZWwiLCJzdGFydFJlY29yZGluZyIsInN0b3BSZWNvcmRpbmciLCJyZXNpemVXaW5kb3ciLCJ3aWR0aCIsImhlaWdodCIsImNhdGVnb3J5IiwicGF0aCIsInNwbGl0IiwicG9wIiwiaGFuZGxlciIsInVwZGF0ZWRUYWJIYW5kbGVyU2NlbmFyaW8iLCJ1cGRhdGVkVGFiSGFuZGxlclBsYXkiLCJlbmFibGVkIiwib25VcGRhdGVkIiwicmVtb3ZlTGlzdGVuZXIiLCJzY3JpcHRpbmciLCJpbnNlcnRDU1MiLCJ0YXJnZXQiLCJjc3MiLCJPZmZzY3JlZW5DYW52YXMiLCJjYXB0dXJlVmlzaWJsZVRhYiIsImRhdGFVcmwiLCJzdGFydEltYWdlQ2FwdHVyZSIsInN0b3BJbWFnZUNhcHR1cmUiLCJleGVjdXRlU2NyaXB0IiwiZnVuYyIsIkZ1bmN0aW9uIiwiYXJncyIsImNvZGUiLCJ3b3JsZCIsInZhbCIsInJlc3VsdCIsIngiLCJ5IiwiY2hhbmdlSW5mbyIsInN0YXR1cyIsIm9iaiIsImRlZmF1bHRMb2NhdGlvbiIsImZpbGVzIiwib3B0aW9ucyIsIndpbmRvd3MiLCJnZXRDdXJyZW50IiwicG9wdWxhdGUiLCJ3aW4iLCJ1cGRhdGUiLCJjb2xvciIsInNldEljb24iLCJnZXRVUkwiLCJzdHJlYW1JZCIsInRhYkNhcHR1cmUiLCJnZXRNZWRpYVN0cmVhbUlkIiwidGFyZ2V0VGFiSWQiLCJtZXNzYWdlIiwiT2JqZWN0IiwiYXNzaWduIl0sInNvdXJjZVJvb3QiOiIifQ==