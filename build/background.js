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
      startRecording(msg, sender);
      break;
    case 'scrollCaptureStopRecording':
      stopRecording(msg, sender);
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
      console.log('!!!!!! background', msg);
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
async function startRecording(msg, sender) {
  changeIcon('_red');
  let promise;
  switch (msg.mediaSource) {
    case 'tab':
      promise = chrome.tabCapture.getMediaStreamId({
        targetTabId: msg.tabId
      });
      break;
    case 'desktop':
    default:
      promise = Promise.resolve();
      break;
  }
  promise.then(streamId => {
    const message = Object.assign({}, msg);
    Object.assign(message, {
      type: 'scrollCaptureStartOffscreenRecording',
      target: 'offscreen',
      streamId
    });
    chrome.runtime.sendMessage(message);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxFQUFFLHNDQUFzQztNQUM1QzBCLE1BQU0sRUFBRSxXQUFXO01BQ25Cc0M7SUFDRixDQUFDLENBQUM7SUFDRnZJLE1BQU0sQ0FBQzRDLE9BQU8sQ0FBQzBCLFdBQVcsQ0FBQ2tFLE9BQU8sQ0FBQztFQUNyQyxDQUFDLENBQUM7QUFDSjtBQUVBLFNBQVN2RCxhQUFhQSxDQUFBLEVBQUc7RUFDdkJSLFVBQVUsQ0FBQyxDQUFDO0VBRVp6RSxNQUFNLENBQUM0QyxPQUFPLENBQUMwQixXQUFXLENBQUM7SUFDekJDLElBQUksRUFBRSxxQ0FBcUM7SUFDM0MwQixNQUFNLEVBQUU7RUFDVixDQUFDLENBQUM7QUFDSjtBQUVBLFNBQVNLLGlCQUFpQkEsQ0FBQSxFQUFHO0VBQzNCN0IsVUFBVSxDQUFDLE1BQU0sQ0FBQztBQUNwQjtBQUVBLFNBQVM4QixnQkFBZ0JBLENBQUEsRUFBRztFQUMxQjlCLFVBQVUsQ0FBQyxDQUFDO0FBQ2Q7Ozs7OztVQ3pRQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QztBQUNNO0FBRWxEcEYseURBQWEsQ0FBQyxjQUFjLEVBQUUsd0JBQXdCLENBQUM7QUFDdkRzRCwrREFBa0IsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hbmFseXRpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy9iYWNrZ3JvdW5kLWRldmVsb3BtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdBX0VORFBPSU5UID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL21wL2NvbGxlY3QnO1xuY29uc3QgR0FfREVCVUdfRU5EUE9JTlQgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vZGVidWcvbXAvY29sbGVjdCc7XG5cbi8vIEdldCB2aWEgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL3Byb3RvY29sL2dhNC9zZW5kaW5nLWV2ZW50cz9jbGllbnRfdHlwZT1ndGFnI3JlY29tbWVuZGVkX3BhcmFtZXRlcnNfZm9yX3JlcG9ydHNcbmxldCBNRUFTVVJFTUVOVF9JRCA9ICc8bWVhc3VyZW1lbnRfaWQ+JztcbmxldCBBUElfU0VDUkVUID0gJzxhcGlfc2VjcmV0Pic7XG5jb25zdCBERUZBVUxUX0VOR0FHRU1FTlRfVElNRV9NU0VDID0gMTAwO1xuXG4vLyBEdXJhdGlvbiBvZiBpbmFjdGl2aXR5IGFmdGVyIHdoaWNoIGEgbmV3IHNlc3Npb24gaXMgY3JlYXRlZFxuY29uc3QgU0VTU0lPTl9FWFBJUkFUSU9OX0lOX01JTiA9IDMwO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEFuYWx5dGljcyhpZCwgc2VjcmV0KSB7XG4gIE1FQVNVUkVNRU5UX0lEID0gaWQ7XG4gIEFQSV9TRUNSRVQgPSBzZWNyZXQ7XG59XG5cbmNsYXNzIEFuYWx5dGljcyB7XG4gIGNvbnN0cnVjdG9yKGRlYnVnID0gZmFsc2UpIHtcbiAgICB0aGlzLmRlYnVnID0gZGVidWc7XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSBjbGllbnQgaWQsIG9yIGNyZWF0ZXMgYSBuZXcgb25lIGlmIG9uZSBkb2Vzbid0IGV4aXN0LlxuICAvLyBTdG9yZXMgY2xpZW50IGlkIGluIGxvY2FsIHN0b3JhZ2UgdG8ga2VlcCB0aGUgc2FtZSBjbGllbnQgaWQgYXMgbG9uZyBhc1xuICAvLyB0aGUgZXh0ZW5zaW9uIGlzIGluc3RhbGxlZC5cbiAgYXN5bmMgZ2V0T3JDcmVhdGVDbGllbnRJZCgpIHtcbiAgICBsZXQgeyBjbGllbnRJZCB9ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCdjbGllbnRJZCcpO1xuICAgIGlmICghY2xpZW50SWQpIHtcbiAgICAgIC8vIEdlbmVyYXRlIGEgdW5pcXVlIGNsaWVudCBJRCwgdGhlIGFjdHVhbCB2YWx1ZSBpcyBub3QgcmVsZXZhbnRcbiAgICAgIGNsaWVudElkID0gc2VsZi5jcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgY2xpZW50SWQgfSk7XG4gICAgfVxuICAgIHJldHVybiBjbGllbnRJZDtcbiAgfVxuXG4gIC8vIFJldHVybnMgdGhlIGN1cnJlbnQgc2Vzc2lvbiBpZCwgb3IgY3JlYXRlcyBhIG5ldyBvbmUgaWYgb25lIGRvZXNuJ3QgZXhpc3Qgb3JcbiAgLy8gdGhlIHByZXZpb3VzIG9uZSBoYXMgZXhwaXJlZC5cbiAgYXN5bmMgZ2V0T3JDcmVhdGVTZXNzaW9uSWQoKSB7XG4gICAgLy8gVXNlIHN0b3JhZ2Uuc2Vzc2lvbiBiZWNhdXNlIGl0IGlzIG9ubHkgaW4gbWVtb3J5XG4gICAgbGV0IHsgc2Vzc2lvbkRhdGEgfSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLnNlc3Npb24uZ2V0KCdzZXNzaW9uRGF0YScpO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lSW5NcyA9IERhdGUubm93KCk7XG4gICAgLy8gQ2hlY2sgaWYgc2Vzc2lvbiBleGlzdHMgYW5kIGlzIHN0aWxsIHZhbGlkXG4gICAgaWYgKHNlc3Npb25EYXRhICYmIHNlc3Npb25EYXRhLnRpbWVzdGFtcCkge1xuICAgICAgLy8gQ2FsY3VsYXRlIGhvdyBsb25nIGFnbyB0aGUgc2Vzc2lvbiB3YXMgbGFzdCB1cGRhdGVkXG4gICAgICBjb25zdCBkdXJhdGlvbkluTWluID0gKGN1cnJlbnRUaW1lSW5NcyAtIHNlc3Npb25EYXRhLnRpbWVzdGFtcCkgLyA2MDAwMDtcbiAgICAgIC8vIENoZWNrIGlmIGxhc3QgdXBkYXRlIGxheXMgcGFzdCB0aGUgc2Vzc2lvbiBleHBpcmF0aW9uIHRocmVzaG9sZFxuICAgICAgaWYgKGR1cmF0aW9uSW5NaW4gPiBTRVNTSU9OX0VYUElSQVRJT05fSU5fTUlOKSB7XG4gICAgICAgIC8vIENsZWFyIG9sZCBzZXNzaW9uIGlkIHRvIHN0YXJ0IGEgbmV3IHNlc3Npb25cbiAgICAgICAgc2Vzc2lvbkRhdGEgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVXBkYXRlIHRpbWVzdGFtcCB0byBrZWVwIHNlc3Npb24gYWxpdmVcbiAgICAgICAgc2Vzc2lvbkRhdGEudGltZXN0YW1wID0gY3VycmVudFRpbWVJbk1zO1xuICAgICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zZXNzaW9uLnNldCh7IHNlc3Npb25EYXRhIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXNlc3Npb25EYXRhKSB7XG4gICAgICAvLyBDcmVhdGUgYW5kIHN0b3JlIGEgbmV3IHNlc3Npb25cbiAgICAgIHNlc3Npb25EYXRhID0ge1xuICAgICAgICBzZXNzaW9uX2lkOiBjdXJyZW50VGltZUluTXMudG9TdHJpbmcoKSxcbiAgICAgICAgdGltZXN0YW1wOiBjdXJyZW50VGltZUluTXMudG9TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zZXNzaW9uLnNldCh7IHNlc3Npb25EYXRhIH0pO1xuICAgIH1cbiAgICByZXR1cm4gc2Vzc2lvbkRhdGEuc2Vzc2lvbl9pZDtcbiAgfVxuXG4gIC8vIEZpcmVzIGFuIGV2ZW50IHdpdGggb3B0aW9uYWwgcGFyYW1zLiBFdmVudCBuYW1lcyBtdXN0IG9ubHkgaW5jbHVkZSBsZXR0ZXJzIGFuZCB1bmRlcnNjb3Jlcy5cbiAgYXN5bmMgZmlyZUV2ZW50KG5hbWUsIHBhcmFtcyA9IHt9KSB7XG4gICAgLy8gQ29uZmlndXJlIHNlc3Npb24gaWQgYW5kIGVuZ2FnZW1lbnQgdGltZSBpZiBub3QgcHJlc2VudCwgZm9yIG1vcmUgZGV0YWlscyBzZWU6XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL3Byb3RvY29sL2dhNC9zZW5kaW5nLWV2ZW50cz9jbGllbnRfdHlwZT1ndGFnI3JlY29tbWVuZGVkX3BhcmFtZXRlcnNfZm9yX3JlcG9ydHNcbiAgICBpZiAoIXBhcmFtcy5zZXNzaW9uX2lkKSB7XG4gICAgICBwYXJhbXMuc2Vzc2lvbl9pZCA9IGF3YWl0IHRoaXMuZ2V0T3JDcmVhdGVTZXNzaW9uSWQoKTtcbiAgICB9XG4gICAgaWYgKCFwYXJhbXMuZW5nYWdlbWVudF90aW1lX21zZWMpIHtcbiAgICAgIHBhcmFtcy5lbmdhZ2VtZW50X3RpbWVfbXNlYyA9IERFRkFVTFRfRU5HQUdFTUVOVF9USU1FX01TRUM7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5kZWJ1ZyA/IEdBX0RFQlVHX0VORFBPSU5UIDogR0FfRU5EUE9JTlR9P21lYXN1cmVtZW50X2lkPSR7TUVBU1VSRU1FTlRfSUR9JmFwaV9zZWNyZXQ9JHtBUElfU0VDUkVUfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBjbGllbnRfaWQ6IGF3YWl0IHRoaXMuZ2V0T3JDcmVhdGVDbGllbnRJZCgpLFxuICAgICAgICAgIGV2ZW50czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgICBpZiAoIXRoaXMuZGVidWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdHb29nbGUgQW5hbHl0aWNzIHJlcXVlc3QgZmFpbGVkIHdpdGggYW4gZXhjZXB0aW9uJywgZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmlyZSBhIHBhZ2UgdmlldyBldmVudC5cbiAgYXN5bmMgZmlyZVBhZ2VWaWV3RXZlbnQocGFnZVRpdGxlLCBwYWdlTG9jYXRpb24sIGFkZGl0aW9uYWxQYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmZpcmVFdmVudCgncGFnZV92aWV3Jywge1xuICAgICAgcGFnZV90aXRsZTogcGFnZVRpdGxlLFxuICAgICAgcGFnZV9sb2NhdGlvbjogcGFnZUxvY2F0aW9uLFxuICAgICAgLi4uYWRkaXRpb25hbFBhcmFtcyxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEZpcmUgYW4gZXJyb3IgZXZlbnQuXG4gIGFzeW5jIGZpcmVFcnJvckV2ZW50KGVycm9yLCBhZGRpdGlvbmFsUGFyYW1zID0ge30pIHtcbiAgICAvLyBOb3RlOiAnZXJyb3InIGlzIGEgcmVzZXJ2ZWQgZXZlbnQgbmFtZSBhbmQgY2Fubm90IGJlIHVzZWRcbiAgICAvLyBzZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL3Byb3RvY29sL2dhNC9yZWZlcmVuY2U/Y2xpZW50X3R5cGU9Z3RhZyNyZXNlcnZlZF9uYW1lc1xuICAgIHJldHVybiB0aGlzLmZpcmVFdmVudCgnZXh0ZW5zaW9uX2Vycm9yJywge1xuICAgICAgLi4uZXJyb3IsXG4gICAgICAuLi5hZGRpdGlvbmFsUGFyYW1zLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhbmFseXRpY3MgPSBuZXcgQW5hbHl0aWNzKCk7XG4iLCJpbXBvcnQgeyBhbmFseXRpY3MgfSBmcm9tICcuL2FuYWx5dGljcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QmFja2dyb3VuZFBhZ2UoKSB7XG4gIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihvbk1lc3NhZ2VIYW5kbGVyKTtcbiAgY2hyb21lLmFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoKHRhYikgPT4ge1xuICAgIHNob3dNYWluUGFuZWwodGFiLmlkLCB0YWIudXJsKTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNob3dNYWluUGFuZWwodGFiSWQpIHtcbiAgY29uc3QgZXhpc3RpbmdDb250ZXh0cyA9IGF3YWl0IGNocm9tZS5ydW50aW1lLmdldENvbnRleHRzKHt9KTtcbiAgbGV0IHJlY29yZGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0IG9mZnNjcmVlbkRvY3VtZW50ID0gZXhpc3RpbmdDb250ZXh0cy5maW5kKChjKSA9PiBjLmNvbnRleHRUeXBlID09PSAnT0ZGU0NSRUVOX0RPQ1VNRU5UJyk7XG5cbiAgLy8gSWYgYW4gb2Zmc2NyZWVuIGRvY3VtZW50IGlzIG5vdCBhbHJlYWR5IG9wZW4sIGNyZWF0ZSBvbmUuXG4gIGlmICghb2Zmc2NyZWVuRG9jdW1lbnQpIHtcbiAgICAvLyBDcmVhdGUgYW4gb2Zmc2NyZWVuIGRvY3VtZW50LlxuICAgIGF3YWl0IGNocm9tZS5vZmZzY3JlZW4uY3JlYXRlRG9jdW1lbnQoe1xuICAgICAgdXJsOiAnb2Zmc2NyZWVuLmh0bWwnLFxuICAgICAgcmVhc29uczogWydVU0VSX01FRElBJ10sXG4gICAgICBqdXN0aWZpY2F0aW9uOiAnUmVjb3JkaW5nIGZyb20gY2hyb21lLnRhYkNhcHR1cmUgQVBJJyxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZWNvcmRpbmcgPSBvZmZzY3JlZW5Eb2N1bWVudC5kb2N1bWVudFVybC5lbmRzV2l0aCgnI3JlY29yZGluZycpO1xuICB9XG5cbiAgZXhlY3V0ZUNvbnRlbnRTY3JpcHQodGFiSWQpLnRoZW4oKCkgPT4ge1xuICAgIGlmIChyZWNvcmRpbmcpIHtcbiAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlTG9jYXRpb24nLFxuICAgICAgICBsb2NhdGlvbjogJ3N0b3AnLFxuICAgICAgICB0YWJJZCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFuZ2VJY29uKCcnKTtcbiAgICAgIHNlbmREZWZhdWx0TG9jYXRpb24odGFiSWQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmxldCBjYW52YXM7XG5cbmZ1bmN0aW9uIG9uTWVzc2FnZUhhbmRsZXIobXNnLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICBjb25zdCB0YWJJZCA9IG1zZy50YWJJZDtcbiAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVTaG93TWFpblBhbmVsJzpcbiAgICAgIHNob3dNYWluUGFuZWwodGFiSWQpO1xuICAgICAgc2VuZFJlc3BvbnNlKHsgbWFpblBhbmVsOiB0cnVlIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVN0YXJ0UmVjb3JkaW5nJzpcbiAgICAgIHN0YXJ0UmVjb3JkaW5nKG1zZywgc2VuZGVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVTdG9wUmVjb3JkaW5nJzpcbiAgICAgIHN0b3BSZWNvcmRpbmcobXNnLCBzZW5kZXIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVJlc2l6ZVdpbmRvdyc6XG4gICAgICByZXNpemVXaW5kb3cobXNnLndpZHRoLCBtc2cuaGVpZ2h0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVUcmFja0V2ZW50JzpcbiAgICAgIGFuYWx5dGljcy5maXJlRXZlbnQobXNnLmNhdGVnb3J5LCBtc2cucGFyYW1zKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVUcmFja1BhZ2UnOlxuICAgICAgYW5hbHl0aWNzLmZpcmVQYWdlVmlld0V2ZW50KG1zZy5wYXRoLnNwbGl0KCcvJykucG9wKCksIG1zZy5wYXRoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVVcGRhdGVkVGFiTGlzdGVuZXInOlxuICAgICAgbGV0IGhhbmRsZXI7XG4gICAgICBzd2l0Y2ggKG1zZy5sb2NhdGlvbikge1xuICAgICAgICBjYXNlICdzY2VuYXJpbyc6XG4gICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgdGFiSWQgfSk7XG4gICAgICAgICAgaGFuZGxlciA9IHVwZGF0ZWRUYWJIYW5kbGVyU2NlbmFyaW87XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BsYXknOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGhhbmRsZXIgPSB1cGRhdGVkVGFiSGFuZGxlclBsYXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAobXNnLmVuYWJsZWQpIHtcbiAgICAgICAgY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKGhhbmRsZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hyb21lLnRhYnMub25VcGRhdGVkLnJlbW92ZUxpc3RlbmVyKGhhbmRsZXIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZUluc2VydENTUyc6XG4gICAgICAvLyBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ3RhYklkJykudGhlbigob2JqKSA9PiB7XG4gICAgICBjaHJvbWUuc2NyaXB0aW5nLmluc2VydENTUyh7XG4gICAgICAgIHRhcmdldDogeyB0YWJJZCB9LFxuICAgICAgICBjc3M6IG1zZy5jc3MsXG4gICAgICB9KTtcbiAgICAgIC8vIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZUltYWdlQ2FwdHVyZUNhbnZhcyc6XG4gICAgICBjYW52YXMgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKG1zZy53aWR0aCwgbXNnLmhlaWdodCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlVmlzaWJsZVRhYic6XG4gICAgICBjaHJvbWUudGFicy5jYXB0dXJlVmlzaWJsZVRhYihudWxsLCB7fSwgKGRhdGFVcmwpID0+IHtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgZGF0YVVybCB9KTtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZUltYWdlQ2FwdHVyZVN0YXJ0JzpcbiAgICAgIHN0YXJ0SW1hZ2VDYXB0dXJlKG1zZyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlSW1hZ2VDYXB0dXJlU3RvcCc6XG4gICAgICBzdG9wSW1hZ2VDYXB0dXJlKG1zZyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlVmlkZW9VUkxCYWNrZ3JvdW5kJzpcbiAgICAgIG1zZy50eXBlID0gJ3Njcm9sbENhcHR1cmVWaWRlb1VSTCc7XG4gICAgICBjb25zb2xlLmxvZygnISEhISEhIGJhY2tncm91bmQnLCBtc2cpO1xuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIG1zZyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlRkZtcGVnTG9nVG9TVyc6XG4gICAgICBtc2cudHlwZSA9ICdzY3JvbGxDYXB0dXJlRkZtcGVnTG9nVG9DQyc7XG4gICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwgbXNnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVFeGVjdXRlU2NyaXB0JzpcbiAgICAgIGNocm9tZS5zY3JpcHRpbmdcbiAgICAgICAgLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICAgIHRhcmdldDogeyB0YWJJZCB9LFxuICAgICAgICAgIGZ1bmM6IChib2R5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKGJvZHkpKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhcmdzOiBbbXNnLmNvZGVdLFxuICAgICAgICAgIHdvcmxkOiAnTUFJTicsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICBzZW5kUmVzcG9uc2UodmFsWzBdLnJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVNldFNjcm9sbCc6XG4gICAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICB0YXJnZXQ6IHsgdGFiSWQgfSxcbiAgICAgICAgZnVuYzogKGJvZHksIHgsIHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKCd4JywgJ3knLCBib2R5KSh4LCB5KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXJnczogW21zZy5jb2RlLCBtc2cueCwgbXNnLnldLFxuICAgICAgICB3b3JsZDogJ01BSU4nLFxuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlR2V0U2Nyb2xsJzpcbiAgICAgIGNocm9tZS5zY3JpcHRpbmdcbiAgICAgICAgLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICAgIHRhcmdldDogeyB0YWJJZCB9LFxuICAgICAgICAgIGZ1bmM6IChib2R5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKGJvZHkpKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhcmdzOiBbbXNnLmNvZGVdLFxuICAgICAgICAgIHdvcmxkOiAnTUFJTicsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICBzZW5kUmVzcG9uc2UodmFsWzBdLnJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZWRUYWJIYW5kbGVyUGxheSh0YWJJZCwgY2hhbmdlSW5mbywgdGFiKSB7XG4gIGlmIChjaGFuZ2VJbmZvLnN0YXR1cyA9PSAnY29tcGxldGUnKSB7XG4gICAgZXhlY3V0ZUNvbnRlbnRTY3JpcHQodGFiLmlkKS50aGVuKCgpID0+IHtcbiAgICAgIGNocm9tZS5ydW50aW1lLmdldENvbnRleHRzKHt9KS50aGVuKChleGlzdGluZ0NvbnRleHRzKSA9PiB7XG4gICAgICAgIGNvbnN0IG9mZnNjcmVlbkRvY3VtZW50ID0gZXhpc3RpbmdDb250ZXh0cy5maW5kKChjKSA9PiBjLmNvbnRleHRUeXBlID09PSAnT0ZGU0NSRUVOX0RPQ1VNRU5UJyk7XG4gICAgICAgIGNvbnN0IHJlY29yZGluZyA9IG9mZnNjcmVlbkRvY3VtZW50LmRvY3VtZW50VXJsLmVuZHNXaXRoKCcjcmVjb3JkaW5nJyk7XG4gICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwge1xuICAgICAgICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlTG9jYXRpb24nLFxuICAgICAgICAgIGxvY2F0aW9uOiByZWNvcmRpbmcgPyAncmVjb3JkJyA6ICdwbGF5JyxcbiAgICAgICAgICB0YWJJZCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVkVGFiSGFuZGxlclNjZW5hcmlvKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpIHtcbiAgaWYgKGNoYW5nZUluZm8uc3RhdHVzID09ICdjb21wbGV0ZScpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ3RhYklkJykudGhlbigob2JqKSA9PiB7XG4gICAgICBpZiAob2JqLnRhYklkID09IHRhYklkKSB7XG4gICAgICAgIGV4ZWN1dGVDb250ZW50U2NyaXB0KHRhYi5pZCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgc2VuZERlZmF1bHRMb2NhdGlvbih0YWIuaWQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZW5kRGVmYXVsdExvY2F0aW9uKHRhYklkKSB7XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2RlZmF1bHRMb2NhdGlvbiddKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHJlc3VsdC5kZWZhdWx0TG9jYXRpb24gfHwgJ3Njcm9sbC1jYXB0dXJlJztcbiAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgdHlwZTogJ3Njcm9sbENhcHR1cmVMb2NhdGlvbicsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRhYklkLFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZUNvbnRlbnRTY3JpcHQodGFiSWQpIHtcbiAgcmV0dXJuIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgdGFyZ2V0OiB7IHRhYklkIH0sXG4gICAgZmlsZXM6IFsnY29udGVudC5qcyddLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzaXplV2luZG93KHdpZHRoLCBoZWlnaHQpIHtcbiAgbGV0IG9wdGlvbnMgPSB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICB9O1xuICBjaHJvbWUud2luZG93cy5nZXRDdXJyZW50KHsgcG9wdWxhdGU6IGZhbHNlIH0sICh3aW4pID0+IHtcbiAgICBjaHJvbWUud2luZG93cy51cGRhdGUod2luLmlkLCBvcHRpb25zKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUljb24oY29sb3IgPSAnJykge1xuICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgIHBhdGg6IHtcbiAgICAgIDE2OiBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2Fzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQxNicgKyBjb2xvciArICcucG5nJyksXG4gICAgICAzMjogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkMzInICsgY29sb3IgKyAnLnBuZycpLFxuICAgICAgNDg6IGNocm9tZS5ydW50aW1lLmdldFVSTCgnYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDQ4JyArIGNvbG9yICsgJy5wbmcnKSxcbiAgICAgIDEyODogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkMTI4JyArIGNvbG9yICsgJy5wbmcnKSxcbiAgICB9LFxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3RhcnRSZWNvcmRpbmcobXNnLCBzZW5kZXIpIHtcbiAgY2hhbmdlSWNvbignX3JlZCcpO1xuXG4gIGxldCBwcm9taXNlO1xuICBzd2l0Y2ggKG1zZy5tZWRpYVNvdXJjZSkge1xuICAgIGNhc2UgJ3RhYic6XG4gICAgICBwcm9taXNlID0gY2hyb21lLnRhYkNhcHR1cmUuZ2V0TWVkaWFTdHJlYW1JZCh7XG4gICAgICAgIHRhcmdldFRhYklkOiBtc2cudGFiSWQsXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Rlc2t0b3AnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHByb21pc2UudGhlbigoc3RyZWFtSWQpID0+IHtcbiAgICBjb25zdCBtZXNzYWdlID0gT2JqZWN0LmFzc2lnbih7fSwgbXNnKTtcbiAgICBPYmplY3QuYXNzaWduKG1lc3NhZ2UsIHtcbiAgICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlU3RhcnRPZmZzY3JlZW5SZWNvcmRpbmcnLFxuICAgICAgdGFyZ2V0OiAnb2Zmc2NyZWVuJyxcbiAgICAgIHN0cmVhbUlkLFxuICAgIH0pO1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RvcFJlY29yZGluZygpIHtcbiAgY2hhbmdlSWNvbigpO1xuXG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVN0b3BPZmZzY3JlZW5SZWNvcmRpbmcnLFxuICAgIHRhcmdldDogJ29mZnNjcmVlbicsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdGFydEltYWdlQ2FwdHVyZSgpIHtcbiAgY2hhbmdlSWNvbignX3JlZCcpO1xufVxuXG5mdW5jdGlvbiBzdG9wSW1hZ2VDYXB0dXJlKCkge1xuICBjaGFuZ2VJY29uKCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRBbmFseXRpY3MgfSBmcm9tICcuL2FuYWx5dGljcyc7XG5pbXBvcnQgeyBpbml0QmFja2dyb3VuZFBhZ2UgfSBmcm9tICcuL2JhY2tncm91bmQnO1xuXG5pbml0QW5hbHl0aWNzKCdHLVgzM0VISEJMNUcnLCAnX1YwSnVzTEtRZDJiZm4wc1NPbnMzUScpO1xuaW5pdEJhY2tncm91bmRQYWdlKCk7XG4iXSwibmFtZXMiOlsiR0FfRU5EUE9JTlQiLCJHQV9ERUJVR19FTkRQT0lOVCIsIk1FQVNVUkVNRU5UX0lEIiwiQVBJX1NFQ1JFVCIsIkRFRkFVTFRfRU5HQUdFTUVOVF9USU1FX01TRUMiLCJTRVNTSU9OX0VYUElSQVRJT05fSU5fTUlOIiwiaW5pdEFuYWx5dGljcyIsImlkIiwic2VjcmV0IiwiQW5hbHl0aWNzIiwiY29uc3RydWN0b3IiLCJkZWJ1ZyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImdldE9yQ3JlYXRlQ2xpZW50SWQiLCJjbGllbnRJZCIsImNocm9tZSIsInN0b3JhZ2UiLCJsb2NhbCIsImdldCIsInNlbGYiLCJjcnlwdG8iLCJyYW5kb21VVUlEIiwic2V0IiwiZ2V0T3JDcmVhdGVTZXNzaW9uSWQiLCJzZXNzaW9uRGF0YSIsInNlc3Npb24iLCJjdXJyZW50VGltZUluTXMiLCJEYXRlIiwibm93IiwidGltZXN0YW1wIiwiZHVyYXRpb25Jbk1pbiIsInNlc3Npb25faWQiLCJ0b1N0cmluZyIsImZpcmVFdmVudCIsIm5hbWUiLCJwYXJhbXMiLCJlbmdhZ2VtZW50X3RpbWVfbXNlYyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNsaWVudF9pZCIsImV2ZW50cyIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiZSIsImVycm9yIiwiZmlyZVBhZ2VWaWV3RXZlbnQiLCJwYWdlVGl0bGUiLCJwYWdlTG9jYXRpb24iLCJhZGRpdGlvbmFsUGFyYW1zIiwicGFnZV90aXRsZSIsInBhZ2VfbG9jYXRpb24iLCJmaXJlRXJyb3JFdmVudCIsImFuYWx5dGljcyIsImluaXRCYWNrZ3JvdW5kUGFnZSIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsIm9uTWVzc2FnZUhhbmRsZXIiLCJhY3Rpb24iLCJvbkNsaWNrZWQiLCJ0YWIiLCJzaG93TWFpblBhbmVsIiwidXJsIiwidGFiSWQiLCJleGlzdGluZ0NvbnRleHRzIiwiZ2V0Q29udGV4dHMiLCJyZWNvcmRpbmciLCJvZmZzY3JlZW5Eb2N1bWVudCIsImZpbmQiLCJjIiwiY29udGV4dFR5cGUiLCJvZmZzY3JlZW4iLCJjcmVhdGVEb2N1bWVudCIsInJlYXNvbnMiLCJqdXN0aWZpY2F0aW9uIiwiZG9jdW1lbnRVcmwiLCJlbmRzV2l0aCIsImV4ZWN1dGVDb250ZW50U2NyaXB0IiwidGhlbiIsInRhYnMiLCJzZW5kTWVzc2FnZSIsInR5cGUiLCJsb2NhdGlvbiIsImNoYW5nZUljb24iLCJzZW5kRGVmYXVsdExvY2F0aW9uIiwiY2FudmFzIiwibXNnIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwibWFpblBhbmVsIiwic3RhcnRSZWNvcmRpbmciLCJzdG9wUmVjb3JkaW5nIiwicmVzaXplV2luZG93Iiwid2lkdGgiLCJoZWlnaHQiLCJjYXRlZ29yeSIsInBhdGgiLCJzcGxpdCIsInBvcCIsImhhbmRsZXIiLCJ1cGRhdGVkVGFiSGFuZGxlclNjZW5hcmlvIiwidXBkYXRlZFRhYkhhbmRsZXJQbGF5IiwiZW5hYmxlZCIsIm9uVXBkYXRlZCIsInJlbW92ZUxpc3RlbmVyIiwic2NyaXB0aW5nIiwiaW5zZXJ0Q1NTIiwidGFyZ2V0IiwiY3NzIiwiT2Zmc2NyZWVuQ2FudmFzIiwiY2FwdHVyZVZpc2libGVUYWIiLCJkYXRhVXJsIiwic3RhcnRJbWFnZUNhcHR1cmUiLCJzdG9wSW1hZ2VDYXB0dXJlIiwiZXhlY3V0ZVNjcmlwdCIsImZ1bmMiLCJGdW5jdGlvbiIsImFyZ3MiLCJjb2RlIiwid29ybGQiLCJ2YWwiLCJyZXN1bHQiLCJ4IiwieSIsImNoYW5nZUluZm8iLCJzdGF0dXMiLCJvYmoiLCJkZWZhdWx0TG9jYXRpb24iLCJmaWxlcyIsIm9wdGlvbnMiLCJ3aW5kb3dzIiwiZ2V0Q3VycmVudCIsInBvcHVsYXRlIiwid2luIiwidXBkYXRlIiwiY29sb3IiLCJzZXRJY29uIiwiZ2V0VVJMIiwicHJvbWlzZSIsIm1lZGlhU291cmNlIiwidGFiQ2FwdHVyZSIsImdldE1lZGlhU3RyZWFtSWQiLCJ0YXJnZXRUYWJJZCIsIlByb21pc2UiLCJyZXNvbHZlIiwic3RyZWFtSWQiLCJtZXNzYWdlIiwiT2JqZWN0IiwiYXNzaWduIl0sInNvdXJjZVJvb3QiOiIifQ==