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
  console.log('!!!updatedTabHandler', tabId, tab.id);
  console.log('!!!changeInfo', changeInfo);
  executeScript(tab.id).then(() => {
    chrome.runtime.getContexts({}).then(existingContexts => {
      const offscreenDocument = existingContexts.find(c => c.contextType === 'OFFSCREEN_DOCUMENT');
      const recording = offscreenDocument.documentUrl.endsWith('#recording');
      console.log('!!!recording', recording);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxXQUFXLEdBQUcsNkNBQTZDO0FBQ2pFLE1BQU1DLGlCQUFpQixHQUFHLG1EQUFtRDs7QUFFN0U7QUFDQSxJQUFJQyxjQUFjLEdBQUcsa0JBQWtCO0FBQ3ZDLElBQUlDLFVBQVUsR0FBRyxjQUFjO0FBQy9CLE1BQU1DLDRCQUE0QixHQUFHLEdBQUc7O0FBRXhDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsRUFBRTtBQUU3QixTQUFTQyxhQUFhQSxDQUFDQyxFQUFFLEVBQUVDLE1BQU0sRUFBRTtFQUN4Q04sY0FBYyxHQUFHSyxFQUFFO0VBQ25CSixVQUFVLEdBQUdLLE1BQU07QUFDckI7QUFFQSxNQUFNQyxTQUFTLENBQUM7RUFDZEMsV0FBV0EsQ0FBQSxFQUFnQjtJQUFBLElBQWZDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsS0FBSztJQUN2QixJQUFJLENBQUNELEtBQUssR0FBR0EsS0FBSztFQUNwQjs7RUFFQTtFQUNBO0VBQ0E7RUFDQSxNQUFNSSxtQkFBbUJBLENBQUEsRUFBRztJQUMxQixJQUFJO01BQUVDO0lBQVMsQ0FBQyxHQUFHLE1BQU1DLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxLQUFLLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDN0QsSUFBSSxDQUFDSixRQUFRLEVBQUU7TUFDYjtNQUNBQSxRQUFRLEdBQUdLLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxVQUFVLENBQUMsQ0FBQztNQUNuQyxNQUFNTixNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDSyxHQUFHLENBQUM7UUFBRVI7TUFBUyxDQUFDLENBQUM7SUFDOUM7SUFDQSxPQUFPQSxRQUFRO0VBQ2pCOztFQUVBO0VBQ0E7RUFDQSxNQUFNUyxvQkFBb0JBLENBQUEsRUFBRztJQUMzQjtJQUNBLElBQUk7TUFBRUM7SUFBWSxDQUFDLEdBQUcsTUFBTVQsTUFBTSxDQUFDQyxPQUFPLENBQUNTLE9BQU8sQ0FBQ1AsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNyRSxNQUFNUSxlQUFlLEdBQUdDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUM7SUFDbEM7SUFDQSxJQUFJSixXQUFXLElBQUlBLFdBQVcsQ0FBQ0ssU0FBUyxFQUFFO01BQ3hDO01BQ0EsTUFBTUMsYUFBYSxHQUFHLENBQUNKLGVBQWUsR0FBR0YsV0FBVyxDQUFDSyxTQUFTLElBQUksS0FBSztNQUN2RTtNQUNBLElBQUlDLGFBQWEsR0FBRzNCLHlCQUF5QixFQUFFO1FBQzdDO1FBQ0FxQixXQUFXLEdBQUcsSUFBSTtNQUNwQixDQUFDLE1BQU07UUFDTDtRQUNBQSxXQUFXLENBQUNLLFNBQVMsR0FBR0gsZUFBZTtRQUN2QyxNQUFNWCxNQUFNLENBQUNDLE9BQU8sQ0FBQ1MsT0FBTyxDQUFDSCxHQUFHLENBQUM7VUFBRUU7UUFBWSxDQUFDLENBQUM7TUFDbkQ7SUFDRjtJQUNBLElBQUksQ0FBQ0EsV0FBVyxFQUFFO01BQ2hCO01BQ0FBLFdBQVcsR0FBRztRQUNaTyxVQUFVLEVBQUVMLGVBQWUsQ0FBQ00sUUFBUSxDQUFDLENBQUM7UUFDdENILFNBQVMsRUFBRUgsZUFBZSxDQUFDTSxRQUFRLENBQUM7TUFDdEMsQ0FBQztNQUNELE1BQU1qQixNQUFNLENBQUNDLE9BQU8sQ0FBQ1MsT0FBTyxDQUFDSCxHQUFHLENBQUM7UUFBRUU7TUFBWSxDQUFDLENBQUM7SUFDbkQ7SUFDQSxPQUFPQSxXQUFXLENBQUNPLFVBQVU7RUFDL0I7O0VBRUE7RUFDQSxNQUFNRSxTQUFTQSxDQUFDQyxJQUFJLEVBQWU7SUFBQSxJQUFiQyxNQUFNLEdBQUF6QixTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7SUFDL0I7SUFDQTtJQUNBLElBQUksQ0FBQ3lCLE1BQU0sQ0FBQ0osVUFBVSxFQUFFO01BQ3RCSSxNQUFNLENBQUNKLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQ1Isb0JBQW9CLENBQUMsQ0FBQztJQUN2RDtJQUNBLElBQUksQ0FBQ1ksTUFBTSxDQUFDQyxvQkFBb0IsRUFBRTtNQUNoQ0QsTUFBTSxDQUFDQyxvQkFBb0IsR0FBR2xDLDRCQUE0QjtJQUM1RDtJQUVBLElBQUk7TUFDRixNQUFNbUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDekIsR0FBRSxJQUFJLENBQUM3QixLQUFLLEdBQUdWLGlCQUFpQixHQUFHRCxXQUFZLG1CQUFrQkUsY0FBZSxlQUFjQyxVQUFXLEVBQUMsRUFDM0c7UUFDRXNDLE1BQU0sRUFBRSxNQUFNO1FBQ2RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7VUFDbkJDLFNBQVMsRUFBRSxNQUFNLElBQUksQ0FBQzlCLG1CQUFtQixDQUFDLENBQUM7VUFDM0MrQixNQUFNLEVBQUUsQ0FDTjtZQUNFVixJQUFJO1lBQ0pDO1VBQ0YsQ0FBQztRQUVMLENBQUM7TUFDSCxDQUNGLENBQUM7TUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDMUIsS0FBSyxFQUFFO1FBQ2Y7TUFDRjtNQUNBb0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTVQsUUFBUSxDQUFDVSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7TUFDVkgsT0FBTyxDQUFDSSxLQUFLLENBQUMsbURBQW1ELEVBQUVELENBQUMsQ0FBQztJQUN2RTtFQUNGOztFQUVBO0VBQ0EsTUFBTUUsaUJBQWlCQSxDQUFDQyxTQUFTLEVBQUVDLFlBQVksRUFBeUI7SUFBQSxJQUF2QkMsZ0JBQWdCLEdBQUEzQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7SUFDcEUsT0FBTyxJQUFJLENBQUN1QixTQUFTLENBQUMsV0FBVyxFQUFFO01BQ2pDcUIsVUFBVSxFQUFFSCxTQUFTO01BQ3JCSSxhQUFhLEVBQUVILFlBQVk7TUFDM0IsR0FBR0M7SUFDTCxDQUFDLENBQUM7RUFDSjs7RUFFQTtFQUNBLE1BQU1HLGNBQWNBLENBQUNQLEtBQUssRUFBeUI7SUFBQSxJQUF2QkksZ0JBQWdCLEdBQUEzQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7SUFDL0M7SUFDQTtJQUNBLE9BQU8sSUFBSSxDQUFDdUIsU0FBUyxDQUFDLGlCQUFpQixFQUFFO01BQ3ZDLEdBQUdnQixLQUFLO01BQ1IsR0FBR0k7SUFDTCxDQUFDLENBQUM7RUFDSjtBQUNGO0FBRU8sTUFBTUksU0FBUyxHQUFHLElBQUlsRCxTQUFTLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekhBO0FBRWpDLFNBQVNtRCxrQkFBa0JBLENBQUEsRUFBRztFQUNuQzNDLE1BQU0sQ0FBQzRDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxXQUFXLENBQUMsTUFBT0MsR0FBRyxJQUFLO0lBQ2pEL0MsTUFBTSxDQUFDQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0ssR0FBRyxDQUFDO01BQUV5QyxLQUFLLEVBQUVELEdBQUcsQ0FBQ3pEO0lBQUcsQ0FBQyxDQUFDO0lBRTNDLE1BQU0yRCxnQkFBZ0IsR0FBRyxNQUFNakQsTUFBTSxDQUFDa0QsT0FBTyxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0QsSUFBSUMsU0FBUyxHQUFHLEtBQUs7SUFFckIsTUFBTUMsaUJBQWlCLEdBQUdKLGdCQUFnQixDQUFDSyxJQUFJLENBQUVDLENBQUMsSUFBS0EsQ0FBQyxDQUFDQyxXQUFXLEtBQUssb0JBQW9CLENBQUM7O0lBRTlGO0lBQ0EsSUFBSSxDQUFDSCxpQkFBaUIsRUFBRTtNQUN0QjtNQUNBLE1BQU1yRCxNQUFNLENBQUN5RCxTQUFTLENBQUNDLGNBQWMsQ0FBQztRQUNwQ0MsR0FBRyxFQUFFLGdCQUFnQjtRQUNyQkMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3ZCQyxhQUFhLEVBQUU7TUFDakIsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxNQUFNO01BQ0xULFNBQVMsR0FBR0MsaUJBQWlCLENBQUNTLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDLFlBQVksQ0FBQztJQUNsRTtJQUVBL0QsTUFBTSxDQUFDZ0UsT0FBTyxDQUFDQyxVQUFVLENBQUM7TUFBRUMsUUFBUSxFQUFFO0lBQU0sQ0FBQyxFQUFHQyxHQUFHLElBQUs7TUFDdERDLFVBQVUsQ0FBQ0MsVUFBVSxHQUFHO1FBQ3RCQyxLQUFLLEVBQUVILEdBQUcsQ0FBQ0csS0FBSyxHQUFHdkIsR0FBRyxDQUFDdUIsS0FBSztRQUM1QkMsTUFBTSxFQUFFSixHQUFHLENBQUNJLE1BQU0sR0FBR3hCLEdBQUcsQ0FBQ3dCO01BQzNCLENBQUM7SUFDSCxDQUFDLENBQUM7SUFFRkMsYUFBYSxDQUFDekIsR0FBRyxDQUFDekQsRUFBRSxDQUFDLENBQUNtRixJQUFJLENBQUMsTUFBTTtNQUMvQixJQUFJckIsU0FBUyxFQUFFO1FBQ2JwRCxNQUFNLENBQUMwRSxJQUFJLENBQUNDLFdBQVcsQ0FBQzVCLEdBQUcsQ0FBQ3pELEVBQUUsRUFBRTtVQUM5QnNGLElBQUksRUFBRSx1QkFBdUI7VUFDN0JDLFFBQVEsRUFBRTtRQUNaLENBQUMsQ0FBQztNQUNKLENBQUMsTUFBTTtRQUNMQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQ2Q5RSxNQUFNLENBQUMwRSxJQUFJLENBQUNDLFdBQVcsQ0FBQzVCLEdBQUcsQ0FBQ3pELEVBQUUsRUFBRTtVQUM5QnNGLElBQUksRUFBRSx1QkFBdUI7VUFDN0JDLFFBQVEsRUFBRTtRQUNaLENBQUMsQ0FBQztNQUNKO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0VBRUY3RSxNQUFNLENBQUNrRCxPQUFPLENBQUM2QixTQUFTLENBQUNqQyxXQUFXLENBQUMsQ0FBQ2tDLEdBQUcsRUFBRUMsTUFBTSxFQUFFQyxZQUFZLEtBQUs7SUFDbEUsUUFBUUYsR0FBRyxDQUFDSixJQUFJO01BQ2QsS0FBSyw2QkFBNkI7UUFDaENPLGNBQWMsQ0FBQ0gsR0FBRyxDQUFDO1FBQ25CO01BQ0YsS0FBSyw0QkFBNEI7UUFDL0JJLGFBQWEsQ0FBQyxDQUFDO1FBQ2Y7TUFDRixLQUFLLDJCQUEyQjtRQUM5QkMsWUFBWSxDQUFDTCxHQUFHLENBQUNWLEtBQUssRUFBRVUsR0FBRyxDQUFDVCxNQUFNLENBQUM7UUFDbkM7TUFDRixLQUFLLHlCQUF5QjtRQUM1QjdCLGlEQUFTLENBQUN4QixTQUFTLENBQUM4RCxHQUFHLENBQUNNLFFBQVEsRUFBRTtVQUNoQzFDLE1BQU0sRUFBRW9DLEdBQUcsQ0FBQ3BDLE1BQU07VUFDbEIyQyxLQUFLLEVBQUVQLEdBQUcsQ0FBQ087UUFDYixDQUFDLENBQUM7UUFDRjtNQUNGLEtBQUssd0JBQXdCO1FBQzNCN0MsaURBQVMsQ0FBQ1AsaUJBQWlCLENBQUM2QyxHQUFHLENBQUNRLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxFQUFFVixHQUFHLENBQUNRLElBQUksQ0FBQztRQUNoRTtNQUNGLEtBQUssaUNBQWlDO1FBQ3BDLElBQUlSLEdBQUcsQ0FBQ1csT0FBTyxFQUFFO1VBQ2YzRixNQUFNLENBQUMwRSxJQUFJLENBQUNrQixTQUFTLENBQUM5QyxXQUFXLENBQUMrQyxpQkFBaUIsQ0FBQztRQUN0RCxDQUFDLE1BQU07VUFDTDdGLE1BQU0sQ0FBQzBFLElBQUksQ0FBQ2tCLFNBQVMsQ0FBQ0UsY0FBYyxDQUFDRCxpQkFBaUIsQ0FBQztRQUN6RDtRQUNBO0lBQ0o7RUFDRixDQUFDLENBQUM7QUFDSjtBQUVBLFNBQVNBLGlCQUFpQkEsQ0FBQzdDLEtBQUssRUFBRStDLFVBQVUsRUFBRWhELEdBQUcsRUFBRTtFQUNqRGpCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixFQUFFaUIsS0FBSyxFQUFFRCxHQUFHLENBQUN6RCxFQUFFLENBQUM7RUFDbER3QyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEVBQUVnRSxVQUFVLENBQUM7RUFDeEN2QixhQUFhLENBQUN6QixHQUFHLENBQUN6RCxFQUFFLENBQUMsQ0FBQ21GLElBQUksQ0FBQyxNQUFNO0lBQy9CekUsTUFBTSxDQUFDa0QsT0FBTyxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3NCLElBQUksQ0FBRXhCLGdCQUFnQixJQUFLO01BQ3hELE1BQU1JLGlCQUFpQixHQUFHSixnQkFBZ0IsQ0FBQ0ssSUFBSSxDQUFFQyxDQUFDLElBQUtBLENBQUMsQ0FBQ0MsV0FBVyxLQUFLLG9CQUFvQixDQUFDO01BQzlGLE1BQU1KLFNBQVMsR0FBR0MsaUJBQWlCLENBQUNTLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDLFlBQVksQ0FBQztNQUN0RWpDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsRUFBRXFCLFNBQVMsQ0FBQztNQUN0Q3BELE1BQU0sQ0FBQzBFLElBQUksQ0FBQ0MsV0FBVyxDQUFDNUIsR0FBRyxDQUFDekQsRUFBRSxFQUFFO1FBQzlCc0YsSUFBSSxFQUFFLHVCQUF1QjtRQUM3QkMsUUFBUSxFQUFFekIsU0FBUyxHQUFHLFFBQVEsR0FBRztNQUNuQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSjtBQUVBLFNBQVNvQixhQUFhQSxDQUFDeEIsS0FBSyxFQUFFO0VBQzVCLE9BQU9oRCxNQUFNLENBQUNnRyxTQUFTLENBQUN4QixhQUFhLENBQUM7SUFDcEN5QixNQUFNLEVBQUU7TUFBRWpEO0lBQU0sQ0FBQztJQUNqQmtELEtBQUssRUFBRSxDQUFDLFlBQVk7RUFDdEIsQ0FBQyxDQUFDO0FBQ0o7QUFFQSxTQUFTYixZQUFZQSxDQUFDZixLQUFLLEVBQUVDLE1BQU0sRUFBRTtFQUNuQyxJQUFJNEIsT0FBTyxHQUFHO0lBQ1o3QixLQUFLLEVBQUVBLEtBQUssR0FBR0YsVUFBVSxDQUFDQyxVQUFVLENBQUNDLEtBQUs7SUFDMUNDLE1BQU0sRUFBRUEsTUFBTSxHQUFHSCxVQUFVLENBQUNDLFVBQVUsQ0FBQ0U7RUFDekMsQ0FBQztFQUNEdkUsTUFBTSxDQUFDZ0UsT0FBTyxDQUFDQyxVQUFVLENBQUM7SUFBRUMsUUFBUSxFQUFFO0VBQU0sQ0FBQyxFQUFHQyxHQUFHLElBQUs7SUFDdERuRSxNQUFNLENBQUNnRSxPQUFPLENBQUNvQyxNQUFNLENBQUNqQyxHQUFHLENBQUM3RSxFQUFFLEVBQUU2RyxPQUFPLENBQUM7RUFDeEMsQ0FBQyxDQUFDO0FBQ0o7QUFFQSxTQUFTckIsVUFBVUEsQ0FBQSxFQUFhO0VBQUEsSUFBWnVCLEtBQUssR0FBQTFHLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLEVBQUU7RUFDNUJLLE1BQU0sQ0FBQzRDLE1BQU0sQ0FBQzBELE9BQU8sQ0FBQztJQUNwQmQsSUFBSSxFQUFFO01BQ0osRUFBRSxFQUFFeEYsTUFBTSxDQUFDa0QsT0FBTyxDQUFDcUQsTUFBTSxDQUFDLDZCQUE2QixHQUFHRixLQUFLLEdBQUcsTUFBTSxDQUFDO01BQ3pFLEVBQUUsRUFBRXJHLE1BQU0sQ0FBQ2tELE9BQU8sQ0FBQ3FELE1BQU0sQ0FBQyw2QkFBNkIsR0FBR0YsS0FBSyxHQUFHLE1BQU0sQ0FBQztNQUN6RSxFQUFFLEVBQUVyRyxNQUFNLENBQUNrRCxPQUFPLENBQUNxRCxNQUFNLENBQUMsNkJBQTZCLEdBQUdGLEtBQUssR0FBRyxNQUFNLENBQUM7TUFDekUsR0FBRyxFQUFFckcsTUFBTSxDQUFDa0QsT0FBTyxDQUFDcUQsTUFBTSxDQUFDLDhCQUE4QixHQUFHRixLQUFLLEdBQUcsTUFBTTtJQUM1RTtFQUNGLENBQUMsQ0FBQztBQUNKO0FBRUEsZUFBZWxCLGNBQWNBLENBQUNxQixJQUFJLEVBQUU7RUFDbEMxQixVQUFVLENBQUMsTUFBTSxDQUFDO0VBRWxCLE1BQU0yQixRQUFRLEdBQUcsTUFBTXpHLE1BQU0sQ0FBQzBHLFVBQVUsQ0FBQ0MsZ0JBQWdCLENBQUM7SUFDeERDLFdBQVcsRUFBRUosSUFBSSxDQUFDeEQ7RUFDcEIsQ0FBQyxDQUFDO0VBRUYsTUFBTTZELE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVQLElBQUksQ0FBQztFQUN2Q00sTUFBTSxDQUFDQyxNQUFNLENBQUNGLE9BQU8sRUFBRTtJQUNyQmpDLElBQUksRUFBRSxzQ0FBc0M7SUFDNUNxQixNQUFNLEVBQUUsV0FBVztJQUNuQlE7RUFDRixDQUFDLENBQUM7RUFFRnpHLE1BQU0sQ0FBQ2tELE9BQU8sQ0FBQ3lCLFdBQVcsQ0FBQ2tDLE9BQU8sQ0FBQztBQUNyQztBQUVBLFNBQVN6QixhQUFhQSxDQUFBLEVBQUc7RUFDdkJOLFVBQVUsQ0FBQyxDQUFDO0VBRVo5RSxNQUFNLENBQUNrRCxPQUFPLENBQUN5QixXQUFXLENBQUM7SUFDekJDLElBQUksRUFBRSxxQ0FBcUM7SUFDM0NxQixNQUFNLEVBQUU7RUFDVixDQUFDLENBQUM7QUFDSjs7Ozs7O1VDakpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ007QUFFbEQ1Ryx5REFBYSxDQUFDLGNBQWMsRUFBRSx3QkFBd0IsQ0FBQztBQUN2RHNELCtEQUFrQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2FuYWx5dGljcy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2pzL2JhY2tncm91bmQtZGV2ZWxvcG1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR0FfRU5EUE9JTlQgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vbXAvY29sbGVjdCc7XG5jb25zdCBHQV9ERUJVR19FTkRQT0lOVCA9ICdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9kZWJ1Zy9tcC9jb2xsZWN0JztcblxuLy8gR2V0IHZpYSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vcHJvdG9jb2wvZ2E0L3NlbmRpbmctZXZlbnRzP2NsaWVudF90eXBlPWd0YWcjcmVjb21tZW5kZWRfcGFyYW1ldGVyc19mb3JfcmVwb3J0c1xubGV0IE1FQVNVUkVNRU5UX0lEID0gJzxtZWFzdXJlbWVudF9pZD4nO1xubGV0IEFQSV9TRUNSRVQgPSAnPGFwaV9zZWNyZXQ+JztcbmNvbnN0IERFRkFVTFRfRU5HQUdFTUVOVF9USU1FX01TRUMgPSAxMDA7XG5cbi8vIER1cmF0aW9uIG9mIGluYWN0aXZpdHkgYWZ0ZXIgd2hpY2ggYSBuZXcgc2Vzc2lvbiBpcyBjcmVhdGVkXG5jb25zdCBTRVNTSU9OX0VYUElSQVRJT05fSU5fTUlOID0gMzA7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QW5hbHl0aWNzKGlkLCBzZWNyZXQpIHtcbiAgTUVBU1VSRU1FTlRfSUQgPSBpZDtcbiAgQVBJX1NFQ1JFVCA9IHNlY3JldDtcbn1cblxuY2xhc3MgQW5hbHl0aWNzIHtcbiAgY29uc3RydWN0b3IoZGVidWcgPSBmYWxzZSkge1xuICAgIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgfVxuXG4gIC8vIFJldHVybnMgdGhlIGNsaWVudCBpZCwgb3IgY3JlYXRlcyBhIG5ldyBvbmUgaWYgb25lIGRvZXNuJ3QgZXhpc3QuXG4gIC8vIFN0b3JlcyBjbGllbnQgaWQgaW4gbG9jYWwgc3RvcmFnZSB0byBrZWVwIHRoZSBzYW1lIGNsaWVudCBpZCBhcyBsb25nIGFzXG4gIC8vIHRoZSBleHRlbnNpb24gaXMgaW5zdGFsbGVkLlxuICBhc3luYyBnZXRPckNyZWF0ZUNsaWVudElkKCkge1xuICAgIGxldCB7IGNsaWVudElkIH0gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ2NsaWVudElkJyk7XG4gICAgaWYgKCFjbGllbnRJZCkge1xuICAgICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgY2xpZW50IElELCB0aGUgYWN0dWFsIHZhbHVlIGlzIG5vdCByZWxldmFudFxuICAgICAgY2xpZW50SWQgPSBzZWxmLmNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBjbGllbnRJZCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNsaWVudElkO1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgY3VycmVudCBzZXNzaW9uIGlkLCBvciBjcmVhdGVzIGEgbmV3IG9uZSBpZiBvbmUgZG9lc24ndCBleGlzdCBvclxuICAvLyB0aGUgcHJldmlvdXMgb25lIGhhcyBleHBpcmVkLlxuICBhc3luYyBnZXRPckNyZWF0ZVNlc3Npb25JZCgpIHtcbiAgICAvLyBVc2Ugc3RvcmFnZS5zZXNzaW9uIGJlY2F1c2UgaXQgaXMgb25seSBpbiBtZW1vcnlcbiAgICBsZXQgeyBzZXNzaW9uRGF0YSB9ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc2Vzc2lvbi5nZXQoJ3Nlc3Npb25EYXRhJyk7XG4gICAgY29uc3QgY3VycmVudFRpbWVJbk1zID0gRGF0ZS5ub3coKTtcbiAgICAvLyBDaGVjayBpZiBzZXNzaW9uIGV4aXN0cyBhbmQgaXMgc3RpbGwgdmFsaWRcbiAgICBpZiAoc2Vzc2lvbkRhdGEgJiYgc2Vzc2lvbkRhdGEudGltZXN0YW1wKSB7XG4gICAgICAvLyBDYWxjdWxhdGUgaG93IGxvbmcgYWdvIHRoZSBzZXNzaW9uIHdhcyBsYXN0IHVwZGF0ZWRcbiAgICAgIGNvbnN0IGR1cmF0aW9uSW5NaW4gPSAoY3VycmVudFRpbWVJbk1zIC0gc2Vzc2lvbkRhdGEudGltZXN0YW1wKSAvIDYwMDAwO1xuICAgICAgLy8gQ2hlY2sgaWYgbGFzdCB1cGRhdGUgbGF5cyBwYXN0IHRoZSBzZXNzaW9uIGV4cGlyYXRpb24gdGhyZXNob2xkXG4gICAgICBpZiAoZHVyYXRpb25Jbk1pbiA+IFNFU1NJT05fRVhQSVJBVElPTl9JTl9NSU4pIHtcbiAgICAgICAgLy8gQ2xlYXIgb2xkIHNlc3Npb24gaWQgdG8gc3RhcnQgYSBuZXcgc2Vzc2lvblxuICAgICAgICBzZXNzaW9uRGF0YSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVcGRhdGUgdGltZXN0YW1wIHRvIGtlZXAgc2Vzc2lvbiBhbGl2ZVxuICAgICAgICBzZXNzaW9uRGF0YS50aW1lc3RhbXAgPSBjdXJyZW50VGltZUluTXM7XG4gICAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLnNlc3Npb24uc2V0KHsgc2Vzc2lvbkRhdGEgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghc2Vzc2lvbkRhdGEpIHtcbiAgICAgIC8vIENyZWF0ZSBhbmQgc3RvcmUgYSBuZXcgc2Vzc2lvblxuICAgICAgc2Vzc2lvbkRhdGEgPSB7XG4gICAgICAgIHNlc3Npb25faWQ6IGN1cnJlbnRUaW1lSW5Ncy50b1N0cmluZygpLFxuICAgICAgICB0aW1lc3RhbXA6IGN1cnJlbnRUaW1lSW5Ncy50b1N0cmluZygpLFxuICAgICAgfTtcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLnNlc3Npb24uc2V0KHsgc2Vzc2lvbkRhdGEgfSk7XG4gICAgfVxuICAgIHJldHVybiBzZXNzaW9uRGF0YS5zZXNzaW9uX2lkO1xuICB9XG5cbiAgLy8gRmlyZXMgYW4gZXZlbnQgd2l0aCBvcHRpb25hbCBwYXJhbXMuIEV2ZW50IG5hbWVzIG11c3Qgb25seSBpbmNsdWRlIGxldHRlcnMgYW5kIHVuZGVyc2NvcmVzLlxuICBhc3luYyBmaXJlRXZlbnQobmFtZSwgcGFyYW1zID0ge30pIHtcbiAgICAvLyBDb25maWd1cmUgc2Vzc2lvbiBpZCBhbmQgZW5nYWdlbWVudCB0aW1lIGlmIG5vdCBwcmVzZW50LCBmb3IgbW9yZSBkZXRhaWxzIHNlZTpcbiAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vcHJvdG9jb2wvZ2E0L3NlbmRpbmctZXZlbnRzP2NsaWVudF90eXBlPWd0YWcjcmVjb21tZW5kZWRfcGFyYW1ldGVyc19mb3JfcmVwb3J0c1xuICAgIGlmICghcGFyYW1zLnNlc3Npb25faWQpIHtcbiAgICAgIHBhcmFtcy5zZXNzaW9uX2lkID0gYXdhaXQgdGhpcy5nZXRPckNyZWF0ZVNlc3Npb25JZCgpO1xuICAgIH1cbiAgICBpZiAoIXBhcmFtcy5lbmdhZ2VtZW50X3RpbWVfbXNlYykge1xuICAgICAgcGFyYW1zLmVuZ2FnZW1lbnRfdGltZV9tc2VjID0gREVGQVVMVF9FTkdBR0VNRU5UX1RJTUVfTVNFQztcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYCR7dGhpcy5kZWJ1ZyA/IEdBX0RFQlVHX0VORFBPSU5UIDogR0FfRU5EUE9JTlR9P21lYXN1cmVtZW50X2lkPSR7TUVBU1VSRU1FTlRfSUR9JmFwaV9zZWNyZXQ9JHtBUElfU0VDUkVUfWAsXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBjbGllbnRfaWQ6IGF3YWl0IHRoaXMuZ2V0T3JDcmVhdGVDbGllbnRJZCgpLFxuICAgICAgICAgICAgZXZlbnRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSksXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBpZiAoIXRoaXMuZGVidWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdHb29nbGUgQW5hbHl0aWNzIHJlcXVlc3QgZmFpbGVkIHdpdGggYW4gZXhjZXB0aW9uJywgZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmlyZSBhIHBhZ2UgdmlldyBldmVudC5cbiAgYXN5bmMgZmlyZVBhZ2VWaWV3RXZlbnQocGFnZVRpdGxlLCBwYWdlTG9jYXRpb24sIGFkZGl0aW9uYWxQYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmZpcmVFdmVudCgncGFnZV92aWV3Jywge1xuICAgICAgcGFnZV90aXRsZTogcGFnZVRpdGxlLFxuICAgICAgcGFnZV9sb2NhdGlvbjogcGFnZUxvY2F0aW9uLFxuICAgICAgLi4uYWRkaXRpb25hbFBhcmFtcyxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEZpcmUgYW4gZXJyb3IgZXZlbnQuXG4gIGFzeW5jIGZpcmVFcnJvckV2ZW50KGVycm9yLCBhZGRpdGlvbmFsUGFyYW1zID0ge30pIHtcbiAgICAvLyBOb3RlOiAnZXJyb3InIGlzIGEgcmVzZXJ2ZWQgZXZlbnQgbmFtZSBhbmQgY2Fubm90IGJlIHVzZWRcbiAgICAvLyBzZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL3Byb3RvY29sL2dhNC9yZWZlcmVuY2U/Y2xpZW50X3R5cGU9Z3RhZyNyZXNlcnZlZF9uYW1lc1xuICAgIHJldHVybiB0aGlzLmZpcmVFdmVudCgnZXh0ZW5zaW9uX2Vycm9yJywge1xuICAgICAgLi4uZXJyb3IsXG4gICAgICAuLi5hZGRpdGlvbmFsUGFyYW1zLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhbmFseXRpY3MgPSBuZXcgQW5hbHl0aWNzKCk7XG4iLCJpbXBvcnQgeyBhbmFseXRpY3MgfSBmcm9tICcuL2FuYWx5dGljcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QmFja2dyb3VuZFBhZ2UoKSB7XG4gIGNocm9tZS5hY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKGFzeW5jICh0YWIpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyB0YWJJZDogdGFiLmlkIH0pO1xuXG4gICAgY29uc3QgZXhpc3RpbmdDb250ZXh0cyA9IGF3YWl0IGNocm9tZS5ydW50aW1lLmdldENvbnRleHRzKHt9KTtcbiAgICBsZXQgcmVjb3JkaW5nID0gZmFsc2U7XG5cbiAgICBjb25zdCBvZmZzY3JlZW5Eb2N1bWVudCA9IGV4aXN0aW5nQ29udGV4dHMuZmluZCgoYykgPT4gYy5jb250ZXh0VHlwZSA9PT0gJ09GRlNDUkVFTl9ET0NVTUVOVCcpO1xuXG4gICAgLy8gSWYgYW4gb2Zmc2NyZWVuIGRvY3VtZW50IGlzIG5vdCBhbHJlYWR5IG9wZW4sIGNyZWF0ZSBvbmUuXG4gICAgaWYgKCFvZmZzY3JlZW5Eb2N1bWVudCkge1xuICAgICAgLy8gQ3JlYXRlIGFuIG9mZnNjcmVlbiBkb2N1bWVudC5cbiAgICAgIGF3YWl0IGNocm9tZS5vZmZzY3JlZW4uY3JlYXRlRG9jdW1lbnQoe1xuICAgICAgICB1cmw6ICdvZmZzY3JlZW4uaHRtbCcsXG4gICAgICAgIHJlYXNvbnM6IFsnVVNFUl9NRURJQSddLFxuICAgICAgICBqdXN0aWZpY2F0aW9uOiAnUmVjb3JkaW5nIGZyb20gY2hyb21lLnRhYkNhcHR1cmUgQVBJJyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWNvcmRpbmcgPSBvZmZzY3JlZW5Eb2N1bWVudC5kb2N1bWVudFVybC5lbmRzV2l0aCgnI3JlY29yZGluZycpO1xuICAgIH1cblxuICAgIGNocm9tZS53aW5kb3dzLmdldEN1cnJlbnQoeyBwb3B1bGF0ZTogZmFsc2UgfSwgKHdpbikgPT4ge1xuICAgICAgZ2xvYmFsVGhpcy5jaHJvbWVTaXplID0ge1xuICAgICAgICB3aWR0aDogd2luLndpZHRoIC0gdGFiLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHdpbi5oZWlnaHQgLSB0YWIuaGVpZ2h0LFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVTY3JpcHQodGFiLmlkKS50aGVuKCgpID0+IHtcbiAgICAgIGlmIChyZWNvcmRpbmcpIHtcbiAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7XG4gICAgICAgICAgdHlwZTogJ3Njcm9sbENhcHR1cmVMb2NhdGlvbicsXG4gICAgICAgICAgbG9jYXRpb246ICdzdG9wJyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFuZ2VJY29uKCcnKTtcbiAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7XG4gICAgICAgICAgdHlwZTogJ3Njcm9sbENhcHR1cmVMb2NhdGlvbicsXG4gICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtc2csIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVN0YXJ0UmVjb3JkaW5nJzpcbiAgICAgICAgc3RhcnRSZWNvcmRpbmcobXNnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzY3JvbGxDYXB0dXJlU3RvcFJlY29yZGluZyc6XG4gICAgICAgIHN0b3BSZWNvcmRpbmcoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzY3JvbGxDYXB0dXJlUmVzaXplV2luZG93JzpcbiAgICAgICAgcmVzaXplV2luZG93KG1zZy53aWR0aCwgbXNnLmhlaWdodCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVRyYWNrRXZlbnQnOlxuICAgICAgICBhbmFseXRpY3MuZmlyZUV2ZW50KG1zZy5jYXRlZ29yeSwge1xuICAgICAgICAgIGFjdGlvbjogbXNnLmFjdGlvbixcbiAgICAgICAgICBsYWJlbDogbXNnLmxhYmVsLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzY3JvbGxDYXB0dXJlVHJhY2tQYWdlJzpcbiAgICAgICAgYW5hbHl0aWNzLmZpcmVQYWdlVmlld0V2ZW50KG1zZy5wYXRoLnNwbGl0KCcvJykucG9wKCksIG1zZy5wYXRoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzY3JvbGxDYXB0dXJlVXBkYXRlZFRhYkxpc3RlbmVyJzpcbiAgICAgICAgaWYgKG1zZy5lbmFibGVkKSB7XG4gICAgICAgICAgY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKHVwZGF0ZWRUYWJIYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQucmVtb3ZlTGlzdGVuZXIodXBkYXRlZFRhYkhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZWRUYWJIYW5kbGVyKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpIHtcbiAgY29uc29sZS5sb2coJyEhIXVwZGF0ZWRUYWJIYW5kbGVyJywgdGFiSWQsIHRhYi5pZCk7XG4gIGNvbnNvbGUubG9nKCchISFjaGFuZ2VJbmZvJywgY2hhbmdlSW5mbyk7XG4gIGV4ZWN1dGVTY3JpcHQodGFiLmlkKS50aGVuKCgpID0+IHtcbiAgICBjaHJvbWUucnVudGltZS5nZXRDb250ZXh0cyh7fSkudGhlbigoZXhpc3RpbmdDb250ZXh0cykgPT4ge1xuICAgICAgY29uc3Qgb2Zmc2NyZWVuRG9jdW1lbnQgPSBleGlzdGluZ0NvbnRleHRzLmZpbmQoKGMpID0+IGMuY29udGV4dFR5cGUgPT09ICdPRkZTQ1JFRU5fRE9DVU1FTlQnKTtcbiAgICAgIGNvbnN0IHJlY29yZGluZyA9IG9mZnNjcmVlbkRvY3VtZW50LmRvY3VtZW50VXJsLmVuZHNXaXRoKCcjcmVjb3JkaW5nJyk7XG4gICAgICBjb25zb2xlLmxvZygnISEhcmVjb3JkaW5nJywgcmVjb3JkaW5nKTtcbiAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwge1xuICAgICAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZUxvY2F0aW9uJyxcbiAgICAgICAgbG9jYXRpb246IHJlY29yZGluZyA/ICdyZWNvcmQnIDogJ3BsYXknLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlU2NyaXB0KHRhYklkKSB7XG4gIHJldHVybiBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgIHRhcmdldDogeyB0YWJJZCB9LFxuICAgIGZpbGVzOiBbJ2NvbnRlbnQuanMnXSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZVdpbmRvdyh3aWR0aCwgaGVpZ2h0KSB7XG4gIGxldCBvcHRpb25zID0ge1xuICAgIHdpZHRoOiB3aWR0aCArIGdsb2JhbFRoaXMuY2hyb21lU2l6ZS53aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCArIGdsb2JhbFRoaXMuY2hyb21lU2l6ZS5oZWlnaHQsXG4gIH07XG4gIGNocm9tZS53aW5kb3dzLmdldEN1cnJlbnQoeyBwb3B1bGF0ZTogZmFsc2UgfSwgKHdpbikgPT4ge1xuICAgIGNocm9tZS53aW5kb3dzLnVwZGF0ZSh3aW4uaWQsIG9wdGlvbnMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlSWNvbihjb2xvciA9ICcnKSB7XG4gIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgcGF0aDoge1xuICAgICAgMTY6IGNocm9tZS5ydW50aW1lLmdldFVSTCgnYXNzZXRzL2ltYWdlcy9nZXRfc3RhcnRlZDE2JyArIGNvbG9yICsgJy5wbmcnKSxcbiAgICAgIDMyOiBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2Fzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQzMicgKyBjb2xvciArICcucG5nJyksXG4gICAgICA0ODogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdhc3NldHMvaW1hZ2VzL2dldF9zdGFydGVkNDgnICsgY29sb3IgKyAnLnBuZycpLFxuICAgICAgMTI4OiBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2Fzc2V0cy9pbWFnZXMvZ2V0X3N0YXJ0ZWQxMjgnICsgY29sb3IgKyAnLnBuZycpLFxuICAgIH0sXG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzdGFydFJlY29yZGluZyhkYXRhKSB7XG4gIGNoYW5nZUljb24oJ19yZWQnKTtcblxuICBjb25zdCBzdHJlYW1JZCA9IGF3YWl0IGNocm9tZS50YWJDYXB0dXJlLmdldE1lZGlhU3RyZWFtSWQoe1xuICAgIHRhcmdldFRhYklkOiBkYXRhLnRhYklkLFxuICB9KTtcblxuICBjb25zdCBtZXNzYWdlID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSk7XG4gIE9iamVjdC5hc3NpZ24obWVzc2FnZSwge1xuICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlU3RhcnRPZmZzY3JlZW5SZWNvcmRpbmcnLFxuICAgIHRhcmdldDogJ29mZnNjcmVlbicsXG4gICAgc3RyZWFtSWQsXG4gIH0pO1xuXG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBzdG9wUmVjb3JkaW5nKCkge1xuICBjaGFuZ2VJY29uKCk7XG5cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlU3RvcE9mZnNjcmVlblJlY29yZGluZycsXG4gICAgdGFyZ2V0OiAnb2Zmc2NyZWVuJyxcbiAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRBbmFseXRpY3MgfSBmcm9tICcuL2FuYWx5dGljcyc7XG5pbXBvcnQgeyBpbml0QmFja2dyb3VuZFBhZ2UgfSBmcm9tICcuL2JhY2tncm91bmQnO1xuXG5pbml0QW5hbHl0aWNzKCdHLVgzM0VISEJMNUcnLCAnX1YwSnVzTEtRZDJiZm4wc1NPbnMzUScpO1xuaW5pdEJhY2tncm91bmRQYWdlKCk7XG4iXSwibmFtZXMiOlsiR0FfRU5EUE9JTlQiLCJHQV9ERUJVR19FTkRQT0lOVCIsIk1FQVNVUkVNRU5UX0lEIiwiQVBJX1NFQ1JFVCIsIkRFRkFVTFRfRU5HQUdFTUVOVF9USU1FX01TRUMiLCJTRVNTSU9OX0VYUElSQVRJT05fSU5fTUlOIiwiaW5pdEFuYWx5dGljcyIsImlkIiwic2VjcmV0IiwiQW5hbHl0aWNzIiwiY29uc3RydWN0b3IiLCJkZWJ1ZyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImdldE9yQ3JlYXRlQ2xpZW50SWQiLCJjbGllbnRJZCIsImNocm9tZSIsInN0b3JhZ2UiLCJsb2NhbCIsImdldCIsInNlbGYiLCJjcnlwdG8iLCJyYW5kb21VVUlEIiwic2V0IiwiZ2V0T3JDcmVhdGVTZXNzaW9uSWQiLCJzZXNzaW9uRGF0YSIsInNlc3Npb24iLCJjdXJyZW50VGltZUluTXMiLCJEYXRlIiwibm93IiwidGltZXN0YW1wIiwiZHVyYXRpb25Jbk1pbiIsInNlc3Npb25faWQiLCJ0b1N0cmluZyIsImZpcmVFdmVudCIsIm5hbWUiLCJwYXJhbXMiLCJlbmdhZ2VtZW50X3RpbWVfbXNlYyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNsaWVudF9pZCIsImV2ZW50cyIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiZSIsImVycm9yIiwiZmlyZVBhZ2VWaWV3RXZlbnQiLCJwYWdlVGl0bGUiLCJwYWdlTG9jYXRpb24iLCJhZGRpdGlvbmFsUGFyYW1zIiwicGFnZV90aXRsZSIsInBhZ2VfbG9jYXRpb24iLCJmaXJlRXJyb3JFdmVudCIsImFuYWx5dGljcyIsImluaXRCYWNrZ3JvdW5kUGFnZSIsImFjdGlvbiIsIm9uQ2xpY2tlZCIsImFkZExpc3RlbmVyIiwidGFiIiwidGFiSWQiLCJleGlzdGluZ0NvbnRleHRzIiwicnVudGltZSIsImdldENvbnRleHRzIiwicmVjb3JkaW5nIiwib2Zmc2NyZWVuRG9jdW1lbnQiLCJmaW5kIiwiYyIsImNvbnRleHRUeXBlIiwib2Zmc2NyZWVuIiwiY3JlYXRlRG9jdW1lbnQiLCJ1cmwiLCJyZWFzb25zIiwianVzdGlmaWNhdGlvbiIsImRvY3VtZW50VXJsIiwiZW5kc1dpdGgiLCJ3aW5kb3dzIiwiZ2V0Q3VycmVudCIsInBvcHVsYXRlIiwid2luIiwiZ2xvYmFsVGhpcyIsImNocm9tZVNpemUiLCJ3aWR0aCIsImhlaWdodCIsImV4ZWN1dGVTY3JpcHQiLCJ0aGVuIiwidGFicyIsInNlbmRNZXNzYWdlIiwidHlwZSIsImxvY2F0aW9uIiwiY2hhbmdlSWNvbiIsIm9uTWVzc2FnZSIsIm1zZyIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsInN0YXJ0UmVjb3JkaW5nIiwic3RvcFJlY29yZGluZyIsInJlc2l6ZVdpbmRvdyIsImNhdGVnb3J5IiwibGFiZWwiLCJwYXRoIiwic3BsaXQiLCJwb3AiLCJlbmFibGVkIiwib25VcGRhdGVkIiwidXBkYXRlZFRhYkhhbmRsZXIiLCJyZW1vdmVMaXN0ZW5lciIsImNoYW5nZUluZm8iLCJzY3JpcHRpbmciLCJ0YXJnZXQiLCJmaWxlcyIsIm9wdGlvbnMiLCJ1cGRhdGUiLCJjb2xvciIsInNldEljb24iLCJnZXRVUkwiLCJkYXRhIiwic3RyZWFtSWQiLCJ0YWJDYXB0dXJlIiwiZ2V0TWVkaWFTdHJlYW1JZCIsInRhcmdldFRhYklkIiwibWVzc2FnZSIsIk9iamVjdCIsImFzc2lnbiJdLCJzb3VyY2VSb290IjoiIn0=