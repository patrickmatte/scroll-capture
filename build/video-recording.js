/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/model/GABridge.js":
/*!******************************!*\
  !*** ./js/model/GABridge.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendTrackEventMessage: () => (/* binding */ sendTrackEventMessage),
/* harmony export */   sendTrackPageMessage: () => (/* binding */ sendTrackPageMessage)
/* harmony export */ });
function sendTrackEventMessage(category, params) {
  const msg = {
    type: 'scrollCaptureTrackEvent',
    category,
    params
  };
  if (params) msg.params = params;
  chrome.runtime.sendMessage(msg);
}
function sendTrackPageMessage(path) {
  chrome.runtime.sendMessage({
    type: 'scrollCaptureTrackPage',
    path
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
/*!*******************************!*\
  !*** ./js/video-recording.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_GABridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/GABridge */ "./js/model/GABridge.js");

chrome.storage.local.get(['json'], result => {
  let colorTheme = 'Dark';
  if (result) {
    if (result.json) {
      let data = JSON.parse(result.json);
      if (data.settings) {
        colorTheme = data.settings.colorThemes;
      }
    }
  }
  let isColorThemeLight;
  switch (colorTheme) {
    case 'Dark':
    case 'Light':
      isColorThemeLight = colorTheme == 'Light';
      break;
    default:
      let darkModeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)');
      let isDarkMode = darkModeMatchMedia.matches;
      isColorThemeLight = !isDarkMode;
      break;
  }
  document.body.querySelector('.sc-default').setAttribute('data-theme-light', isColorThemeLight);
});
window.addEventListener('resize', () => {
  dispatchVideoHeight();
});
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  switch (msg.type) {
    case 'scrollCaptureColorTheme':
      document.body.querySelector('.sc-default').setAttribute('data-theme-light', msg.isColorThemeLight);
      break;
    case 'scrollCaptureUnloadVideo':
      unloadVideo();
      break;
    case 'scrollCaptureShowVideo':
      dispatchVideoHeight();
      break;
    case 'scrollCaptureVideoURL':
      updateVideo(msg);
      break;
  }
});
let player = document.querySelector('.sc-video-player');
player.setAttribute('muted', 'true');
player.setAttribute('autoplay', 'true');
player.setAttribute('playsinline', 'true');
player.setAttribute('controls', '1');
player.addEventListener('canplay', () => {
  dispatchVideoHeight();
});
function dispatchVideoHeight() {
  chrome.storage.local.get(['tabId']).then(tabId => {
    let msg = {
      type: 'scrollCaptureVideoHeight',
      height: document.body.scrollHeight
    };
    chrome.tabs.sendMessage(tabId.tabId, msg);
  });
}
function updateVideo(message) {
  let videoFileName = message.fileName;
  const videoURL = message.videoURL;
  player.src = videoURL;
  player.download = videoFileName;
  let buttons = document.querySelectorAll('a.sc-download-button');
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.href = videoURL;
    button.download = videoFileName;
    button.addEventListener('click', () => {
      (0,_model_GABridge__WEBPACK_IMPORTED_MODULE_0__.sendTrackEventMessage)('download', {
        media: 'video'
      });
    });
  }
  let fileNameButton = document.querySelector('.sc-video-filename a.sc-download-button');
  fileNameButton.textContent = videoFileName;
}
function unloadVideo() {
  player.pause();
  // player.removeAttribute('src');
  // player.load();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUd4QixRQUFRLENBQUN5QixnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQztFQUMvRCxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsT0FBTyxDQUFDRyxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO0lBQ3ZDLElBQUlFLE1BQU0sR0FBR0osT0FBTyxDQUFDRSxDQUFDLENBQUM7SUFDdkJFLE1BQU0sQ0FBQ0MsSUFBSSxHQUFHUixRQUFRO0lBQ3RCTyxNQUFNLENBQUNMLFFBQVEsR0FBR0osYUFBYTtJQUMvQlMsTUFBTSxDQUFDeEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07TUFDckMvQixzRUFBcUIsQ0FBQyxVQUFVLEVBQUU7UUFBRXlELEtBQUssRUFBRTtNQUFRLENBQUMsQ0FBQztJQUN2RCxDQUFDLENBQUM7RUFDSjtFQUNBLElBQUlDLGNBQWMsR0FBRy9CLFFBQVEsQ0FBQ0UsYUFBYSxDQUFDLHlDQUF5QyxDQUFDO0VBQ3RGNkIsY0FBYyxDQUFDQyxXQUFXLEdBQUdiLGFBQWE7QUFDNUM7QUFFQSxTQUFTVCxXQUFXQSxDQUFBLEVBQUc7RUFDckJFLE1BQU0sQ0FBQ3FCLEtBQUssQ0FBQyxDQUFDO0VBQ2Q7RUFDQTtBQUNGLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tb2RlbC9HQUJyaWRnZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy92aWRlby1yZWNvcmRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNlbmRUcmFja0V2ZW50TWVzc2FnZShjYXRlZ29yeSwgcGFyYW1zKSB7XG4gIGNvbnN0IG1zZyA9IHsgdHlwZTogJ3Njcm9sbENhcHR1cmVUcmFja0V2ZW50JywgY2F0ZWdvcnksIHBhcmFtcyB9O1xuICBpZiAocGFyYW1zKSBtc2cucGFyYW1zID0gcGFyYW1zO1xuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShtc2cpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VuZFRyYWNrUGFnZU1lc3NhZ2UocGF0aCkge1xuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHR5cGU6ICdzY3JvbGxDYXB0dXJlVHJhY2tQYWdlJywgcGF0aCB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2VuZFRyYWNrRXZlbnRNZXNzYWdlIH0gZnJvbSAnLi9tb2RlbC9HQUJyaWRnZSc7XG5cbmNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2pzb24nXSwgKHJlc3VsdCkgPT4ge1xuICBsZXQgY29sb3JUaGVtZSA9ICdEYXJrJztcbiAgaWYgKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQuanNvbikge1xuICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3VsdC5qc29uKTtcbiAgICAgIGlmIChkYXRhLnNldHRpbmdzKSB7XG4gICAgICAgIGNvbG9yVGhlbWUgPSBkYXRhLnNldHRpbmdzLmNvbG9yVGhlbWVzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsZXQgaXNDb2xvclRoZW1lTGlnaHQ7XG4gIHN3aXRjaCAoY29sb3JUaGVtZSkge1xuICAgIGNhc2UgJ0RhcmsnOlxuICAgIGNhc2UgJ0xpZ2h0JzpcbiAgICAgIGlzQ29sb3JUaGVtZUxpZ2h0ID0gY29sb3JUaGVtZSA9PSAnTGlnaHQnO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGxldCBkYXJrTW9kZU1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpO1xuICAgICAgbGV0IGlzRGFya01vZGUgPSBkYXJrTW9kZU1hdGNoTWVkaWEubWF0Y2hlcztcbiAgICAgIGlzQ29sb3JUaGVtZUxpZ2h0ID0gIWlzRGFya01vZGU7XG4gICAgICBicmVhaztcbiAgfVxuICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5zYy1kZWZhdWx0Jykuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lLWxpZ2h0JywgaXNDb2xvclRoZW1lTGlnaHQpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIGRpc3BhdGNoVmlkZW9IZWlnaHQoKTtcbn0pO1xuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1zZywgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVDb2xvclRoZW1lJzpcbiAgICAgIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLnNjLWRlZmF1bHQnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUtbGlnaHQnLCBtc2cuaXNDb2xvclRoZW1lTGlnaHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVVubG9hZFZpZGVvJzpcbiAgICAgIHVubG9hZFZpZGVvKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlU2hvd1ZpZGVvJzpcbiAgICAgIGRpc3BhdGNoVmlkZW9IZWlnaHQoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVWaWRlb1VSTCc6XG4gICAgICB1cGRhdGVWaWRlbyhtc2cpO1xuICAgICAgYnJlYWs7XG4gIH1cbn0pO1xuXG5sZXQgcGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjLXZpZGVvLXBsYXllcicpO1xucGxheWVyLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLCAndHJ1ZScpO1xucGxheWVyLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAndHJ1ZScpO1xucGxheWVyLnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLCAndHJ1ZScpO1xucGxheWVyLnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCAnMScpO1xucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCAoKSA9PiB7XG4gIGRpc3BhdGNoVmlkZW9IZWlnaHQoKTtcbn0pO1xuXG5mdW5jdGlvbiBkaXNwYXRjaFZpZGVvSGVpZ2h0KCkge1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWyd0YWJJZCddKS50aGVuKCh0YWJJZCkgPT4ge1xuICAgIGxldCBtc2cgPSB7XG4gICAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVZpZGVvSGVpZ2h0JyxcbiAgICAgIGhlaWdodDogZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsXG4gICAgfTtcbiAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZC50YWJJZCwgbXNnKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVZpZGVvKG1lc3NhZ2UpIHtcbiAgbGV0IHZpZGVvRmlsZU5hbWUgPSBtZXNzYWdlLmZpbGVOYW1lO1xuICBjb25zdCB2aWRlb1VSTCA9IG1lc3NhZ2UudmlkZW9VUkw7XG4gIHBsYXllci5zcmMgPSB2aWRlb1VSTDtcbiAgcGxheWVyLmRvd25sb2FkID0gdmlkZW9GaWxlTmFtZTtcbiAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhLnNjLWRvd25sb2FkLWJ1dHRvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgYnV0dG9uID0gYnV0dG9uc1tpXTtcbiAgICBidXR0b24uaHJlZiA9IHZpZGVvVVJMO1xuICAgIGJ1dHRvbi5kb3dubG9hZCA9IHZpZGVvRmlsZU5hbWU7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgc2VuZFRyYWNrRXZlbnRNZXNzYWdlKCdkb3dubG9hZCcsIHsgbWVkaWE6ICd2aWRlbycgfSk7XG4gICAgfSk7XG4gIH1cbiAgbGV0IGZpbGVOYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjLXZpZGVvLWZpbGVuYW1lIGEuc2MtZG93bmxvYWQtYnV0dG9uJyk7XG4gIGZpbGVOYW1lQnV0dG9uLnRleHRDb250ZW50ID0gdmlkZW9GaWxlTmFtZTtcbn1cblxuZnVuY3Rpb24gdW5sb2FkVmlkZW8oKSB7XG4gIHBsYXllci5wYXVzZSgpO1xuICAvLyBwbGF5ZXIucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcbiAgLy8gcGxheWVyLmxvYWQoKTtcbn1cbiJdLCJuYW1lcyI6WyJzZW5kVHJhY2tFdmVudE1lc3NhZ2UiLCJjYXRlZ29yeSIsInBhcmFtcyIsIm1zZyIsInR5cGUiLCJjaHJvbWUiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJzZW5kVHJhY2tQYWdlTWVzc2FnZSIsInBhdGgiLCJzdG9yYWdlIiwibG9jYWwiLCJnZXQiLCJyZXN1bHQiLCJjb2xvclRoZW1lIiwianNvbiIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJzZXR0aW5ncyIsImNvbG9yVGhlbWVzIiwiaXNDb2xvclRoZW1lTGlnaHQiLCJkYXJrTW9kZU1hdGNoTWVkaWEiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiaXNEYXJrTW9kZSIsIm1hdGNoZXMiLCJkb2N1bWVudCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BhdGNoVmlkZW9IZWlnaHQiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsInVubG9hZFZpZGVvIiwidXBkYXRlVmlkZW8iLCJwbGF5ZXIiLCJ0aGVuIiwidGFiSWQiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0YWJzIiwibWVzc2FnZSIsInZpZGVvRmlsZU5hbWUiLCJmaWxlTmFtZSIsInZpZGVvVVJMIiwic3JjIiwiZG93bmxvYWQiLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJidXR0b24iLCJocmVmIiwibWVkaWEiLCJmaWxlTmFtZUJ1dHRvbiIsInRleHRDb250ZW50IiwicGF1c2UiXSwic291cmNlUm9vdCI6IiJ9