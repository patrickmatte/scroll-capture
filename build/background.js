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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO0lBQ0Z2SSxNQUFNLENBQUM0QyxPQUFPLENBQUMwQixXQUFXLENBQUNrRSxPQUFPLENBQUM7RUFDckMsQ0FBQyxDQUFDO0FBQ0o7QUFFQSxTQUFTdkQsYUFBYUEsQ0FBQSxFQUFHO0VBQ3ZCUixVQUFVLENBQUMsQ0FBQztFQUVaekUsTUFBTSxDQUFDNEMsT0FBTyxDQUFDMEIsV0FBVyxDQUFDO0lBQ3pCQyxJQUFJLEVBQUUscUNBQXFDO0lBQzNDMEIsTUFBTSxFQUFFO0VBQ1YsQ0FBQyxDQUFDO0FBQ0o7QUFFQSxTQUFTSyxpQkFBaUJBLENBQUEsRUFBRztFQUMzQjdCLFVBQVUsQ0FBQyxNQUFNLENBQUM7QUFDcEI7QUFFQSxTQUFTOEIsZ0JBQWdCQSxDQUFBLEVBQUc7RUFDMUI5QixVQUFVLENBQUMsQ0FBQztBQUNkOzs7Ozs7VUN4UUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDTTtBQUVsRHBGLHlEQUFhLENBQUMsY0FBYyxFQUFFLHdCQUF3QixDQUFDO0FBQ3ZEc0QsK0RBQWtCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvYW5hbHl0aWNzLmpzIiwid2VicGFjazovLy8uL2pzL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vanMvYmFja2dyb3VuZC1kZXZlbG9wbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHQV9FTkRQT0lOVCA9ICdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9tcC9jb2xsZWN0JztcbmNvbnN0IEdBX0RFQlVHX0VORFBPSU5UID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL2RlYnVnL21wL2NvbGxlY3QnO1xuXG4vLyBHZXQgdmlhIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9wcm90b2NvbC9nYTQvc2VuZGluZy1ldmVudHM/Y2xpZW50X3R5cGU9Z3RhZyNyZWNvbW1lbmRlZF9wYXJhbWV0ZXJzX2Zvcl9yZXBvcnRzXG5sZXQgTUVBU1VSRU1FTlRfSUQgPSAnPG1lYXN1cmVtZW50X2lkPic7XG5sZXQgQVBJX1NFQ1JFVCA9ICc8YXBpX3NlY3JldD4nO1xuY29uc3QgREVGQVVMVF9FTkdBR0VNRU5UX1RJTUVfTVNFQyA9IDEwMDtcblxuLy8gRHVyYXRpb24gb2YgaW5hY3Rpdml0eSBhZnRlciB3aGljaCBhIG5ldyBzZXNzaW9uIGlzIGNyZWF0ZWRcbmNvbnN0IFNFU1NJT05fRVhQSVJBVElPTl9JTl9NSU4gPSAzMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRBbmFseXRpY3MoaWQsIHNlY3JldCkge1xuICBNRUFTVVJFTUVOVF9JRCA9IGlkO1xuICBBUElfU0VDUkVUID0gc2VjcmV0O1xufVxuXG5jbGFzcyBBbmFseXRpY3Mge1xuICBjb25zdHJ1Y3RvcihkZWJ1ZyA9IGZhbHNlKSB7XG4gICAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgY2xpZW50IGlkLCBvciBjcmVhdGVzIGEgbmV3IG9uZSBpZiBvbmUgZG9lc24ndCBleGlzdC5cbiAgLy8gU3RvcmVzIGNsaWVudCBpZCBpbiBsb2NhbCBzdG9yYWdlIHRvIGtlZXAgdGhlIHNhbWUgY2xpZW50IGlkIGFzIGxvbmcgYXNcbiAgLy8gdGhlIGV4dGVuc2lvbiBpcyBpbnN0YWxsZWQuXG4gIGFzeW5jIGdldE9yQ3JlYXRlQ2xpZW50SWQoKSB7XG4gICAgbGV0IHsgY2xpZW50SWQgfSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgnY2xpZW50SWQnKTtcbiAgICBpZiAoIWNsaWVudElkKSB7XG4gICAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBjbGllbnQgSUQsIHRoZSBhY3R1YWwgdmFsdWUgaXMgbm90IHJlbGV2YW50XG4gICAgICBjbGllbnRJZCA9IHNlbGYuY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGNsaWVudElkIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY2xpZW50SWQ7XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSBjdXJyZW50IHNlc3Npb24gaWQsIG9yIGNyZWF0ZXMgYSBuZXcgb25lIGlmIG9uZSBkb2Vzbid0IGV4aXN0IG9yXG4gIC8vIHRoZSBwcmV2aW91cyBvbmUgaGFzIGV4cGlyZWQuXG4gIGFzeW5jIGdldE9yQ3JlYXRlU2Vzc2lvbklkKCkge1xuICAgIC8vIFVzZSBzdG9yYWdlLnNlc3Npb24gYmVjYXVzZSBpdCBpcyBvbmx5IGluIG1lbW9yeVxuICAgIGxldCB7IHNlc3Npb25EYXRhIH0gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zZXNzaW9uLmdldCgnc2Vzc2lvbkRhdGEnKTtcbiAgICBjb25zdCBjdXJyZW50VGltZUluTXMgPSBEYXRlLm5vdygpO1xuICAgIC8vIENoZWNrIGlmIHNlc3Npb24gZXhpc3RzIGFuZCBpcyBzdGlsbCB2YWxpZFxuICAgIGlmIChzZXNzaW9uRGF0YSAmJiBzZXNzaW9uRGF0YS50aW1lc3RhbXApIHtcbiAgICAgIC8vIENhbGN1bGF0ZSBob3cgbG9uZyBhZ28gdGhlIHNlc3Npb24gd2FzIGxhc3QgdXBkYXRlZFxuICAgICAgY29uc3QgZHVyYXRpb25Jbk1pbiA9IChjdXJyZW50VGltZUluTXMgLSBzZXNzaW9uRGF0YS50aW1lc3RhbXApIC8gNjAwMDA7XG4gICAgICAvLyBDaGVjayBpZiBsYXN0IHVwZGF0ZSBsYXlzIHBhc3QgdGhlIHNlc3Npb24gZXhwaXJhdGlvbiB0aHJlc2hvbGRcbiAgICAgIGlmIChkdXJhdGlvbkluTWluID4gU0VTU0lPTl9FWFBJUkFUSU9OX0lOX01JTikge1xuICAgICAgICAvLyBDbGVhciBvbGQgc2Vzc2lvbiBpZCB0byBzdGFydCBhIG5ldyBzZXNzaW9uXG4gICAgICAgIHNlc3Npb25EYXRhID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aW1lc3RhbXAgdG8ga2VlcCBzZXNzaW9uIGFsaXZlXG4gICAgICAgIHNlc3Npb25EYXRhLnRpbWVzdGFtcCA9IGN1cnJlbnRUaW1lSW5NcztcbiAgICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc2Vzc2lvbi5zZXQoeyBzZXNzaW9uRGF0YSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFzZXNzaW9uRGF0YSkge1xuICAgICAgLy8gQ3JlYXRlIGFuZCBzdG9yZSBhIG5ldyBzZXNzaW9uXG4gICAgICBzZXNzaW9uRGF0YSA9IHtcbiAgICAgICAgc2Vzc2lvbl9pZDogY3VycmVudFRpbWVJbk1zLnRvU3RyaW5nKCksXG4gICAgICAgIHRpbWVzdGFtcDogY3VycmVudFRpbWVJbk1zLnRvU3RyaW5nKCksXG4gICAgICB9O1xuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc2Vzc2lvbi5zZXQoeyBzZXNzaW9uRGF0YSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25EYXRhLnNlc3Npb25faWQ7XG4gIH1cblxuICAvLyBGaXJlcyBhbiBldmVudCB3aXRoIG9wdGlvbmFsIHBhcmFtcy4gRXZlbnQgbmFtZXMgbXVzdCBvbmx5IGluY2x1ZGUgbGV0dGVycyBhbmQgdW5kZXJzY29yZXMuXG4gIGFzeW5jIGZpcmVFdmVudChuYW1lLCBwYXJhbXMgPSB7fSkge1xuICAgIC8vIENvbmZpZ3VyZSBzZXNzaW9uIGlkIGFuZCBlbmdhZ2VtZW50IHRpbWUgaWYgbm90IHByZXNlbnQsIGZvciBtb3JlIGRldGFpbHMgc2VlOlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9wcm90b2NvbC9nYTQvc2VuZGluZy1ldmVudHM/Y2xpZW50X3R5cGU9Z3RhZyNyZWNvbW1lbmRlZF9wYXJhbWV0ZXJzX2Zvcl9yZXBvcnRzXG4gICAgaWYgKCFwYXJhbXMuc2Vzc2lvbl9pZCkge1xuICAgICAgcGFyYW1zLnNlc3Npb25faWQgPSBhd2FpdCB0aGlzLmdldE9yQ3JlYXRlU2Vzc2lvbklkKCk7XG4gICAgfVxuICAgIGlmICghcGFyYW1zLmVuZ2FnZW1lbnRfdGltZV9tc2VjKSB7XG4gICAgICBwYXJhbXMuZW5nYWdlbWVudF90aW1lX21zZWMgPSBERUZBVUxUX0VOR0FHRU1FTlRfVElNRV9NU0VDO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RoaXMuZGVidWcgPyBHQV9ERUJVR19FTkRQT0lOVCA6IEdBX0VORFBPSU5UfT9tZWFzdXJlbWVudF9pZD0ke01FQVNVUkVNRU5UX0lEfSZhcGlfc2VjcmV0PSR7QVBJX1NFQ1JFVH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgY2xpZW50X2lkOiBhd2FpdCB0aGlzLmdldE9yQ3JlYXRlQ2xpZW50SWQoKSxcbiAgICAgICAgICBldmVudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuICAgICAgaWYgKCF0aGlzLmRlYnVnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGF3YWl0IHJlc3BvbnNlLnRleHQoKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignR29vZ2xlIEFuYWx5dGljcyByZXF1ZXN0IGZhaWxlZCB3aXRoIGFuIGV4Y2VwdGlvbicsIGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpcmUgYSBwYWdlIHZpZXcgZXZlbnQuXG4gIGFzeW5jIGZpcmVQYWdlVmlld0V2ZW50KHBhZ2VUaXRsZSwgcGFnZUxvY2F0aW9uLCBhZGRpdGlvbmFsUGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5maXJlRXZlbnQoJ3BhZ2VfdmlldycsIHtcbiAgICAgIHBhZ2VfdGl0bGU6IHBhZ2VUaXRsZSxcbiAgICAgIHBhZ2VfbG9jYXRpb246IHBhZ2VMb2NhdGlvbixcbiAgICAgIC4uLmFkZGl0aW9uYWxQYXJhbXMsXG4gICAgfSk7XG4gIH1cblxuICAvLyBGaXJlIGFuIGVycm9yIGV2ZW50LlxuICBhc3luYyBmaXJlRXJyb3JFdmVudChlcnJvciwgYWRkaXRpb25hbFBhcmFtcyA9IHt9KSB7XG4gICAgLy8gTm90ZTogJ2Vycm9yJyBpcyBhIHJlc2VydmVkIGV2ZW50IG5hbWUgYW5kIGNhbm5vdCBiZSB1c2VkXG4gICAgLy8gc2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9wcm90b2NvbC9nYTQvcmVmZXJlbmNlP2NsaWVudF90eXBlPWd0YWcjcmVzZXJ2ZWRfbmFtZXNcbiAgICByZXR1cm4gdGhpcy5maXJlRXZlbnQoJ2V4dGVuc2lvbl9lcnJvcicsIHtcbiAgICAgIC4uLmVycm9yLFxuICAgICAgLi4uYWRkaXRpb25hbFBhcmFtcyxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYW5hbHl0aWNzID0gbmV3IEFuYWx5dGljcygpO1xuIiwiaW1wb3J0IHsgYW5hbHl0aWNzIH0gZnJvbSAnLi9hbmFseXRpY3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEJhY2tncm91bmRQYWdlKCkge1xuICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIob25NZXNzYWdlSGFuZGxlcik7XG4gIGNocm9tZS5hY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKCh0YWIpID0+IHtcbiAgICBzaG93TWFpblBhbmVsKHRhYi5pZCwgdGFiLnVybCk7XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzaG93TWFpblBhbmVsKHRhYklkKSB7XG4gIGNvbnN0IGV4aXN0aW5nQ29udGV4dHMgPSBhd2FpdCBjaHJvbWUucnVudGltZS5nZXRDb250ZXh0cyh7fSk7XG4gIGxldCByZWNvcmRpbmcgPSBmYWxzZTtcblxuICBjb25zdCBvZmZzY3JlZW5Eb2N1bWVudCA9IGV4aXN0aW5nQ29udGV4dHMuZmluZCgoYykgPT4gYy5jb250ZXh0VHlwZSA9PT0gJ09GRlNDUkVFTl9ET0NVTUVOVCcpO1xuXG4gIC8vIElmIGFuIG9mZnNjcmVlbiBkb2N1bWVudCBpcyBub3QgYWxyZWFkeSBvcGVuLCBjcmVhdGUgb25lLlxuICBpZiAoIW9mZnNjcmVlbkRvY3VtZW50KSB7XG4gICAgLy8gQ3JlYXRlIGFuIG9mZnNjcmVlbiBkb2N1bWVudC5cbiAgICBhd2FpdCBjaHJvbWUub2Zmc2NyZWVuLmNyZWF0ZURvY3VtZW50KHtcbiAgICAgIHVybDogJ29mZnNjcmVlbi5odG1sJyxcbiAgICAgIHJlYXNvbnM6IFsnVVNFUl9NRURJQSddLFxuICAgICAganVzdGlmaWNhdGlvbjogJ1JlY29yZGluZyBmcm9tIGNocm9tZS50YWJDYXB0dXJlIEFQSScsXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmVjb3JkaW5nID0gb2Zmc2NyZWVuRG9jdW1lbnQuZG9jdW1lbnRVcmwuZW5kc1dpdGgoJyNyZWNvcmRpbmcnKTtcbiAgfVxuXG4gIGV4ZWN1dGVDb250ZW50U2NyaXB0KHRhYklkKS50aGVuKCgpID0+IHtcbiAgICBpZiAocmVjb3JkaW5nKSB7XG4gICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZUxvY2F0aW9uJyxcbiAgICAgICAgbG9jYXRpb246ICdzdG9wJyxcbiAgICAgICAgdGFiSWQsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhbmdlSWNvbignJyk7XG4gICAgICBzZW5kRGVmYXVsdExvY2F0aW9uKHRhYklkKTtcbiAgICB9XG4gIH0pO1xufVxuXG5sZXQgY2FudmFzO1xuXG5mdW5jdGlvbiBvbk1lc3NhZ2VIYW5kbGVyKG1zZywgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgY29uc3QgdGFiSWQgPSBtc2cudGFiSWQ7XG4gIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlU2hvd01haW5QYW5lbCc6XG4gICAgICBzaG93TWFpblBhbmVsKHRhYklkKTtcbiAgICAgIHNlbmRSZXNwb25zZSh7IG1haW5QYW5lbDogdHJ1ZSB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVTdGFydFJlY29yZGluZyc6XG4gICAgICBzdGFydFJlY29yZGluZyhtc2csIHNlbmRlcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlU3RvcFJlY29yZGluZyc6XG4gICAgICBzdG9wUmVjb3JkaW5nKG1zZywgc2VuZGVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVSZXNpemVXaW5kb3cnOlxuICAgICAgcmVzaXplV2luZG93KG1zZy53aWR0aCwgbXNnLmhlaWdodCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlVHJhY2tFdmVudCc6XG4gICAgICBhbmFseXRpY3MuZmlyZUV2ZW50KG1zZy5jYXRlZ29yeSwgbXNnLnBhcmFtcyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlVHJhY2tQYWdlJzpcbiAgICAgIGFuYWx5dGljcy5maXJlUGFnZVZpZXdFdmVudChtc2cucGF0aC5zcGxpdCgnLycpLnBvcCgpLCBtc2cucGF0aCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlVXBkYXRlZFRhYkxpc3RlbmVyJzpcbiAgICAgIGxldCBoYW5kbGVyO1xuICAgICAgc3dpdGNoIChtc2cubG9jYXRpb24pIHtcbiAgICAgICAgY2FzZSAnc2NlbmFyaW8nOlxuICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHRhYklkIH0pO1xuICAgICAgICAgIGhhbmRsZXIgPSB1cGRhdGVkVGFiSGFuZGxlclNjZW5hcmlvO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwbGF5JzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBoYW5kbGVyID0gdXBkYXRlZFRhYkhhbmRsZXJQbGF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKG1zZy5lbmFibGVkKSB7XG4gICAgICAgIGNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcihoYW5kbGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNocm9tZS50YWJzLm9uVXBkYXRlZC5yZW1vdmVMaXN0ZW5lcihoYW5kbGVyKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVJbnNlcnRDU1MnOlxuICAgICAgLy8gY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCd0YWJJZCcpLnRoZW4oKG9iaikgPT4ge1xuICAgICAgY2hyb21lLnNjcmlwdGluZy5pbnNlcnRDU1Moe1xuICAgICAgICB0YXJnZXQ6IHsgdGFiSWQgfSxcbiAgICAgICAgY3NzOiBtc2cuY3NzLFxuICAgICAgfSk7XG4gICAgICAvLyB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVJbWFnZUNhcHR1cmVDYW52YXMnOlxuICAgICAgY2FudmFzID0gbmV3IE9mZnNjcmVlbkNhbnZhcyhtc2cud2lkdGgsIG1zZy5oZWlnaHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVZpc2libGVUYWInOlxuICAgICAgY2hyb21lLnRhYnMuY2FwdHVyZVZpc2libGVUYWIobnVsbCwge30sIChkYXRhVXJsKSA9PiB7XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IGRhdGFVcmwgfSk7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVJbWFnZUNhcHR1cmVTdGFydCc6XG4gICAgICBzdGFydEltYWdlQ2FwdHVyZShtc2cpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZUltYWdlQ2FwdHVyZVN0b3AnOlxuICAgICAgc3RvcEltYWdlQ2FwdHVyZShtc2cpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVZpZGVvVVJMQmFja2dyb3VuZCc6XG4gICAgICBtc2cudHlwZSA9ICdzY3JvbGxDYXB0dXJlVmlkZW9VUkwnO1xuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIG1zZyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlRkZtcGVnTG9nVG9TVyc6XG4gICAgICBtc2cudHlwZSA9ICdzY3JvbGxDYXB0dXJlRkZtcGVnTG9nVG9DQyc7XG4gICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwgbXNnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVFeGVjdXRlU2NyaXB0JzpcbiAgICAgIGNocm9tZS5zY3JpcHRpbmdcbiAgICAgICAgLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICAgIHRhcmdldDogeyB0YWJJZCB9LFxuICAgICAgICAgIGZ1bmM6IChib2R5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKGJvZHkpKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhcmdzOiBbbXNnLmNvZGVdLFxuICAgICAgICAgIHdvcmxkOiAnTUFJTicsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICBzZW5kUmVzcG9uc2UodmFsWzBdLnJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVNldFNjcm9sbCc6XG4gICAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICB0YXJnZXQ6IHsgdGFiSWQgfSxcbiAgICAgICAgZnVuYzogKGJvZHksIHgsIHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKCd4JywgJ3knLCBib2R5KSh4LCB5KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXJnczogW21zZy5jb2RlLCBtc2cueCwgbXNnLnldLFxuICAgICAgICB3b3JsZDogJ01BSU4nLFxuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlR2V0U2Nyb2xsJzpcbiAgICAgIGNocm9tZS5zY3JpcHRpbmdcbiAgICAgICAgLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICAgIHRhcmdldDogeyB0YWJJZCB9LFxuICAgICAgICAgIGZ1bmM6IChib2R5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKGJvZHkpKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhcmdzOiBbbXNnLmNvZGVdLFxuICAgICAgICAgIHdvcmxkOiAnTUFJTicsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICBzZW5kUmVzcG9uc2UodmFsWzBdLnJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZWRUYWJIYW5kbGVyUGxheSh0YWJJZCwgY2hhbmdlSW5mbywgdGFiKSB7XG4gIGlmIChjaGFuZ2VJbmZvLnN0YXR1cyA9PSAnY29tcGxldGUnKSB7XG4gICAgZXhlY3V0ZUNvbnRlbnRTY3JpcHQodGFiLmlkKS50aGVuKCgpID0+IHtcbiAgICAgIGNocm9tZS5ydW50aW1lLmdldENvbnRleHRzKHt9KS50aGVuKChleGlzdGluZ0NvbnRleHRzKSA9PiB7XG4gICAgICAgIGNvbnN0IG9mZnNjcmVlbkRvY3VtZW50ID0gZXhpc3RpbmdDb250ZXh0cy5maW5kKChjKSA9PiBjLmNvbnRleHRUeXBlID09PSAnT0ZGU0NSRUVOX0RPQ1VNRU5UJyk7XG4gICAgICAgIGNvbnN0IHJlY29yZGluZyA9IG9mZnNjcmVlbkRvY3VtZW50LmRvY3VtZW50VXJsLmVuZHNXaXRoKCcjcmVjb3JkaW5nJyk7XG4gICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwge1xuICAgICAgICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlTG9jYXRpb24nLFxuICAgICAgICAgIGxvY2F0aW9uOiByZWNvcmRpbmcgPyAncmVjb3JkJyA6ICdwbGF5JyxcbiAgICAgICAgICB0YWJJZCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVkVGFiSGFuZGxlclNjZW5hcmlvKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpIHtcbiAgaWYgKGNoYW5nZUluZm8uc3RhdHVzID09ICdjb21wbGV0ZScpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ3RhYklkJykudGhlbigob2JqKSA9PiB7XG4gICAgICBpZiAob2JqLnRhYklkID09IHRhYklkKSB7XG4gICAgICAgIGV4ZWN1dGVDb250ZW50U2NyaXB0KHRhYi5pZCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgc2VuZERlZmF1bHRMb2NhdGlvbih0YWIuaWQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZW5kRGVmYXVsdExvY2F0aW9uKHRhYklkKSB7XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2RlZmF1bHRMb2NhdGlvbiddKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHJlc3VsdC5kZWZhdWx0TG9jYXRpb24gfHwgJ3Njcm9sbC1jYXB0dXJlJztcbiAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgdHlwZTogJ3Njcm9sbENhcHR1cmVMb2NhdGlvbicsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRhYklkLFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZUNvbnRlbnRTY3JpcHQodGFiSWQpIHtcbiAgcmV0dXJuIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgdGFyZ2V0OiB7IHRhYklkIH0sXG4gICAgZmlsZXM6IFsnY29udGVudC5qcyddLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzaXplV2luZG93KHdpZHRoLCBoZWlnaHQpIHtcbiAgbGV0IG9wdGlvbnMgPSB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICB9O1xuICBjaHJvbWUud2luZG93cy5nZXRDdXJyZW50KHsgcG9wdWxhdGU6IGZhbHNlIH0sICh3aW4pID0+IHtcbiAgICBjaHJvbWUud2luZG93cy51cGRhdGUod2luLmlkLCBvcHRpb25zKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUljb24oY29sb3IgPSAnJykge1xuICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgIHBhdGg6IHtcbiAgICAgIDE2OiBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2Fzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQxNicgKyBjb2xvciArICcucG5nJyksXG4gICAgICAzMjogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkMzInICsgY29sb3IgKyAnLnBuZycpLFxuICAgICAgNDg6IGNocm9tZS5ydW50aW1lLmdldFVSTCgnYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDQ4JyArIGNvbG9yICsgJy5wbmcnKSxcbiAgICAgIDEyODogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkMTI4JyArIGNvbG9yICsgJy5wbmcnKSxcbiAgICB9LFxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3RhcnRSZWNvcmRpbmcobXNnLCBzZW5kZXIpIHtcbiAgY2hhbmdlSWNvbignX3JlZCcpO1xuXG4gIGxldCBwcm9taXNlO1xuICBzd2l0Y2ggKG1zZy5tZWRpYVNvdXJjZSkge1xuICAgIGNhc2UgJ3RhYic6XG4gICAgICBwcm9taXNlID0gY2hyb21lLnRhYkNhcHR1cmUuZ2V0TWVkaWFTdHJlYW1JZCh7XG4gICAgICAgIHRhcmdldFRhYklkOiBtc2cudGFiSWQsXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Rlc2t0b3AnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHByb21pc2UudGhlbigoc3RyZWFtSWQpID0+IHtcbiAgICBjb25zdCBtZXNzYWdlID0gT2JqZWN0LmFzc2lnbih7fSwgbXNnKTtcbiAgICBPYmplY3QuYXNzaWduKG1lc3NhZ2UsIHtcbiAgICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlU3RhcnRPZmZzY3JlZW5SZWNvcmRpbmcnLFxuICAgICAgdGFyZ2V0OiAnb2Zmc2NyZWVuJyxcbiAgICAgIHN0cmVhbUlkLFxuICAgIH0pO1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RvcFJlY29yZGluZygpIHtcbiAgY2hhbmdlSWNvbigpO1xuXG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVN0b3BPZmZzY3JlZW5SZWNvcmRpbmcnLFxuICAgIHRhcmdldDogJ29mZnNjcmVlbicsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdGFydEltYWdlQ2FwdHVyZSgpIHtcbiAgY2hhbmdlSWNvbignX3JlZCcpO1xufVxuXG5mdW5jdGlvbiBzdG9wSW1hZ2VDYXB0dXJlKCkge1xuICBjaGFuZ2VJY29uKCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRBbmFseXRpY3MgfSBmcm9tICcuL2FuYWx5dGljcyc7XG5pbXBvcnQgeyBpbml0QmFja2dyb3VuZFBhZ2UgfSBmcm9tICcuL2JhY2tncm91bmQnO1xuXG5pbml0QW5hbHl0aWNzKCdHLVgzM0VISEJMNUcnLCAnX1YwSnVzTEtRZDJiZm4wc1NPbnMzUScpO1xuaW5pdEJhY2tncm91bmRQYWdlKCk7XG4iXSwibmFtZXMiOlsiR0FfRU5EUE9JTlQiLCJHQV9ERUJVR19FTkRQT0lOVCIsIk1FQVNVUkVNRU5UX0lEIiwiQVBJX1NFQ1JFVCIsIkRFRkFVTFRfRU5HQUdFTUVOVF9USU1FX01TRUMiLCJTRVNTSU9OX0VYUElSQVRJT05fSU5fTUlOIiwiaW5pdEFuYWx5dGljcyIsImlkIiwic2VjcmV0IiwiQW5hbHl0aWNzIiwiY29uc3RydWN0b3IiLCJkZWJ1ZyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImdldE9yQ3JlYXRlQ2xpZW50SWQiLCJjbGllbnRJZCIsImNocm9tZSIsInN0b3JhZ2UiLCJsb2NhbCIsImdldCIsInNlbGYiLCJjcnlwdG8iLCJyYW5kb21VVUlEIiwic2V0IiwiZ2V0T3JDcmVhdGVTZXNzaW9uSWQiLCJzZXNzaW9uRGF0YSIsInNlc3Npb24iLCJjdXJyZW50VGltZUluTXMiLCJEYXRlIiwibm93IiwidGltZXN0YW1wIiwiZHVyYXRpb25Jbk1pbiIsInNlc3Npb25faWQiLCJ0b1N0cmluZyIsImZpcmVFdmVudCIsIm5hbWUiLCJwYXJhbXMiLCJlbmdhZ2VtZW50X3RpbWVfbXNlYyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNsaWVudF9pZCIsImV2ZW50cyIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiZSIsImVycm9yIiwiZmlyZVBhZ2VWaWV3RXZlbnQiLCJwYWdlVGl0bGUiLCJwYWdlTG9jYXRpb24iLCJhZGRpdGlvbmFsUGFyYW1zIiwicGFnZV90aXRsZSIsInBhZ2VfbG9jYXRpb24iLCJmaXJlRXJyb3JFdmVudCIsImFuYWx5dGljcyIsImluaXRCYWNrZ3JvdW5kUGFnZSIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsIm9uTWVzc2FnZUhhbmRsZXIiLCJhY3Rpb24iLCJvbkNsaWNrZWQiLCJ0YWIiLCJzaG93TWFpblBhbmVsIiwidXJsIiwidGFiSWQiLCJleGlzdGluZ0NvbnRleHRzIiwiZ2V0Q29udGV4dHMiLCJyZWNvcmRpbmciLCJvZmZzY3JlZW5Eb2N1bWVudCIsImZpbmQiLCJjIiwiY29udGV4dFR5cGUiLCJvZmZzY3JlZW4iLCJjcmVhdGVEb2N1bWVudCIsInJlYXNvbnMiLCJqdXN0aWZpY2F0aW9uIiwiZG9jdW1lbnRVcmwiLCJlbmRzV2l0aCIsImV4ZWN1dGVDb250ZW50U2NyaXB0IiwidGhlbiIsInRhYnMiLCJzZW5kTWVzc2FnZSIsInR5cGUiLCJsb2NhdGlvbiIsImNoYW5nZUljb24iLCJzZW5kRGVmYXVsdExvY2F0aW9uIiwiY2FudmFzIiwibXNnIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwibWFpblBhbmVsIiwic3RhcnRSZWNvcmRpbmciLCJzdG9wUmVjb3JkaW5nIiwicmVzaXplV2luZG93Iiwid2lkdGgiLCJoZWlnaHQiLCJjYXRlZ29yeSIsInBhdGgiLCJzcGxpdCIsInBvcCIsImhhbmRsZXIiLCJ1cGRhdGVkVGFiSGFuZGxlclNjZW5hcmlvIiwidXBkYXRlZFRhYkhhbmRsZXJQbGF5IiwiZW5hYmxlZCIsIm9uVXBkYXRlZCIsInJlbW92ZUxpc3RlbmVyIiwic2NyaXB0aW5nIiwiaW5zZXJ0Q1NTIiwidGFyZ2V0IiwiY3NzIiwiT2Zmc2NyZWVuQ2FudmFzIiwiY2FwdHVyZVZpc2libGVUYWIiLCJkYXRhVXJsIiwic3RhcnRJbWFnZUNhcHR1cmUiLCJzdG9wSW1hZ2VDYXB0dXJlIiwiZXhlY3V0ZVNjcmlwdCIsImZ1bmMiLCJGdW5jdGlvbiIsImFyZ3MiLCJjb2RlIiwid29ybGQiLCJ2YWwiLCJyZXN1bHQiLCJ4IiwieSIsImNoYW5nZUluZm8iLCJzdGF0dXMiLCJvYmoiLCJkZWZhdWx0TG9jYXRpb24iLCJmaWxlcyIsIm9wdGlvbnMiLCJ3aW5kb3dzIiwiZ2V0Q3VycmVudCIsInBvcHVsYXRlIiwid2luIiwidXBkYXRlIiwiY29sb3IiLCJzZXRJY29uIiwiZ2V0VVJMIiwicHJvbWlzZSIsIm1lZGlhU291cmNlIiwidGFiQ2FwdHVyZSIsImdldE1lZGlhU3RyZWFtSWQiLCJ0YXJnZXRUYWJJZCIsIlByb21pc2UiLCJyZXNvbHZlIiwic3RyZWFtSWQiLCJtZXNzYWdlIiwiT2JqZWN0IiwiYXNzaWduIl0sInNvdXJjZVJvb3QiOiIifQ==