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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFxQztJQUMzQzBCLE1BQU0sRUFBRTtFQUNWLENBQUMsQ0FBQztBQUNKO0FBRUEsU0FBU0ssaUJBQWlCQSxDQUFBLEVBQUc7RUFDM0I3QixVQUFVLENBQUMsTUFBTSxDQUFDO0FBQ3BCO0FBRUEsU0FBUzhCLGdCQUFnQkEsQ0FBQSxFQUFHO0VBQzFCOUIsVUFBVSxDQUFDLENBQUM7QUFDZDs7Ozs7O1VDOVBBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ007QUFFbERwRix5REFBYSxDQUFDLGNBQWMsRUFBRSx3QkFBd0IsQ0FBQztBQUN2RHNELCtEQUFrQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2FuYWx5dGljcy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2pzL2JhY2tncm91bmQtZGV2ZWxvcG1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR0FfRU5EUE9JTlQgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vbXAvY29sbGVjdCc7XG5jb25zdCBHQV9ERUJVR19FTkRQT0lOVCA9ICdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9kZWJ1Zy9tcC9jb2xsZWN0JztcblxuLy8gR2V0IHZpYSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vcHJvdG9jb2wvZ2E0L3NlbmRpbmctZXZlbnRzP2NsaWVudF90eXBlPWd0YWcjcmVjb21tZW5kZWRfcGFyYW1ldGVyc19mb3JfcmVwb3J0c1xubGV0IE1FQVNVUkVNRU5UX0lEID0gJzxtZWFzdXJlbWVudF9pZD4nO1xubGV0IEFQSV9TRUNSRVQgPSAnPGFwaV9zZWNyZXQ+JztcbmNvbnN0IERFRkFVTFRfRU5HQUdFTUVOVF9USU1FX01TRUMgPSAxMDA7XG5cbi8vIER1cmF0aW9uIG9mIGluYWN0aXZpdHkgYWZ0ZXIgd2hpY2ggYSBuZXcgc2Vzc2lvbiBpcyBjcmVhdGVkXG5jb25zdCBTRVNTSU9OX0VYUElSQVRJT05fSU5fTUlOID0gMzA7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QW5hbHl0aWNzKGlkLCBzZWNyZXQpIHtcbiAgTUVBU1VSRU1FTlRfSUQgPSBpZDtcbiAgQVBJX1NFQ1JFVCA9IHNlY3JldDtcbn1cblxuY2xhc3MgQW5hbHl0aWNzIHtcbiAgY29uc3RydWN0b3IoZGVidWcgPSBmYWxzZSkge1xuICAgIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgfVxuXG4gIC8vIFJldHVybnMgdGhlIGNsaWVudCBpZCwgb3IgY3JlYXRlcyBhIG5ldyBvbmUgaWYgb25lIGRvZXNuJ3QgZXhpc3QuXG4gIC8vIFN0b3JlcyBjbGllbnQgaWQgaW4gbG9jYWwgc3RvcmFnZSB0byBrZWVwIHRoZSBzYW1lIGNsaWVudCBpZCBhcyBsb25nIGFzXG4gIC8vIHRoZSBleHRlbnNpb24gaXMgaW5zdGFsbGVkLlxuICBhc3luYyBnZXRPckNyZWF0ZUNsaWVudElkKCkge1xuICAgIGxldCB7IGNsaWVudElkIH0gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ2NsaWVudElkJyk7XG4gICAgaWYgKCFjbGllbnRJZCkge1xuICAgICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgY2xpZW50IElELCB0aGUgYWN0dWFsIHZhbHVlIGlzIG5vdCByZWxldmFudFxuICAgICAgY2xpZW50SWQgPSBzZWxmLmNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBjbGllbnRJZCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNsaWVudElkO1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgY3VycmVudCBzZXNzaW9uIGlkLCBvciBjcmVhdGVzIGEgbmV3IG9uZSBpZiBvbmUgZG9lc24ndCBleGlzdCBvclxuICAvLyB0aGUgcHJldmlvdXMgb25lIGhhcyBleHBpcmVkLlxuICBhc3luYyBnZXRPckNyZWF0ZVNlc3Npb25JZCgpIHtcbiAgICAvLyBVc2Ugc3RvcmFnZS5zZXNzaW9uIGJlY2F1c2UgaXQgaXMgb25seSBpbiBtZW1vcnlcbiAgICBsZXQgeyBzZXNzaW9uRGF0YSB9ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc2Vzc2lvbi5nZXQoJ3Nlc3Npb25EYXRhJyk7XG4gICAgY29uc3QgY3VycmVudFRpbWVJbk1zID0gRGF0ZS5ub3coKTtcbiAgICAvLyBDaGVjayBpZiBzZXNzaW9uIGV4aXN0cyBhbmQgaXMgc3RpbGwgdmFsaWRcbiAgICBpZiAoc2Vzc2lvbkRhdGEgJiYgc2Vzc2lvbkRhdGEudGltZXN0YW1wKSB7XG4gICAgICAvLyBDYWxjdWxhdGUgaG93IGxvbmcgYWdvIHRoZSBzZXNzaW9uIHdhcyBsYXN0IHVwZGF0ZWRcbiAgICAgIGNvbnN0IGR1cmF0aW9uSW5NaW4gPSAoY3VycmVudFRpbWVJbk1zIC0gc2Vzc2lvbkRhdGEudGltZXN0YW1wKSAvIDYwMDAwO1xuICAgICAgLy8gQ2hlY2sgaWYgbGFzdCB1cGRhdGUgbGF5cyBwYXN0IHRoZSBzZXNzaW9uIGV4cGlyYXRpb24gdGhyZXNob2xkXG4gICAgICBpZiAoZHVyYXRpb25Jbk1pbiA+IFNFU1NJT05fRVhQSVJBVElPTl9JTl9NSU4pIHtcbiAgICAgICAgLy8gQ2xlYXIgb2xkIHNlc3Npb24gaWQgdG8gc3RhcnQgYSBuZXcgc2Vzc2lvblxuICAgICAgICBzZXNzaW9uRGF0YSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVcGRhdGUgdGltZXN0YW1wIHRvIGtlZXAgc2Vzc2lvbiBhbGl2ZVxuICAgICAgICBzZXNzaW9uRGF0YS50aW1lc3RhbXAgPSBjdXJyZW50VGltZUluTXM7XG4gICAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLnNlc3Npb24uc2V0KHsgc2Vzc2lvbkRhdGEgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghc2Vzc2lvbkRhdGEpIHtcbiAgICAgIC8vIENyZWF0ZSBhbmQgc3RvcmUgYSBuZXcgc2Vzc2lvblxuICAgICAgc2Vzc2lvbkRhdGEgPSB7XG4gICAgICAgIHNlc3Npb25faWQ6IGN1cnJlbnRUaW1lSW5Ncy50b1N0cmluZygpLFxuICAgICAgICB0aW1lc3RhbXA6IGN1cnJlbnRUaW1lSW5Ncy50b1N0cmluZygpLFxuICAgICAgfTtcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLnNlc3Npb24uc2V0KHsgc2Vzc2lvbkRhdGEgfSk7XG4gICAgfVxuICAgIHJldHVybiBzZXNzaW9uRGF0YS5zZXNzaW9uX2lkO1xuICB9XG5cbiAgLy8gRmlyZXMgYW4gZXZlbnQgd2l0aCBvcHRpb25hbCBwYXJhbXMuIEV2ZW50IG5hbWVzIG11c3Qgb25seSBpbmNsdWRlIGxldHRlcnMgYW5kIHVuZGVyc2NvcmVzLlxuICBhc3luYyBmaXJlRXZlbnQobmFtZSwgcGFyYW1zID0ge30pIHtcbiAgICAvLyBDb25maWd1cmUgc2Vzc2lvbiBpZCBhbmQgZW5nYWdlbWVudCB0aW1lIGlmIG5vdCBwcmVzZW50LCBmb3IgbW9yZSBkZXRhaWxzIHNlZTpcbiAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vcHJvdG9jb2wvZ2E0L3NlbmRpbmctZXZlbnRzP2NsaWVudF90eXBlPWd0YWcjcmVjb21tZW5kZWRfcGFyYW1ldGVyc19mb3JfcmVwb3J0c1xuICAgIGlmICghcGFyYW1zLnNlc3Npb25faWQpIHtcbiAgICAgIHBhcmFtcy5zZXNzaW9uX2lkID0gYXdhaXQgdGhpcy5nZXRPckNyZWF0ZVNlc3Npb25JZCgpO1xuICAgIH1cbiAgICBpZiAoIXBhcmFtcy5lbmdhZ2VtZW50X3RpbWVfbXNlYykge1xuICAgICAgcGFyYW1zLmVuZ2FnZW1lbnRfdGltZV9tc2VjID0gREVGQVVMVF9FTkdBR0VNRU5UX1RJTUVfTVNFQztcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLmRlYnVnID8gR0FfREVCVUdfRU5EUE9JTlQgOiBHQV9FTkRQT0lOVH0/bWVhc3VyZW1lbnRfaWQ9JHtNRUFTVVJFTUVOVF9JRH0mYXBpX3NlY3JldD0ke0FQSV9TRUNSRVR9YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGNsaWVudF9pZDogYXdhaXQgdGhpcy5nZXRPckNyZWF0ZUNsaWVudElkKCksXG4gICAgICAgICAgZXZlbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICAgIGlmICghdGhpcy5kZWJ1Zykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhhd2FpdCByZXNwb25zZS50ZXh0KCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZSBBbmFseXRpY3MgcmVxdWVzdCBmYWlsZWQgd2l0aCBhbiBleGNlcHRpb24nLCBlKTtcbiAgICB9XG4gIH1cblxuICAvLyBGaXJlIGEgcGFnZSB2aWV3IGV2ZW50LlxuICBhc3luYyBmaXJlUGFnZVZpZXdFdmVudChwYWdlVGl0bGUsIHBhZ2VMb2NhdGlvbiwgYWRkaXRpb25hbFBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyZUV2ZW50KCdwYWdlX3ZpZXcnLCB7XG4gICAgICBwYWdlX3RpdGxlOiBwYWdlVGl0bGUsXG4gICAgICBwYWdlX2xvY2F0aW9uOiBwYWdlTG9jYXRpb24sXG4gICAgICAuLi5hZGRpdGlvbmFsUGFyYW1zLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gRmlyZSBhbiBlcnJvciBldmVudC5cbiAgYXN5bmMgZmlyZUVycm9yRXZlbnQoZXJyb3IsIGFkZGl0aW9uYWxQYXJhbXMgPSB7fSkge1xuICAgIC8vIE5vdGU6ICdlcnJvcicgaXMgYSByZXNlcnZlZCBldmVudCBuYW1lIGFuZCBjYW5ub3QgYmUgdXNlZFxuICAgIC8vIHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vcHJvdG9jb2wvZ2E0L3JlZmVyZW5jZT9jbGllbnRfdHlwZT1ndGFnI3Jlc2VydmVkX25hbWVzXG4gICAgcmV0dXJuIHRoaXMuZmlyZUV2ZW50KCdleHRlbnNpb25fZXJyb3InLCB7XG4gICAgICAuLi5lcnJvcixcbiAgICAgIC4uLmFkZGl0aW9uYWxQYXJhbXMsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFuYWx5dGljcyA9IG5ldyBBbmFseXRpY3MoKTtcbiIsImltcG9ydCB7IGFuYWx5dGljcyB9IGZyb20gJy4vYW5hbHl0aWNzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCYWNrZ3JvdW5kUGFnZSgpIHtcbiAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKG9uTWVzc2FnZUhhbmRsZXIpO1xuICBjaHJvbWUuYWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcigodGFiKSA9PiB7XG4gICAgc2hvd01haW5QYW5lbCh0YWIuaWQsIHRhYi51cmwpO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2hvd01haW5QYW5lbCh0YWJJZCkge1xuICBjb25zdCBleGlzdGluZ0NvbnRleHRzID0gYXdhaXQgY2hyb21lLnJ1bnRpbWUuZ2V0Q29udGV4dHMoe30pO1xuICBsZXQgcmVjb3JkaW5nID0gZmFsc2U7XG5cbiAgY29uc3Qgb2Zmc2NyZWVuRG9jdW1lbnQgPSBleGlzdGluZ0NvbnRleHRzLmZpbmQoKGMpID0+IGMuY29udGV4dFR5cGUgPT09ICdPRkZTQ1JFRU5fRE9DVU1FTlQnKTtcblxuICAvLyBJZiBhbiBvZmZzY3JlZW4gZG9jdW1lbnQgaXMgbm90IGFscmVhZHkgb3BlbiwgY3JlYXRlIG9uZS5cbiAgaWYgKCFvZmZzY3JlZW5Eb2N1bWVudCkge1xuICAgIC8vIENyZWF0ZSBhbiBvZmZzY3JlZW4gZG9jdW1lbnQuXG4gICAgYXdhaXQgY2hyb21lLm9mZnNjcmVlbi5jcmVhdGVEb2N1bWVudCh7XG4gICAgICB1cmw6ICdvZmZzY3JlZW4uaHRtbCcsXG4gICAgICByZWFzb25zOiBbJ1VTRVJfTUVESUEnXSxcbiAgICAgIGp1c3RpZmljYXRpb246ICdSZWNvcmRpbmcgZnJvbSBjaHJvbWUudGFiQ2FwdHVyZSBBUEknLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJlY29yZGluZyA9IG9mZnNjcmVlbkRvY3VtZW50LmRvY3VtZW50VXJsLmVuZHNXaXRoKCcjcmVjb3JkaW5nJyk7XG4gIH1cblxuICBleGVjdXRlQ29udGVudFNjcmlwdCh0YWJJZCkudGhlbigoKSA9PiB7XG4gICAgaWYgKHJlY29yZGluZykge1xuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgICAgdHlwZTogJ3Njcm9sbENhcHR1cmVMb2NhdGlvbicsXG4gICAgICAgIGxvY2F0aW9uOiAnc3RvcCcsXG4gICAgICAgIHRhYklkLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYW5nZUljb24oJycpO1xuICAgICAgc2VuZERlZmF1bHRMb2NhdGlvbih0YWJJZCk7XG4gICAgfVxuICB9KTtcbn1cblxubGV0IGNhbnZhcztcblxuZnVuY3Rpb24gb25NZXNzYWdlSGFuZGxlcihtc2csIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gIGNvbnN0IHRhYklkID0gbXNnLnRhYklkO1xuICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVNob3dNYWluUGFuZWwnOlxuICAgICAgc2hvd01haW5QYW5lbCh0YWJJZCk7XG4gICAgICBzZW5kUmVzcG9uc2UoeyBtYWluUGFuZWw6IHRydWUgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlU3RhcnRSZWNvcmRpbmcnOlxuICAgICAgc3RhcnRSZWNvcmRpbmcobXNnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVTdG9wUmVjb3JkaW5nJzpcbiAgICAgIHN0b3BSZWNvcmRpbmcoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVSZXNpemVXaW5kb3cnOlxuICAgICAgcmVzaXplV2luZG93KG1zZy53aWR0aCwgbXNnLmhlaWdodCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlVHJhY2tFdmVudCc6XG4gICAgICBhbmFseXRpY3MuZmlyZUV2ZW50KG1zZy5jYXRlZ29yeSwgbXNnLnBhcmFtcyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlVHJhY2tQYWdlJzpcbiAgICAgIGFuYWx5dGljcy5maXJlUGFnZVZpZXdFdmVudChtc2cucGF0aC5zcGxpdCgnLycpLnBvcCgpLCBtc2cucGF0aCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlVXBkYXRlZFRhYkxpc3RlbmVyJzpcbiAgICAgIGxldCBoYW5kbGVyO1xuICAgICAgc3dpdGNoIChtc2cubG9jYXRpb24pIHtcbiAgICAgICAgY2FzZSAnc2NlbmFyaW8nOlxuICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHRhYklkIH0pO1xuICAgICAgICAgIGhhbmRsZXIgPSB1cGRhdGVkVGFiSGFuZGxlclNjZW5hcmlvO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwbGF5JzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBoYW5kbGVyID0gdXBkYXRlZFRhYkhhbmRsZXJQbGF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKG1zZy5lbmFibGVkKSB7XG4gICAgICAgIGNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcihoYW5kbGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNocm9tZS50YWJzLm9uVXBkYXRlZC5yZW1vdmVMaXN0ZW5lcihoYW5kbGVyKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVJbnNlcnRDU1MnOlxuICAgICAgLy8gY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCd0YWJJZCcpLnRoZW4oKG9iaikgPT4ge1xuICAgICAgY2hyb21lLnNjcmlwdGluZy5pbnNlcnRDU1Moe1xuICAgICAgICB0YXJnZXQ6IHsgdGFiSWQgfSxcbiAgICAgICAgY3NzOiBtc2cuY3NzLFxuICAgICAgfSk7XG4gICAgICAvLyB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVJbWFnZUNhcHR1cmVDYW52YXMnOlxuICAgICAgY2FudmFzID0gbmV3IE9mZnNjcmVlbkNhbnZhcyhtc2cud2lkdGgsIG1zZy5oZWlnaHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVZpc2libGVUYWInOlxuICAgICAgY2hyb21lLnRhYnMuY2FwdHVyZVZpc2libGVUYWIobnVsbCwge30sIChkYXRhVXJsKSA9PiB7XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IGRhdGFVcmwgfSk7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVJbWFnZUNhcHR1cmVTdGFydCc6XG4gICAgICBzdGFydEltYWdlQ2FwdHVyZShtc2cpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZUltYWdlQ2FwdHVyZVN0b3AnOlxuICAgICAgc3RvcEltYWdlQ2FwdHVyZShtc2cpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVZpZGVvVVJMQmFja2dyb3VuZCc6XG4gICAgICBtc2cudHlwZSA9ICdzY3JvbGxDYXB0dXJlVmlkZW9VUkwnO1xuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIG1zZyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlRkZtcGVnTG9nVG9TVyc6XG4gICAgICBtc2cudHlwZSA9ICdzY3JvbGxDYXB0dXJlRkZtcGVnTG9nVG9DQyc7XG4gICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwgbXNnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVFeGVjdXRlU2NyaXB0JzpcbiAgICAgIGNocm9tZS5zY3JpcHRpbmdcbiAgICAgICAgLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICAgIHRhcmdldDogeyB0YWJJZCB9LFxuICAgICAgICAgIGZ1bmM6IChib2R5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKGJvZHkpKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhcmdzOiBbbXNnLmNvZGVdLFxuICAgICAgICAgIHdvcmxkOiAnTUFJTicsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICBzZW5kUmVzcG9uc2UodmFsWzBdLnJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVNldFNjcm9sbCc6XG4gICAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICB0YXJnZXQ6IHsgdGFiSWQgfSxcbiAgICAgICAgZnVuYzogKGJvZHksIHgsIHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKCd4JywgJ3knLCBib2R5KSh4LCB5KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXJnczogW21zZy5jb2RlLCBtc2cueCwgbXNnLnldLFxuICAgICAgICB3b3JsZDogJ01BSU4nLFxuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlR2V0U2Nyb2xsJzpcbiAgICAgIGNocm9tZS5zY3JpcHRpbmdcbiAgICAgICAgLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICAgIHRhcmdldDogeyB0YWJJZCB9LFxuICAgICAgICAgIGZ1bmM6IChib2R5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKGJvZHkpKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhcmdzOiBbbXNnLmNvZGVdLFxuICAgICAgICAgIHdvcmxkOiAnTUFJTicsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICBzZW5kUmVzcG9uc2UodmFsWzBdLnJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZWRUYWJIYW5kbGVyUGxheSh0YWJJZCwgY2hhbmdlSW5mbywgdGFiKSB7XG4gIGlmIChjaGFuZ2VJbmZvLnN0YXR1cyA9PSAnY29tcGxldGUnKSB7XG4gICAgZXhlY3V0ZUNvbnRlbnRTY3JpcHQodGFiLmlkKS50aGVuKCgpID0+IHtcbiAgICAgIGNocm9tZS5ydW50aW1lLmdldENvbnRleHRzKHt9KS50aGVuKChleGlzdGluZ0NvbnRleHRzKSA9PiB7XG4gICAgICAgIGNvbnN0IG9mZnNjcmVlbkRvY3VtZW50ID0gZXhpc3RpbmdDb250ZXh0cy5maW5kKChjKSA9PiBjLmNvbnRleHRUeXBlID09PSAnT0ZGU0NSRUVOX0RPQ1VNRU5UJyk7XG4gICAgICAgIGNvbnN0IHJlY29yZGluZyA9IG9mZnNjcmVlbkRvY3VtZW50LmRvY3VtZW50VXJsLmVuZHNXaXRoKCcjcmVjb3JkaW5nJyk7XG4gICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwge1xuICAgICAgICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlTG9jYXRpb24nLFxuICAgICAgICAgIGxvY2F0aW9uOiByZWNvcmRpbmcgPyAncmVjb3JkJyA6ICdwbGF5JyxcbiAgICAgICAgICB0YWJJZCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVkVGFiSGFuZGxlclNjZW5hcmlvKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpIHtcbiAgaWYgKGNoYW5nZUluZm8uc3RhdHVzID09ICdjb21wbGV0ZScpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ3RhYklkJykudGhlbigob2JqKSA9PiB7XG4gICAgICBpZiAob2JqLnRhYklkID09IHRhYklkKSB7XG4gICAgICAgIGV4ZWN1dGVDb250ZW50U2NyaXB0KHRhYi5pZCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgc2VuZERlZmF1bHRMb2NhdGlvbih0YWIuaWQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZW5kRGVmYXVsdExvY2F0aW9uKHRhYklkKSB7XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2RlZmF1bHRMb2NhdGlvbiddKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHJlc3VsdC5kZWZhdWx0TG9jYXRpb24gfHwgJ3Njcm9sbC1jYXB0dXJlJztcbiAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgdHlwZTogJ3Njcm9sbENhcHR1cmVMb2NhdGlvbicsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRhYklkLFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZUNvbnRlbnRTY3JpcHQodGFiSWQpIHtcbiAgcmV0dXJuIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgdGFyZ2V0OiB7IHRhYklkIH0sXG4gICAgZmlsZXM6IFsnY29udGVudC5qcyddLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzaXplV2luZG93KHdpZHRoLCBoZWlnaHQpIHtcbiAgbGV0IG9wdGlvbnMgPSB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICB9O1xuICBjaHJvbWUud2luZG93cy5nZXRDdXJyZW50KHsgcG9wdWxhdGU6IGZhbHNlIH0sICh3aW4pID0+IHtcbiAgICBjaHJvbWUud2luZG93cy51cGRhdGUod2luLmlkLCBvcHRpb25zKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUljb24oY29sb3IgPSAnJykge1xuICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgIHBhdGg6IHtcbiAgICAgIDE2OiBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2Fzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQxNicgKyBjb2xvciArICcucG5nJyksXG4gICAgICAzMjogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkMzInICsgY29sb3IgKyAnLnBuZycpLFxuICAgICAgNDg6IGNocm9tZS5ydW50aW1lLmdldFVSTCgnYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDQ4JyArIGNvbG9yICsgJy5wbmcnKSxcbiAgICAgIDEyODogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkMTI4JyArIGNvbG9yICsgJy5wbmcnKSxcbiAgICB9LFxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3RhcnRSZWNvcmRpbmcoZGF0YSkge1xuICBjaGFuZ2VJY29uKCdfcmVkJyk7XG5cbiAgY29uc3Qgc3RyZWFtSWQgPSBhd2FpdCBjaHJvbWUudGFiQ2FwdHVyZS5nZXRNZWRpYVN0cmVhbUlkKHtcbiAgICB0YXJnZXRUYWJJZDogZGF0YS50YWJJZCxcbiAgfSk7XG5cbiAgY29uc3QgbWVzc2FnZSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpO1xuICBPYmplY3QuYXNzaWduKG1lc3NhZ2UsIHtcbiAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVN0YXJ0T2Zmc2NyZWVuUmVjb3JkaW5nJyxcbiAgICB0YXJnZXQ6ICdvZmZzY3JlZW4nLFxuICAgIHN0cmVhbUlkLFxuICAgIHRhYklkOiBkYXRhLnRhYklkLFxuICB9KTtcbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIHN0b3BSZWNvcmRpbmcoKSB7XG4gIGNoYW5nZUljb24oKTtcblxuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgdHlwZTogJ3Njcm9sbENhcHR1cmVTdG9wT2Zmc2NyZWVuUmVjb3JkaW5nJyxcbiAgICB0YXJnZXQ6ICdvZmZzY3JlZW4nLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RhcnRJbWFnZUNhcHR1cmUoKSB7XG4gIGNoYW5nZUljb24oJ19yZWQnKTtcbn1cblxuZnVuY3Rpb24gc3RvcEltYWdlQ2FwdHVyZSgpIHtcbiAgY2hhbmdlSWNvbigpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0QW5hbHl0aWNzIH0gZnJvbSAnLi9hbmFseXRpY3MnO1xuaW1wb3J0IHsgaW5pdEJhY2tncm91bmRQYWdlIH0gZnJvbSAnLi9iYWNrZ3JvdW5kJztcblxuaW5pdEFuYWx5dGljcygnRy1YMzNFSEhCTDVHJywgJ19WMEp1c0xLUWQyYmZuMHNTT25zM1EnKTtcbmluaXRCYWNrZ3JvdW5kUGFnZSgpO1xuIl0sIm5hbWVzIjpbIkdBX0VORFBPSU5UIiwiR0FfREVCVUdfRU5EUE9JTlQiLCJNRUFTVVJFTUVOVF9JRCIsIkFQSV9TRUNSRVQiLCJERUZBVUxUX0VOR0FHRU1FTlRfVElNRV9NU0VDIiwiU0VTU0lPTl9FWFBJUkFUSU9OX0lOX01JTiIsImluaXRBbmFseXRpY3MiLCJpZCIsInNlY3JldCIsIkFuYWx5dGljcyIsImNvbnN0cnVjdG9yIiwiZGVidWciLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJnZXRPckNyZWF0ZUNsaWVudElkIiwiY2xpZW50SWQiLCJjaHJvbWUiLCJzdG9yYWdlIiwibG9jYWwiLCJnZXQiLCJzZWxmIiwiY3J5cHRvIiwicmFuZG9tVVVJRCIsInNldCIsImdldE9yQ3JlYXRlU2Vzc2lvbklkIiwic2Vzc2lvbkRhdGEiLCJzZXNzaW9uIiwiY3VycmVudFRpbWVJbk1zIiwiRGF0ZSIsIm5vdyIsInRpbWVzdGFtcCIsImR1cmF0aW9uSW5NaW4iLCJzZXNzaW9uX2lkIiwidG9TdHJpbmciLCJmaXJlRXZlbnQiLCJuYW1lIiwicGFyYW1zIiwiZW5nYWdlbWVudF90aW1lX21zZWMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjbGllbnRfaWQiLCJldmVudHMiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImUiLCJlcnJvciIsImZpcmVQYWdlVmlld0V2ZW50IiwicGFnZVRpdGxlIiwicGFnZUxvY2F0aW9uIiwiYWRkaXRpb25hbFBhcmFtcyIsInBhZ2VfdGl0bGUiLCJwYWdlX2xvY2F0aW9uIiwiZmlyZUVycm9yRXZlbnQiLCJhbmFseXRpY3MiLCJpbml0QmFja2dyb3VuZFBhZ2UiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJvbk1lc3NhZ2VIYW5kbGVyIiwiYWN0aW9uIiwib25DbGlja2VkIiwidGFiIiwic2hvd01haW5QYW5lbCIsInVybCIsInRhYklkIiwiZXhpc3RpbmdDb250ZXh0cyIsImdldENvbnRleHRzIiwicmVjb3JkaW5nIiwib2Zmc2NyZWVuRG9jdW1lbnQiLCJmaW5kIiwiYyIsImNvbnRleHRUeXBlIiwib2Zmc2NyZWVuIiwiY3JlYXRlRG9jdW1lbnQiLCJyZWFzb25zIiwianVzdGlmaWNhdGlvbiIsImRvY3VtZW50VXJsIiwiZW5kc1dpdGgiLCJleGVjdXRlQ29udGVudFNjcmlwdCIsInRoZW4iLCJ0YWJzIiwic2VuZE1lc3NhZ2UiLCJ0eXBlIiwibG9jYXRpb24iLCJjaGFuZ2VJY29uIiwic2VuZERlZmF1bHRMb2NhdGlvbiIsImNhbnZhcyIsIm1zZyIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsIm1haW5QYW5lbCIsInN0YXJ0UmVjb3JkaW5nIiwic3RvcFJlY29yZGluZyIsInJlc2l6ZVdpbmRvdyIsIndpZHRoIiwiaGVpZ2h0IiwiY2F0ZWdvcnkiLCJwYXRoIiwic3BsaXQiLCJwb3AiLCJoYW5kbGVyIiwidXBkYXRlZFRhYkhhbmRsZXJTY2VuYXJpbyIsInVwZGF0ZWRUYWJIYW5kbGVyUGxheSIsImVuYWJsZWQiLCJvblVwZGF0ZWQiLCJyZW1vdmVMaXN0ZW5lciIsInNjcmlwdGluZyIsImluc2VydENTUyIsInRhcmdldCIsImNzcyIsIk9mZnNjcmVlbkNhbnZhcyIsImNhcHR1cmVWaXNpYmxlVGFiIiwiZGF0YVVybCIsInN0YXJ0SW1hZ2VDYXB0dXJlIiwic3RvcEltYWdlQ2FwdHVyZSIsImV4ZWN1dGVTY3JpcHQiLCJmdW5jIiwiRnVuY3Rpb24iLCJhcmdzIiwiY29kZSIsIndvcmxkIiwidmFsIiwicmVzdWx0IiwieCIsInkiLCJjaGFuZ2VJbmZvIiwic3RhdHVzIiwib2JqIiwiZGVmYXVsdExvY2F0aW9uIiwiZmlsZXMiLCJvcHRpb25zIiwid2luZG93cyIsImdldEN1cnJlbnQiLCJwb3B1bGF0ZSIsIndpbiIsInVwZGF0ZSIsImNvbG9yIiwic2V0SWNvbiIsImdldFVSTCIsImRhdGEiLCJzdHJlYW1JZCIsInRhYkNhcHR1cmUiLCJnZXRNZWRpYVN0cmVhbUlkIiwidGFyZ2V0VGFiSWQiLCJtZXNzYWdlIiwiT2JqZWN0IiwiYXNzaWduIl0sInNvdXJjZVJvb3QiOiIifQ==