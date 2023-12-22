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
  chrome.action.onClicked.addListener(async tab => {
    chrome.storage.local.set({
      tabId: tab.id
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
    chrome.windows.getCurrent({
      populate: false
    }, win => {
      globalThis.chromeSize = {
        width: win.width - tab.width,
        height: win.height - tab.height
      };
    });
    executeScript(tab).then(() => {
      if (recording) {
        chrome.tabs.sendMessage(tab.id, {
          type: 'scrollCaptureLocation',
          location: 'stop'
        });
      } else {
        changeIcon('');
        chrome.tabs.sendMessage(tab.id, {
          type: 'scrollCaptureLocation',
          location: ''
        });
      }
    });
  });
  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    switch (msg.type) {
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
        _analytics__WEBPACK_IMPORTED_MODULE_0__.analytics.fireEvent(msg.category, {
          action: msg.action,
          label: msg.label
        });
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
    }
  });
}
function updatedTabHandlerPlay(tabId, changeInfo, tab) {
  executeScript(tab).then(() => {
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
      executeScript(tab).then(() => {
        chrome.tabs.sendMessage(tab.id, {
          type: 'scrollCaptureLocation',
          location: 'scroll-capture'
        });
      });
    }
  });
}
function executeScript(tab) {
  return chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    files: ['content.js']
  });
}
function resizeWindow(width, height) {
  let options = {
    width: width + globalThis.chromeSize.width,
    height: height + globalThis.chromeSize.height
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ007QUFFbEQvRyx5REFBYSxDQUFDLGNBQWMsRUFBRSx3QkFBd0IsQ0FBQztBQUN2RHNELCtEQUFrQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2FuYWx5dGljcy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2pzL2JhY2tncm91bmQtZGV2ZWxvcG1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR0FfRU5EUE9JTlQgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vbXAvY29sbGVjdCc7XG5jb25zdCBHQV9ERUJVR19FTkRQT0lOVCA9ICdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9kZWJ1Zy9tcC9jb2xsZWN0JztcblxuLy8gR2V0IHZpYSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vcHJvdG9jb2wvZ2E0L3NlbmRpbmctZXZlbnRzP2NsaWVudF90eXBlPWd0YWcjcmVjb21tZW5kZWRfcGFyYW1ldGVyc19mb3JfcmVwb3J0c1xubGV0IE1FQVNVUkVNRU5UX0lEID0gJzxtZWFzdXJlbWVudF9pZD4nO1xubGV0IEFQSV9TRUNSRVQgPSAnPGFwaV9zZWNyZXQ+JztcbmNvbnN0IERFRkFVTFRfRU5HQUdFTUVOVF9USU1FX01TRUMgPSAxMDA7XG5cbi8vIER1cmF0aW9uIG9mIGluYWN0aXZpdHkgYWZ0ZXIgd2hpY2ggYSBuZXcgc2Vzc2lvbiBpcyBjcmVhdGVkXG5jb25zdCBTRVNTSU9OX0VYUElSQVRJT05fSU5fTUlOID0gMzA7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QW5hbHl0aWNzKGlkLCBzZWNyZXQpIHtcbiAgTUVBU1VSRU1FTlRfSUQgPSBpZDtcbiAgQVBJX1NFQ1JFVCA9IHNlY3JldDtcbn1cblxuY2xhc3MgQW5hbHl0aWNzIHtcbiAgY29uc3RydWN0b3IoZGVidWcgPSBmYWxzZSkge1xuICAgIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgfVxuXG4gIC8vIFJldHVybnMgdGhlIGNsaWVudCBpZCwgb3IgY3JlYXRlcyBhIG5ldyBvbmUgaWYgb25lIGRvZXNuJ3QgZXhpc3QuXG4gIC8vIFN0b3JlcyBjbGllbnQgaWQgaW4gbG9jYWwgc3RvcmFnZSB0byBrZWVwIHRoZSBzYW1lIGNsaWVudCBpZCBhcyBsb25nIGFzXG4gIC8vIHRoZSBleHRlbnNpb24gaXMgaW5zdGFsbGVkLlxuICBhc3luYyBnZXRPckNyZWF0ZUNsaWVudElkKCkge1xuICAgIGxldCB7IGNsaWVudElkIH0gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ2NsaWVudElkJyk7XG4gICAgaWYgKCFjbGllbnRJZCkge1xuICAgICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgY2xpZW50IElELCB0aGUgYWN0dWFsIHZhbHVlIGlzIG5vdCByZWxldmFudFxuICAgICAgY2xpZW50SWQgPSBzZWxmLmNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBjbGllbnRJZCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNsaWVudElkO1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgY3VycmVudCBzZXNzaW9uIGlkLCBvciBjcmVhdGVzIGEgbmV3IG9uZSBpZiBvbmUgZG9lc24ndCBleGlzdCBvclxuICAvLyB0aGUgcHJldmlvdXMgb25lIGhhcyBleHBpcmVkLlxuICBhc3luYyBnZXRPckNyZWF0ZVNlc3Npb25JZCgpIHtcbiAgICAvLyBVc2Ugc3RvcmFnZS5zZXNzaW9uIGJlY2F1c2UgaXQgaXMgb25seSBpbiBtZW1vcnlcbiAgICBsZXQgeyBzZXNzaW9uRGF0YSB9ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc2Vzc2lvbi5nZXQoJ3Nlc3Npb25EYXRhJyk7XG4gICAgY29uc3QgY3VycmVudFRpbWVJbk1zID0gRGF0ZS5ub3coKTtcbiAgICAvLyBDaGVjayBpZiBzZXNzaW9uIGV4aXN0cyBhbmQgaXMgc3RpbGwgdmFsaWRcbiAgICBpZiAoc2Vzc2lvbkRhdGEgJiYgc2Vzc2lvbkRhdGEudGltZXN0YW1wKSB7XG4gICAgICAvLyBDYWxjdWxhdGUgaG93IGxvbmcgYWdvIHRoZSBzZXNzaW9uIHdhcyBsYXN0IHVwZGF0ZWRcbiAgICAgIGNvbnN0IGR1cmF0aW9uSW5NaW4gPSAoY3VycmVudFRpbWVJbk1zIC0gc2Vzc2lvbkRhdGEudGltZXN0YW1wKSAvIDYwMDAwO1xuICAgICAgLy8gQ2hlY2sgaWYgbGFzdCB1cGRhdGUgbGF5cyBwYXN0IHRoZSBzZXNzaW9uIGV4cGlyYXRpb24gdGhyZXNob2xkXG4gICAgICBpZiAoZHVyYXRpb25Jbk1pbiA+IFNFU1NJT05fRVhQSVJBVElPTl9JTl9NSU4pIHtcbiAgICAgICAgLy8gQ2xlYXIgb2xkIHNlc3Npb24gaWQgdG8gc3RhcnQgYSBuZXcgc2Vzc2lvblxuICAgICAgICBzZXNzaW9uRGF0YSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVcGRhdGUgdGltZXN0YW1wIHRvIGtlZXAgc2Vzc2lvbiBhbGl2ZVxuICAgICAgICBzZXNzaW9uRGF0YS50aW1lc3RhbXAgPSBjdXJyZW50VGltZUluTXM7XG4gICAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLnNlc3Npb24uc2V0KHsgc2Vzc2lvbkRhdGEgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghc2Vzc2lvbkRhdGEpIHtcbiAgICAgIC8vIENyZWF0ZSBhbmQgc3RvcmUgYSBuZXcgc2Vzc2lvblxuICAgICAgc2Vzc2lvbkRhdGEgPSB7XG4gICAgICAgIHNlc3Npb25faWQ6IGN1cnJlbnRUaW1lSW5Ncy50b1N0cmluZygpLFxuICAgICAgICB0aW1lc3RhbXA6IGN1cnJlbnRUaW1lSW5Ncy50b1N0cmluZygpLFxuICAgICAgfTtcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLnNlc3Npb24uc2V0KHsgc2Vzc2lvbkRhdGEgfSk7XG4gICAgfVxuICAgIHJldHVybiBzZXNzaW9uRGF0YS5zZXNzaW9uX2lkO1xuICB9XG5cbiAgLy8gRmlyZXMgYW4gZXZlbnQgd2l0aCBvcHRpb25hbCBwYXJhbXMuIEV2ZW50IG5hbWVzIG11c3Qgb25seSBpbmNsdWRlIGxldHRlcnMgYW5kIHVuZGVyc2NvcmVzLlxuICBhc3luYyBmaXJlRXZlbnQobmFtZSwgcGFyYW1zID0ge30pIHtcbiAgICAvLyBDb25maWd1cmUgc2Vzc2lvbiBpZCBhbmQgZW5nYWdlbWVudCB0aW1lIGlmIG5vdCBwcmVzZW50LCBmb3IgbW9yZSBkZXRhaWxzIHNlZTpcbiAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vcHJvdG9jb2wvZ2E0L3NlbmRpbmctZXZlbnRzP2NsaWVudF90eXBlPWd0YWcjcmVjb21tZW5kZWRfcGFyYW1ldGVyc19mb3JfcmVwb3J0c1xuICAgIGlmICghcGFyYW1zLnNlc3Npb25faWQpIHtcbiAgICAgIHBhcmFtcy5zZXNzaW9uX2lkID0gYXdhaXQgdGhpcy5nZXRPckNyZWF0ZVNlc3Npb25JZCgpO1xuICAgIH1cbiAgICBpZiAoIXBhcmFtcy5lbmdhZ2VtZW50X3RpbWVfbXNlYykge1xuICAgICAgcGFyYW1zLmVuZ2FnZW1lbnRfdGltZV9tc2VjID0gREVGQVVMVF9FTkdBR0VNRU5UX1RJTUVfTVNFQztcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYCR7dGhpcy5kZWJ1ZyA/IEdBX0RFQlVHX0VORFBPSU5UIDogR0FfRU5EUE9JTlR9P21lYXN1cmVtZW50X2lkPSR7TUVBU1VSRU1FTlRfSUR9JmFwaV9zZWNyZXQ9JHtBUElfU0VDUkVUfWAsXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBjbGllbnRfaWQ6IGF3YWl0IHRoaXMuZ2V0T3JDcmVhdGVDbGllbnRJZCgpLFxuICAgICAgICAgICAgZXZlbnRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSksXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBpZiAoIXRoaXMuZGVidWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdHb29nbGUgQW5hbHl0aWNzIHJlcXVlc3QgZmFpbGVkIHdpdGggYW4gZXhjZXB0aW9uJywgZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmlyZSBhIHBhZ2UgdmlldyBldmVudC5cbiAgYXN5bmMgZmlyZVBhZ2VWaWV3RXZlbnQocGFnZVRpdGxlLCBwYWdlTG9jYXRpb24sIGFkZGl0aW9uYWxQYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmZpcmVFdmVudCgncGFnZV92aWV3Jywge1xuICAgICAgcGFnZV90aXRsZTogcGFnZVRpdGxlLFxuICAgICAgcGFnZV9sb2NhdGlvbjogcGFnZUxvY2F0aW9uLFxuICAgICAgLi4uYWRkaXRpb25hbFBhcmFtcyxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEZpcmUgYW4gZXJyb3IgZXZlbnQuXG4gIGFzeW5jIGZpcmVFcnJvckV2ZW50KGVycm9yLCBhZGRpdGlvbmFsUGFyYW1zID0ge30pIHtcbiAgICAvLyBOb3RlOiAnZXJyb3InIGlzIGEgcmVzZXJ2ZWQgZXZlbnQgbmFtZSBhbmQgY2Fubm90IGJlIHVzZWRcbiAgICAvLyBzZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL3Byb3RvY29sL2dhNC9yZWZlcmVuY2U/Y2xpZW50X3R5cGU9Z3RhZyNyZXNlcnZlZF9uYW1lc1xuICAgIHJldHVybiB0aGlzLmZpcmVFdmVudCgnZXh0ZW5zaW9uX2Vycm9yJywge1xuICAgICAgLi4uZXJyb3IsXG4gICAgICAuLi5hZGRpdGlvbmFsUGFyYW1zLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhbmFseXRpY3MgPSBuZXcgQW5hbHl0aWNzKCk7XG4iLCJpbXBvcnQgeyBhbmFseXRpY3MgfSBmcm9tICcuL2FuYWx5dGljcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QmFja2dyb3VuZFBhZ2UoKSB7XG4gIGNocm9tZS5hY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKGFzeW5jICh0YWIpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyB0YWJJZDogdGFiLmlkIH0pO1xuXG4gICAgY29uc3QgZXhpc3RpbmdDb250ZXh0cyA9IGF3YWl0IGNocm9tZS5ydW50aW1lLmdldENvbnRleHRzKHt9KTtcbiAgICBsZXQgcmVjb3JkaW5nID0gZmFsc2U7XG5cbiAgICBjb25zdCBvZmZzY3JlZW5Eb2N1bWVudCA9IGV4aXN0aW5nQ29udGV4dHMuZmluZCgoYykgPT4gYy5jb250ZXh0VHlwZSA9PT0gJ09GRlNDUkVFTl9ET0NVTUVOVCcpO1xuXG4gICAgLy8gSWYgYW4gb2Zmc2NyZWVuIGRvY3VtZW50IGlzIG5vdCBhbHJlYWR5IG9wZW4sIGNyZWF0ZSBvbmUuXG4gICAgaWYgKCFvZmZzY3JlZW5Eb2N1bWVudCkge1xuICAgICAgLy8gQ3JlYXRlIGFuIG9mZnNjcmVlbiBkb2N1bWVudC5cbiAgICAgIGF3YWl0IGNocm9tZS5vZmZzY3JlZW4uY3JlYXRlRG9jdW1lbnQoe1xuICAgICAgICB1cmw6ICdvZmZzY3JlZW4uaHRtbCcsXG4gICAgICAgIHJlYXNvbnM6IFsnVVNFUl9NRURJQSddLFxuICAgICAgICBqdXN0aWZpY2F0aW9uOiAnUmVjb3JkaW5nIGZyb20gY2hyb21lLnRhYkNhcHR1cmUgQVBJJyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWNvcmRpbmcgPSBvZmZzY3JlZW5Eb2N1bWVudC5kb2N1bWVudFVybC5lbmRzV2l0aCgnI3JlY29yZGluZycpO1xuICAgIH1cblxuICAgIGNocm9tZS53aW5kb3dzLmdldEN1cnJlbnQoeyBwb3B1bGF0ZTogZmFsc2UgfSwgKHdpbikgPT4ge1xuICAgICAgZ2xvYmFsVGhpcy5jaHJvbWVTaXplID0ge1xuICAgICAgICB3aWR0aDogd2luLndpZHRoIC0gdGFiLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHdpbi5oZWlnaHQgLSB0YWIuaGVpZ2h0LFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVTY3JpcHQodGFiKS50aGVuKCgpID0+IHtcbiAgICAgIGlmIChyZWNvcmRpbmcpIHtcbiAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7XG4gICAgICAgICAgdHlwZTogJ3Njcm9sbENhcHR1cmVMb2NhdGlvbicsXG4gICAgICAgICAgbG9jYXRpb246ICdzdG9wJyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFuZ2VJY29uKCcnKTtcbiAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7XG4gICAgICAgICAgdHlwZTogJ3Njcm9sbENhcHR1cmVMb2NhdGlvbicsXG4gICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtc2csIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVN0YXJ0UmVjb3JkaW5nJzpcbiAgICAgICAgc3RhcnRSZWNvcmRpbmcobXNnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzY3JvbGxDYXB0dXJlU3RvcFJlY29yZGluZyc6XG4gICAgICAgIHN0b3BSZWNvcmRpbmcoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzY3JvbGxDYXB0dXJlUmVzaXplV2luZG93JzpcbiAgICAgICAgcmVzaXplV2luZG93KG1zZy53aWR0aCwgbXNnLmhlaWdodCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVRyYWNrRXZlbnQnOlxuICAgICAgICBhbmFseXRpY3MuZmlyZUV2ZW50KG1zZy5jYXRlZ29yeSwge1xuICAgICAgICAgIGFjdGlvbjogbXNnLmFjdGlvbixcbiAgICAgICAgICBsYWJlbDogbXNnLmxhYmVsLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzY3JvbGxDYXB0dXJlVHJhY2tQYWdlJzpcbiAgICAgICAgYW5hbHl0aWNzLmZpcmVQYWdlVmlld0V2ZW50KG1zZy5wYXRoLnNwbGl0KCcvJykucG9wKCksIG1zZy5wYXRoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzY3JvbGxDYXB0dXJlVXBkYXRlZFRhYkxpc3RlbmVyJzpcbiAgICAgICAgbGV0IGhhbmRsZXI7XG4gICAgICAgIHN3aXRjaCAobXNnLmxvY2F0aW9uKSB7XG4gICAgICAgICAgY2FzZSAnc2NlbmFyaW8nOlxuICAgICAgICAgICAgaGFuZGxlciA9IHVwZGF0ZWRUYWJIYW5kbGVyU2NlbmFyaW87XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdwbGF5JzpcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaGFuZGxlciA9IHVwZGF0ZWRUYWJIYW5kbGVyUGxheTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtc2cuZW5hYmxlZCkge1xuICAgICAgICAgIGNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcihoYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQucmVtb3ZlTGlzdGVuZXIoaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlZFRhYkhhbmRsZXJQbGF5KHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpIHtcbiAgZXhlY3V0ZVNjcmlwdCh0YWIpLnRoZW4oKCkgPT4ge1xuICAgIGNocm9tZS5ydW50aW1lLmdldENvbnRleHRzKHt9KS50aGVuKChleGlzdGluZ0NvbnRleHRzKSA9PiB7XG4gICAgICBjb25zdCBvZmZzY3JlZW5Eb2N1bWVudCA9IGV4aXN0aW5nQ29udGV4dHMuZmluZCgoYykgPT4gYy5jb250ZXh0VHlwZSA9PT0gJ09GRlNDUkVFTl9ET0NVTUVOVCcpO1xuICAgICAgY29uc3QgcmVjb3JkaW5nID0gb2Zmc2NyZWVuRG9jdW1lbnQuZG9jdW1lbnRVcmwuZW5kc1dpdGgoJyNyZWNvcmRpbmcnKTtcbiAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwge1xuICAgICAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZUxvY2F0aW9uJyxcbiAgICAgICAgbG9jYXRpb246IHJlY29yZGluZyA/ICdyZWNvcmQnIDogJ3BsYXknLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVkVGFiSGFuZGxlclNjZW5hcmlvKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpIHtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCd0YWJJZCcpLnRoZW4oKG9iaikgPT4ge1xuICAgIGlmIChvYmoudGFiSWQgPT0gdGFiSWQpIHtcbiAgICAgIGV4ZWN1dGVTY3JpcHQodGFiKS50aGVuKCgpID0+IHtcbiAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7XG4gICAgICAgICAgdHlwZTogJ3Njcm9sbENhcHR1cmVMb2NhdGlvbicsXG4gICAgICAgICAgbG9jYXRpb246ICdzY3JvbGwtY2FwdHVyZScsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVNjcmlwdCh0YWIpIHtcbiAgcmV0dXJuIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgdGFyZ2V0OiB7IHRhYklkOiB0YWIuaWQgfSxcbiAgICBmaWxlczogWydjb250ZW50LmpzJ10sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNpemVXaW5kb3cod2lkdGgsIGhlaWdodCkge1xuICBsZXQgb3B0aW9ucyA9IHtcbiAgICB3aWR0aDogd2lkdGggKyBnbG9iYWxUaGlzLmNocm9tZVNpemUud2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQgKyBnbG9iYWxUaGlzLmNocm9tZVNpemUuaGVpZ2h0LFxuICB9O1xuICBjaHJvbWUud2luZG93cy5nZXRDdXJyZW50KHsgcG9wdWxhdGU6IGZhbHNlIH0sICh3aW4pID0+IHtcbiAgICBjaHJvbWUud2luZG93cy51cGRhdGUod2luLmlkLCBvcHRpb25zKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUljb24oY29sb3IgPSAnJykge1xuICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgIHBhdGg6IHtcbiAgICAgIDE2OiBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2Fzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQxNicgKyBjb2xvciArICcucG5nJyksXG4gICAgICAzMjogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkMzInICsgY29sb3IgKyAnLnBuZycpLFxuICAgICAgNDg6IGNocm9tZS5ydW50aW1lLmdldFVSTCgnYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDQ4JyArIGNvbG9yICsgJy5wbmcnKSxcbiAgICAgIDEyODogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkMTI4JyArIGNvbG9yICsgJy5wbmcnKSxcbiAgICB9LFxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3RhcnRSZWNvcmRpbmcoZGF0YSkge1xuICBjaGFuZ2VJY29uKCdfcmVkJyk7XG5cbiAgY29uc3Qgc3RyZWFtSWQgPSBhd2FpdCBjaHJvbWUudGFiQ2FwdHVyZS5nZXRNZWRpYVN0cmVhbUlkKHtcbiAgICB0YXJnZXRUYWJJZDogZGF0YS50YWJJZCxcbiAgfSk7XG5cbiAgY29uc3QgbWVzc2FnZSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpO1xuICBPYmplY3QuYXNzaWduKG1lc3NhZ2UsIHtcbiAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVN0YXJ0T2Zmc2NyZWVuUmVjb3JkaW5nJyxcbiAgICB0YXJnZXQ6ICdvZmZzY3JlZW4nLFxuICAgIHN0cmVhbUlkLFxuICB9KTtcblxuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShtZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gc3RvcFJlY29yZGluZygpIHtcbiAgY2hhbmdlSWNvbigpO1xuXG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVN0b3BPZmZzY3JlZW5SZWNvcmRpbmcnLFxuICAgIHRhcmdldDogJ29mZnNjcmVlbicsXG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0QW5hbHl0aWNzIH0gZnJvbSAnLi9hbmFseXRpY3MnO1xuaW1wb3J0IHsgaW5pdEJhY2tncm91bmRQYWdlIH0gZnJvbSAnLi9iYWNrZ3JvdW5kJztcblxuaW5pdEFuYWx5dGljcygnRy1YMzNFSEhCTDVHJywgJ19WMEp1c0xLUWQyYmZuMHNTT25zM1EnKTtcbmluaXRCYWNrZ3JvdW5kUGFnZSgpO1xuIl0sIm5hbWVzIjpbIkdBX0VORFBPSU5UIiwiR0FfREVCVUdfRU5EUE9JTlQiLCJNRUFTVVJFTUVOVF9JRCIsIkFQSV9TRUNSRVQiLCJERUZBVUxUX0VOR0FHRU1FTlRfVElNRV9NU0VDIiwiU0VTU0lPTl9FWFBJUkFUSU9OX0lOX01JTiIsImluaXRBbmFseXRpY3MiLCJpZCIsInNlY3JldCIsIkFuYWx5dGljcyIsImNvbnN0cnVjdG9yIiwiZGVidWciLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJnZXRPckNyZWF0ZUNsaWVudElkIiwiY2xpZW50SWQiLCJjaHJvbWUiLCJzdG9yYWdlIiwibG9jYWwiLCJnZXQiLCJzZWxmIiwiY3J5cHRvIiwicmFuZG9tVVVJRCIsInNldCIsImdldE9yQ3JlYXRlU2Vzc2lvbklkIiwic2Vzc2lvbkRhdGEiLCJzZXNzaW9uIiwiY3VycmVudFRpbWVJbk1zIiwiRGF0ZSIsIm5vdyIsInRpbWVzdGFtcCIsImR1cmF0aW9uSW5NaW4iLCJzZXNzaW9uX2lkIiwidG9TdHJpbmciLCJmaXJlRXZlbnQiLCJuYW1lIiwicGFyYW1zIiwiZW5nYWdlbWVudF90aW1lX21zZWMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjbGllbnRfaWQiLCJldmVudHMiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImUiLCJlcnJvciIsImZpcmVQYWdlVmlld0V2ZW50IiwicGFnZVRpdGxlIiwicGFnZUxvY2F0aW9uIiwiYWRkaXRpb25hbFBhcmFtcyIsInBhZ2VfdGl0bGUiLCJwYWdlX2xvY2F0aW9uIiwiZmlyZUVycm9yRXZlbnQiLCJhbmFseXRpY3MiLCJpbml0QmFja2dyb3VuZFBhZ2UiLCJhY3Rpb24iLCJvbkNsaWNrZWQiLCJhZGRMaXN0ZW5lciIsInRhYiIsInRhYklkIiwiZXhpc3RpbmdDb250ZXh0cyIsInJ1bnRpbWUiLCJnZXRDb250ZXh0cyIsInJlY29yZGluZyIsIm9mZnNjcmVlbkRvY3VtZW50IiwiZmluZCIsImMiLCJjb250ZXh0VHlwZSIsIm9mZnNjcmVlbiIsImNyZWF0ZURvY3VtZW50IiwidXJsIiwicmVhc29ucyIsImp1c3RpZmljYXRpb24iLCJkb2N1bWVudFVybCIsImVuZHNXaXRoIiwid2luZG93cyIsImdldEN1cnJlbnQiLCJwb3B1bGF0ZSIsIndpbiIsImdsb2JhbFRoaXMiLCJjaHJvbWVTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJleGVjdXRlU2NyaXB0IiwidGhlbiIsInRhYnMiLCJzZW5kTWVzc2FnZSIsInR5cGUiLCJsb2NhdGlvbiIsImNoYW5nZUljb24iLCJvbk1lc3NhZ2UiLCJtc2ciLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJzdGFydFJlY29yZGluZyIsInN0b3BSZWNvcmRpbmciLCJyZXNpemVXaW5kb3ciLCJjYXRlZ29yeSIsImxhYmVsIiwicGF0aCIsInNwbGl0IiwicG9wIiwiaGFuZGxlciIsInVwZGF0ZWRUYWJIYW5kbGVyU2NlbmFyaW8iLCJ1cGRhdGVkVGFiSGFuZGxlclBsYXkiLCJlbmFibGVkIiwib25VcGRhdGVkIiwicmVtb3ZlTGlzdGVuZXIiLCJjaGFuZ2VJbmZvIiwib2JqIiwic2NyaXB0aW5nIiwidGFyZ2V0IiwiZmlsZXMiLCJvcHRpb25zIiwidXBkYXRlIiwiY29sb3IiLCJzZXRJY29uIiwiZ2V0VVJMIiwiZGF0YSIsInN0cmVhbUlkIiwidGFiQ2FwdHVyZSIsImdldE1lZGlhU3RyZWFtSWQiLCJ0YXJnZXRUYWJJZCIsIm1lc3NhZ2UiLCJPYmplY3QiLCJhc3NpZ24iXSwic291cmNlUm9vdCI6IiJ9