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
  chrome.storage.local.set({
    tabId
  });
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
        location: 'stop'
      });
    } else {
      changeIcon('');
      sendDefaultLocation(tabId);
    }
  });
}
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
      chrome.storage.local.get('tabId').then(obj => {
        chrome.scripting.insertCSS({
          target: {
            tabId: obj.tabId
          },
          css: msg.css
        });
      });
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
        location: recording ? 'record' : 'play'
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
      location
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckJsRCxJQUFJLEVBQUUsc0NBQXNDO0lBQzVDMEIsTUFBTSxFQUFFLFdBQVc7SUFDbkJvQjtFQUNGLENBQUMsQ0FBQztFQUVGckgsTUFBTSxDQUFDNEMsT0FBTyxDQUFDMEIsV0FBVyxDQUFDbUQsT0FBTyxDQUFDO0FBQ3JDO0FBRUEsU0FBU3pDLGFBQWFBLENBQUEsRUFBRztFQUN2QlAsVUFBVSxDQUFDLENBQUM7RUFFWnpFLE1BQU0sQ0FBQzRDLE9BQU8sQ0FBQzBCLFdBQVcsQ0FBQztJQUN6QkMsSUFBSSxFQUFFLHFDQUFxQztJQUMzQzBCLE1BQU0sRUFBRTtFQUNWLENBQUMsQ0FBQztBQUNKO0FBRUEsU0FBU0ksaUJBQWlCQSxDQUFBLEVBQUc7RUFDM0I1QixVQUFVLENBQUMsTUFBTSxDQUFDO0FBQ3BCO0FBRUEsU0FBUzZCLGdCQUFnQkEsQ0FBQSxFQUFHO0VBQzFCN0IsVUFBVSxDQUFDLENBQUM7QUFDZDs7Ozs7O1VDcE1BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ007QUFFbERwRix5REFBYSxDQUFDLGNBQWMsRUFBRSx3QkFBd0IsQ0FBQztBQUN2RHNELCtEQUFrQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2FuYWx5dGljcy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2pzL2JhY2tncm91bmQtZGV2ZWxvcG1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR0FfRU5EUE9JTlQgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vbXAvY29sbGVjdCc7XG5jb25zdCBHQV9ERUJVR19FTkRQT0lOVCA9ICdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9kZWJ1Zy9tcC9jb2xsZWN0JztcblxuLy8gR2V0IHZpYSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vcHJvdG9jb2wvZ2E0L3NlbmRpbmctZXZlbnRzP2NsaWVudF90eXBlPWd0YWcjcmVjb21tZW5kZWRfcGFyYW1ldGVyc19mb3JfcmVwb3J0c1xubGV0IE1FQVNVUkVNRU5UX0lEID0gJzxtZWFzdXJlbWVudF9pZD4nO1xubGV0IEFQSV9TRUNSRVQgPSAnPGFwaV9zZWNyZXQ+JztcbmNvbnN0IERFRkFVTFRfRU5HQUdFTUVOVF9USU1FX01TRUMgPSAxMDA7XG5cbi8vIER1cmF0aW9uIG9mIGluYWN0aXZpdHkgYWZ0ZXIgd2hpY2ggYSBuZXcgc2Vzc2lvbiBpcyBjcmVhdGVkXG5jb25zdCBTRVNTSU9OX0VYUElSQVRJT05fSU5fTUlOID0gMzA7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QW5hbHl0aWNzKGlkLCBzZWNyZXQpIHtcbiAgTUVBU1VSRU1FTlRfSUQgPSBpZDtcbiAgQVBJX1NFQ1JFVCA9IHNlY3JldDtcbn1cblxuY2xhc3MgQW5hbHl0aWNzIHtcbiAgY29uc3RydWN0b3IoZGVidWcgPSBmYWxzZSkge1xuICAgIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgfVxuXG4gIC8vIFJldHVybnMgdGhlIGNsaWVudCBpZCwgb3IgY3JlYXRlcyBhIG5ldyBvbmUgaWYgb25lIGRvZXNuJ3QgZXhpc3QuXG4gIC8vIFN0b3JlcyBjbGllbnQgaWQgaW4gbG9jYWwgc3RvcmFnZSB0byBrZWVwIHRoZSBzYW1lIGNsaWVudCBpZCBhcyBsb25nIGFzXG4gIC8vIHRoZSBleHRlbnNpb24gaXMgaW5zdGFsbGVkLlxuICBhc3luYyBnZXRPckNyZWF0ZUNsaWVudElkKCkge1xuICAgIGxldCB7IGNsaWVudElkIH0gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ2NsaWVudElkJyk7XG4gICAgaWYgKCFjbGllbnRJZCkge1xuICAgICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgY2xpZW50IElELCB0aGUgYWN0dWFsIHZhbHVlIGlzIG5vdCByZWxldmFudFxuICAgICAgY2xpZW50SWQgPSBzZWxmLmNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBjbGllbnRJZCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNsaWVudElkO1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgY3VycmVudCBzZXNzaW9uIGlkLCBvciBjcmVhdGVzIGEgbmV3IG9uZSBpZiBvbmUgZG9lc24ndCBleGlzdCBvclxuICAvLyB0aGUgcHJldmlvdXMgb25lIGhhcyBleHBpcmVkLlxuICBhc3luYyBnZXRPckNyZWF0ZVNlc3Npb25JZCgpIHtcbiAgICAvLyBVc2Ugc3RvcmFnZS5zZXNzaW9uIGJlY2F1c2UgaXQgaXMgb25seSBpbiBtZW1vcnlcbiAgICBsZXQgeyBzZXNzaW9uRGF0YSB9ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc2Vzc2lvbi5nZXQoJ3Nlc3Npb25EYXRhJyk7XG4gICAgY29uc3QgY3VycmVudFRpbWVJbk1zID0gRGF0ZS5ub3coKTtcbiAgICAvLyBDaGVjayBpZiBzZXNzaW9uIGV4aXN0cyBhbmQgaXMgc3RpbGwgdmFsaWRcbiAgICBpZiAoc2Vzc2lvbkRhdGEgJiYgc2Vzc2lvbkRhdGEudGltZXN0YW1wKSB7XG4gICAgICAvLyBDYWxjdWxhdGUgaG93IGxvbmcgYWdvIHRoZSBzZXNzaW9uIHdhcyBsYXN0IHVwZGF0ZWRcbiAgICAgIGNvbnN0IGR1cmF0aW9uSW5NaW4gPSAoY3VycmVudFRpbWVJbk1zIC0gc2Vzc2lvbkRhdGEudGltZXN0YW1wKSAvIDYwMDAwO1xuICAgICAgLy8gQ2hlY2sgaWYgbGFzdCB1cGRhdGUgbGF5cyBwYXN0IHRoZSBzZXNzaW9uIGV4cGlyYXRpb24gdGhyZXNob2xkXG4gICAgICBpZiAoZHVyYXRpb25Jbk1pbiA+IFNFU1NJT05fRVhQSVJBVElPTl9JTl9NSU4pIHtcbiAgICAgICAgLy8gQ2xlYXIgb2xkIHNlc3Npb24gaWQgdG8gc3RhcnQgYSBuZXcgc2Vzc2lvblxuICAgICAgICBzZXNzaW9uRGF0YSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVcGRhdGUgdGltZXN0YW1wIHRvIGtlZXAgc2Vzc2lvbiBhbGl2ZVxuICAgICAgICBzZXNzaW9uRGF0YS50aW1lc3RhbXAgPSBjdXJyZW50VGltZUluTXM7XG4gICAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLnNlc3Npb24uc2V0KHsgc2Vzc2lvbkRhdGEgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghc2Vzc2lvbkRhdGEpIHtcbiAgICAgIC8vIENyZWF0ZSBhbmQgc3RvcmUgYSBuZXcgc2Vzc2lvblxuICAgICAgc2Vzc2lvbkRhdGEgPSB7XG4gICAgICAgIHNlc3Npb25faWQ6IGN1cnJlbnRUaW1lSW5Ncy50b1N0cmluZygpLFxuICAgICAgICB0aW1lc3RhbXA6IGN1cnJlbnRUaW1lSW5Ncy50b1N0cmluZygpLFxuICAgICAgfTtcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLnNlc3Npb24uc2V0KHsgc2Vzc2lvbkRhdGEgfSk7XG4gICAgfVxuICAgIHJldHVybiBzZXNzaW9uRGF0YS5zZXNzaW9uX2lkO1xuICB9XG5cbiAgLy8gRmlyZXMgYW4gZXZlbnQgd2l0aCBvcHRpb25hbCBwYXJhbXMuIEV2ZW50IG5hbWVzIG11c3Qgb25seSBpbmNsdWRlIGxldHRlcnMgYW5kIHVuZGVyc2NvcmVzLlxuICBhc3luYyBmaXJlRXZlbnQobmFtZSwgcGFyYW1zID0ge30pIHtcbiAgICAvLyBDb25maWd1cmUgc2Vzc2lvbiBpZCBhbmQgZW5nYWdlbWVudCB0aW1lIGlmIG5vdCBwcmVzZW50LCBmb3IgbW9yZSBkZXRhaWxzIHNlZTpcbiAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vcHJvdG9jb2wvZ2E0L3NlbmRpbmctZXZlbnRzP2NsaWVudF90eXBlPWd0YWcjcmVjb21tZW5kZWRfcGFyYW1ldGVyc19mb3JfcmVwb3J0c1xuICAgIGlmICghcGFyYW1zLnNlc3Npb25faWQpIHtcbiAgICAgIHBhcmFtcy5zZXNzaW9uX2lkID0gYXdhaXQgdGhpcy5nZXRPckNyZWF0ZVNlc3Npb25JZCgpO1xuICAgIH1cbiAgICBpZiAoIXBhcmFtcy5lbmdhZ2VtZW50X3RpbWVfbXNlYykge1xuICAgICAgcGFyYW1zLmVuZ2FnZW1lbnRfdGltZV9tc2VjID0gREVGQVVMVF9FTkdBR0VNRU5UX1RJTUVfTVNFQztcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLmRlYnVnID8gR0FfREVCVUdfRU5EUE9JTlQgOiBHQV9FTkRQT0lOVH0/bWVhc3VyZW1lbnRfaWQ9JHtNRUFTVVJFTUVOVF9JRH0mYXBpX3NlY3JldD0ke0FQSV9TRUNSRVR9YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGNsaWVudF9pZDogYXdhaXQgdGhpcy5nZXRPckNyZWF0ZUNsaWVudElkKCksXG4gICAgICAgICAgZXZlbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICAgIGlmICghdGhpcy5kZWJ1Zykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhhd2FpdCByZXNwb25zZS50ZXh0KCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZSBBbmFseXRpY3MgcmVxdWVzdCBmYWlsZWQgd2l0aCBhbiBleGNlcHRpb24nLCBlKTtcbiAgICB9XG4gIH1cblxuICAvLyBGaXJlIGEgcGFnZSB2aWV3IGV2ZW50LlxuICBhc3luYyBmaXJlUGFnZVZpZXdFdmVudChwYWdlVGl0bGUsIHBhZ2VMb2NhdGlvbiwgYWRkaXRpb25hbFBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyZUV2ZW50KCdwYWdlX3ZpZXcnLCB7XG4gICAgICBwYWdlX3RpdGxlOiBwYWdlVGl0bGUsXG4gICAgICBwYWdlX2xvY2F0aW9uOiBwYWdlTG9jYXRpb24sXG4gICAgICAuLi5hZGRpdGlvbmFsUGFyYW1zLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gRmlyZSBhbiBlcnJvciBldmVudC5cbiAgYXN5bmMgZmlyZUVycm9yRXZlbnQoZXJyb3IsIGFkZGl0aW9uYWxQYXJhbXMgPSB7fSkge1xuICAgIC8vIE5vdGU6ICdlcnJvcicgaXMgYSByZXNlcnZlZCBldmVudCBuYW1lIGFuZCBjYW5ub3QgYmUgdXNlZFxuICAgIC8vIHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vcHJvdG9jb2wvZ2E0L3JlZmVyZW5jZT9jbGllbnRfdHlwZT1ndGFnI3Jlc2VydmVkX25hbWVzXG4gICAgcmV0dXJuIHRoaXMuZmlyZUV2ZW50KCdleHRlbnNpb25fZXJyb3InLCB7XG4gICAgICAuLi5lcnJvcixcbiAgICAgIC4uLmFkZGl0aW9uYWxQYXJhbXMsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFuYWx5dGljcyA9IG5ldyBBbmFseXRpY3MoKTtcbiIsImltcG9ydCB7IGFuYWx5dGljcyB9IGZyb20gJy4vYW5hbHl0aWNzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCYWNrZ3JvdW5kUGFnZSgpIHtcbiAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKG9uTWVzc2FnZUhhbmRsZXIpO1xuICBjaHJvbWUuYWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcigodGFiKSA9PiB7XG4gICAgc2hvd01haW5QYW5lbCh0YWIuaWQsIHRhYi51cmwpO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2hvd01haW5QYW5lbCh0YWJJZCkge1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyB0YWJJZCB9KTtcblxuICBjb25zdCBleGlzdGluZ0NvbnRleHRzID0gYXdhaXQgY2hyb21lLnJ1bnRpbWUuZ2V0Q29udGV4dHMoe30pO1xuICBsZXQgcmVjb3JkaW5nID0gZmFsc2U7XG5cbiAgY29uc3Qgb2Zmc2NyZWVuRG9jdW1lbnQgPSBleGlzdGluZ0NvbnRleHRzLmZpbmQoKGMpID0+IGMuY29udGV4dFR5cGUgPT09ICdPRkZTQ1JFRU5fRE9DVU1FTlQnKTtcblxuICAvLyBJZiBhbiBvZmZzY3JlZW4gZG9jdW1lbnQgaXMgbm90IGFscmVhZHkgb3BlbiwgY3JlYXRlIG9uZS5cbiAgaWYgKCFvZmZzY3JlZW5Eb2N1bWVudCkge1xuICAgIC8vIENyZWF0ZSBhbiBvZmZzY3JlZW4gZG9jdW1lbnQuXG4gICAgYXdhaXQgY2hyb21lLm9mZnNjcmVlbi5jcmVhdGVEb2N1bWVudCh7XG4gICAgICB1cmw6ICdvZmZzY3JlZW4uaHRtbCcsXG4gICAgICByZWFzb25zOiBbJ1VTRVJfTUVESUEnXSxcbiAgICAgIGp1c3RpZmljYXRpb246ICdSZWNvcmRpbmcgZnJvbSBjaHJvbWUudGFiQ2FwdHVyZSBBUEknLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJlY29yZGluZyA9IG9mZnNjcmVlbkRvY3VtZW50LmRvY3VtZW50VXJsLmVuZHNXaXRoKCcjcmVjb3JkaW5nJyk7XG4gIH1cblxuICBleGVjdXRlU2NyaXB0KHRhYklkKS50aGVuKCgpID0+IHtcbiAgICBpZiAocmVjb3JkaW5nKSB7XG4gICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZUxvY2F0aW9uJyxcbiAgICAgICAgbG9jYXRpb246ICdzdG9wJyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFuZ2VJY29uKCcnKTtcbiAgICAgIHNlbmREZWZhdWx0TG9jYXRpb24odGFiSWQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uTWVzc2FnZUhhbmRsZXIobXNnLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVNob3dNYWluUGFuZWwnOlxuICAgICAgc2hvd01haW5QYW5lbChtc2cudGFiSWQpO1xuICAgICAgc2VuZFJlc3BvbnNlKHsgbWFpblBhbmVsOiB0cnVlIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVN0YXJ0UmVjb3JkaW5nJzpcbiAgICAgIHN0YXJ0UmVjb3JkaW5nKG1zZyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlU3RvcFJlY29yZGluZyc6XG4gICAgICBzdG9wUmVjb3JkaW5nKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlUmVzaXplV2luZG93JzpcbiAgICAgIHJlc2l6ZVdpbmRvdyhtc2cud2lkdGgsIG1zZy5oZWlnaHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVRyYWNrRXZlbnQnOlxuICAgICAgYW5hbHl0aWNzLmZpcmVFdmVudChtc2cuY2F0ZWdvcnksIG1zZy5wYXJhbXMpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVRyYWNrUGFnZSc6XG4gICAgICBhbmFseXRpY3MuZmlyZVBhZ2VWaWV3RXZlbnQobXNnLnBhdGguc3BsaXQoJy8nKS5wb3AoKSwgbXNnLnBhdGgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVVwZGF0ZWRUYWJMaXN0ZW5lcic6XG4gICAgICBsZXQgaGFuZGxlcjtcbiAgICAgIHN3aXRjaCAobXNnLmxvY2F0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3NjZW5hcmlvJzpcbiAgICAgICAgICBoYW5kbGVyID0gdXBkYXRlZFRhYkhhbmRsZXJTY2VuYXJpbztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGxheSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaGFuZGxlciA9IHVwZGF0ZWRUYWJIYW5kbGVyUGxheTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChtc2cuZW5hYmxlZCkge1xuICAgICAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoaGFuZGxlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQucmVtb3ZlTGlzdGVuZXIoaGFuZGxlcik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlSW5zZXJ0Q1NTJzpcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndGFiSWQnKS50aGVuKChvYmopID0+IHtcbiAgICAgICAgY2hyb21lLnNjcmlwdGluZy5pbnNlcnRDU1Moe1xuICAgICAgICAgIHRhcmdldDogeyB0YWJJZDogb2JqLnRhYklkIH0sXG4gICAgICAgICAgY3NzOiBtc2cuY3NzLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVZpc2libGVUYWInOlxuICAgICAgY2hyb21lLnRhYnMuY2FwdHVyZVZpc2libGVUYWIobnVsbCwge30sIChkYXRhVXJsKSA9PiB7XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IGRhdGFVcmwgfSk7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVJbWFnZUNhcHR1cmVTdGFydCc6XG4gICAgICBzdGFydEltYWdlQ2FwdHVyZShtc2cpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZUltYWdlQ2FwdHVyZVN0b3AnOlxuICAgICAgc3RvcEltYWdlQ2FwdHVyZShtc2cpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZWRUYWJIYW5kbGVyUGxheSh0YWJJZCwgY2hhbmdlSW5mbywgdGFiKSB7XG4gIGV4ZWN1dGVTY3JpcHQodGFiLmlkKS50aGVuKCgpID0+IHtcbiAgICBjaHJvbWUucnVudGltZS5nZXRDb250ZXh0cyh7fSkudGhlbigoZXhpc3RpbmdDb250ZXh0cykgPT4ge1xuICAgICAgY29uc3Qgb2Zmc2NyZWVuRG9jdW1lbnQgPSBleGlzdGluZ0NvbnRleHRzLmZpbmQoKGMpID0+IGMuY29udGV4dFR5cGUgPT09ICdPRkZTQ1JFRU5fRE9DVU1FTlQnKTtcbiAgICAgIGNvbnN0IHJlY29yZGluZyA9IG9mZnNjcmVlbkRvY3VtZW50LmRvY3VtZW50VXJsLmVuZHNXaXRoKCcjcmVjb3JkaW5nJyk7XG4gICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIHtcbiAgICAgICAgdHlwZTogJ3Njcm9sbENhcHR1cmVMb2NhdGlvbicsXG4gICAgICAgIGxvY2F0aW9uOiByZWNvcmRpbmcgPyAncmVjb3JkJyA6ICdwbGF5JyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlZFRhYkhhbmRsZXJTY2VuYXJpbyh0YWJJZCwgY2hhbmdlSW5mbywgdGFiKSB7XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndGFiSWQnKS50aGVuKChvYmopID0+IHtcbiAgICBpZiAob2JqLnRhYklkID09IHRhYklkKSB7XG4gICAgICBleGVjdXRlU2NyaXB0KHRhYi5pZCkudGhlbigoKSA9PiB7XG4gICAgICAgIHNlbmREZWZhdWx0TG9jYXRpb24odGFiLmlkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlbmREZWZhdWx0TG9jYXRpb24odGFiSWQpIHtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsnZGVmYXVsdExvY2F0aW9uJ10pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gcmVzdWx0LmRlZmF1bHRMb2NhdGlvbiB8fCAnc2Nyb2xsLWNhcHR1cmUnO1xuICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZUxvY2F0aW9uJyxcbiAgICAgIGxvY2F0aW9uLFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVNjcmlwdCh0YWJJZCkge1xuICByZXR1cm4gY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICB0YXJnZXQ6IHsgdGFiSWQgfSxcbiAgICBmaWxlczogWydjb250ZW50LmpzJ10sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNpemVXaW5kb3cod2lkdGgsIGhlaWdodCkge1xuICBsZXQgb3B0aW9ucyA9IHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gIH07XG4gIGNocm9tZS53aW5kb3dzLmdldEN1cnJlbnQoeyBwb3B1bGF0ZTogZmFsc2UgfSwgKHdpbikgPT4ge1xuICAgIGNocm9tZS53aW5kb3dzLnVwZGF0ZSh3aW4uaWQsIG9wdGlvbnMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlSWNvbihjb2xvciA9ICcnKSB7XG4gIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgcGF0aDoge1xuICAgICAgMTY6IGNocm9tZS5ydW50aW1lLmdldFVSTCgnYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDE2JyArIGNvbG9yICsgJy5wbmcnKSxcbiAgICAgIDMyOiBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2Fzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQzMicgKyBjb2xvciArICcucG5nJyksXG4gICAgICA0ODogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkNDgnICsgY29sb3IgKyAnLnBuZycpLFxuICAgICAgMTI4OiBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2Fzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQxMjgnICsgY29sb3IgKyAnLnBuZycpLFxuICAgIH0sXG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzdGFydFJlY29yZGluZyhkYXRhKSB7XG4gIGNoYW5nZUljb24oJ19yZWQnKTtcblxuICBjb25zdCBzdHJlYW1JZCA9IGF3YWl0IGNocm9tZS50YWJDYXB0dXJlLmdldE1lZGlhU3RyZWFtSWQoe1xuICAgIHRhcmdldFRhYklkOiBkYXRhLnRhYklkLFxuICB9KTtcblxuICBjb25zdCBtZXNzYWdlID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSk7XG4gIE9iamVjdC5hc3NpZ24obWVzc2FnZSwge1xuICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlU3RhcnRPZmZzY3JlZW5SZWNvcmRpbmcnLFxuICAgIHRhcmdldDogJ29mZnNjcmVlbicsXG4gICAgc3RyZWFtSWQsXG4gIH0pO1xuXG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBzdG9wUmVjb3JkaW5nKCkge1xuICBjaGFuZ2VJY29uKCk7XG5cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlU3RvcE9mZnNjcmVlblJlY29yZGluZycsXG4gICAgdGFyZ2V0OiAnb2Zmc2NyZWVuJyxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0SW1hZ2VDYXB0dXJlKCkge1xuICBjaGFuZ2VJY29uKCdfcmVkJyk7XG59XG5cbmZ1bmN0aW9uIHN0b3BJbWFnZUNhcHR1cmUoKSB7XG4gIGNoYW5nZUljb24oKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdEFuYWx5dGljcyB9IGZyb20gJy4vYW5hbHl0aWNzJztcbmltcG9ydCB7IGluaXRCYWNrZ3JvdW5kUGFnZSB9IGZyb20gJy4vYmFja2dyb3VuZCc7XG5cbmluaXRBbmFseXRpY3MoJ0ctWDMzRUhIQkw1RycsICdfVjBKdXNMS1FkMmJmbjBzU09uczNRJyk7XG5pbml0QmFja2dyb3VuZFBhZ2UoKTtcbiJdLCJuYW1lcyI6WyJHQV9FTkRQT0lOVCIsIkdBX0RFQlVHX0VORFBPSU5UIiwiTUVBU1VSRU1FTlRfSUQiLCJBUElfU0VDUkVUIiwiREVGQVVMVF9FTkdBR0VNRU5UX1RJTUVfTVNFQyIsIlNFU1NJT05fRVhQSVJBVElPTl9JTl9NSU4iLCJpbml0QW5hbHl0aWNzIiwiaWQiLCJzZWNyZXQiLCJBbmFseXRpY3MiLCJjb25zdHJ1Y3RvciIsImRlYnVnIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZ2V0T3JDcmVhdGVDbGllbnRJZCIsImNsaWVudElkIiwiY2hyb21lIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0Iiwic2VsZiIsImNyeXB0byIsInJhbmRvbVVVSUQiLCJzZXQiLCJnZXRPckNyZWF0ZVNlc3Npb25JZCIsInNlc3Npb25EYXRhIiwic2Vzc2lvbiIsImN1cnJlbnRUaW1lSW5NcyIsIkRhdGUiLCJub3ciLCJ0aW1lc3RhbXAiLCJkdXJhdGlvbkluTWluIiwic2Vzc2lvbl9pZCIsInRvU3RyaW5nIiwiZmlyZUV2ZW50IiwibmFtZSIsInBhcmFtcyIsImVuZ2FnZW1lbnRfdGltZV9tc2VjIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xpZW50X2lkIiwiZXZlbnRzIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJlIiwiZXJyb3IiLCJmaXJlUGFnZVZpZXdFdmVudCIsInBhZ2VUaXRsZSIsInBhZ2VMb2NhdGlvbiIsImFkZGl0aW9uYWxQYXJhbXMiLCJwYWdlX3RpdGxlIiwicGFnZV9sb2NhdGlvbiIsImZpcmVFcnJvckV2ZW50IiwiYW5hbHl0aWNzIiwiaW5pdEJhY2tncm91bmRQYWdlIiwicnVudGltZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwib25NZXNzYWdlSGFuZGxlciIsImFjdGlvbiIsIm9uQ2xpY2tlZCIsInRhYiIsInNob3dNYWluUGFuZWwiLCJ1cmwiLCJ0YWJJZCIsImV4aXN0aW5nQ29udGV4dHMiLCJnZXRDb250ZXh0cyIsInJlY29yZGluZyIsIm9mZnNjcmVlbkRvY3VtZW50IiwiZmluZCIsImMiLCJjb250ZXh0VHlwZSIsIm9mZnNjcmVlbiIsImNyZWF0ZURvY3VtZW50IiwicmVhc29ucyIsImp1c3RpZmljYXRpb24iLCJkb2N1bWVudFVybCIsImVuZHNXaXRoIiwiZXhlY3V0ZVNjcmlwdCIsInRoZW4iLCJ0YWJzIiwic2VuZE1lc3NhZ2UiLCJ0eXBlIiwibG9jYXRpb24iLCJjaGFuZ2VJY29uIiwic2VuZERlZmF1bHRMb2NhdGlvbiIsIm1zZyIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsIm1haW5QYW5lbCIsInN0YXJ0UmVjb3JkaW5nIiwic3RvcFJlY29yZGluZyIsInJlc2l6ZVdpbmRvdyIsIndpZHRoIiwiaGVpZ2h0IiwiY2F0ZWdvcnkiLCJwYXRoIiwic3BsaXQiLCJwb3AiLCJoYW5kbGVyIiwidXBkYXRlZFRhYkhhbmRsZXJTY2VuYXJpbyIsInVwZGF0ZWRUYWJIYW5kbGVyUGxheSIsImVuYWJsZWQiLCJvblVwZGF0ZWQiLCJyZW1vdmVMaXN0ZW5lciIsIm9iaiIsInNjcmlwdGluZyIsImluc2VydENTUyIsInRhcmdldCIsImNzcyIsImNhcHR1cmVWaXNpYmxlVGFiIiwiZGF0YVVybCIsInN0YXJ0SW1hZ2VDYXB0dXJlIiwic3RvcEltYWdlQ2FwdHVyZSIsImNoYW5nZUluZm8iLCJyZXN1bHQiLCJkZWZhdWx0TG9jYXRpb24iLCJmaWxlcyIsIm9wdGlvbnMiLCJ3aW5kb3dzIiwiZ2V0Q3VycmVudCIsInBvcHVsYXRlIiwid2luIiwidXBkYXRlIiwiY29sb3IiLCJzZXRJY29uIiwiZ2V0VVJMIiwiZGF0YSIsInN0cmVhbUlkIiwidGFiQ2FwdHVyZSIsImdldE1lZGlhU3RyZWFtSWQiLCJ0YXJnZXRUYWJJZCIsIm1lc3NhZ2UiLCJPYmplY3QiLCJhc3NpZ24iXSwic291cmNlUm9vdCI6IiJ9