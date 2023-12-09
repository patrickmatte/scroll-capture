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
    executeScript(tab.id).then(() => {
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
        if (msg.enabled) {
          chrome.tabs.onUpdated.addListener(updatedTabHandler);
        } else {
          chrome.tabs.onUpdated.removeListener(updatedTabHandler);
        }
        break;
    }
  });
}
function updatedTabHandler(tabId, changeInfo, tab) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUEsRUFBRztFQUN2Qk4sVUFBVSxDQUFDLENBQUM7RUFFWjlFLE1BQU0sQ0FBQ2tELE9BQU8sQ0FBQ3lCLFdBQVcsQ0FBQztJQUN6QkMsSUFBSSxFQUFFLHFDQUFxQztJQUMzQ3FCLE1BQU0sRUFBRTtFQUNWLENBQUMsQ0FBQztBQUNKOzs7Ozs7VUM5SUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDTTtBQUVsRDVHLHlEQUFhLENBQUMsY0FBYyxFQUFFLHdCQUF3QixDQUFDO0FBQ3ZEc0QsK0RBQWtCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvYW5hbHl0aWNzLmpzIiwid2VicGFjazovLy8uL2pzL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vanMvYmFja2dyb3VuZC1kZXZlbG9wbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHQV9FTkRQT0lOVCA9ICdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9tcC9jb2xsZWN0JztcbmNvbnN0IEdBX0RFQlVHX0VORFBPSU5UID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL2RlYnVnL21wL2NvbGxlY3QnO1xuXG4vLyBHZXQgdmlhIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9wcm90b2NvbC9nYTQvc2VuZGluZy1ldmVudHM/Y2xpZW50X3R5cGU9Z3RhZyNyZWNvbW1lbmRlZF9wYXJhbWV0ZXJzX2Zvcl9yZXBvcnRzXG5sZXQgTUVBU1VSRU1FTlRfSUQgPSAnPG1lYXN1cmVtZW50X2lkPic7XG5sZXQgQVBJX1NFQ1JFVCA9ICc8YXBpX3NlY3JldD4nO1xuY29uc3QgREVGQVVMVF9FTkdBR0VNRU5UX1RJTUVfTVNFQyA9IDEwMDtcblxuLy8gRHVyYXRpb24gb2YgaW5hY3Rpdml0eSBhZnRlciB3aGljaCBhIG5ldyBzZXNzaW9uIGlzIGNyZWF0ZWRcbmNvbnN0IFNFU1NJT05fRVhQSVJBVElPTl9JTl9NSU4gPSAzMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRBbmFseXRpY3MoaWQsIHNlY3JldCkge1xuICBNRUFTVVJFTUVOVF9JRCA9IGlkO1xuICBBUElfU0VDUkVUID0gc2VjcmV0O1xufVxuXG5jbGFzcyBBbmFseXRpY3Mge1xuICBjb25zdHJ1Y3RvcihkZWJ1ZyA9IGZhbHNlKSB7XG4gICAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgY2xpZW50IGlkLCBvciBjcmVhdGVzIGEgbmV3IG9uZSBpZiBvbmUgZG9lc24ndCBleGlzdC5cbiAgLy8gU3RvcmVzIGNsaWVudCBpZCBpbiBsb2NhbCBzdG9yYWdlIHRvIGtlZXAgdGhlIHNhbWUgY2xpZW50IGlkIGFzIGxvbmcgYXNcbiAgLy8gdGhlIGV4dGVuc2lvbiBpcyBpbnN0YWxsZWQuXG4gIGFzeW5jIGdldE9yQ3JlYXRlQ2xpZW50SWQoKSB7XG4gICAgbGV0IHsgY2xpZW50SWQgfSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgnY2xpZW50SWQnKTtcbiAgICBpZiAoIWNsaWVudElkKSB7XG4gICAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBjbGllbnQgSUQsIHRoZSBhY3R1YWwgdmFsdWUgaXMgbm90IHJlbGV2YW50XG4gICAgICBjbGllbnRJZCA9IHNlbGYuY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGNsaWVudElkIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY2xpZW50SWQ7XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSBjdXJyZW50IHNlc3Npb24gaWQsIG9yIGNyZWF0ZXMgYSBuZXcgb25lIGlmIG9uZSBkb2Vzbid0IGV4aXN0IG9yXG4gIC8vIHRoZSBwcmV2aW91cyBvbmUgaGFzIGV4cGlyZWQuXG4gIGFzeW5jIGdldE9yQ3JlYXRlU2Vzc2lvbklkKCkge1xuICAgIC8vIFVzZSBzdG9yYWdlLnNlc3Npb24gYmVjYXVzZSBpdCBpcyBvbmx5IGluIG1lbW9yeVxuICAgIGxldCB7IHNlc3Npb25EYXRhIH0gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zZXNzaW9uLmdldCgnc2Vzc2lvbkRhdGEnKTtcbiAgICBjb25zdCBjdXJyZW50VGltZUluTXMgPSBEYXRlLm5vdygpO1xuICAgIC8vIENoZWNrIGlmIHNlc3Npb24gZXhpc3RzIGFuZCBpcyBzdGlsbCB2YWxpZFxuICAgIGlmIChzZXNzaW9uRGF0YSAmJiBzZXNzaW9uRGF0YS50aW1lc3RhbXApIHtcbiAgICAgIC8vIENhbGN1bGF0ZSBob3cgbG9uZyBhZ28gdGhlIHNlc3Npb24gd2FzIGxhc3QgdXBkYXRlZFxuICAgICAgY29uc3QgZHVyYXRpb25Jbk1pbiA9IChjdXJyZW50VGltZUluTXMgLSBzZXNzaW9uRGF0YS50aW1lc3RhbXApIC8gNjAwMDA7XG4gICAgICAvLyBDaGVjayBpZiBsYXN0IHVwZGF0ZSBsYXlzIHBhc3QgdGhlIHNlc3Npb24gZXhwaXJhdGlvbiB0aHJlc2hvbGRcbiAgICAgIGlmIChkdXJhdGlvbkluTWluID4gU0VTU0lPTl9FWFBJUkFUSU9OX0lOX01JTikge1xuICAgICAgICAvLyBDbGVhciBvbGQgc2Vzc2lvbiBpZCB0byBzdGFydCBhIG5ldyBzZXNzaW9uXG4gICAgICAgIHNlc3Npb25EYXRhID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aW1lc3RhbXAgdG8ga2VlcCBzZXNzaW9uIGFsaXZlXG4gICAgICAgIHNlc3Npb25EYXRhLnRpbWVzdGFtcCA9IGN1cnJlbnRUaW1lSW5NcztcbiAgICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc2Vzc2lvbi5zZXQoeyBzZXNzaW9uRGF0YSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFzZXNzaW9uRGF0YSkge1xuICAgICAgLy8gQ3JlYXRlIGFuZCBzdG9yZSBhIG5ldyBzZXNzaW9uXG4gICAgICBzZXNzaW9uRGF0YSA9IHtcbiAgICAgICAgc2Vzc2lvbl9pZDogY3VycmVudFRpbWVJbk1zLnRvU3RyaW5nKCksXG4gICAgICAgIHRpbWVzdGFtcDogY3VycmVudFRpbWVJbk1zLnRvU3RyaW5nKCksXG4gICAgICB9O1xuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc2Vzc2lvbi5zZXQoeyBzZXNzaW9uRGF0YSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25EYXRhLnNlc3Npb25faWQ7XG4gIH1cblxuICAvLyBGaXJlcyBhbiBldmVudCB3aXRoIG9wdGlvbmFsIHBhcmFtcy4gRXZlbnQgbmFtZXMgbXVzdCBvbmx5IGluY2x1ZGUgbGV0dGVycyBhbmQgdW5kZXJzY29yZXMuXG4gIGFzeW5jIGZpcmVFdmVudChuYW1lLCBwYXJhbXMgPSB7fSkge1xuICAgIC8vIENvbmZpZ3VyZSBzZXNzaW9uIGlkIGFuZCBlbmdhZ2VtZW50IHRpbWUgaWYgbm90IHByZXNlbnQsIGZvciBtb3JlIGRldGFpbHMgc2VlOlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9wcm90b2NvbC9nYTQvc2VuZGluZy1ldmVudHM/Y2xpZW50X3R5cGU9Z3RhZyNyZWNvbW1lbmRlZF9wYXJhbWV0ZXJzX2Zvcl9yZXBvcnRzXG4gICAgaWYgKCFwYXJhbXMuc2Vzc2lvbl9pZCkge1xuICAgICAgcGFyYW1zLnNlc3Npb25faWQgPSBhd2FpdCB0aGlzLmdldE9yQ3JlYXRlU2Vzc2lvbklkKCk7XG4gICAgfVxuICAgIGlmICghcGFyYW1zLmVuZ2FnZW1lbnRfdGltZV9tc2VjKSB7XG4gICAgICBwYXJhbXMuZW5nYWdlbWVudF90aW1lX21zZWMgPSBERUZBVUxUX0VOR0FHRU1FTlRfVElNRV9NU0VDO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgJHt0aGlzLmRlYnVnID8gR0FfREVCVUdfRU5EUE9JTlQgOiBHQV9FTkRQT0lOVH0/bWVhc3VyZW1lbnRfaWQ9JHtNRUFTVVJFTUVOVF9JRH0mYXBpX3NlY3JldD0ke0FQSV9TRUNSRVR9YCxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGNsaWVudF9pZDogYXdhaXQgdGhpcy5nZXRPckNyZWF0ZUNsaWVudElkKCksXG4gICAgICAgICAgICBldmVudHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGlmICghdGhpcy5kZWJ1Zykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhhd2FpdCByZXNwb25zZS50ZXh0KCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZSBBbmFseXRpY3MgcmVxdWVzdCBmYWlsZWQgd2l0aCBhbiBleGNlcHRpb24nLCBlKTtcbiAgICB9XG4gIH1cblxuICAvLyBGaXJlIGEgcGFnZSB2aWV3IGV2ZW50LlxuICBhc3luYyBmaXJlUGFnZVZpZXdFdmVudChwYWdlVGl0bGUsIHBhZ2VMb2NhdGlvbiwgYWRkaXRpb25hbFBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyZUV2ZW50KCdwYWdlX3ZpZXcnLCB7XG4gICAgICBwYWdlX3RpdGxlOiBwYWdlVGl0bGUsXG4gICAgICBwYWdlX2xvY2F0aW9uOiBwYWdlTG9jYXRpb24sXG4gICAgICAuLi5hZGRpdGlvbmFsUGFyYW1zLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gRmlyZSBhbiBlcnJvciBldmVudC5cbiAgYXN5bmMgZmlyZUVycm9yRXZlbnQoZXJyb3IsIGFkZGl0aW9uYWxQYXJhbXMgPSB7fSkge1xuICAgIC8vIE5vdGU6ICdlcnJvcicgaXMgYSByZXNlcnZlZCBldmVudCBuYW1lIGFuZCBjYW5ub3QgYmUgdXNlZFxuICAgIC8vIHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vcHJvdG9jb2wvZ2E0L3JlZmVyZW5jZT9jbGllbnRfdHlwZT1ndGFnI3Jlc2VydmVkX25hbWVzXG4gICAgcmV0dXJuIHRoaXMuZmlyZUV2ZW50KCdleHRlbnNpb25fZXJyb3InLCB7XG4gICAgICAuLi5lcnJvcixcbiAgICAgIC4uLmFkZGl0aW9uYWxQYXJhbXMsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFuYWx5dGljcyA9IG5ldyBBbmFseXRpY3MoKTtcbiIsImltcG9ydCB7IGFuYWx5dGljcyB9IGZyb20gJy4vYW5hbHl0aWNzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCYWNrZ3JvdW5kUGFnZSgpIHtcbiAgY2hyb21lLmFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoYXN5bmMgKHRhYikgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHRhYklkOiB0YWIuaWQgfSk7XG5cbiAgICBjb25zdCBleGlzdGluZ0NvbnRleHRzID0gYXdhaXQgY2hyb21lLnJ1bnRpbWUuZ2V0Q29udGV4dHMoe30pO1xuICAgIGxldCByZWNvcmRpbmcgPSBmYWxzZTtcblxuICAgIGNvbnN0IG9mZnNjcmVlbkRvY3VtZW50ID0gZXhpc3RpbmdDb250ZXh0cy5maW5kKChjKSA9PiBjLmNvbnRleHRUeXBlID09PSAnT0ZGU0NSRUVOX0RPQ1VNRU5UJyk7XG5cbiAgICAvLyBJZiBhbiBvZmZzY3JlZW4gZG9jdW1lbnQgaXMgbm90IGFscmVhZHkgb3BlbiwgY3JlYXRlIG9uZS5cbiAgICBpZiAoIW9mZnNjcmVlbkRvY3VtZW50KSB7XG4gICAgICAvLyBDcmVhdGUgYW4gb2Zmc2NyZWVuIGRvY3VtZW50LlxuICAgICAgYXdhaXQgY2hyb21lLm9mZnNjcmVlbi5jcmVhdGVEb2N1bWVudCh7XG4gICAgICAgIHVybDogJ29mZnNjcmVlbi5odG1sJyxcbiAgICAgICAgcmVhc29uczogWydVU0VSX01FRElBJ10sXG4gICAgICAgIGp1c3RpZmljYXRpb246ICdSZWNvcmRpbmcgZnJvbSBjaHJvbWUudGFiQ2FwdHVyZSBBUEknLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlY29yZGluZyA9IG9mZnNjcmVlbkRvY3VtZW50LmRvY3VtZW50VXJsLmVuZHNXaXRoKCcjcmVjb3JkaW5nJyk7XG4gICAgfVxuXG4gICAgY2hyb21lLndpbmRvd3MuZ2V0Q3VycmVudCh7IHBvcHVsYXRlOiBmYWxzZSB9LCAod2luKSA9PiB7XG4gICAgICBnbG9iYWxUaGlzLmNocm9tZVNpemUgPSB7XG4gICAgICAgIHdpZHRoOiB3aW4ud2lkdGggLSB0YWIud2lkdGgsXG4gICAgICAgIGhlaWdodDogd2luLmhlaWdodCAtIHRhYi5oZWlnaHQsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZVNjcmlwdCh0YWIuaWQpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHJlY29yZGluZykge1xuICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIHtcbiAgICAgICAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZUxvY2F0aW9uJyxcbiAgICAgICAgICBsb2NhdGlvbjogJ3N0b3AnLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoYW5nZUljb24oJycpO1xuICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIHtcbiAgICAgICAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZUxvY2F0aW9uJyxcbiAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1zZywgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICBjYXNlICdzY3JvbGxDYXB0dXJlU3RhcnRSZWNvcmRpbmcnOlxuICAgICAgICBzdGFydFJlY29yZGluZyhtc2cpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVTdG9wUmVjb3JkaW5nJzpcbiAgICAgICAgc3RvcFJlY29yZGluZygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVSZXNpemVXaW5kb3cnOlxuICAgICAgICByZXNpemVXaW5kb3cobXNnLndpZHRoLCBtc2cuaGVpZ2h0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzY3JvbGxDYXB0dXJlVHJhY2tFdmVudCc6XG4gICAgICAgIGFuYWx5dGljcy5maXJlRXZlbnQobXNnLmNhdGVnb3J5LCB7XG4gICAgICAgICAgYWN0aW9uOiBtc2cuYWN0aW9uLFxuICAgICAgICAgIGxhYmVsOiBtc2cubGFiZWwsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVUcmFja1BhZ2UnOlxuICAgICAgICBhbmFseXRpY3MuZmlyZVBhZ2VWaWV3RXZlbnQobXNnLnBhdGguc3BsaXQoJy8nKS5wb3AoKSwgbXNnLnBhdGgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVVcGRhdGVkVGFiTGlzdGVuZXInOlxuICAgICAgICBpZiAobXNnLmVuYWJsZWQpIHtcbiAgICAgICAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIodXBkYXRlZFRhYkhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNocm9tZS50YWJzLm9uVXBkYXRlZC5yZW1vdmVMaXN0ZW5lcih1cGRhdGVkVGFiSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlZFRhYkhhbmRsZXIodGFiSWQsIGNoYW5nZUluZm8sIHRhYikge1xuICBleGVjdXRlU2NyaXB0KHRhYi5pZCkudGhlbigoKSA9PiB7XG4gICAgY2hyb21lLnJ1bnRpbWUuZ2V0Q29udGV4dHMoe30pLnRoZW4oKGV4aXN0aW5nQ29udGV4dHMpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNjcmVlbkRvY3VtZW50ID0gZXhpc3RpbmdDb250ZXh0cy5maW5kKChjKSA9PiBjLmNvbnRleHRUeXBlID09PSAnT0ZGU0NSRUVOX0RPQ1VNRU5UJyk7XG4gICAgICBjb25zdCByZWNvcmRpbmcgPSBvZmZzY3JlZW5Eb2N1bWVudC5kb2N1bWVudFVybC5lbmRzV2l0aCgnI3JlY29yZGluZycpO1xuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7XG4gICAgICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlTG9jYXRpb24nLFxuICAgICAgICBsb2NhdGlvbjogcmVjb3JkaW5nID8gJ3JlY29yZCcgOiAncGxheScsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVTY3JpcHQodGFiSWQpIHtcbiAgcmV0dXJuIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgdGFyZ2V0OiB7IHRhYklkIH0sXG4gICAgZmlsZXM6IFsnY29udGVudC5qcyddLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzaXplV2luZG93KHdpZHRoLCBoZWlnaHQpIHtcbiAgbGV0IG9wdGlvbnMgPSB7XG4gICAgd2lkdGg6IHdpZHRoICsgZ2xvYmFsVGhpcy5jaHJvbWVTaXplLndpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0ICsgZ2xvYmFsVGhpcy5jaHJvbWVTaXplLmhlaWdodCxcbiAgfTtcbiAgY2hyb21lLndpbmRvd3MuZ2V0Q3VycmVudCh7IHBvcHVsYXRlOiBmYWxzZSB9LCAod2luKSA9PiB7XG4gICAgY2hyb21lLndpbmRvd3MudXBkYXRlKHdpbi5pZCwgb3B0aW9ucyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VJY29uKGNvbG9yID0gJycpIHtcbiAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICBwYXRoOiB7XG4gICAgICAxNjogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkMTYnICsgY29sb3IgKyAnLnBuZycpLFxuICAgICAgMzI6IGNocm9tZS5ydW50aW1lLmdldFVSTCgnYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDMyJyArIGNvbG9yICsgJy5wbmcnKSxcbiAgICAgIDQ4OiBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2Fzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQ0OCcgKyBjb2xvciArICcucG5nJyksXG4gICAgICAxMjg6IGNocm9tZS5ydW50aW1lLmdldFVSTCgnYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDEyOCcgKyBjb2xvciArICcucG5nJyksXG4gICAgfSxcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0UmVjb3JkaW5nKGRhdGEpIHtcbiAgY2hhbmdlSWNvbignX3JlZCcpO1xuXG4gIGNvbnN0IHN0cmVhbUlkID0gYXdhaXQgY2hyb21lLnRhYkNhcHR1cmUuZ2V0TWVkaWFTdHJlYW1JZCh7XG4gICAgdGFyZ2V0VGFiSWQ6IGRhdGEudGFiSWQsXG4gIH0pO1xuXG4gIGNvbnN0IG1lc3NhZ2UgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhKTtcbiAgT2JqZWN0LmFzc2lnbihtZXNzYWdlLCB7XG4gICAgdHlwZTogJ3Njcm9sbENhcHR1cmVTdGFydE9mZnNjcmVlblJlY29yZGluZycsXG4gICAgdGFyZ2V0OiAnb2Zmc2NyZWVuJyxcbiAgICBzdHJlYW1JZCxcbiAgfSk7XG5cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIHN0b3BSZWNvcmRpbmcoKSB7XG4gIGNoYW5nZUljb24oKTtcblxuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgdHlwZTogJ3Njcm9sbENhcHR1cmVTdG9wT2Zmc2NyZWVuUmVjb3JkaW5nJyxcbiAgICB0YXJnZXQ6ICdvZmZzY3JlZW4nLFxuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdEFuYWx5dGljcyB9IGZyb20gJy4vYW5hbHl0aWNzJztcbmltcG9ydCB7IGluaXRCYWNrZ3JvdW5kUGFnZSB9IGZyb20gJy4vYmFja2dyb3VuZCc7XG5cbmluaXRBbmFseXRpY3MoJ0ctWDMzRUhIQkw1RycsICdfVjBKdXNMS1FkMmJmbjBzU09uczNRJyk7XG5pbml0QmFja2dyb3VuZFBhZ2UoKTtcbiJdLCJuYW1lcyI6WyJHQV9FTkRQT0lOVCIsIkdBX0RFQlVHX0VORFBPSU5UIiwiTUVBU1VSRU1FTlRfSUQiLCJBUElfU0VDUkVUIiwiREVGQVVMVF9FTkdBR0VNRU5UX1RJTUVfTVNFQyIsIlNFU1NJT05fRVhQSVJBVElPTl9JTl9NSU4iLCJpbml0QW5hbHl0aWNzIiwiaWQiLCJzZWNyZXQiLCJBbmFseXRpY3MiLCJjb25zdHJ1Y3RvciIsImRlYnVnIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZ2V0T3JDcmVhdGVDbGllbnRJZCIsImNsaWVudElkIiwiY2hyb21lIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0Iiwic2VsZiIsImNyeXB0byIsInJhbmRvbVVVSUQiLCJzZXQiLCJnZXRPckNyZWF0ZVNlc3Npb25JZCIsInNlc3Npb25EYXRhIiwic2Vzc2lvbiIsImN1cnJlbnRUaW1lSW5NcyIsIkRhdGUiLCJub3ciLCJ0aW1lc3RhbXAiLCJkdXJhdGlvbkluTWluIiwic2Vzc2lvbl9pZCIsInRvU3RyaW5nIiwiZmlyZUV2ZW50IiwibmFtZSIsInBhcmFtcyIsImVuZ2FnZW1lbnRfdGltZV9tc2VjIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xpZW50X2lkIiwiZXZlbnRzIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJlIiwiZXJyb3IiLCJmaXJlUGFnZVZpZXdFdmVudCIsInBhZ2VUaXRsZSIsInBhZ2VMb2NhdGlvbiIsImFkZGl0aW9uYWxQYXJhbXMiLCJwYWdlX3RpdGxlIiwicGFnZV9sb2NhdGlvbiIsImZpcmVFcnJvckV2ZW50IiwiYW5hbHl0aWNzIiwiaW5pdEJhY2tncm91bmRQYWdlIiwiYWN0aW9uIiwib25DbGlja2VkIiwiYWRkTGlzdGVuZXIiLCJ0YWIiLCJ0YWJJZCIsImV4aXN0aW5nQ29udGV4dHMiLCJydW50aW1lIiwiZ2V0Q29udGV4dHMiLCJyZWNvcmRpbmciLCJvZmZzY3JlZW5Eb2N1bWVudCIsImZpbmQiLCJjIiwiY29udGV4dFR5cGUiLCJvZmZzY3JlZW4iLCJjcmVhdGVEb2N1bWVudCIsInVybCIsInJlYXNvbnMiLCJqdXN0aWZpY2F0aW9uIiwiZG9jdW1lbnRVcmwiLCJlbmRzV2l0aCIsIndpbmRvd3MiLCJnZXRDdXJyZW50IiwicG9wdWxhdGUiLCJ3aW4iLCJnbG9iYWxUaGlzIiwiY2hyb21lU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZXhlY3V0ZVNjcmlwdCIsInRoZW4iLCJ0YWJzIiwic2VuZE1lc3NhZ2UiLCJ0eXBlIiwibG9jYXRpb24iLCJjaGFuZ2VJY29uIiwib25NZXNzYWdlIiwibXNnIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwic3RhcnRSZWNvcmRpbmciLCJzdG9wUmVjb3JkaW5nIiwicmVzaXplV2luZG93IiwiY2F0ZWdvcnkiLCJsYWJlbCIsInBhdGgiLCJzcGxpdCIsInBvcCIsImVuYWJsZWQiLCJvblVwZGF0ZWQiLCJ1cGRhdGVkVGFiSGFuZGxlciIsInJlbW92ZUxpc3RlbmVyIiwiY2hhbmdlSW5mbyIsInNjcmlwdGluZyIsInRhcmdldCIsImZpbGVzIiwib3B0aW9ucyIsInVwZGF0ZSIsImNvbG9yIiwic2V0SWNvbiIsImdldFVSTCIsImRhdGEiLCJzdHJlYW1JZCIsInRhYkNhcHR1cmUiLCJnZXRNZWRpYVN0cmVhbUlkIiwidGFyZ2V0VGFiSWQiLCJtZXNzYWdlIiwiT2JqZWN0IiwiYXNzaWduIl0sInNvdXJjZVJvb3QiOiIifQ==