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
    executeScript(tab).then(() => {
      if (recording) {
        chrome.tabs.sendMessage(tab.id, {
          type: 'scrollCaptureLocation',
          location: 'stop'
        });
      } else {
        changeIcon('');
        sendDefaultLocation(tab.id);
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
    }
    return true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLHFDQUFxQztJQUMzQzJCLE1BQU0sRUFBRTtFQUNWLENBQUMsQ0FBQztBQUNKOzs7Ozs7VUNoTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDTTtBQUVsRDFHLHlEQUFhLENBQUMsY0FBYyxFQUFFLHdCQUF3QixDQUFDO0FBQ3ZEc0QsK0RBQWtCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvYW5hbHl0aWNzLmpzIiwid2VicGFjazovLy8uL2pzL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vanMvYmFja2dyb3VuZC1kZXZlbG9wbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHQV9FTkRQT0lOVCA9ICdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9tcC9jb2xsZWN0JztcbmNvbnN0IEdBX0RFQlVHX0VORFBPSU5UID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL2RlYnVnL21wL2NvbGxlY3QnO1xuXG4vLyBHZXQgdmlhIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9wcm90b2NvbC9nYTQvc2VuZGluZy1ldmVudHM/Y2xpZW50X3R5cGU9Z3RhZyNyZWNvbW1lbmRlZF9wYXJhbWV0ZXJzX2Zvcl9yZXBvcnRzXG5sZXQgTUVBU1VSRU1FTlRfSUQgPSAnPG1lYXN1cmVtZW50X2lkPic7XG5sZXQgQVBJX1NFQ1JFVCA9ICc8YXBpX3NlY3JldD4nO1xuY29uc3QgREVGQVVMVF9FTkdBR0VNRU5UX1RJTUVfTVNFQyA9IDEwMDtcblxuLy8gRHVyYXRpb24gb2YgaW5hY3Rpdml0eSBhZnRlciB3aGljaCBhIG5ldyBzZXNzaW9uIGlzIGNyZWF0ZWRcbmNvbnN0IFNFU1NJT05fRVhQSVJBVElPTl9JTl9NSU4gPSAzMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRBbmFseXRpY3MoaWQsIHNlY3JldCkge1xuICBNRUFTVVJFTUVOVF9JRCA9IGlkO1xuICBBUElfU0VDUkVUID0gc2VjcmV0O1xufVxuXG5jbGFzcyBBbmFseXRpY3Mge1xuICBjb25zdHJ1Y3RvcihkZWJ1ZyA9IGZhbHNlKSB7XG4gICAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgY2xpZW50IGlkLCBvciBjcmVhdGVzIGEgbmV3IG9uZSBpZiBvbmUgZG9lc24ndCBleGlzdC5cbiAgLy8gU3RvcmVzIGNsaWVudCBpZCBpbiBsb2NhbCBzdG9yYWdlIHRvIGtlZXAgdGhlIHNhbWUgY2xpZW50IGlkIGFzIGxvbmcgYXNcbiAgLy8gdGhlIGV4dGVuc2lvbiBpcyBpbnN0YWxsZWQuXG4gIGFzeW5jIGdldE9yQ3JlYXRlQ2xpZW50SWQoKSB7XG4gICAgbGV0IHsgY2xpZW50SWQgfSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgnY2xpZW50SWQnKTtcbiAgICBpZiAoIWNsaWVudElkKSB7XG4gICAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBjbGllbnQgSUQsIHRoZSBhY3R1YWwgdmFsdWUgaXMgbm90IHJlbGV2YW50XG4gICAgICBjbGllbnRJZCA9IHNlbGYuY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGNsaWVudElkIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY2xpZW50SWQ7XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSBjdXJyZW50IHNlc3Npb24gaWQsIG9yIGNyZWF0ZXMgYSBuZXcgb25lIGlmIG9uZSBkb2Vzbid0IGV4aXN0IG9yXG4gIC8vIHRoZSBwcmV2aW91cyBvbmUgaGFzIGV4cGlyZWQuXG4gIGFzeW5jIGdldE9yQ3JlYXRlU2Vzc2lvbklkKCkge1xuICAgIC8vIFVzZSBzdG9yYWdlLnNlc3Npb24gYmVjYXVzZSBpdCBpcyBvbmx5IGluIG1lbW9yeVxuICAgIGxldCB7IHNlc3Npb25EYXRhIH0gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zZXNzaW9uLmdldCgnc2Vzc2lvbkRhdGEnKTtcbiAgICBjb25zdCBjdXJyZW50VGltZUluTXMgPSBEYXRlLm5vdygpO1xuICAgIC8vIENoZWNrIGlmIHNlc3Npb24gZXhpc3RzIGFuZCBpcyBzdGlsbCB2YWxpZFxuICAgIGlmIChzZXNzaW9uRGF0YSAmJiBzZXNzaW9uRGF0YS50aW1lc3RhbXApIHtcbiAgICAgIC8vIENhbGN1bGF0ZSBob3cgbG9uZyBhZ28gdGhlIHNlc3Npb24gd2FzIGxhc3QgdXBkYXRlZFxuICAgICAgY29uc3QgZHVyYXRpb25Jbk1pbiA9IChjdXJyZW50VGltZUluTXMgLSBzZXNzaW9uRGF0YS50aW1lc3RhbXApIC8gNjAwMDA7XG4gICAgICAvLyBDaGVjayBpZiBsYXN0IHVwZGF0ZSBsYXlzIHBhc3QgdGhlIHNlc3Npb24gZXhwaXJhdGlvbiB0aHJlc2hvbGRcbiAgICAgIGlmIChkdXJhdGlvbkluTWluID4gU0VTU0lPTl9FWFBJUkFUSU9OX0lOX01JTikge1xuICAgICAgICAvLyBDbGVhciBvbGQgc2Vzc2lvbiBpZCB0byBzdGFydCBhIG5ldyBzZXNzaW9uXG4gICAgICAgIHNlc3Npb25EYXRhID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aW1lc3RhbXAgdG8ga2VlcCBzZXNzaW9uIGFsaXZlXG4gICAgICAgIHNlc3Npb25EYXRhLnRpbWVzdGFtcCA9IGN1cnJlbnRUaW1lSW5NcztcbiAgICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc2Vzc2lvbi5zZXQoeyBzZXNzaW9uRGF0YSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFzZXNzaW9uRGF0YSkge1xuICAgICAgLy8gQ3JlYXRlIGFuZCBzdG9yZSBhIG5ldyBzZXNzaW9uXG4gICAgICBzZXNzaW9uRGF0YSA9IHtcbiAgICAgICAgc2Vzc2lvbl9pZDogY3VycmVudFRpbWVJbk1zLnRvU3RyaW5nKCksXG4gICAgICAgIHRpbWVzdGFtcDogY3VycmVudFRpbWVJbk1zLnRvU3RyaW5nKCksXG4gICAgICB9O1xuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc2Vzc2lvbi5zZXQoeyBzZXNzaW9uRGF0YSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25EYXRhLnNlc3Npb25faWQ7XG4gIH1cblxuICAvLyBGaXJlcyBhbiBldmVudCB3aXRoIG9wdGlvbmFsIHBhcmFtcy4gRXZlbnQgbmFtZXMgbXVzdCBvbmx5IGluY2x1ZGUgbGV0dGVycyBhbmQgdW5kZXJzY29yZXMuXG4gIGFzeW5jIGZpcmVFdmVudChuYW1lLCBwYXJhbXMgPSB7fSkge1xuICAgIC8vIENvbmZpZ3VyZSBzZXNzaW9uIGlkIGFuZCBlbmdhZ2VtZW50IHRpbWUgaWYgbm90IHByZXNlbnQsIGZvciBtb3JlIGRldGFpbHMgc2VlOlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9wcm90b2NvbC9nYTQvc2VuZGluZy1ldmVudHM/Y2xpZW50X3R5cGU9Z3RhZyNyZWNvbW1lbmRlZF9wYXJhbWV0ZXJzX2Zvcl9yZXBvcnRzXG4gICAgaWYgKCFwYXJhbXMuc2Vzc2lvbl9pZCkge1xuICAgICAgcGFyYW1zLnNlc3Npb25faWQgPSBhd2FpdCB0aGlzLmdldE9yQ3JlYXRlU2Vzc2lvbklkKCk7XG4gICAgfVxuICAgIGlmICghcGFyYW1zLmVuZ2FnZW1lbnRfdGltZV9tc2VjKSB7XG4gICAgICBwYXJhbXMuZW5nYWdlbWVudF90aW1lX21zZWMgPSBERUZBVUxUX0VOR0FHRU1FTlRfVElNRV9NU0VDO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgJHt0aGlzLmRlYnVnID8gR0FfREVCVUdfRU5EUE9JTlQgOiBHQV9FTkRQT0lOVH0/bWVhc3VyZW1lbnRfaWQ9JHtNRUFTVVJFTUVOVF9JRH0mYXBpX3NlY3JldD0ke0FQSV9TRUNSRVR9YCxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGNsaWVudF9pZDogYXdhaXQgdGhpcy5nZXRPckNyZWF0ZUNsaWVudElkKCksXG4gICAgICAgICAgICBldmVudHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGlmICghdGhpcy5kZWJ1Zykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhhd2FpdCByZXNwb25zZS50ZXh0KCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZSBBbmFseXRpY3MgcmVxdWVzdCBmYWlsZWQgd2l0aCBhbiBleGNlcHRpb24nLCBlKTtcbiAgICB9XG4gIH1cblxuICAvLyBGaXJlIGEgcGFnZSB2aWV3IGV2ZW50LlxuICBhc3luYyBmaXJlUGFnZVZpZXdFdmVudChwYWdlVGl0bGUsIHBhZ2VMb2NhdGlvbiwgYWRkaXRpb25hbFBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyZUV2ZW50KCdwYWdlX3ZpZXcnLCB7XG4gICAgICBwYWdlX3RpdGxlOiBwYWdlVGl0bGUsXG4gICAgICBwYWdlX2xvY2F0aW9uOiBwYWdlTG9jYXRpb24sXG4gICAgICAuLi5hZGRpdGlvbmFsUGFyYW1zLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gRmlyZSBhbiBlcnJvciBldmVudC5cbiAgYXN5bmMgZmlyZUVycm9yRXZlbnQoZXJyb3IsIGFkZGl0aW9uYWxQYXJhbXMgPSB7fSkge1xuICAgIC8vIE5vdGU6ICdlcnJvcicgaXMgYSByZXNlcnZlZCBldmVudCBuYW1lIGFuZCBjYW5ub3QgYmUgdXNlZFxuICAgIC8vIHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vcHJvdG9jb2wvZ2E0L3JlZmVyZW5jZT9jbGllbnRfdHlwZT1ndGFnI3Jlc2VydmVkX25hbWVzXG4gICAgcmV0dXJuIHRoaXMuZmlyZUV2ZW50KCdleHRlbnNpb25fZXJyb3InLCB7XG4gICAgICAuLi5lcnJvcixcbiAgICAgIC4uLmFkZGl0aW9uYWxQYXJhbXMsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFuYWx5dGljcyA9IG5ldyBBbmFseXRpY3MoKTtcbiIsImltcG9ydCB7IGFuYWx5dGljcyB9IGZyb20gJy4vYW5hbHl0aWNzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCYWNrZ3JvdW5kUGFnZSgpIHtcbiAgY2hyb21lLmFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoYXN5bmMgKHRhYikgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHRhYklkOiB0YWIuaWQgfSk7XG5cbiAgICBjb25zdCBleGlzdGluZ0NvbnRleHRzID0gYXdhaXQgY2hyb21lLnJ1bnRpbWUuZ2V0Q29udGV4dHMoe30pO1xuICAgIGxldCByZWNvcmRpbmcgPSBmYWxzZTtcblxuICAgIGNvbnN0IG9mZnNjcmVlbkRvY3VtZW50ID0gZXhpc3RpbmdDb250ZXh0cy5maW5kKChjKSA9PiBjLmNvbnRleHRUeXBlID09PSAnT0ZGU0NSRUVOX0RPQ1VNRU5UJyk7XG5cbiAgICAvLyBJZiBhbiBvZmZzY3JlZW4gZG9jdW1lbnQgaXMgbm90IGFscmVhZHkgb3BlbiwgY3JlYXRlIG9uZS5cbiAgICBpZiAoIW9mZnNjcmVlbkRvY3VtZW50KSB7XG4gICAgICAvLyBDcmVhdGUgYW4gb2Zmc2NyZWVuIGRvY3VtZW50LlxuICAgICAgYXdhaXQgY2hyb21lLm9mZnNjcmVlbi5jcmVhdGVEb2N1bWVudCh7XG4gICAgICAgIHVybDogJ29mZnNjcmVlbi5odG1sJyxcbiAgICAgICAgcmVhc29uczogWydVU0VSX01FRElBJ10sXG4gICAgICAgIGp1c3RpZmljYXRpb246ICdSZWNvcmRpbmcgZnJvbSBjaHJvbWUudGFiQ2FwdHVyZSBBUEknLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlY29yZGluZyA9IG9mZnNjcmVlbkRvY3VtZW50LmRvY3VtZW50VXJsLmVuZHNXaXRoKCcjcmVjb3JkaW5nJyk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZVNjcmlwdCh0YWIpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHJlY29yZGluZykge1xuICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIHtcbiAgICAgICAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZUxvY2F0aW9uJyxcbiAgICAgICAgICBsb2NhdGlvbjogJ3N0b3AnLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoYW5nZUljb24oJycpO1xuICAgICAgICBzZW5kRGVmYXVsdExvY2F0aW9uKHRhYi5pZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobXNnLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVTdGFydFJlY29yZGluZyc6XG4gICAgICAgIHN0YXJ0UmVjb3JkaW5nKG1zZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVN0b3BSZWNvcmRpbmcnOlxuICAgICAgICBzdG9wUmVjb3JkaW5nKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVJlc2l6ZVdpbmRvdyc6XG4gICAgICAgIHJlc2l6ZVdpbmRvdyhtc2cud2lkdGgsIG1zZy5oZWlnaHQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVUcmFja0V2ZW50JzpcbiAgICAgICAgYW5hbHl0aWNzLmZpcmVFdmVudChtc2cuY2F0ZWdvcnksIHtcbiAgICAgICAgICBhY3Rpb246IG1zZy5hY3Rpb24sXG4gICAgICAgICAgbGFiZWw6IG1zZy5sYWJlbCxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVRyYWNrUGFnZSc6XG4gICAgICAgIGFuYWx5dGljcy5maXJlUGFnZVZpZXdFdmVudChtc2cucGF0aC5zcGxpdCgnLycpLnBvcCgpLCBtc2cucGF0aCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVVwZGF0ZWRUYWJMaXN0ZW5lcic6XG4gICAgICAgIGxldCBoYW5kbGVyO1xuICAgICAgICBzd2l0Y2ggKG1zZy5sb2NhdGlvbikge1xuICAgICAgICAgIGNhc2UgJ3NjZW5hcmlvJzpcbiAgICAgICAgICAgIGhhbmRsZXIgPSB1cGRhdGVkVGFiSGFuZGxlclNjZW5hcmlvO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncGxheSc6XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGhhbmRsZXIgPSB1cGRhdGVkVGFiSGFuZGxlclBsYXk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAobXNnLmVuYWJsZWQpIHtcbiAgICAgICAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoaGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hyb21lLnRhYnMub25VcGRhdGVkLnJlbW92ZUxpc3RlbmVyKGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZUluc2VydENTUyc6XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndGFiSWQnKS50aGVuKChvYmopID0+IHtcbiAgICAgICAgICBjaHJvbWUuc2NyaXB0aW5nLmluc2VydENTUyh7XG4gICAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IG9iai50YWJJZCB9LFxuICAgICAgICAgICAgY3NzOiBtc2cuY3NzLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzY3JvbGxDYXB0dXJlVmlzaWJsZVRhYic6XG4gICAgICAgIGNocm9tZS50YWJzLmNhcHR1cmVWaXNpYmxlVGFiKG51bGwsIHt9LCAoZGF0YVVybCkgPT4ge1xuICAgICAgICAgIHNlbmRSZXNwb25zZSh7IGRhdGFVcmwgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVkVGFiSGFuZGxlclBsYXkodGFiSWQsIGNoYW5nZUluZm8sIHRhYikge1xuICBleGVjdXRlU2NyaXB0KHRhYikudGhlbigoKSA9PiB7XG4gICAgY2hyb21lLnJ1bnRpbWUuZ2V0Q29udGV4dHMoe30pLnRoZW4oKGV4aXN0aW5nQ29udGV4dHMpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNjcmVlbkRvY3VtZW50ID0gZXhpc3RpbmdDb250ZXh0cy5maW5kKChjKSA9PiBjLmNvbnRleHRUeXBlID09PSAnT0ZGU0NSRUVOX0RPQ1VNRU5UJyk7XG4gICAgICBjb25zdCByZWNvcmRpbmcgPSBvZmZzY3JlZW5Eb2N1bWVudC5kb2N1bWVudFVybC5lbmRzV2l0aCgnI3JlY29yZGluZycpO1xuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7XG4gICAgICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlTG9jYXRpb24nLFxuICAgICAgICBsb2NhdGlvbjogcmVjb3JkaW5nID8gJ3JlY29yZCcgOiAncGxheScsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZWRUYWJIYW5kbGVyU2NlbmFyaW8odGFiSWQsIGNoYW5nZUluZm8sIHRhYikge1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ3RhYklkJykudGhlbigob2JqKSA9PiB7XG4gICAgaWYgKG9iai50YWJJZCA9PSB0YWJJZCkge1xuICAgICAgZXhlY3V0ZVNjcmlwdCh0YWIpLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZW5kRGVmYXVsdExvY2F0aW9uKHRhYi5pZCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZW5kRGVmYXVsdExvY2F0aW9uKHRhYklkKSB7XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2RlZmF1bHRMb2NhdGlvbiddKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHJlc3VsdC5kZWZhdWx0TG9jYXRpb24gfHwgJ3Njcm9sbC1jYXB0dXJlJztcbiAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgdHlwZTogJ3Njcm9sbENhcHR1cmVMb2NhdGlvbicsXG4gICAgICBsb2NhdGlvbixcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVTY3JpcHQodGFiKSB7XG4gIHJldHVybiBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgIHRhcmdldDogeyB0YWJJZDogdGFiLmlkIH0sXG4gICAgZmlsZXM6IFsnY29udGVudC5qcyddLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzaXplV2luZG93KHdpZHRoLCBoZWlnaHQpIHtcbiAgbGV0IG9wdGlvbnMgPSB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICB9O1xuICBjaHJvbWUud2luZG93cy5nZXRDdXJyZW50KHsgcG9wdWxhdGU6IGZhbHNlIH0sICh3aW4pID0+IHtcbiAgICBjaHJvbWUud2luZG93cy51cGRhdGUod2luLmlkLCBvcHRpb25zKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUljb24oY29sb3IgPSAnJykge1xuICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgIHBhdGg6IHtcbiAgICAgIDE2OiBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2Fzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQxNicgKyBjb2xvciArICcucG5nJyksXG4gICAgICAzMjogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkMzInICsgY29sb3IgKyAnLnBuZycpLFxuICAgICAgNDg6IGNocm9tZS5ydW50aW1lLmdldFVSTCgnYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDQ4JyArIGNvbG9yICsgJy5wbmcnKSxcbiAgICAgIDEyODogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkMTI4JyArIGNvbG9yICsgJy5wbmcnKSxcbiAgICB9LFxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3RhcnRSZWNvcmRpbmcoZGF0YSkge1xuICBjaGFuZ2VJY29uKCdfcmVkJyk7XG5cbiAgY29uc3Qgc3RyZWFtSWQgPSBhd2FpdCBjaHJvbWUudGFiQ2FwdHVyZS5nZXRNZWRpYVN0cmVhbUlkKHtcbiAgICB0YXJnZXRUYWJJZDogZGF0YS50YWJJZCxcbiAgfSk7XG5cbiAgY29uc3QgbWVzc2FnZSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpO1xuICBPYmplY3QuYXNzaWduKG1lc3NhZ2UsIHtcbiAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVN0YXJ0T2Zmc2NyZWVuUmVjb3JkaW5nJyxcbiAgICB0YXJnZXQ6ICdvZmZzY3JlZW4nLFxuICAgIHN0cmVhbUlkLFxuICB9KTtcblxuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShtZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gc3RvcFJlY29yZGluZygpIHtcbiAgY2hhbmdlSWNvbigpO1xuXG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVN0b3BPZmZzY3JlZW5SZWNvcmRpbmcnLFxuICAgIHRhcmdldDogJ29mZnNjcmVlbicsXG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0QW5hbHl0aWNzIH0gZnJvbSAnLi9hbmFseXRpY3MnO1xuaW1wb3J0IHsgaW5pdEJhY2tncm91bmRQYWdlIH0gZnJvbSAnLi9iYWNrZ3JvdW5kJztcblxuaW5pdEFuYWx5dGljcygnRy1YMzNFSEhCTDVHJywgJ19WMEp1c0xLUWQyYmZuMHNTT25zM1EnKTtcbmluaXRCYWNrZ3JvdW5kUGFnZSgpO1xuIl0sIm5hbWVzIjpbIkdBX0VORFBPSU5UIiwiR0FfREVCVUdfRU5EUE9JTlQiLCJNRUFTVVJFTUVOVF9JRCIsIkFQSV9TRUNSRVQiLCJERUZBVUxUX0VOR0FHRU1FTlRfVElNRV9NU0VDIiwiU0VTU0lPTl9FWFBJUkFUSU9OX0lOX01JTiIsImluaXRBbmFseXRpY3MiLCJpZCIsInNlY3JldCIsIkFuYWx5dGljcyIsImNvbnN0cnVjdG9yIiwiZGVidWciLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJnZXRPckNyZWF0ZUNsaWVudElkIiwiY2xpZW50SWQiLCJjaHJvbWUiLCJzdG9yYWdlIiwibG9jYWwiLCJnZXQiLCJzZWxmIiwiY3J5cHRvIiwicmFuZG9tVVVJRCIsInNldCIsImdldE9yQ3JlYXRlU2Vzc2lvbklkIiwic2Vzc2lvbkRhdGEiLCJzZXNzaW9uIiwiY3VycmVudFRpbWVJbk1zIiwiRGF0ZSIsIm5vdyIsInRpbWVzdGFtcCIsImR1cmF0aW9uSW5NaW4iLCJzZXNzaW9uX2lkIiwidG9TdHJpbmciLCJmaXJlRXZlbnQiLCJuYW1lIiwicGFyYW1zIiwiZW5nYWdlbWVudF90aW1lX21zZWMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjbGllbnRfaWQiLCJldmVudHMiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImUiLCJlcnJvciIsImZpcmVQYWdlVmlld0V2ZW50IiwicGFnZVRpdGxlIiwicGFnZUxvY2F0aW9uIiwiYWRkaXRpb25hbFBhcmFtcyIsInBhZ2VfdGl0bGUiLCJwYWdlX2xvY2F0aW9uIiwiZmlyZUVycm9yRXZlbnQiLCJhbmFseXRpY3MiLCJpbml0QmFja2dyb3VuZFBhZ2UiLCJhY3Rpb24iLCJvbkNsaWNrZWQiLCJhZGRMaXN0ZW5lciIsInRhYiIsInRhYklkIiwiZXhpc3RpbmdDb250ZXh0cyIsInJ1bnRpbWUiLCJnZXRDb250ZXh0cyIsInJlY29yZGluZyIsIm9mZnNjcmVlbkRvY3VtZW50IiwiZmluZCIsImMiLCJjb250ZXh0VHlwZSIsIm9mZnNjcmVlbiIsImNyZWF0ZURvY3VtZW50IiwidXJsIiwicmVhc29ucyIsImp1c3RpZmljYXRpb24iLCJkb2N1bWVudFVybCIsImVuZHNXaXRoIiwiZXhlY3V0ZVNjcmlwdCIsInRoZW4iLCJ0YWJzIiwic2VuZE1lc3NhZ2UiLCJ0eXBlIiwibG9jYXRpb24iLCJjaGFuZ2VJY29uIiwic2VuZERlZmF1bHRMb2NhdGlvbiIsIm9uTWVzc2FnZSIsIm1zZyIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsInN0YXJ0UmVjb3JkaW5nIiwic3RvcFJlY29yZGluZyIsInJlc2l6ZVdpbmRvdyIsIndpZHRoIiwiaGVpZ2h0IiwiY2F0ZWdvcnkiLCJsYWJlbCIsInBhdGgiLCJzcGxpdCIsInBvcCIsImhhbmRsZXIiLCJ1cGRhdGVkVGFiSGFuZGxlclNjZW5hcmlvIiwidXBkYXRlZFRhYkhhbmRsZXJQbGF5IiwiZW5hYmxlZCIsIm9uVXBkYXRlZCIsInJlbW92ZUxpc3RlbmVyIiwib2JqIiwic2NyaXB0aW5nIiwiaW5zZXJ0Q1NTIiwidGFyZ2V0IiwiY3NzIiwiY2FwdHVyZVZpc2libGVUYWIiLCJkYXRhVXJsIiwiY2hhbmdlSW5mbyIsInJlc3VsdCIsImRlZmF1bHRMb2NhdGlvbiIsImZpbGVzIiwib3B0aW9ucyIsIndpbmRvd3MiLCJnZXRDdXJyZW50IiwicG9wdWxhdGUiLCJ3aW4iLCJ1cGRhdGUiLCJjb2xvciIsInNldEljb24iLCJnZXRVUkwiLCJkYXRhIiwic3RyZWFtSWQiLCJ0YWJDYXB0dXJlIiwiZ2V0TWVkaWFTdHJlYW1JZCIsInRhcmdldFRhYklkIiwibWVzc2FnZSIsIk9iamVjdCIsImFzc2lnbiJdLCJzb3VyY2VSb290IjoiIn0=