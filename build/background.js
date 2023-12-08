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
    console.log('chrome.action.onClicked', tab.id);
    const existingContexts = await chrome.runtime.getContexts({});
    let recording = false;
    const offscreenDocument = existingContexts.find(c => c.contextType === 'OFFSCREEN_DOCUMENT');

    // If an offscreen document is not already open, create one.
    if (!offscreenDocument) {
      console.log('!!!!! Create an offscreen document');
      // Create an offscreen document.
      await chrome.offscreen.createDocument({
        url: 'offscreen.html',
        reasons: ['USER_MEDIA'],
        justification: 'Recording from chrome.tabCapture API'
      });
    } else {
      recording = offscreenDocument.documentUrl.endsWith('#recording');
      console.log('recording=', recording);
    }
    chrome.windows.getCurrent({
      populate: false
    }, win => {
      globalThis.chromeSize = {
        width: win.width - tab.width,
        height: win.height - tab.height
      };
    });
    console.log('executeScript start');
    const scriptPromise = chrome.scripting.executeScript({
      target: {
        tabId: tab.id
      },
      files: ['content.js']
    });
    scriptPromise.then(() => {
      console.log('executeScript done');
      if (recording) {
        console.log('Stop recording with extension button');
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
}
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  switch (msg.type) {
    case 'scrollCaptureStartRecording':
      startRecording(msg);
      break;
    case 'scrollCaptureStopRecording':
      console.log('Stop recording from UI when actions complete');
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
  console.log('background.startRecording');
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
  console.log('background.stopRecording');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNNO0FBRWxEdEYseURBQWEsQ0FBQyxjQUFjLEVBQUUsd0JBQXdCLENBQUM7QUFDdkRzRCwrREFBa0IsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hbmFseXRpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy9iYWNrZ3JvdW5kLWRldmVsb3BtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdBX0VORFBPSU5UID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL21wL2NvbGxlY3QnO1xuY29uc3QgR0FfREVCVUdfRU5EUE9JTlQgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vZGVidWcvbXAvY29sbGVjdCc7XG5cbi8vIEdldCB2aWEgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL3Byb3RvY29sL2dhNC9zZW5kaW5nLWV2ZW50cz9jbGllbnRfdHlwZT1ndGFnI3JlY29tbWVuZGVkX3BhcmFtZXRlcnNfZm9yX3JlcG9ydHNcbmxldCBNRUFTVVJFTUVOVF9JRCA9ICc8bWVhc3VyZW1lbnRfaWQ+JztcbmxldCBBUElfU0VDUkVUID0gJzxhcGlfc2VjcmV0Pic7XG5jb25zdCBERUZBVUxUX0VOR0FHRU1FTlRfVElNRV9NU0VDID0gMTAwO1xuXG4vLyBEdXJhdGlvbiBvZiBpbmFjdGl2aXR5IGFmdGVyIHdoaWNoIGEgbmV3IHNlc3Npb24gaXMgY3JlYXRlZFxuY29uc3QgU0VTU0lPTl9FWFBJUkFUSU9OX0lOX01JTiA9IDMwO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEFuYWx5dGljcyhpZCwgc2VjcmV0KSB7XG4gIE1FQVNVUkVNRU5UX0lEID0gaWQ7XG4gIEFQSV9TRUNSRVQgPSBzZWNyZXQ7XG59XG5cbmNsYXNzIEFuYWx5dGljcyB7XG4gIGNvbnN0cnVjdG9yKGRlYnVnID0gZmFsc2UpIHtcbiAgICB0aGlzLmRlYnVnID0gZGVidWc7XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSBjbGllbnQgaWQsIG9yIGNyZWF0ZXMgYSBuZXcgb25lIGlmIG9uZSBkb2Vzbid0IGV4aXN0LlxuICAvLyBTdG9yZXMgY2xpZW50IGlkIGluIGxvY2FsIHN0b3JhZ2UgdG8ga2VlcCB0aGUgc2FtZSBjbGllbnQgaWQgYXMgbG9uZyBhc1xuICAvLyB0aGUgZXh0ZW5zaW9uIGlzIGluc3RhbGxlZC5cbiAgYXN5bmMgZ2V0T3JDcmVhdGVDbGllbnRJZCgpIHtcbiAgICBsZXQgeyBjbGllbnRJZCB9ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCdjbGllbnRJZCcpO1xuICAgIGlmICghY2xpZW50SWQpIHtcbiAgICAgIC8vIEdlbmVyYXRlIGEgdW5pcXVlIGNsaWVudCBJRCwgdGhlIGFjdHVhbCB2YWx1ZSBpcyBub3QgcmVsZXZhbnRcbiAgICAgIGNsaWVudElkID0gc2VsZi5jcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgY2xpZW50SWQgfSk7XG4gICAgfVxuICAgIHJldHVybiBjbGllbnRJZDtcbiAgfVxuXG4gIC8vIFJldHVybnMgdGhlIGN1cnJlbnQgc2Vzc2lvbiBpZCwgb3IgY3JlYXRlcyBhIG5ldyBvbmUgaWYgb25lIGRvZXNuJ3QgZXhpc3Qgb3JcbiAgLy8gdGhlIHByZXZpb3VzIG9uZSBoYXMgZXhwaXJlZC5cbiAgYXN5bmMgZ2V0T3JDcmVhdGVTZXNzaW9uSWQoKSB7XG4gICAgLy8gVXNlIHN0b3JhZ2Uuc2Vzc2lvbiBiZWNhdXNlIGl0IGlzIG9ubHkgaW4gbWVtb3J5XG4gICAgbGV0IHsgc2Vzc2lvbkRhdGEgfSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLnNlc3Npb24uZ2V0KCdzZXNzaW9uRGF0YScpO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lSW5NcyA9IERhdGUubm93KCk7XG4gICAgLy8gQ2hlY2sgaWYgc2Vzc2lvbiBleGlzdHMgYW5kIGlzIHN0aWxsIHZhbGlkXG4gICAgaWYgKHNlc3Npb25EYXRhICYmIHNlc3Npb25EYXRhLnRpbWVzdGFtcCkge1xuICAgICAgLy8gQ2FsY3VsYXRlIGhvdyBsb25nIGFnbyB0aGUgc2Vzc2lvbiB3YXMgbGFzdCB1cGRhdGVkXG4gICAgICBjb25zdCBkdXJhdGlvbkluTWluID0gKGN1cnJlbnRUaW1lSW5NcyAtIHNlc3Npb25EYXRhLnRpbWVzdGFtcCkgLyA2MDAwMDtcbiAgICAgIC8vIENoZWNrIGlmIGxhc3QgdXBkYXRlIGxheXMgcGFzdCB0aGUgc2Vzc2lvbiBleHBpcmF0aW9uIHRocmVzaG9sZFxuICAgICAgaWYgKGR1cmF0aW9uSW5NaW4gPiBTRVNTSU9OX0VYUElSQVRJT05fSU5fTUlOKSB7XG4gICAgICAgIC8vIENsZWFyIG9sZCBzZXNzaW9uIGlkIHRvIHN0YXJ0IGEgbmV3IHNlc3Npb25cbiAgICAgICAgc2Vzc2lvbkRhdGEgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVXBkYXRlIHRpbWVzdGFtcCB0byBrZWVwIHNlc3Npb24gYWxpdmVcbiAgICAgICAgc2Vzc2lvbkRhdGEudGltZXN0YW1wID0gY3VycmVudFRpbWVJbk1zO1xuICAgICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zZXNzaW9uLnNldCh7IHNlc3Npb25EYXRhIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXNlc3Npb25EYXRhKSB7XG4gICAgICAvLyBDcmVhdGUgYW5kIHN0b3JlIGEgbmV3IHNlc3Npb25cbiAgICAgIHNlc3Npb25EYXRhID0ge1xuICAgICAgICBzZXNzaW9uX2lkOiBjdXJyZW50VGltZUluTXMudG9TdHJpbmcoKSxcbiAgICAgICAgdGltZXN0YW1wOiBjdXJyZW50VGltZUluTXMudG9TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zZXNzaW9uLnNldCh7IHNlc3Npb25EYXRhIH0pO1xuICAgIH1cbiAgICByZXR1cm4gc2Vzc2lvbkRhdGEuc2Vzc2lvbl9pZDtcbiAgfVxuXG4gIC8vIEZpcmVzIGFuIGV2ZW50IHdpdGggb3B0aW9uYWwgcGFyYW1zLiBFdmVudCBuYW1lcyBtdXN0IG9ubHkgaW5jbHVkZSBsZXR0ZXJzIGFuZCB1bmRlcnNjb3Jlcy5cbiAgYXN5bmMgZmlyZUV2ZW50KG5hbWUsIHBhcmFtcyA9IHt9KSB7XG4gICAgLy8gQ29uZmlndXJlIHNlc3Npb24gaWQgYW5kIGVuZ2FnZW1lbnQgdGltZSBpZiBub3QgcHJlc2VudCwgZm9yIG1vcmUgZGV0YWlscyBzZWU6XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL3Byb3RvY29sL2dhNC9zZW5kaW5nLWV2ZW50cz9jbGllbnRfdHlwZT1ndGFnI3JlY29tbWVuZGVkX3BhcmFtZXRlcnNfZm9yX3JlcG9ydHNcbiAgICBpZiAoIXBhcmFtcy5zZXNzaW9uX2lkKSB7XG4gICAgICBwYXJhbXMuc2Vzc2lvbl9pZCA9IGF3YWl0IHRoaXMuZ2V0T3JDcmVhdGVTZXNzaW9uSWQoKTtcbiAgICB9XG4gICAgaWYgKCFwYXJhbXMuZW5nYWdlbWVudF90aW1lX21zZWMpIHtcbiAgICAgIHBhcmFtcy5lbmdhZ2VtZW50X3RpbWVfbXNlYyA9IERFRkFVTFRfRU5HQUdFTUVOVF9USU1FX01TRUM7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGAke3RoaXMuZGVidWcgPyBHQV9ERUJVR19FTkRQT0lOVCA6IEdBX0VORFBPSU5UfT9tZWFzdXJlbWVudF9pZD0ke01FQVNVUkVNRU5UX0lEfSZhcGlfc2VjcmV0PSR7QVBJX1NFQ1JFVH1gLFxuICAgICAgICB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgY2xpZW50X2lkOiBhd2FpdCB0aGlzLmdldE9yQ3JlYXRlQ2xpZW50SWQoKSxcbiAgICAgICAgICAgIGV2ZW50czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgaWYgKCF0aGlzLmRlYnVnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGF3YWl0IHJlc3BvbnNlLnRleHQoKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignR29vZ2xlIEFuYWx5dGljcyByZXF1ZXN0IGZhaWxlZCB3aXRoIGFuIGV4Y2VwdGlvbicsIGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpcmUgYSBwYWdlIHZpZXcgZXZlbnQuXG4gIGFzeW5jIGZpcmVQYWdlVmlld0V2ZW50KHBhZ2VUaXRsZSwgcGFnZUxvY2F0aW9uLCBhZGRpdGlvbmFsUGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5maXJlRXZlbnQoJ3BhZ2VfdmlldycsIHtcbiAgICAgIHBhZ2VfdGl0bGU6IHBhZ2VUaXRsZSxcbiAgICAgIHBhZ2VfbG9jYXRpb246IHBhZ2VMb2NhdGlvbixcbiAgICAgIC4uLmFkZGl0aW9uYWxQYXJhbXMsXG4gICAgfSk7XG4gIH1cblxuICAvLyBGaXJlIGFuIGVycm9yIGV2ZW50LlxuICBhc3luYyBmaXJlRXJyb3JFdmVudChlcnJvciwgYWRkaXRpb25hbFBhcmFtcyA9IHt9KSB7XG4gICAgLy8gTm90ZTogJ2Vycm9yJyBpcyBhIHJlc2VydmVkIGV2ZW50IG5hbWUgYW5kIGNhbm5vdCBiZSB1c2VkXG4gICAgLy8gc2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9wcm90b2NvbC9nYTQvcmVmZXJlbmNlP2NsaWVudF90eXBlPWd0YWcjcmVzZXJ2ZWRfbmFtZXNcbiAgICByZXR1cm4gdGhpcy5maXJlRXZlbnQoJ2V4dGVuc2lvbl9lcnJvcicsIHtcbiAgICAgIC4uLmVycm9yLFxuICAgICAgLi4uYWRkaXRpb25hbFBhcmFtcyxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYW5hbHl0aWNzID0gbmV3IEFuYWx5dGljcygpO1xuIiwiaW1wb3J0IHsgYW5hbHl0aWNzIH0gZnJvbSAnLi9hbmFseXRpY3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEJhY2tncm91bmRQYWdlKCkge1xuICBjaHJvbWUuYWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihhc3luYyAodGFiKSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgdGFiSWQ6IHRhYi5pZCB9KTtcbiAgICBjb25zb2xlLmxvZygnY2hyb21lLmFjdGlvbi5vbkNsaWNrZWQnLCB0YWIuaWQpO1xuXG4gICAgY29uc3QgZXhpc3RpbmdDb250ZXh0cyA9IGF3YWl0IGNocm9tZS5ydW50aW1lLmdldENvbnRleHRzKHt9KTtcbiAgICBsZXQgcmVjb3JkaW5nID0gZmFsc2U7XG5cbiAgICBjb25zdCBvZmZzY3JlZW5Eb2N1bWVudCA9IGV4aXN0aW5nQ29udGV4dHMuZmluZCgoYykgPT4gYy5jb250ZXh0VHlwZSA9PT0gJ09GRlNDUkVFTl9ET0NVTUVOVCcpO1xuXG4gICAgLy8gSWYgYW4gb2Zmc2NyZWVuIGRvY3VtZW50IGlzIG5vdCBhbHJlYWR5IG9wZW4sIGNyZWF0ZSBvbmUuXG4gICAgaWYgKCFvZmZzY3JlZW5Eb2N1bWVudCkge1xuICAgICAgY29uc29sZS5sb2coJyEhISEhIENyZWF0ZSBhbiBvZmZzY3JlZW4gZG9jdW1lbnQnKTtcbiAgICAgIC8vIENyZWF0ZSBhbiBvZmZzY3JlZW4gZG9jdW1lbnQuXG4gICAgICBhd2FpdCBjaHJvbWUub2Zmc2NyZWVuLmNyZWF0ZURvY3VtZW50KHtcbiAgICAgICAgdXJsOiAnb2Zmc2NyZWVuLmh0bWwnLFxuICAgICAgICByZWFzb25zOiBbJ1VTRVJfTUVESUEnXSxcbiAgICAgICAganVzdGlmaWNhdGlvbjogJ1JlY29yZGluZyBmcm9tIGNocm9tZS50YWJDYXB0dXJlIEFQSScsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjb3JkaW5nID0gb2Zmc2NyZWVuRG9jdW1lbnQuZG9jdW1lbnRVcmwuZW5kc1dpdGgoJyNyZWNvcmRpbmcnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdyZWNvcmRpbmc9JywgcmVjb3JkaW5nKTtcbiAgICB9XG5cbiAgICBjaHJvbWUud2luZG93cy5nZXRDdXJyZW50KHsgcG9wdWxhdGU6IGZhbHNlIH0sICh3aW4pID0+IHtcbiAgICAgIGdsb2JhbFRoaXMuY2hyb21lU2l6ZSA9IHtcbiAgICAgICAgd2lkdGg6IHdpbi53aWR0aCAtIHRhYi53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB3aW4uaGVpZ2h0IC0gdGFiLmhlaWdodCxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZygnZXhlY3V0ZVNjcmlwdCBzdGFydCcpO1xuICAgIGNvbnN0IHNjcmlwdFByb21pc2UgPSBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWIuaWQgfSxcbiAgICAgIGZpbGVzOiBbJ2NvbnRlbnQuanMnXSxcbiAgICB9KTtcbiAgICBzY3JpcHRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2V4ZWN1dGVTY3JpcHQgZG9uZScpO1xuICAgICAgaWYgKHJlY29yZGluZykge1xuICAgICAgICBjb25zb2xlLmxvZygnU3RvcCByZWNvcmRpbmcgd2l0aCBleHRlbnNpb24gYnV0dG9uJyk7XG4gICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwge1xuICAgICAgICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlTG9jYXRpb24nLFxuICAgICAgICAgIGxvY2F0aW9uOiAnc3RvcCcsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hhbmdlSWNvbignJyk7XG4gICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwge1xuICAgICAgICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlTG9jYXRpb24nLFxuICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1zZywgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVTdGFydFJlY29yZGluZyc6XG4gICAgICBzdGFydFJlY29yZGluZyhtc2cpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVN0b3BSZWNvcmRpbmcnOlxuICAgICAgY29uc29sZS5sb2coJ1N0b3AgcmVjb3JkaW5nIGZyb20gVUkgd2hlbiBhY3Rpb25zIGNvbXBsZXRlJyk7XG4gICAgICBzdG9wUmVjb3JkaW5nKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlUmVzaXplV2luZG93JzpcbiAgICAgIHJlc2l6ZVdpbmRvdyhtc2cud2lkdGgsIG1zZy5oZWlnaHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVRyYWNrRXZlbnQnOlxuICAgICAgYW5hbHl0aWNzLmZpcmVFdmVudChtc2cuY2F0ZWdvcnksIHtcbiAgICAgICAgYWN0aW9uOiBtc2cuYWN0aW9uLFxuICAgICAgICBsYWJlbDogbXNnLmxhYmVsLFxuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlVHJhY2tQYWdlJzpcbiAgICAgIGFuYWx5dGljcy5maXJlUGFnZVZpZXdFdmVudChtc2cucGF0aC5zcGxpdCgnLycpLnBvcCgpLCBtc2cucGF0aCk7XG4gICAgICBicmVhaztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHJlc2l6ZVdpbmRvdyh3aWR0aCwgaGVpZ2h0KSB7XG4gIGxldCBvcHRpb25zID0ge1xuICAgIHdpZHRoOiB3aWR0aCArIGdsb2JhbFRoaXMuY2hyb21lU2l6ZS53aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCArIGdsb2JhbFRoaXMuY2hyb21lU2l6ZS5oZWlnaHQsXG4gIH07XG4gIGNocm9tZS53aW5kb3dzLmdldEN1cnJlbnQoeyBwb3B1bGF0ZTogZmFsc2UgfSwgKHdpbikgPT4ge1xuICAgIGNocm9tZS53aW5kb3dzLnVwZGF0ZSh3aW4uaWQsIG9wdGlvbnMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlSWNvbihjb2xvciA9ICcnKSB7XG4gIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgcGF0aDoge1xuICAgICAgMTY6IGNocm9tZS5ydW50aW1lLmdldFVSTCgnYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDE2JyArIGNvbG9yICsgJy5wbmcnKSxcbiAgICAgIDMyOiBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2Fzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQzMicgKyBjb2xvciArICcucG5nJyksXG4gICAgICA0ODogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkNDgnICsgY29sb3IgKyAnLnBuZycpLFxuICAgICAgMTI4OiBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2Fzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQxMjgnICsgY29sb3IgKyAnLnBuZycpLFxuICAgIH0sXG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzdGFydFJlY29yZGluZyhkYXRhKSB7XG4gIGNvbnNvbGUubG9nKCdiYWNrZ3JvdW5kLnN0YXJ0UmVjb3JkaW5nJyk7XG4gIGNoYW5nZUljb24oJ19yZWQnKTtcblxuICBjb25zdCBzdHJlYW1JZCA9IGF3YWl0IGNocm9tZS50YWJDYXB0dXJlLmdldE1lZGlhU3RyZWFtSWQoe1xuICAgIHRhcmdldFRhYklkOiBkYXRhLnRhYklkLFxuICB9KTtcblxuICBjb25zdCBtZXNzYWdlID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSk7XG4gIE9iamVjdC5hc3NpZ24obWVzc2FnZSwge1xuICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlU3RhcnRPZmZzY3JlZW5SZWNvcmRpbmcnLFxuICAgIHRhcmdldDogJ29mZnNjcmVlbicsXG4gICAgc3RyZWFtSWQsXG4gIH0pO1xuXG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBzdG9wUmVjb3JkaW5nKCkge1xuICBjb25zb2xlLmxvZygnYmFja2dyb3VuZC5zdG9wUmVjb3JkaW5nJyk7XG4gIGNoYW5nZUljb24oKTtcblxuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgdHlwZTogJ3Njcm9sbENhcHR1cmVTdG9wT2Zmc2NyZWVuUmVjb3JkaW5nJyxcbiAgICB0YXJnZXQ6ICdvZmZzY3JlZW4nLFxuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdEFuYWx5dGljcyB9IGZyb20gJy4vYW5hbHl0aWNzJztcbmltcG9ydCB7IGluaXRCYWNrZ3JvdW5kUGFnZSB9IGZyb20gJy4vYmFja2dyb3VuZCc7XG5cbmluaXRBbmFseXRpY3MoJ0ctWDMzRUhIQkw1RycsICdfVjBKdXNMS1FkMmJmbjBzU09uczNRJyk7XG5pbml0QmFja2dyb3VuZFBhZ2UoKTtcbiJdLCJuYW1lcyI6WyJHQV9FTkRQT0lOVCIsIkdBX0RFQlVHX0VORFBPSU5UIiwiTUVBU1VSRU1FTlRfSUQiLCJBUElfU0VDUkVUIiwiREVGQVVMVF9FTkdBR0VNRU5UX1RJTUVfTVNFQyIsIlNFU1NJT05fRVhQSVJBVElPTl9JTl9NSU4iLCJpbml0QW5hbHl0aWNzIiwiaWQiLCJzZWNyZXQiLCJBbmFseXRpY3MiLCJjb25zdHJ1Y3RvciIsImRlYnVnIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZ2V0T3JDcmVhdGVDbGllbnRJZCIsImNsaWVudElkIiwiY2hyb21lIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0Iiwic2VsZiIsImNyeXB0byIsInJhbmRvbVVVSUQiLCJzZXQiLCJnZXRPckNyZWF0ZVNlc3Npb25JZCIsInNlc3Npb25EYXRhIiwic2Vzc2lvbiIsImN1cnJlbnRUaW1lSW5NcyIsIkRhdGUiLCJub3ciLCJ0aW1lc3RhbXAiLCJkdXJhdGlvbkluTWluIiwic2Vzc2lvbl9pZCIsInRvU3RyaW5nIiwiZmlyZUV2ZW50IiwibmFtZSIsInBhcmFtcyIsImVuZ2FnZW1lbnRfdGltZV9tc2VjIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xpZW50X2lkIiwiZXZlbnRzIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJlIiwiZXJyb3IiLCJmaXJlUGFnZVZpZXdFdmVudCIsInBhZ2VUaXRsZSIsInBhZ2VMb2NhdGlvbiIsImFkZGl0aW9uYWxQYXJhbXMiLCJwYWdlX3RpdGxlIiwicGFnZV9sb2NhdGlvbiIsImZpcmVFcnJvckV2ZW50IiwiYW5hbHl0aWNzIiwiaW5pdEJhY2tncm91bmRQYWdlIiwiYWN0aW9uIiwib25DbGlja2VkIiwiYWRkTGlzdGVuZXIiLCJ0YWIiLCJ0YWJJZCIsImV4aXN0aW5nQ29udGV4dHMiLCJydW50aW1lIiwiZ2V0Q29udGV4dHMiLCJyZWNvcmRpbmciLCJvZmZzY3JlZW5Eb2N1bWVudCIsImZpbmQiLCJjIiwiY29udGV4dFR5cGUiLCJvZmZzY3JlZW4iLCJjcmVhdGVEb2N1bWVudCIsInVybCIsInJlYXNvbnMiLCJqdXN0aWZpY2F0aW9uIiwiZG9jdW1lbnRVcmwiLCJlbmRzV2l0aCIsIndpbmRvd3MiLCJnZXRDdXJyZW50IiwicG9wdWxhdGUiLCJ3aW4iLCJnbG9iYWxUaGlzIiwiY2hyb21lU2l6ZSIsIndpZHRoIiwiaGVpZ2h0Iiwic2NyaXB0UHJvbWlzZSIsInNjcmlwdGluZyIsImV4ZWN1dGVTY3JpcHQiLCJ0YXJnZXQiLCJmaWxlcyIsInRoZW4iLCJ0YWJzIiwic2VuZE1lc3NhZ2UiLCJ0eXBlIiwibG9jYXRpb24iLCJjaGFuZ2VJY29uIiwib25NZXNzYWdlIiwibXNnIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwic3RhcnRSZWNvcmRpbmciLCJzdG9wUmVjb3JkaW5nIiwicmVzaXplV2luZG93IiwiY2F0ZWdvcnkiLCJsYWJlbCIsInBhdGgiLCJzcGxpdCIsInBvcCIsIm9wdGlvbnMiLCJ1cGRhdGUiLCJjb2xvciIsInNldEljb24iLCJnZXRVUkwiLCJkYXRhIiwic3RyZWFtSWQiLCJ0YWJDYXB0dXJlIiwiZ2V0TWVkaWFTdHJlYW1JZCIsInRhcmdldFRhYklkIiwibWVzc2FnZSIsIk9iamVjdCIsImFzc2lnbiJdLCJzb3VyY2VSb290IjoiIn0=