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
  executeScript(tabId).then(() => {
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
  switch (msg.type) {
    case 'scrollCaptureShowMainPanel':
      showMainPanel(msg.tabId);
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
            tabId: msg.tabId
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
          tabId: msg.tabId
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
      chrome.tabs.sendMessage(msg.tabId, msg);
      break;
    case 'scrollCaptureFFmpegLogToSW':
      msg.type = 'scrollCaptureFFmpegLogToCC';
      chrome.tabs.sendMessage(msg.tabId, msg);
      break;
  }
  return true;
}
function updatedTabHandlerPlay(tabId, changeInfo, tab) {
  executeScript(tab.id).then(() => {
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
function updatedTabHandlerScenario(tabId, changeInfo, tab) {
  chrome.storage.local.get('tabId').then(obj => {
    if (obj.tabId == tabId) {
      executeScript(tab.id).then(() => {
        sendDefaultLocation(tab.id);
      });
    }
  });
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
function executeScript(tabId) {
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
async function startRecording(data) {
  changeIcon('_red');
  const streamId = await chrome.tabCapture.getMediaStreamId({
    targetTabId: data.tabId
  });
  const message = Object.assign({}, data);
  Object.assign(message, {
    type: 'scrollCaptureStartOffscreenRecording',
    target: 'offscreen',
    streamId,
    tabId: data.tabId
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QztBQUNNO0FBRWxEcEYseURBQWEsQ0FBQyxjQUFjLEVBQUUsd0JBQXdCLENBQUM7QUFDdkRzRCwrREFBa0IsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hbmFseXRpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy9iYWNrZ3JvdW5kLWRldmVsb3BtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdBX0VORFBPSU5UID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL21wL2NvbGxlY3QnO1xuY29uc3QgR0FfREVCVUdfRU5EUE9JTlQgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vZGVidWcvbXAvY29sbGVjdCc7XG5cbi8vIEdldCB2aWEgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL3Byb3RvY29sL2dhNC9zZW5kaW5nLWV2ZW50cz9jbGllbnRfdHlwZT1ndGFnI3JlY29tbWVuZGVkX3BhcmFtZXRlcnNfZm9yX3JlcG9ydHNcbmxldCBNRUFTVVJFTUVOVF9JRCA9ICc8bWVhc3VyZW1lbnRfaWQ+JztcbmxldCBBUElfU0VDUkVUID0gJzxhcGlfc2VjcmV0Pic7XG5jb25zdCBERUZBVUxUX0VOR0FHRU1FTlRfVElNRV9NU0VDID0gMTAwO1xuXG4vLyBEdXJhdGlvbiBvZiBpbmFjdGl2aXR5IGFmdGVyIHdoaWNoIGEgbmV3IHNlc3Npb24gaXMgY3JlYXRlZFxuY29uc3QgU0VTU0lPTl9FWFBJUkFUSU9OX0lOX01JTiA9IDMwO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEFuYWx5dGljcyhpZCwgc2VjcmV0KSB7XG4gIE1FQVNVUkVNRU5UX0lEID0gaWQ7XG4gIEFQSV9TRUNSRVQgPSBzZWNyZXQ7XG59XG5cbmNsYXNzIEFuYWx5dGljcyB7XG4gIGNvbnN0cnVjdG9yKGRlYnVnID0gZmFsc2UpIHtcbiAgICB0aGlzLmRlYnVnID0gZGVidWc7XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSBjbGllbnQgaWQsIG9yIGNyZWF0ZXMgYSBuZXcgb25lIGlmIG9uZSBkb2Vzbid0IGV4aXN0LlxuICAvLyBTdG9yZXMgY2xpZW50IGlkIGluIGxvY2FsIHN0b3JhZ2UgdG8ga2VlcCB0aGUgc2FtZSBjbGllbnQgaWQgYXMgbG9uZyBhc1xuICAvLyB0aGUgZXh0ZW5zaW9uIGlzIGluc3RhbGxlZC5cbiAgYXN5bmMgZ2V0T3JDcmVhdGVDbGllbnRJZCgpIHtcbiAgICBsZXQgeyBjbGllbnRJZCB9ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCdjbGllbnRJZCcpO1xuICAgIGlmICghY2xpZW50SWQpIHtcbiAgICAgIC8vIEdlbmVyYXRlIGEgdW5pcXVlIGNsaWVudCBJRCwgdGhlIGFjdHVhbCB2YWx1ZSBpcyBub3QgcmVsZXZhbnRcbiAgICAgIGNsaWVudElkID0gc2VsZi5jcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgY2xpZW50SWQgfSk7XG4gICAgfVxuICAgIHJldHVybiBjbGllbnRJZDtcbiAgfVxuXG4gIC8vIFJldHVybnMgdGhlIGN1cnJlbnQgc2Vzc2lvbiBpZCwgb3IgY3JlYXRlcyBhIG5ldyBvbmUgaWYgb25lIGRvZXNuJ3QgZXhpc3Qgb3JcbiAgLy8gdGhlIHByZXZpb3VzIG9uZSBoYXMgZXhwaXJlZC5cbiAgYXN5bmMgZ2V0T3JDcmVhdGVTZXNzaW9uSWQoKSB7XG4gICAgLy8gVXNlIHN0b3JhZ2Uuc2Vzc2lvbiBiZWNhdXNlIGl0IGlzIG9ubHkgaW4gbWVtb3J5XG4gICAgbGV0IHsgc2Vzc2lvbkRhdGEgfSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLnNlc3Npb24uZ2V0KCdzZXNzaW9uRGF0YScpO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lSW5NcyA9IERhdGUubm93KCk7XG4gICAgLy8gQ2hlY2sgaWYgc2Vzc2lvbiBleGlzdHMgYW5kIGlzIHN0aWxsIHZhbGlkXG4gICAgaWYgKHNlc3Npb25EYXRhICYmIHNlc3Npb25EYXRhLnRpbWVzdGFtcCkge1xuICAgICAgLy8gQ2FsY3VsYXRlIGhvdyBsb25nIGFnbyB0aGUgc2Vzc2lvbiB3YXMgbGFzdCB1cGRhdGVkXG4gICAgICBjb25zdCBkdXJhdGlvbkluTWluID0gKGN1cnJlbnRUaW1lSW5NcyAtIHNlc3Npb25EYXRhLnRpbWVzdGFtcCkgLyA2MDAwMDtcbiAgICAgIC8vIENoZWNrIGlmIGxhc3QgdXBkYXRlIGxheXMgcGFzdCB0aGUgc2Vzc2lvbiBleHBpcmF0aW9uIHRocmVzaG9sZFxuICAgICAgaWYgKGR1cmF0aW9uSW5NaW4gPiBTRVNTSU9OX0VYUElSQVRJT05fSU5fTUlOKSB7XG4gICAgICAgIC8vIENsZWFyIG9sZCBzZXNzaW9uIGlkIHRvIHN0YXJ0IGEgbmV3IHNlc3Npb25cbiAgICAgICAgc2Vzc2lvbkRhdGEgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVXBkYXRlIHRpbWVzdGFtcCB0byBrZWVwIHNlc3Npb24gYWxpdmVcbiAgICAgICAgc2Vzc2lvbkRhdGEudGltZXN0YW1wID0gY3VycmVudFRpbWVJbk1zO1xuICAgICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zZXNzaW9uLnNldCh7IHNlc3Npb25EYXRhIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXNlc3Npb25EYXRhKSB7XG4gICAgICAvLyBDcmVhdGUgYW5kIHN0b3JlIGEgbmV3IHNlc3Npb25cbiAgICAgIHNlc3Npb25EYXRhID0ge1xuICAgICAgICBzZXNzaW9uX2lkOiBjdXJyZW50VGltZUluTXMudG9TdHJpbmcoKSxcbiAgICAgICAgdGltZXN0YW1wOiBjdXJyZW50VGltZUluTXMudG9TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zZXNzaW9uLnNldCh7IHNlc3Npb25EYXRhIH0pO1xuICAgIH1cbiAgICByZXR1cm4gc2Vzc2lvbkRhdGEuc2Vzc2lvbl9pZDtcbiAgfVxuXG4gIC8vIEZpcmVzIGFuIGV2ZW50IHdpdGggb3B0aW9uYWwgcGFyYW1zLiBFdmVudCBuYW1lcyBtdXN0IG9ubHkgaW5jbHVkZSBsZXR0ZXJzIGFuZCB1bmRlcnNjb3Jlcy5cbiAgYXN5bmMgZmlyZUV2ZW50KG5hbWUsIHBhcmFtcyA9IHt9KSB7XG4gICAgLy8gQ29uZmlndXJlIHNlc3Npb24gaWQgYW5kIGVuZ2FnZW1lbnQgdGltZSBpZiBub3QgcHJlc2VudCwgZm9yIG1vcmUgZGV0YWlscyBzZWU6XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL3Byb3RvY29sL2dhNC9zZW5kaW5nLWV2ZW50cz9jbGllbnRfdHlwZT1ndGFnI3JlY29tbWVuZGVkX3BhcmFtZXRlcnNfZm9yX3JlcG9ydHNcbiAgICBpZiAoIXBhcmFtcy5zZXNzaW9uX2lkKSB7XG4gICAgICBwYXJhbXMuc2Vzc2lvbl9pZCA9IGF3YWl0IHRoaXMuZ2V0T3JDcmVhdGVTZXNzaW9uSWQoKTtcbiAgICB9XG4gICAgaWYgKCFwYXJhbXMuZW5nYWdlbWVudF90aW1lX21zZWMpIHtcbiAgICAgIHBhcmFtcy5lbmdhZ2VtZW50X3RpbWVfbXNlYyA9IERFRkFVTFRfRU5HQUdFTUVOVF9USU1FX01TRUM7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5kZWJ1ZyA/IEdBX0RFQlVHX0VORFBPSU5UIDogR0FfRU5EUE9JTlR9P21lYXN1cmVtZW50X2lkPSR7TUVBU1VSRU1FTlRfSUR9JmFwaV9zZWNyZXQ9JHtBUElfU0VDUkVUfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBjbGllbnRfaWQ6IGF3YWl0IHRoaXMuZ2V0T3JDcmVhdGVDbGllbnRJZCgpLFxuICAgICAgICAgIGV2ZW50czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgICBpZiAoIXRoaXMuZGVidWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdHb29nbGUgQW5hbHl0aWNzIHJlcXVlc3QgZmFpbGVkIHdpdGggYW4gZXhjZXB0aW9uJywgZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmlyZSBhIHBhZ2UgdmlldyBldmVudC5cbiAgYXN5bmMgZmlyZVBhZ2VWaWV3RXZlbnQocGFnZVRpdGxlLCBwYWdlTG9jYXRpb24sIGFkZGl0aW9uYWxQYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmZpcmVFdmVudCgncGFnZV92aWV3Jywge1xuICAgICAgcGFnZV90aXRsZTogcGFnZVRpdGxlLFxuICAgICAgcGFnZV9sb2NhdGlvbjogcGFnZUxvY2F0aW9uLFxuICAgICAgLi4uYWRkaXRpb25hbFBhcmFtcyxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEZpcmUgYW4gZXJyb3IgZXZlbnQuXG4gIGFzeW5jIGZpcmVFcnJvckV2ZW50KGVycm9yLCBhZGRpdGlvbmFsUGFyYW1zID0ge30pIHtcbiAgICAvLyBOb3RlOiAnZXJyb3InIGlzIGEgcmVzZXJ2ZWQgZXZlbnQgbmFtZSBhbmQgY2Fubm90IGJlIHVzZWRcbiAgICAvLyBzZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL3Byb3RvY29sL2dhNC9yZWZlcmVuY2U/Y2xpZW50X3R5cGU9Z3RhZyNyZXNlcnZlZF9uYW1lc1xuICAgIHJldHVybiB0aGlzLmZpcmVFdmVudCgnZXh0ZW5zaW9uX2Vycm9yJywge1xuICAgICAgLi4uZXJyb3IsXG4gICAgICAuLi5hZGRpdGlvbmFsUGFyYW1zLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhbmFseXRpY3MgPSBuZXcgQW5hbHl0aWNzKCk7XG4iLCJpbXBvcnQgeyBhbmFseXRpY3MgfSBmcm9tICcuL2FuYWx5dGljcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QmFja2dyb3VuZFBhZ2UoKSB7XG4gIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihvbk1lc3NhZ2VIYW5kbGVyKTtcbiAgY2hyb21lLmFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoKHRhYikgPT4ge1xuICAgIHNob3dNYWluUGFuZWwodGFiLmlkLCB0YWIudXJsKTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNob3dNYWluUGFuZWwodGFiSWQpIHtcbiAgY29uc3QgZXhpc3RpbmdDb250ZXh0cyA9IGF3YWl0IGNocm9tZS5ydW50aW1lLmdldENvbnRleHRzKHt9KTtcbiAgbGV0IHJlY29yZGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0IG9mZnNjcmVlbkRvY3VtZW50ID0gZXhpc3RpbmdDb250ZXh0cy5maW5kKChjKSA9PiBjLmNvbnRleHRUeXBlID09PSAnT0ZGU0NSRUVOX0RPQ1VNRU5UJyk7XG5cbiAgLy8gSWYgYW4gb2Zmc2NyZWVuIGRvY3VtZW50IGlzIG5vdCBhbHJlYWR5IG9wZW4sIGNyZWF0ZSBvbmUuXG4gIGlmICghb2Zmc2NyZWVuRG9jdW1lbnQpIHtcbiAgICAvLyBDcmVhdGUgYW4gb2Zmc2NyZWVuIGRvY3VtZW50LlxuICAgIGF3YWl0IGNocm9tZS5vZmZzY3JlZW4uY3JlYXRlRG9jdW1lbnQoe1xuICAgICAgdXJsOiAnb2Zmc2NyZWVuLmh0bWwnLFxuICAgICAgcmVhc29uczogWydVU0VSX01FRElBJ10sXG4gICAgICBqdXN0aWZpY2F0aW9uOiAnUmVjb3JkaW5nIGZyb20gY2hyb21lLnRhYkNhcHR1cmUgQVBJJyxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZWNvcmRpbmcgPSBvZmZzY3JlZW5Eb2N1bWVudC5kb2N1bWVudFVybC5lbmRzV2l0aCgnI3JlY29yZGluZycpO1xuICB9XG5cbiAgZXhlY3V0ZVNjcmlwdCh0YWJJZCkudGhlbigoKSA9PiB7XG4gICAgaWYgKHJlY29yZGluZykge1xuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgICAgdHlwZTogJ3Njcm9sbENhcHR1cmVMb2NhdGlvbicsXG4gICAgICAgIGxvY2F0aW9uOiAnc3RvcCcsXG4gICAgICAgIHRhYklkLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYW5nZUljb24oJycpO1xuICAgICAgc2VuZERlZmF1bHRMb2NhdGlvbih0YWJJZCk7XG4gICAgfVxuICB9KTtcbn1cblxubGV0IGNhbnZhcztcblxuZnVuY3Rpb24gb25NZXNzYWdlSGFuZGxlcihtc2csIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlU2hvd01haW5QYW5lbCc6XG4gICAgICBzaG93TWFpblBhbmVsKG1zZy50YWJJZCk7XG4gICAgICBzZW5kUmVzcG9uc2UoeyBtYWluUGFuZWw6IHRydWUgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlU3RhcnRSZWNvcmRpbmcnOlxuICAgICAgc3RhcnRSZWNvcmRpbmcobXNnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVTdG9wUmVjb3JkaW5nJzpcbiAgICAgIHN0b3BSZWNvcmRpbmcoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVSZXNpemVXaW5kb3cnOlxuICAgICAgcmVzaXplV2luZG93KG1zZy53aWR0aCwgbXNnLmhlaWdodCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlVHJhY2tFdmVudCc6XG4gICAgICBhbmFseXRpY3MuZmlyZUV2ZW50KG1zZy5jYXRlZ29yeSwgbXNnLnBhcmFtcyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlVHJhY2tQYWdlJzpcbiAgICAgIGFuYWx5dGljcy5maXJlUGFnZVZpZXdFdmVudChtc2cucGF0aC5zcGxpdCgnLycpLnBvcCgpLCBtc2cucGF0aCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlVXBkYXRlZFRhYkxpc3RlbmVyJzpcbiAgICAgIGxldCBoYW5kbGVyO1xuICAgICAgc3dpdGNoIChtc2cubG9jYXRpb24pIHtcbiAgICAgICAgY2FzZSAnc2NlbmFyaW8nOlxuICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHRhYklkOiBtc2cudGFiSWQgfSk7XG4gICAgICAgICAgaGFuZGxlciA9IHVwZGF0ZWRUYWJIYW5kbGVyU2NlbmFyaW87XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BsYXknOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGhhbmRsZXIgPSB1cGRhdGVkVGFiSGFuZGxlclBsYXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAobXNnLmVuYWJsZWQpIHtcbiAgICAgICAgY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKGhhbmRsZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hyb21lLnRhYnMub25VcGRhdGVkLnJlbW92ZUxpc3RlbmVyKGhhbmRsZXIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZUluc2VydENTUyc6XG4gICAgICAvLyBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ3RhYklkJykudGhlbigob2JqKSA9PiB7XG4gICAgICBjaHJvbWUuc2NyaXB0aW5nLmluc2VydENTUyh7XG4gICAgICAgIHRhcmdldDogeyB0YWJJZDogbXNnLnRhYklkIH0sXG4gICAgICAgIGNzczogbXNnLmNzcyxcbiAgICAgIH0pO1xuICAgICAgLy8gfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlSW1hZ2VDYXB0dXJlQ2FudmFzJzpcbiAgICAgIGNhbnZhcyA9IG5ldyBPZmZzY3JlZW5DYW52YXMobXNnLndpZHRoLCBtc2cuaGVpZ2h0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVWaXNpYmxlVGFiJzpcbiAgICAgIGNocm9tZS50YWJzLmNhcHR1cmVWaXNpYmxlVGFiKG51bGwsIHt9LCAoZGF0YVVybCkgPT4ge1xuICAgICAgICBzZW5kUmVzcG9uc2UoeyBkYXRhVXJsIH0pO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlSW1hZ2VDYXB0dXJlU3RhcnQnOlxuICAgICAgc3RhcnRJbWFnZUNhcHR1cmUobXNnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVJbWFnZUNhcHR1cmVTdG9wJzpcbiAgICAgIHN0b3BJbWFnZUNhcHR1cmUobXNnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVWaWRlb1VSTEJhY2tncm91bmQnOlxuICAgICAgbXNnLnR5cGUgPSAnc2Nyb2xsQ2FwdHVyZVZpZGVvVVJMJztcbiAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKG1zZy50YWJJZCwgbXNnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVGRm1wZWdMb2dUb1NXJzpcbiAgICAgIG1zZy50eXBlID0gJ3Njcm9sbENhcHR1cmVGRm1wZWdMb2dUb0NDJztcbiAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKG1zZy50YWJJZCwgbXNnKTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVkVGFiSGFuZGxlclBsYXkodGFiSWQsIGNoYW5nZUluZm8sIHRhYikge1xuICBleGVjdXRlU2NyaXB0KHRhYi5pZCkudGhlbigoKSA9PiB7XG4gICAgY2hyb21lLnJ1bnRpbWUuZ2V0Q29udGV4dHMoe30pLnRoZW4oKGV4aXN0aW5nQ29udGV4dHMpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNjcmVlbkRvY3VtZW50ID0gZXhpc3RpbmdDb250ZXh0cy5maW5kKChjKSA9PiBjLmNvbnRleHRUeXBlID09PSAnT0ZGU0NSRUVOX0RPQ1VNRU5UJyk7XG4gICAgICBjb25zdCByZWNvcmRpbmcgPSBvZmZzY3JlZW5Eb2N1bWVudC5kb2N1bWVudFVybC5lbmRzV2l0aCgnI3JlY29yZGluZycpO1xuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7XG4gICAgICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlTG9jYXRpb24nLFxuICAgICAgICBsb2NhdGlvbjogcmVjb3JkaW5nID8gJ3JlY29yZCcgOiAncGxheScsXG4gICAgICAgIHRhYklkLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVkVGFiSGFuZGxlclNjZW5hcmlvKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpIHtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCd0YWJJZCcpLnRoZW4oKG9iaikgPT4ge1xuICAgIGlmIChvYmoudGFiSWQgPT0gdGFiSWQpIHtcbiAgICAgIGV4ZWN1dGVTY3JpcHQodGFiLmlkKS50aGVuKCgpID0+IHtcbiAgICAgICAgc2VuZERlZmF1bHRMb2NhdGlvbih0YWIuaWQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2VuZERlZmF1bHRMb2NhdGlvbih0YWJJZCkge1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydkZWZhdWx0TG9jYXRpb24nXSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgbG9jYXRpb24gPSByZXN1bHQuZGVmYXVsdExvY2F0aW9uIHx8ICdzY3JvbGwtY2FwdHVyZSc7XG4gICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlTG9jYXRpb24nLFxuICAgICAgbG9jYXRpb24sXG4gICAgICB0YWJJZCxcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVTY3JpcHQodGFiSWQpIHtcbiAgcmV0dXJuIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgdGFyZ2V0OiB7IHRhYklkIH0sXG4gICAgZmlsZXM6IFsnY29udGVudC5qcyddLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzaXplV2luZG93KHdpZHRoLCBoZWlnaHQpIHtcbiAgbGV0IG9wdGlvbnMgPSB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICB9O1xuICBjaHJvbWUud2luZG93cy5nZXRDdXJyZW50KHsgcG9wdWxhdGU6IGZhbHNlIH0sICh3aW4pID0+IHtcbiAgICBjaHJvbWUud2luZG93cy51cGRhdGUod2luLmlkLCBvcHRpb25zKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUljb24oY29sb3IgPSAnJykge1xuICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgIHBhdGg6IHtcbiAgICAgIDE2OiBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2Fzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQxNicgKyBjb2xvciArICcucG5nJyksXG4gICAgICAzMjogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkMzInICsgY29sb3IgKyAnLnBuZycpLFxuICAgICAgNDg6IGNocm9tZS5ydW50aW1lLmdldFVSTCgnYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDQ4JyArIGNvbG9yICsgJy5wbmcnKSxcbiAgICAgIDEyODogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkMTI4JyArIGNvbG9yICsgJy5wbmcnKSxcbiAgICB9LFxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3RhcnRSZWNvcmRpbmcoZGF0YSkge1xuICBjaGFuZ2VJY29uKCdfcmVkJyk7XG5cbiAgY29uc3Qgc3RyZWFtSWQgPSBhd2FpdCBjaHJvbWUudGFiQ2FwdHVyZS5nZXRNZWRpYVN0cmVhbUlkKHtcbiAgICB0YXJnZXRUYWJJZDogZGF0YS50YWJJZCxcbiAgfSk7XG5cbiAgY29uc3QgbWVzc2FnZSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpO1xuICBPYmplY3QuYXNzaWduKG1lc3NhZ2UsIHtcbiAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVN0YXJ0T2Zmc2NyZWVuUmVjb3JkaW5nJyxcbiAgICB0YXJnZXQ6ICdvZmZzY3JlZW4nLFxuICAgIHN0cmVhbUlkLFxuICAgIHRhYklkOiBkYXRhLnRhYklkLFxuICB9KTtcbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIHN0b3BSZWNvcmRpbmcoKSB7XG4gIGNoYW5nZUljb24oKTtcblxuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgdHlwZTogJ3Njcm9sbENhcHR1cmVTdG9wT2Zmc2NyZWVuUmVjb3JkaW5nJyxcbiAgICB0YXJnZXQ6ICdvZmZzY3JlZW4nLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RhcnRJbWFnZUNhcHR1cmUoKSB7XG4gIGNoYW5nZUljb24oJ19yZWQnKTtcbn1cblxuZnVuY3Rpb24gc3RvcEltYWdlQ2FwdHVyZSgpIHtcbiAgY2hhbmdlSWNvbigpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0QW5hbHl0aWNzIH0gZnJvbSAnLi9hbmFseXRpY3MnO1xuaW1wb3J0IHsgaW5pdEJhY2tncm91bmRQYWdlIH0gZnJvbSAnLi9iYWNrZ3JvdW5kJztcblxuaW5pdEFuYWx5dGljcygnRy1YMzNFSEhCTDVHJywgJ19WMEp1c0xLUWQyYmZuMHNTT25zM1EnKTtcbmluaXRCYWNrZ3JvdW5kUGFnZSgpO1xuIl0sIm5hbWVzIjpbIkdBX0VORFBPSU5UIiwiR0FfREVCVUdfRU5EUE9JTlQiLCJNRUFTVVJFTUVOVF9JRCIsIkFQSV9TRUNSRVQiLCJERUZBVUxUX0VOR0FHRU1FTlRfVElNRV9NU0VDIiwiU0VTU0lPTl9FWFBJUkFUSU9OX0lOX01JTiIsImluaXRBbmFseXRpY3MiLCJpZCIsInNlY3JldCIsIkFuYWx5dGljcyIsImNvbnN0cnVjdG9yIiwiZGVidWciLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJnZXRPckNyZWF0ZUNsaWVudElkIiwiY2xpZW50SWQiLCJjaHJvbWUiLCJzdG9yYWdlIiwibG9jYWwiLCJnZXQiLCJzZWxmIiwiY3J5cHRvIiwicmFuZG9tVVVJRCIsInNldCIsImdldE9yQ3JlYXRlU2Vzc2lvbklkIiwic2Vzc2lvbkRhdGEiLCJzZXNzaW9uIiwiY3VycmVudFRpbWVJbk1zIiwiRGF0ZSIsIm5vdyIsInRpbWVzdGFtcCIsImR1cmF0aW9uSW5NaW4iLCJzZXNzaW9uX2lkIiwidG9TdHJpbmciLCJmaXJlRXZlbnQiLCJuYW1lIiwicGFyYW1zIiwiZW5nYWdlbWVudF90aW1lX21zZWMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjbGllbnRfaWQiLCJldmVudHMiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImUiLCJlcnJvciIsImZpcmVQYWdlVmlld0V2ZW50IiwicGFnZVRpdGxlIiwicGFnZUxvY2F0aW9uIiwiYWRkaXRpb25hbFBhcmFtcyIsInBhZ2VfdGl0bGUiLCJwYWdlX2xvY2F0aW9uIiwiZmlyZUVycm9yRXZlbnQiLCJhbmFseXRpY3MiLCJpbml0QmFja2dyb3VuZFBhZ2UiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJvbk1lc3NhZ2VIYW5kbGVyIiwiYWN0aW9uIiwib25DbGlja2VkIiwidGFiIiwic2hvd01haW5QYW5lbCIsInVybCIsInRhYklkIiwiZXhpc3RpbmdDb250ZXh0cyIsImdldENvbnRleHRzIiwicmVjb3JkaW5nIiwib2Zmc2NyZWVuRG9jdW1lbnQiLCJmaW5kIiwiYyIsImNvbnRleHRUeXBlIiwib2Zmc2NyZWVuIiwiY3JlYXRlRG9jdW1lbnQiLCJyZWFzb25zIiwianVzdGlmaWNhdGlvbiIsImRvY3VtZW50VXJsIiwiZW5kc1dpdGgiLCJleGVjdXRlU2NyaXB0IiwidGhlbiIsInRhYnMiLCJzZW5kTWVzc2FnZSIsInR5cGUiLCJsb2NhdGlvbiIsImNoYW5nZUljb24iLCJzZW5kRGVmYXVsdExvY2F0aW9uIiwiY2FudmFzIiwibXNnIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwibWFpblBhbmVsIiwic3RhcnRSZWNvcmRpbmciLCJzdG9wUmVjb3JkaW5nIiwicmVzaXplV2luZG93Iiwid2lkdGgiLCJoZWlnaHQiLCJjYXRlZ29yeSIsInBhdGgiLCJzcGxpdCIsInBvcCIsImhhbmRsZXIiLCJ1cGRhdGVkVGFiSGFuZGxlclNjZW5hcmlvIiwidXBkYXRlZFRhYkhhbmRsZXJQbGF5IiwiZW5hYmxlZCIsIm9uVXBkYXRlZCIsInJlbW92ZUxpc3RlbmVyIiwic2NyaXB0aW5nIiwiaW5zZXJ0Q1NTIiwidGFyZ2V0IiwiY3NzIiwiT2Zmc2NyZWVuQ2FudmFzIiwiY2FwdHVyZVZpc2libGVUYWIiLCJkYXRhVXJsIiwic3RhcnRJbWFnZUNhcHR1cmUiLCJzdG9wSW1hZ2VDYXB0dXJlIiwiY2hhbmdlSW5mbyIsIm9iaiIsInJlc3VsdCIsImRlZmF1bHRMb2NhdGlvbiIsImZpbGVzIiwib3B0aW9ucyIsIndpbmRvd3MiLCJnZXRDdXJyZW50IiwicG9wdWxhdGUiLCJ3aW4iLCJ1cGRhdGUiLCJjb2xvciIsInNldEljb24iLCJnZXRVUkwiLCJkYXRhIiwic3RyZWFtSWQiLCJ0YWJDYXB0dXJlIiwiZ2V0TWVkaWFTdHJlYW1JZCIsInRhcmdldFRhYklkIiwibWVzc2FnZSIsIk9iamVjdCIsImFzc2lnbiJdLCJzb3VyY2VSb290IjoiIn0=