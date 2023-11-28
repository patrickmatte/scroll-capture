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
    const existingContexts = await chrome.runtime.getContexts({});
    let recording = false;
    const offscreenDocument = existingContexts.find(c => c.contextType === "OFFSCREEN_DOCUMENT");

    // If an offscreen document is not already open, create one.
    if (!offscreenDocument) {
      // Create an offscreen document.
      await chrome.offscreen.createDocument({
        url: "offscreen.html",
        reasons: ["USER_MEDIA"],
        justification: "Recording from chrome.tabCapture API"
      });
    } else {
      recording = offscreenDocument.documentUrl.endsWith("#recording");
    }
    if (recording) {
      //   stopRecording({'stopped with button'});
    }
    chrome.scripting.executeScript({
      target: {
        tabId: tab.id
      },
      files: ["content.js"]
    });

    // globalThis.tabId = tab.id;
    chrome.storage.local.set({
      tabId: tab.id
    });
    chrome.windows.getCurrent({
      populate: false
    }, win => {
      globalThis.chromeSize = {
        width: win.width - tab.width,
        height: win.height - tab.height
      };
    });
  });
}
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  switch (msg.type) {
    case "scrollCaptureStartRecording":
      startRecording(msg);
      break;
    case "scrollCaptureStopRecording":
      stopRecording(msg);
      break;
    case "scrollCaptureResizeWindow":
      resizeWindow(msg.width, msg.height);
      break;
    case "scrollCaptureTrackEvent":
      _analytics__WEBPACK_IMPORTED_MODULE_0__.analytics.fireEvent(msg.category, {
        action: msg.action,
        label: msg.label
      });
      break;
    case "scrollCaptureTrackPage":
      _analytics__WEBPACK_IMPORTED_MODULE_0__.analytics.firePageViewEvent(msg.path.split("/").pop(), msg.path);
      break;
  }
});
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
  let color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  chrome.action.setIcon({
    path: {
      16: chrome.runtime.getURL("assets/images/get_started16" + color + ".png"),
      32: chrome.runtime.getURL("assets/images/get_started32" + color + ".png"),
      48: chrome.runtime.getURL("assets/images/get_started48" + color + ".png"),
      128: chrome.runtime.getURL("assets/images/get_started128" + color + ".png")
    }
  });
}
async function startRecording(data) {
  changeIcon("_red");
  const streamId = await chrome.tabCapture.getMediaStreamId({
    targetTabId: data.tabId
  });
  const message = Object.assign({}, data);
  Object.assign(message, {
    type: "scrollCaptureStartOffscreenRecording",
    target: "offscreen",
    streamId
  });
  chrome.runtime.sendMessage(message);
}
function stopRecording(message) {
  changeIcon();
  chrome.runtime.sendMessage({
    type: "scrollCaptureStopOffscreenRecording",
    target: "offscreen"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ007QUFFbEQ1RSx5REFBYSxDQUFDLGNBQWMsRUFBRSx3QkFBd0IsQ0FBQztBQUN2RHNELCtEQUFrQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2FuYWx5dGljcy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2pzL2JhY2tncm91bmQtZGV2ZWxvcG1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR0FfRU5EUE9JTlQgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vbXAvY29sbGVjdCc7XG5jb25zdCBHQV9ERUJVR19FTkRQT0lOVCA9ICdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9kZWJ1Zy9tcC9jb2xsZWN0JztcblxuLy8gR2V0IHZpYSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vcHJvdG9jb2wvZ2E0L3NlbmRpbmctZXZlbnRzP2NsaWVudF90eXBlPWd0YWcjcmVjb21tZW5kZWRfcGFyYW1ldGVyc19mb3JfcmVwb3J0c1xubGV0IE1FQVNVUkVNRU5UX0lEID0gJzxtZWFzdXJlbWVudF9pZD4nO1xubGV0IEFQSV9TRUNSRVQgPSAnPGFwaV9zZWNyZXQ+JztcbmNvbnN0IERFRkFVTFRfRU5HQUdFTUVOVF9USU1FX01TRUMgPSAxMDA7XG5cbi8vIER1cmF0aW9uIG9mIGluYWN0aXZpdHkgYWZ0ZXIgd2hpY2ggYSBuZXcgc2Vzc2lvbiBpcyBjcmVhdGVkXG5jb25zdCBTRVNTSU9OX0VYUElSQVRJT05fSU5fTUlOID0gMzA7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QW5hbHl0aWNzKGlkLCBzZWNyZXQpIHtcbiAgICBNRUFTVVJFTUVOVF9JRCA9IGlkO1xuICAgIEFQSV9TRUNSRVQgPSBzZWNyZXQ7XG59XG5cbmNsYXNzIEFuYWx5dGljcyB7XG4gIGNvbnN0cnVjdG9yKGRlYnVnID0gZmFsc2UpIHtcbiAgICB0aGlzLmRlYnVnID0gZGVidWc7XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSBjbGllbnQgaWQsIG9yIGNyZWF0ZXMgYSBuZXcgb25lIGlmIG9uZSBkb2Vzbid0IGV4aXN0LlxuICAvLyBTdG9yZXMgY2xpZW50IGlkIGluIGxvY2FsIHN0b3JhZ2UgdG8ga2VlcCB0aGUgc2FtZSBjbGllbnQgaWQgYXMgbG9uZyBhc1xuICAvLyB0aGUgZXh0ZW5zaW9uIGlzIGluc3RhbGxlZC5cbiAgYXN5bmMgZ2V0T3JDcmVhdGVDbGllbnRJZCgpIHtcbiAgICBsZXQgeyBjbGllbnRJZCB9ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCdjbGllbnRJZCcpO1xuICAgIGlmICghY2xpZW50SWQpIHtcbiAgICAgIC8vIEdlbmVyYXRlIGEgdW5pcXVlIGNsaWVudCBJRCwgdGhlIGFjdHVhbCB2YWx1ZSBpcyBub3QgcmVsZXZhbnRcbiAgICAgIGNsaWVudElkID0gc2VsZi5jcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgY2xpZW50SWQgfSk7XG4gICAgfVxuICAgIHJldHVybiBjbGllbnRJZDtcbiAgfVxuXG4gIC8vIFJldHVybnMgdGhlIGN1cnJlbnQgc2Vzc2lvbiBpZCwgb3IgY3JlYXRlcyBhIG5ldyBvbmUgaWYgb25lIGRvZXNuJ3QgZXhpc3Qgb3JcbiAgLy8gdGhlIHByZXZpb3VzIG9uZSBoYXMgZXhwaXJlZC5cbiAgYXN5bmMgZ2V0T3JDcmVhdGVTZXNzaW9uSWQoKSB7XG4gICAgLy8gVXNlIHN0b3JhZ2Uuc2Vzc2lvbiBiZWNhdXNlIGl0IGlzIG9ubHkgaW4gbWVtb3J5XG4gICAgbGV0IHsgc2Vzc2lvbkRhdGEgfSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLnNlc3Npb24uZ2V0KCdzZXNzaW9uRGF0YScpO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lSW5NcyA9IERhdGUubm93KCk7XG4gICAgLy8gQ2hlY2sgaWYgc2Vzc2lvbiBleGlzdHMgYW5kIGlzIHN0aWxsIHZhbGlkXG4gICAgaWYgKHNlc3Npb25EYXRhICYmIHNlc3Npb25EYXRhLnRpbWVzdGFtcCkge1xuICAgICAgLy8gQ2FsY3VsYXRlIGhvdyBsb25nIGFnbyB0aGUgc2Vzc2lvbiB3YXMgbGFzdCB1cGRhdGVkXG4gICAgICBjb25zdCBkdXJhdGlvbkluTWluID0gKGN1cnJlbnRUaW1lSW5NcyAtIHNlc3Npb25EYXRhLnRpbWVzdGFtcCkgLyA2MDAwMDtcbiAgICAgIC8vIENoZWNrIGlmIGxhc3QgdXBkYXRlIGxheXMgcGFzdCB0aGUgc2Vzc2lvbiBleHBpcmF0aW9uIHRocmVzaG9sZFxuICAgICAgaWYgKGR1cmF0aW9uSW5NaW4gPiBTRVNTSU9OX0VYUElSQVRJT05fSU5fTUlOKSB7XG4gICAgICAgIC8vIENsZWFyIG9sZCBzZXNzaW9uIGlkIHRvIHN0YXJ0IGEgbmV3IHNlc3Npb25cbiAgICAgICAgc2Vzc2lvbkRhdGEgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVXBkYXRlIHRpbWVzdGFtcCB0byBrZWVwIHNlc3Npb24gYWxpdmVcbiAgICAgICAgc2Vzc2lvbkRhdGEudGltZXN0YW1wID0gY3VycmVudFRpbWVJbk1zO1xuICAgICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zZXNzaW9uLnNldCh7IHNlc3Npb25EYXRhIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXNlc3Npb25EYXRhKSB7XG4gICAgICAvLyBDcmVhdGUgYW5kIHN0b3JlIGEgbmV3IHNlc3Npb25cbiAgICAgIHNlc3Npb25EYXRhID0ge1xuICAgICAgICBzZXNzaW9uX2lkOiBjdXJyZW50VGltZUluTXMudG9TdHJpbmcoKSxcbiAgICAgICAgdGltZXN0YW1wOiBjdXJyZW50VGltZUluTXMudG9TdHJpbmcoKVxuICAgICAgfTtcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLnNlc3Npb24uc2V0KHsgc2Vzc2lvbkRhdGEgfSk7XG4gICAgfVxuICAgIHJldHVybiBzZXNzaW9uRGF0YS5zZXNzaW9uX2lkO1xuICB9XG5cbiAgLy8gRmlyZXMgYW4gZXZlbnQgd2l0aCBvcHRpb25hbCBwYXJhbXMuIEV2ZW50IG5hbWVzIG11c3Qgb25seSBpbmNsdWRlIGxldHRlcnMgYW5kIHVuZGVyc2NvcmVzLlxuICBhc3luYyBmaXJlRXZlbnQobmFtZSwgcGFyYW1zID0ge30pIHtcbiAgICAvLyBDb25maWd1cmUgc2Vzc2lvbiBpZCBhbmQgZW5nYWdlbWVudCB0aW1lIGlmIG5vdCBwcmVzZW50LCBmb3IgbW9yZSBkZXRhaWxzIHNlZTpcbiAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vcHJvdG9jb2wvZ2E0L3NlbmRpbmctZXZlbnRzP2NsaWVudF90eXBlPWd0YWcjcmVjb21tZW5kZWRfcGFyYW1ldGVyc19mb3JfcmVwb3J0c1xuICAgIGlmICghcGFyYW1zLnNlc3Npb25faWQpIHtcbiAgICAgIHBhcmFtcy5zZXNzaW9uX2lkID0gYXdhaXQgdGhpcy5nZXRPckNyZWF0ZVNlc3Npb25JZCgpO1xuICAgIH1cbiAgICBpZiAoIXBhcmFtcy5lbmdhZ2VtZW50X3RpbWVfbXNlYykge1xuICAgICAgcGFyYW1zLmVuZ2FnZW1lbnRfdGltZV9tc2VjID0gREVGQVVMVF9FTkdBR0VNRU5UX1RJTUVfTVNFQztcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYCR7XG4gICAgICAgICAgdGhpcy5kZWJ1ZyA/IEdBX0RFQlVHX0VORFBPSU5UIDogR0FfRU5EUE9JTlRcbiAgICAgICAgfT9tZWFzdXJlbWVudF9pZD0ke01FQVNVUkVNRU5UX0lEfSZhcGlfc2VjcmV0PSR7QVBJX1NFQ1JFVH1gLFxuICAgICAgICB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgY2xpZW50X2lkOiBhd2FpdCB0aGlzLmdldE9yQ3JlYXRlQ2xpZW50SWQoKSxcbiAgICAgICAgICAgIGV2ZW50czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBwYXJhbXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBpZiAoIXRoaXMuZGVidWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdHb29nbGUgQW5hbHl0aWNzIHJlcXVlc3QgZmFpbGVkIHdpdGggYW4gZXhjZXB0aW9uJywgZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmlyZSBhIHBhZ2UgdmlldyBldmVudC5cbiAgYXN5bmMgZmlyZVBhZ2VWaWV3RXZlbnQocGFnZVRpdGxlLCBwYWdlTG9jYXRpb24sIGFkZGl0aW9uYWxQYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmZpcmVFdmVudCgncGFnZV92aWV3Jywge1xuICAgICAgcGFnZV90aXRsZTogcGFnZVRpdGxlLFxuICAgICAgcGFnZV9sb2NhdGlvbjogcGFnZUxvY2F0aW9uLFxuICAgICAgLi4uYWRkaXRpb25hbFBhcmFtc1xuICAgIH0pO1xuICB9XG5cbiAgLy8gRmlyZSBhbiBlcnJvciBldmVudC5cbiAgYXN5bmMgZmlyZUVycm9yRXZlbnQoZXJyb3IsIGFkZGl0aW9uYWxQYXJhbXMgPSB7fSkge1xuICAgIC8vIE5vdGU6ICdlcnJvcicgaXMgYSByZXNlcnZlZCBldmVudCBuYW1lIGFuZCBjYW5ub3QgYmUgdXNlZFxuICAgIC8vIHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vcHJvdG9jb2wvZ2E0L3JlZmVyZW5jZT9jbGllbnRfdHlwZT1ndGFnI3Jlc2VydmVkX25hbWVzXG4gICAgcmV0dXJuIHRoaXMuZmlyZUV2ZW50KCdleHRlbnNpb25fZXJyb3InLCB7XG4gICAgICAuLi5lcnJvcixcbiAgICAgIC4uLmFkZGl0aW9uYWxQYXJhbXNcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYW5hbHl0aWNzID0gbmV3IEFuYWx5dGljcygpO1xuIiwiaW1wb3J0IHsgYW5hbHl0aWNzIH0gZnJvbSBcIi4vYW5hbHl0aWNzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QmFja2dyb3VuZFBhZ2UoKSB7XG4gIGNocm9tZS5hY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKGFzeW5jICh0YWIpID0+IHtcbiAgICBjb25zdCBleGlzdGluZ0NvbnRleHRzID0gYXdhaXQgY2hyb21lLnJ1bnRpbWUuZ2V0Q29udGV4dHMoe30pO1xuICAgIGxldCByZWNvcmRpbmcgPSBmYWxzZTtcblxuICAgIGNvbnN0IG9mZnNjcmVlbkRvY3VtZW50ID0gZXhpc3RpbmdDb250ZXh0cy5maW5kKFxuICAgICAgKGMpID0+IGMuY29udGV4dFR5cGUgPT09IFwiT0ZGU0NSRUVOX0RPQ1VNRU5UXCJcbiAgICApO1xuXG4gICAgLy8gSWYgYW4gb2Zmc2NyZWVuIGRvY3VtZW50IGlzIG5vdCBhbHJlYWR5IG9wZW4sIGNyZWF0ZSBvbmUuXG4gICAgaWYgKCFvZmZzY3JlZW5Eb2N1bWVudCkge1xuICAgICAgLy8gQ3JlYXRlIGFuIG9mZnNjcmVlbiBkb2N1bWVudC5cbiAgICAgIGF3YWl0IGNocm9tZS5vZmZzY3JlZW4uY3JlYXRlRG9jdW1lbnQoe1xuICAgICAgICB1cmw6IFwib2Zmc2NyZWVuLmh0bWxcIixcbiAgICAgICAgcmVhc29uczogW1wiVVNFUl9NRURJQVwiXSxcbiAgICAgICAganVzdGlmaWNhdGlvbjogXCJSZWNvcmRpbmcgZnJvbSBjaHJvbWUudGFiQ2FwdHVyZSBBUElcIixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWNvcmRpbmcgPSBvZmZzY3JlZW5Eb2N1bWVudC5kb2N1bWVudFVybC5lbmRzV2l0aChcIiNyZWNvcmRpbmdcIik7XG4gICAgfVxuXG4gICAgaWYgKHJlY29yZGluZykge1xuICAgICAgLy8gICBzdG9wUmVjb3JkaW5nKHsnc3RvcHBlZCB3aXRoIGJ1dHRvbid9KTtcbiAgICB9XG5cbiAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWIuaWQgfSxcbiAgICAgIGZpbGVzOiBbXCJjb250ZW50LmpzXCJdLFxuICAgIH0pO1xuXG4gICAgLy8gZ2xvYmFsVGhpcy50YWJJZCA9IHRhYi5pZDtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyB0YWJJZDogdGFiLmlkIH0pO1xuXG4gICAgY2hyb21lLndpbmRvd3MuZ2V0Q3VycmVudCh7IHBvcHVsYXRlOiBmYWxzZSB9LCAod2luKSA9PiB7XG4gICAgICBnbG9iYWxUaGlzLmNocm9tZVNpemUgPSB7XG4gICAgICAgIHdpZHRoOiB3aW4ud2lkdGggLSB0YWIud2lkdGgsXG4gICAgICAgIGhlaWdodDogd2luLmhlaWdodCAtIHRhYi5oZWlnaHQsXG4gICAgICB9O1xuICAgIH0pO1xuICB9KTtcbn1cblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtc2csIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZVN0YXJ0UmVjb3JkaW5nXCI6XG4gICAgICBzdGFydFJlY29yZGluZyhtc2cpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInNjcm9sbENhcHR1cmVTdG9wUmVjb3JkaW5nXCI6XG4gICAgICBzdG9wUmVjb3JkaW5nKG1zZyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZVJlc2l6ZVdpbmRvd1wiOlxuICAgICAgcmVzaXplV2luZG93KG1zZy53aWR0aCwgbXNnLmhlaWdodCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZVRyYWNrRXZlbnRcIjpcbiAgICAgIGFuYWx5dGljcy5maXJlRXZlbnQobXNnLmNhdGVnb3J5LCB7XG4gICAgICAgIGFjdGlvbjogbXNnLmFjdGlvbixcbiAgICAgICAgbGFiZWw6IG1zZy5sYWJlbCxcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInNjcm9sbENhcHR1cmVUcmFja1BhZ2VcIjpcbiAgICAgIGFuYWx5dGljcy5maXJlUGFnZVZpZXdFdmVudChtc2cucGF0aC5zcGxpdChcIi9cIikucG9wKCksIG1zZy5wYXRoKTtcbiAgICAgIGJyZWFrO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcmVzaXplV2luZG93KHdpZHRoLCBoZWlnaHQpIHtcbiAgbGV0IG9wdGlvbnMgPSB7XG4gICAgd2lkdGg6IHdpZHRoICsgZ2xvYmFsVGhpcy5jaHJvbWVTaXplLndpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0ICsgZ2xvYmFsVGhpcy5jaHJvbWVTaXplLmhlaWdodCxcbiAgfTtcbiAgY2hyb21lLndpbmRvd3MuZ2V0Q3VycmVudCh7IHBvcHVsYXRlOiBmYWxzZSB9LCAod2luKSA9PiB7XG4gICAgY2hyb21lLndpbmRvd3MudXBkYXRlKHdpbi5pZCwgb3B0aW9ucyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VJY29uKGNvbG9yID0gXCJcIikge1xuICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgIHBhdGg6IHtcbiAgICAgIDE2OiBjaHJvbWUucnVudGltZS5nZXRVUkwoXCJhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkMTZcIiArIGNvbG9yICsgXCIucG5nXCIpLFxuICAgICAgMzI6IGNocm9tZS5ydW50aW1lLmdldFVSTChcImFzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQzMlwiICsgY29sb3IgKyBcIi5wbmdcIiksXG4gICAgICA0ODogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKFwiYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDQ4XCIgKyBjb2xvciArIFwiLnBuZ1wiKSxcbiAgICAgIDEyODogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKFxuICAgICAgICBcImFzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQxMjhcIiArIGNvbG9yICsgXCIucG5nXCJcbiAgICAgICksXG4gICAgfSxcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0UmVjb3JkaW5nKGRhdGEpIHtcbiAgY2hhbmdlSWNvbihcIl9yZWRcIik7XG5cbiAgY29uc3Qgc3RyZWFtSWQgPSBhd2FpdCBjaHJvbWUudGFiQ2FwdHVyZS5nZXRNZWRpYVN0cmVhbUlkKHtcbiAgICB0YXJnZXRUYWJJZDogZGF0YS50YWJJZCxcbiAgfSk7XG5cbiAgY29uc3QgbWVzc2FnZSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpO1xuICBPYmplY3QuYXNzaWduKG1lc3NhZ2UsIHtcbiAgICB0eXBlOiBcInNjcm9sbENhcHR1cmVTdGFydE9mZnNjcmVlblJlY29yZGluZ1wiLFxuICAgIHRhcmdldDogXCJvZmZzY3JlZW5cIixcbiAgICBzdHJlYW1JZCxcbiAgfSk7XG5cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIHN0b3BSZWNvcmRpbmcobWVzc2FnZSkge1xuICBjaGFuZ2VJY29uKCk7XG5cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgIHR5cGU6IFwic2Nyb2xsQ2FwdHVyZVN0b3BPZmZzY3JlZW5SZWNvcmRpbmdcIixcbiAgICB0YXJnZXQ6IFwib2Zmc2NyZWVuXCIsXG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0QW5hbHl0aWNzIH0gZnJvbSBcIi4vYW5hbHl0aWNzXCI7XG5pbXBvcnQgeyBpbml0QmFja2dyb3VuZFBhZ2UgfSBmcm9tIFwiLi9iYWNrZ3JvdW5kXCI7XG5cbmluaXRBbmFseXRpY3MoJ0ctWDMzRUhIQkw1RycsICdfVjBKdXNMS1FkMmJmbjBzU09uczNRJyk7XG5pbml0QmFja2dyb3VuZFBhZ2UoKTsiXSwibmFtZXMiOlsiR0FfRU5EUE9JTlQiLCJHQV9ERUJVR19FTkRQT0lOVCIsIk1FQVNVUkVNRU5UX0lEIiwiQVBJX1NFQ1JFVCIsIkRFRkFVTFRfRU5HQUdFTUVOVF9USU1FX01TRUMiLCJTRVNTSU9OX0VYUElSQVRJT05fSU5fTUlOIiwiaW5pdEFuYWx5dGljcyIsImlkIiwic2VjcmV0IiwiQW5hbHl0aWNzIiwiY29uc3RydWN0b3IiLCJkZWJ1ZyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImdldE9yQ3JlYXRlQ2xpZW50SWQiLCJjbGllbnRJZCIsImNocm9tZSIsInN0b3JhZ2UiLCJsb2NhbCIsImdldCIsInNlbGYiLCJjcnlwdG8iLCJyYW5kb21VVUlEIiwic2V0IiwiZ2V0T3JDcmVhdGVTZXNzaW9uSWQiLCJzZXNzaW9uRGF0YSIsInNlc3Npb24iLCJjdXJyZW50VGltZUluTXMiLCJEYXRlIiwibm93IiwidGltZXN0YW1wIiwiZHVyYXRpb25Jbk1pbiIsInNlc3Npb25faWQiLCJ0b1N0cmluZyIsImZpcmVFdmVudCIsIm5hbWUiLCJwYXJhbXMiLCJlbmdhZ2VtZW50X3RpbWVfbXNlYyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNsaWVudF9pZCIsImV2ZW50cyIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiZSIsImVycm9yIiwiZmlyZVBhZ2VWaWV3RXZlbnQiLCJwYWdlVGl0bGUiLCJwYWdlTG9jYXRpb24iLCJhZGRpdGlvbmFsUGFyYW1zIiwicGFnZV90aXRsZSIsInBhZ2VfbG9jYXRpb24iLCJmaXJlRXJyb3JFdmVudCIsImFuYWx5dGljcyIsImluaXRCYWNrZ3JvdW5kUGFnZSIsImFjdGlvbiIsIm9uQ2xpY2tlZCIsImFkZExpc3RlbmVyIiwidGFiIiwiZXhpc3RpbmdDb250ZXh0cyIsInJ1bnRpbWUiLCJnZXRDb250ZXh0cyIsInJlY29yZGluZyIsIm9mZnNjcmVlbkRvY3VtZW50IiwiZmluZCIsImMiLCJjb250ZXh0VHlwZSIsIm9mZnNjcmVlbiIsImNyZWF0ZURvY3VtZW50IiwidXJsIiwicmVhc29ucyIsImp1c3RpZmljYXRpb24iLCJkb2N1bWVudFVybCIsImVuZHNXaXRoIiwic2NyaXB0aW5nIiwiZXhlY3V0ZVNjcmlwdCIsInRhcmdldCIsInRhYklkIiwiZmlsZXMiLCJ3aW5kb3dzIiwiZ2V0Q3VycmVudCIsInBvcHVsYXRlIiwid2luIiwiZ2xvYmFsVGhpcyIsImNocm9tZVNpemUiLCJ3aWR0aCIsImhlaWdodCIsIm9uTWVzc2FnZSIsIm1zZyIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsInR5cGUiLCJzdGFydFJlY29yZGluZyIsInN0b3BSZWNvcmRpbmciLCJyZXNpemVXaW5kb3ciLCJjYXRlZ29yeSIsImxhYmVsIiwicGF0aCIsInNwbGl0IiwicG9wIiwib3B0aW9ucyIsInVwZGF0ZSIsImNoYW5nZUljb24iLCJjb2xvciIsInNldEljb24iLCJnZXRVUkwiLCJkYXRhIiwic3RyZWFtSWQiLCJ0YWJDYXB0dXJlIiwiZ2V0TWVkaWFTdHJlYW1JZCIsInRhcmdldFRhYklkIiwibWVzc2FnZSIsIk9iamVjdCIsImFzc2lnbiIsInNlbmRNZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==