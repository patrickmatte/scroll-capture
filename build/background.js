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
    try {
      chrome.tabs.executeScript(tab.id, {
        code: 'console.log("Scroll Capture")'
      });
    } catch (error) {
      console.log('The chrome.tabs.executeScript function is not permitted on this page');
      return;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQ3JCbEQsSUFBSSxFQUFFLHNDQUFzQztJQUM1QzBCLE1BQU0sRUFBRSxXQUFXO0lBQ25Cb0I7RUFDRixDQUFDLENBQUM7RUFFRm5ILE1BQU0sQ0FBQ3FELE9BQU8sQ0FBQ2UsV0FBVyxDQUFDbUQsT0FBTyxDQUFDO0FBQ3JDO0FBRUEsU0FBU3pDLGFBQWFBLENBQUEsRUFBRztFQUN2QlAsVUFBVSxDQUFDLENBQUM7RUFFWnZFLE1BQU0sQ0FBQ3FELE9BQU8sQ0FBQ2UsV0FBVyxDQUFDO0lBQ3pCQyxJQUFJLEVBQUUscUNBQXFDO0lBQzNDMEIsTUFBTSxFQUFFO0VBQ1YsQ0FBQyxDQUFDO0FBQ0o7QUFFQSxTQUFTSSxpQkFBaUJBLENBQUEsRUFBRztFQUMzQjVCLFVBQVUsQ0FBQyxNQUFNLENBQUM7QUFDcEI7QUFFQSxTQUFTNkIsZ0JBQWdCQSxDQUFBLEVBQUc7RUFDMUI3QixVQUFVLENBQUMsQ0FBQztBQUNkOzs7Ozs7VUNsTUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDTTtBQUVsRGxGLHlEQUFhLENBQUMsY0FBYyxFQUFFLHdCQUF3QixDQUFDO0FBQ3ZEc0QsK0RBQWtCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvYW5hbHl0aWNzLmpzIiwid2VicGFjazovLy8uL2pzL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vanMvYmFja2dyb3VuZC1kZXZlbG9wbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHQV9FTkRQT0lOVCA9ICdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9tcC9jb2xsZWN0JztcbmNvbnN0IEdBX0RFQlVHX0VORFBPSU5UID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL2RlYnVnL21wL2NvbGxlY3QnO1xuXG4vLyBHZXQgdmlhIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9wcm90b2NvbC9nYTQvc2VuZGluZy1ldmVudHM/Y2xpZW50X3R5cGU9Z3RhZyNyZWNvbW1lbmRlZF9wYXJhbWV0ZXJzX2Zvcl9yZXBvcnRzXG5sZXQgTUVBU1VSRU1FTlRfSUQgPSAnPG1lYXN1cmVtZW50X2lkPic7XG5sZXQgQVBJX1NFQ1JFVCA9ICc8YXBpX3NlY3JldD4nO1xuY29uc3QgREVGQVVMVF9FTkdBR0VNRU5UX1RJTUVfTVNFQyA9IDEwMDtcblxuLy8gRHVyYXRpb24gb2YgaW5hY3Rpdml0eSBhZnRlciB3aGljaCBhIG5ldyBzZXNzaW9uIGlzIGNyZWF0ZWRcbmNvbnN0IFNFU1NJT05fRVhQSVJBVElPTl9JTl9NSU4gPSAzMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRBbmFseXRpY3MoaWQsIHNlY3JldCkge1xuICBNRUFTVVJFTUVOVF9JRCA9IGlkO1xuICBBUElfU0VDUkVUID0gc2VjcmV0O1xufVxuXG5jbGFzcyBBbmFseXRpY3Mge1xuICBjb25zdHJ1Y3RvcihkZWJ1ZyA9IGZhbHNlKSB7XG4gICAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgY2xpZW50IGlkLCBvciBjcmVhdGVzIGEgbmV3IG9uZSBpZiBvbmUgZG9lc24ndCBleGlzdC5cbiAgLy8gU3RvcmVzIGNsaWVudCBpZCBpbiBsb2NhbCBzdG9yYWdlIHRvIGtlZXAgdGhlIHNhbWUgY2xpZW50IGlkIGFzIGxvbmcgYXNcbiAgLy8gdGhlIGV4dGVuc2lvbiBpcyBpbnN0YWxsZWQuXG4gIGFzeW5jIGdldE9yQ3JlYXRlQ2xpZW50SWQoKSB7XG4gICAgbGV0IHsgY2xpZW50SWQgfSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgnY2xpZW50SWQnKTtcbiAgICBpZiAoIWNsaWVudElkKSB7XG4gICAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBjbGllbnQgSUQsIHRoZSBhY3R1YWwgdmFsdWUgaXMgbm90IHJlbGV2YW50XG4gICAgICBjbGllbnRJZCA9IHNlbGYuY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGNsaWVudElkIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY2xpZW50SWQ7XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSBjdXJyZW50IHNlc3Npb24gaWQsIG9yIGNyZWF0ZXMgYSBuZXcgb25lIGlmIG9uZSBkb2Vzbid0IGV4aXN0IG9yXG4gIC8vIHRoZSBwcmV2aW91cyBvbmUgaGFzIGV4cGlyZWQuXG4gIGFzeW5jIGdldE9yQ3JlYXRlU2Vzc2lvbklkKCkge1xuICAgIC8vIFVzZSBzdG9yYWdlLnNlc3Npb24gYmVjYXVzZSBpdCBpcyBvbmx5IGluIG1lbW9yeVxuICAgIGxldCB7IHNlc3Npb25EYXRhIH0gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zZXNzaW9uLmdldCgnc2Vzc2lvbkRhdGEnKTtcbiAgICBjb25zdCBjdXJyZW50VGltZUluTXMgPSBEYXRlLm5vdygpO1xuICAgIC8vIENoZWNrIGlmIHNlc3Npb24gZXhpc3RzIGFuZCBpcyBzdGlsbCB2YWxpZFxuICAgIGlmIChzZXNzaW9uRGF0YSAmJiBzZXNzaW9uRGF0YS50aW1lc3RhbXApIHtcbiAgICAgIC8vIENhbGN1bGF0ZSBob3cgbG9uZyBhZ28gdGhlIHNlc3Npb24gd2FzIGxhc3QgdXBkYXRlZFxuICAgICAgY29uc3QgZHVyYXRpb25Jbk1pbiA9IChjdXJyZW50VGltZUluTXMgLSBzZXNzaW9uRGF0YS50aW1lc3RhbXApIC8gNjAwMDA7XG4gICAgICAvLyBDaGVjayBpZiBsYXN0IHVwZGF0ZSBsYXlzIHBhc3QgdGhlIHNlc3Npb24gZXhwaXJhdGlvbiB0aHJlc2hvbGRcbiAgICAgIGlmIChkdXJhdGlvbkluTWluID4gU0VTU0lPTl9FWFBJUkFUSU9OX0lOX01JTikge1xuICAgICAgICAvLyBDbGVhciBvbGQgc2Vzc2lvbiBpZCB0byBzdGFydCBhIG5ldyBzZXNzaW9uXG4gICAgICAgIHNlc3Npb25EYXRhID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aW1lc3RhbXAgdG8ga2VlcCBzZXNzaW9uIGFsaXZlXG4gICAgICAgIHNlc3Npb25EYXRhLnRpbWVzdGFtcCA9IGN1cnJlbnRUaW1lSW5NcztcbiAgICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc2Vzc2lvbi5zZXQoeyBzZXNzaW9uRGF0YSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFzZXNzaW9uRGF0YSkge1xuICAgICAgLy8gQ3JlYXRlIGFuZCBzdG9yZSBhIG5ldyBzZXNzaW9uXG4gICAgICBzZXNzaW9uRGF0YSA9IHtcbiAgICAgICAgc2Vzc2lvbl9pZDogY3VycmVudFRpbWVJbk1zLnRvU3RyaW5nKCksXG4gICAgICAgIHRpbWVzdGFtcDogY3VycmVudFRpbWVJbk1zLnRvU3RyaW5nKCksXG4gICAgICB9O1xuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc2Vzc2lvbi5zZXQoeyBzZXNzaW9uRGF0YSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25EYXRhLnNlc3Npb25faWQ7XG4gIH1cblxuICAvLyBGaXJlcyBhbiBldmVudCB3aXRoIG9wdGlvbmFsIHBhcmFtcy4gRXZlbnQgbmFtZXMgbXVzdCBvbmx5IGluY2x1ZGUgbGV0dGVycyBhbmQgdW5kZXJzY29yZXMuXG4gIGFzeW5jIGZpcmVFdmVudChuYW1lLCBwYXJhbXMgPSB7fSkge1xuICAgIC8vIENvbmZpZ3VyZSBzZXNzaW9uIGlkIGFuZCBlbmdhZ2VtZW50IHRpbWUgaWYgbm90IHByZXNlbnQsIGZvciBtb3JlIGRldGFpbHMgc2VlOlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9wcm90b2NvbC9nYTQvc2VuZGluZy1ldmVudHM/Y2xpZW50X3R5cGU9Z3RhZyNyZWNvbW1lbmRlZF9wYXJhbWV0ZXJzX2Zvcl9yZXBvcnRzXG4gICAgaWYgKCFwYXJhbXMuc2Vzc2lvbl9pZCkge1xuICAgICAgcGFyYW1zLnNlc3Npb25faWQgPSBhd2FpdCB0aGlzLmdldE9yQ3JlYXRlU2Vzc2lvbklkKCk7XG4gICAgfVxuICAgIGlmICghcGFyYW1zLmVuZ2FnZW1lbnRfdGltZV9tc2VjKSB7XG4gICAgICBwYXJhbXMuZW5nYWdlbWVudF90aW1lX21zZWMgPSBERUZBVUxUX0VOR0FHRU1FTlRfVElNRV9NU0VDO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RoaXMuZGVidWcgPyBHQV9ERUJVR19FTkRQT0lOVCA6IEdBX0VORFBPSU5UfT9tZWFzdXJlbWVudF9pZD0ke01FQVNVUkVNRU5UX0lEfSZhcGlfc2VjcmV0PSR7QVBJX1NFQ1JFVH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgY2xpZW50X2lkOiBhd2FpdCB0aGlzLmdldE9yQ3JlYXRlQ2xpZW50SWQoKSxcbiAgICAgICAgICBldmVudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuICAgICAgaWYgKCF0aGlzLmRlYnVnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGF3YWl0IHJlc3BvbnNlLnRleHQoKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignR29vZ2xlIEFuYWx5dGljcyByZXF1ZXN0IGZhaWxlZCB3aXRoIGFuIGV4Y2VwdGlvbicsIGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpcmUgYSBwYWdlIHZpZXcgZXZlbnQuXG4gIGFzeW5jIGZpcmVQYWdlVmlld0V2ZW50KHBhZ2VUaXRsZSwgcGFnZUxvY2F0aW9uLCBhZGRpdGlvbmFsUGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5maXJlRXZlbnQoJ3BhZ2VfdmlldycsIHtcbiAgICAgIHBhZ2VfdGl0bGU6IHBhZ2VUaXRsZSxcbiAgICAgIHBhZ2VfbG9jYXRpb246IHBhZ2VMb2NhdGlvbixcbiAgICAgIC4uLmFkZGl0aW9uYWxQYXJhbXMsXG4gICAgfSk7XG4gIH1cblxuICAvLyBGaXJlIGFuIGVycm9yIGV2ZW50LlxuICBhc3luYyBmaXJlRXJyb3JFdmVudChlcnJvciwgYWRkaXRpb25hbFBhcmFtcyA9IHt9KSB7XG4gICAgLy8gTm90ZTogJ2Vycm9yJyBpcyBhIHJlc2VydmVkIGV2ZW50IG5hbWUgYW5kIGNhbm5vdCBiZSB1c2VkXG4gICAgLy8gc2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9wcm90b2NvbC9nYTQvcmVmZXJlbmNlP2NsaWVudF90eXBlPWd0YWcjcmVzZXJ2ZWRfbmFtZXNcbiAgICByZXR1cm4gdGhpcy5maXJlRXZlbnQoJ2V4dGVuc2lvbl9lcnJvcicsIHtcbiAgICAgIC4uLmVycm9yLFxuICAgICAgLi4uYWRkaXRpb25hbFBhcmFtcyxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYW5hbHl0aWNzID0gbmV3IEFuYWx5dGljcygpO1xuIiwiaW1wb3J0IHsgYW5hbHl0aWNzIH0gZnJvbSAnLi9hbmFseXRpY3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEJhY2tncm91bmRQYWdlKCkge1xuICBjaHJvbWUuYWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihhc3luYyAodGFiKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQodGFiLmlkLCB7IGNvZGU6ICdjb25zb2xlLmxvZyhcIlNjcm9sbCBDYXB0dXJlXCIpJyB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ1RoZSBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0IGZ1bmN0aW9uIGlzIG5vdCBwZXJtaXR0ZWQgb24gdGhpcyBwYWdlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgdGFiSWQ6IHRhYi5pZCB9KTtcblxuICAgIGNvbnN0IGV4aXN0aW5nQ29udGV4dHMgPSBhd2FpdCBjaHJvbWUucnVudGltZS5nZXRDb250ZXh0cyh7fSk7XG4gICAgbGV0IHJlY29yZGluZyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgb2Zmc2NyZWVuRG9jdW1lbnQgPSBleGlzdGluZ0NvbnRleHRzLmZpbmQoKGMpID0+IGMuY29udGV4dFR5cGUgPT09ICdPRkZTQ1JFRU5fRE9DVU1FTlQnKTtcblxuICAgIC8vIElmIGFuIG9mZnNjcmVlbiBkb2N1bWVudCBpcyBub3QgYWxyZWFkeSBvcGVuLCBjcmVhdGUgb25lLlxuICAgIGlmICghb2Zmc2NyZWVuRG9jdW1lbnQpIHtcbiAgICAgIC8vIENyZWF0ZSBhbiBvZmZzY3JlZW4gZG9jdW1lbnQuXG4gICAgICBhd2FpdCBjaHJvbWUub2Zmc2NyZWVuLmNyZWF0ZURvY3VtZW50KHtcbiAgICAgICAgdXJsOiAnb2Zmc2NyZWVuLmh0bWwnLFxuICAgICAgICByZWFzb25zOiBbJ1VTRVJfTUVESUEnXSxcbiAgICAgICAganVzdGlmaWNhdGlvbjogJ1JlY29yZGluZyBmcm9tIGNocm9tZS50YWJDYXB0dXJlIEFQSScsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjb3JkaW5nID0gb2Zmc2NyZWVuRG9jdW1lbnQuZG9jdW1lbnRVcmwuZW5kc1dpdGgoJyNyZWNvcmRpbmcnKTtcbiAgICB9XG5cbiAgICBleGVjdXRlU2NyaXB0KHRhYikudGhlbigoKSA9PiB7XG4gICAgICBpZiAocmVjb3JkaW5nKSB7XG4gICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwge1xuICAgICAgICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlTG9jYXRpb24nLFxuICAgICAgICAgIGxvY2F0aW9uOiAnc3RvcCcsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hhbmdlSWNvbignJyk7XG4gICAgICAgIHNlbmREZWZhdWx0TG9jYXRpb24odGFiLmlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtc2csIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVN0YXJ0UmVjb3JkaW5nJzpcbiAgICAgICAgc3RhcnRSZWNvcmRpbmcobXNnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzY3JvbGxDYXB0dXJlU3RvcFJlY29yZGluZyc6XG4gICAgICAgIHN0b3BSZWNvcmRpbmcoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzY3JvbGxDYXB0dXJlUmVzaXplV2luZG93JzpcbiAgICAgICAgcmVzaXplV2luZG93KG1zZy53aWR0aCwgbXNnLmhlaWdodCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVRyYWNrRXZlbnQnOlxuICAgICAgICBhbmFseXRpY3MuZmlyZUV2ZW50KG1zZy5jYXRlZ29yeSwgbXNnLnBhcmFtcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVRyYWNrUGFnZSc6XG4gICAgICAgIGFuYWx5dGljcy5maXJlUGFnZVZpZXdFdmVudChtc2cucGF0aC5zcGxpdCgnLycpLnBvcCgpLCBtc2cucGF0aCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVVwZGF0ZWRUYWJMaXN0ZW5lcic6XG4gICAgICAgIGxldCBoYW5kbGVyO1xuICAgICAgICBzd2l0Y2ggKG1zZy5sb2NhdGlvbikge1xuICAgICAgICAgIGNhc2UgJ3NjZW5hcmlvJzpcbiAgICAgICAgICAgIGhhbmRsZXIgPSB1cGRhdGVkVGFiSGFuZGxlclNjZW5hcmlvO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncGxheSc6XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGhhbmRsZXIgPSB1cGRhdGVkVGFiSGFuZGxlclBsYXk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAobXNnLmVuYWJsZWQpIHtcbiAgICAgICAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoaGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hyb21lLnRhYnMub25VcGRhdGVkLnJlbW92ZUxpc3RlbmVyKGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZUluc2VydENTUyc6XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndGFiSWQnKS50aGVuKChvYmopID0+IHtcbiAgICAgICAgICBjaHJvbWUuc2NyaXB0aW5nLmluc2VydENTUyh7XG4gICAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IG9iai50YWJJZCB9LFxuICAgICAgICAgICAgY3NzOiBtc2cuY3NzLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzY3JvbGxDYXB0dXJlVmlzaWJsZVRhYic6XG4gICAgICAgIGNocm9tZS50YWJzLmNhcHR1cmVWaXNpYmxlVGFiKG51bGwsIHt9LCAoZGF0YVVybCkgPT4ge1xuICAgICAgICAgIHNlbmRSZXNwb25zZSh7IGRhdGFVcmwgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVJbWFnZUNhcHR1cmVTdGFydCc6XG4gICAgICAgIHN0YXJ0SW1hZ2VDYXB0dXJlKG1zZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZUltYWdlQ2FwdHVyZVN0b3AnOlxuICAgICAgICBzdG9wSW1hZ2VDYXB0dXJlKG1zZyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZWRUYWJIYW5kbGVyUGxheSh0YWJJZCwgY2hhbmdlSW5mbywgdGFiKSB7XG4gIGV4ZWN1dGVTY3JpcHQodGFiKS50aGVuKCgpID0+IHtcbiAgICBjaHJvbWUucnVudGltZS5nZXRDb250ZXh0cyh7fSkudGhlbigoZXhpc3RpbmdDb250ZXh0cykgPT4ge1xuICAgICAgY29uc3Qgb2Zmc2NyZWVuRG9jdW1lbnQgPSBleGlzdGluZ0NvbnRleHRzLmZpbmQoKGMpID0+IGMuY29udGV4dFR5cGUgPT09ICdPRkZTQ1JFRU5fRE9DVU1FTlQnKTtcbiAgICAgIGNvbnN0IHJlY29yZGluZyA9IG9mZnNjcmVlbkRvY3VtZW50LmRvY3VtZW50VXJsLmVuZHNXaXRoKCcjcmVjb3JkaW5nJyk7XG4gICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIHtcbiAgICAgICAgdHlwZTogJ3Njcm9sbENhcHR1cmVMb2NhdGlvbicsXG4gICAgICAgIGxvY2F0aW9uOiByZWNvcmRpbmcgPyAncmVjb3JkJyA6ICdwbGF5JyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlZFRhYkhhbmRsZXJTY2VuYXJpbyh0YWJJZCwgY2hhbmdlSW5mbywgdGFiKSB7XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndGFiSWQnKS50aGVuKChvYmopID0+IHtcbiAgICBpZiAob2JqLnRhYklkID09IHRhYklkKSB7XG4gICAgICBleGVjdXRlU2NyaXB0KHRhYikudGhlbigoKSA9PiB7XG4gICAgICAgIHNlbmREZWZhdWx0TG9jYXRpb24odGFiLmlkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlbmREZWZhdWx0TG9jYXRpb24odGFiSWQpIHtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsnZGVmYXVsdExvY2F0aW9uJ10pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gcmVzdWx0LmRlZmF1bHRMb2NhdGlvbiB8fCAnc2Nyb2xsLWNhcHR1cmUnO1xuICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZUxvY2F0aW9uJyxcbiAgICAgIGxvY2F0aW9uLFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVNjcmlwdCh0YWIpIHtcbiAgcmV0dXJuIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgdGFyZ2V0OiB7IHRhYklkOiB0YWIuaWQgfSxcbiAgICBmaWxlczogWydjb250ZW50LmpzJ10sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNpemVXaW5kb3cod2lkdGgsIGhlaWdodCkge1xuICBsZXQgb3B0aW9ucyA9IHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gIH07XG4gIGNocm9tZS53aW5kb3dzLmdldEN1cnJlbnQoeyBwb3B1bGF0ZTogZmFsc2UgfSwgKHdpbikgPT4ge1xuICAgIGNocm9tZS53aW5kb3dzLnVwZGF0ZSh3aW4uaWQsIG9wdGlvbnMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlSWNvbihjb2xvciA9ICcnKSB7XG4gIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgcGF0aDoge1xuICAgICAgMTY6IGNocm9tZS5ydW50aW1lLmdldFVSTCgnYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDE2JyArIGNvbG9yICsgJy5wbmcnKSxcbiAgICAgIDMyOiBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2Fzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQzMicgKyBjb2xvciArICcucG5nJyksXG4gICAgICA0ODogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkNDgnICsgY29sb3IgKyAnLnBuZycpLFxuICAgICAgMTI4OiBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2Fzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQxMjgnICsgY29sb3IgKyAnLnBuZycpLFxuICAgIH0sXG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzdGFydFJlY29yZGluZyhkYXRhKSB7XG4gIGNoYW5nZUljb24oJ19yZWQnKTtcblxuICBjb25zdCBzdHJlYW1JZCA9IGF3YWl0IGNocm9tZS50YWJDYXB0dXJlLmdldE1lZGlhU3RyZWFtSWQoe1xuICAgIHRhcmdldFRhYklkOiBkYXRhLnRhYklkLFxuICB9KTtcblxuICBjb25zdCBtZXNzYWdlID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSk7XG4gIE9iamVjdC5hc3NpZ24obWVzc2FnZSwge1xuICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlU3RhcnRPZmZzY3JlZW5SZWNvcmRpbmcnLFxuICAgIHRhcmdldDogJ29mZnNjcmVlbicsXG4gICAgc3RyZWFtSWQsXG4gIH0pO1xuXG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBzdG9wUmVjb3JkaW5nKCkge1xuICBjaGFuZ2VJY29uKCk7XG5cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlU3RvcE9mZnNjcmVlblJlY29yZGluZycsXG4gICAgdGFyZ2V0OiAnb2Zmc2NyZWVuJyxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0SW1hZ2VDYXB0dXJlKCkge1xuICBjaGFuZ2VJY29uKCdfcmVkJyk7XG59XG5cbmZ1bmN0aW9uIHN0b3BJbWFnZUNhcHR1cmUoKSB7XG4gIGNoYW5nZUljb24oKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdEFuYWx5dGljcyB9IGZyb20gJy4vYW5hbHl0aWNzJztcbmltcG9ydCB7IGluaXRCYWNrZ3JvdW5kUGFnZSB9IGZyb20gJy4vYmFja2dyb3VuZCc7XG5cbmluaXRBbmFseXRpY3MoJ0ctWDMzRUhIQkw1RycsICdfVjBKdXNMS1FkMmJmbjBzU09uczNRJyk7XG5pbml0QmFja2dyb3VuZFBhZ2UoKTtcbiJdLCJuYW1lcyI6WyJHQV9FTkRQT0lOVCIsIkdBX0RFQlVHX0VORFBPSU5UIiwiTUVBU1VSRU1FTlRfSUQiLCJBUElfU0VDUkVUIiwiREVGQVVMVF9FTkdBR0VNRU5UX1RJTUVfTVNFQyIsIlNFU1NJT05fRVhQSVJBVElPTl9JTl9NSU4iLCJpbml0QW5hbHl0aWNzIiwiaWQiLCJzZWNyZXQiLCJBbmFseXRpY3MiLCJjb25zdHJ1Y3RvciIsImRlYnVnIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZ2V0T3JDcmVhdGVDbGllbnRJZCIsImNsaWVudElkIiwiY2hyb21lIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0Iiwic2VsZiIsImNyeXB0byIsInJhbmRvbVVVSUQiLCJzZXQiLCJnZXRPckNyZWF0ZVNlc3Npb25JZCIsInNlc3Npb25EYXRhIiwic2Vzc2lvbiIsImN1cnJlbnRUaW1lSW5NcyIsIkRhdGUiLCJub3ciLCJ0aW1lc3RhbXAiLCJkdXJhdGlvbkluTWluIiwic2Vzc2lvbl9pZCIsInRvU3RyaW5nIiwiZmlyZUV2ZW50IiwibmFtZSIsInBhcmFtcyIsImVuZ2FnZW1lbnRfdGltZV9tc2VjIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xpZW50X2lkIiwiZXZlbnRzIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJlIiwiZXJyb3IiLCJmaXJlUGFnZVZpZXdFdmVudCIsInBhZ2VUaXRsZSIsInBhZ2VMb2NhdGlvbiIsImFkZGl0aW9uYWxQYXJhbXMiLCJwYWdlX3RpdGxlIiwicGFnZV9sb2NhdGlvbiIsImZpcmVFcnJvckV2ZW50IiwiYW5hbHl0aWNzIiwiaW5pdEJhY2tncm91bmRQYWdlIiwiYWN0aW9uIiwib25DbGlja2VkIiwiYWRkTGlzdGVuZXIiLCJ0YWIiLCJ0YWJzIiwiZXhlY3V0ZVNjcmlwdCIsImNvZGUiLCJ0YWJJZCIsImV4aXN0aW5nQ29udGV4dHMiLCJydW50aW1lIiwiZ2V0Q29udGV4dHMiLCJyZWNvcmRpbmciLCJvZmZzY3JlZW5Eb2N1bWVudCIsImZpbmQiLCJjIiwiY29udGV4dFR5cGUiLCJvZmZzY3JlZW4iLCJjcmVhdGVEb2N1bWVudCIsInVybCIsInJlYXNvbnMiLCJqdXN0aWZpY2F0aW9uIiwiZG9jdW1lbnRVcmwiLCJlbmRzV2l0aCIsInRoZW4iLCJzZW5kTWVzc2FnZSIsInR5cGUiLCJsb2NhdGlvbiIsImNoYW5nZUljb24iLCJzZW5kRGVmYXVsdExvY2F0aW9uIiwib25NZXNzYWdlIiwibXNnIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwic3RhcnRSZWNvcmRpbmciLCJzdG9wUmVjb3JkaW5nIiwicmVzaXplV2luZG93Iiwid2lkdGgiLCJoZWlnaHQiLCJjYXRlZ29yeSIsInBhdGgiLCJzcGxpdCIsInBvcCIsImhhbmRsZXIiLCJ1cGRhdGVkVGFiSGFuZGxlclNjZW5hcmlvIiwidXBkYXRlZFRhYkhhbmRsZXJQbGF5IiwiZW5hYmxlZCIsIm9uVXBkYXRlZCIsInJlbW92ZUxpc3RlbmVyIiwib2JqIiwic2NyaXB0aW5nIiwiaW5zZXJ0Q1NTIiwidGFyZ2V0IiwiY3NzIiwiY2FwdHVyZVZpc2libGVUYWIiLCJkYXRhVXJsIiwic3RhcnRJbWFnZUNhcHR1cmUiLCJzdG9wSW1hZ2VDYXB0dXJlIiwiY2hhbmdlSW5mbyIsInJlc3VsdCIsImRlZmF1bHRMb2NhdGlvbiIsImZpbGVzIiwib3B0aW9ucyIsIndpbmRvd3MiLCJnZXRDdXJyZW50IiwicG9wdWxhdGUiLCJ3aW4iLCJ1cGRhdGUiLCJjb2xvciIsInNldEljb24iLCJnZXRVUkwiLCJkYXRhIiwic3RyZWFtSWQiLCJ0YWJDYXB0dXJlIiwiZ2V0TWVkaWFTdHJlYW1JZCIsInRhcmdldFRhYklkIiwibWVzc2FnZSIsIk9iamVjdCIsImFzc2lnbiJdLCJzb3VyY2VSb290IjoiIn0=