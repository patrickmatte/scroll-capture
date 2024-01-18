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
function sendTrackEventMessage(category, action) {
  let label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  chrome.runtime.sendMessage({
    type: 'scrollCaptureTrackEvent',
    category,
    action,
    label
  });
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
/*!*************************!*\
  !*** ./js/offscreen.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_GABridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/GABridge */ "./js/model/GABridge.js");

chrome.runtime.onMessage.addListener(message => {
  if (message.target === 'offscreen') {
    switch (message.type) {
      case 'scrollCaptureStartOffscreenRecording':
        startRecording(message);
        break;
      case 'scrollCaptureStopOffscreenRecording':
        stopRecording(message);
        break;
      default:
        throw new Error('Unrecognized message:', message.type);
    }
  }
});
let recorder;
let data = [];
async function startRecording(message) {
  if (recorder?.state === 'recording') {
    throw new Error('Called startRecording while recording is in progress.');
  }
  const size = {
    x: message.tabWidth,
    y: message.tabHeight
  };
  const pixelRatio = message.pixelRatio;
  const mediaOptions = {};
  if (message.exportVideo) {
    mediaOptions.video = {
      mandatory: {
        chromeMediaSource: 'tab',
        chromeMediaSourceId: message.streamId,
        minWidth: size.x * pixelRatio,
        maxWidth: size.x * pixelRatio,
        minHeight: size.y * pixelRatio,
        maxHeight: size.y * pixelRatio,
        minFrameRate: 30,
        maxFrameRate: 60
      }
    };
  }
  if (message.exportAudio) {
    mediaOptions.audio = {
      mandatory: {
        chromeMediaSource: 'tab',
        chromeMediaSourceId: message.streamId
      }
    };
  }
  const media = await navigator.mediaDevices.getUserMedia(mediaOptions);
  if (message.exportAudio) {
    const output = new AudioContext();
    const source = output.createMediaStreamSource(media);
    source.connect(output.destination);
  }
  let mimeType = message.mimetype;
  let videoBitsPerSecond = message.videoBitsPerSecond || 16;
  let audioBitsPerSecond = message.audioBitsPerSecond || 128;
  const options = {
    mimeType,
    audioBitsPerSecond: audioBitsPerSecond * 1000,
    videoBitsPerSecond: videoBitsPerSecond * 1000000
  };
  (0,_model_GABridge__WEBPACK_IMPORTED_MODULE_0__.sendTrackEventMessage)('recording', 'mimeType', options.mimeType);
  recorder = new MediaRecorder(media, options);
  recorder.ondataavailable = event => data.push(event.data);
  recorder.onstop = () => {
    // const blob = new Blob(data, { type: `video/${format}` });
    const blobFormat = mimeType.split(';')[0];
    const blob = new Blob(data, {
      type: blobFormat
    });
    const videoURLMessage = Object.assign({}, message);
    Object.assign(videoURLMessage, {
      type: 'scrollCaptureVideoURL',
      videoURL: URL.createObjectURL(blob)
    });
    chrome.runtime.sendMessage(videoURLMessage);
    data = [];
  };
  recorder.start();
  window.location.hash = 'recording';
}
function stopRecording(message) {
  recorder.stop();
  recorder.stream.getTracks().forEach(t => t.stop());
  recorder = undefined;
  window.location.hash = '';
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQztJQUN6QyxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDOUMsSUFBSSxFQUFFO01BQUVYLElBQUksRUFBRXNEO0lBQVcsQ0FBQyxDQUFDO0lBQ2pELE1BQU1JLGVBQWUsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUV2RCxPQUFPLENBQUM7SUFDbERzRCxNQUFNLENBQUNDLE1BQU0sQ0FBQ0YsZUFBZSxFQUFFO01BQzdCMUQsSUFBSSxFQUFFLHVCQUF1QjtNQUM3QjZELFFBQVEsRUFBRUMsR0FBRyxDQUFDQyxlQUFlLENBQUNQLElBQUk7SUFDcEMsQ0FBQyxDQUFDO0lBQ0YzRCxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDMkQsZUFBZSxDQUFDO0lBQzNDL0MsSUFBSSxHQUFHLEVBQUU7RUFDWCxDQUFDO0VBQ0RELFFBQVEsQ0FBQ3NELEtBQUssQ0FBQyxDQUFDO0VBRWhCQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLFdBQVc7QUFDcEM7QUFFQSxTQUFTM0QsYUFBYUEsQ0FBQ0gsT0FBTyxFQUFFO0VBQzlCSyxRQUFRLENBQUMwRCxJQUFJLENBQUMsQ0FBQztFQUNmMUQsUUFBUSxDQUFDMkQsTUFBTSxDQUFDQyxTQUFTLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUVDLENBQUMsSUFBS0EsQ0FBQyxDQUFDSixJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3BEMUQsUUFBUSxHQUFHZCxTQUFTO0VBQ3BCcUUsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksR0FBRyxFQUFFO0FBQzNCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tb2RlbC9HQUJyaWRnZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy9vZmZzY3JlZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNlbmRUcmFja0V2ZW50TWVzc2FnZShjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCA9ICcnKSB7XG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHlwZTogJ3Njcm9sbENhcHR1cmVUcmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZW5kVHJhY2tQYWdlTWVzc2FnZShwYXRoKSB7XG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHlwZTogJ3Njcm9sbENhcHR1cmVUcmFja1BhZ2UnLCBwYXRoIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzZW5kVHJhY2tFdmVudE1lc3NhZ2UgfSBmcm9tICcuL21vZGVsL0dBQnJpZGdlJztcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlKSA9PiB7XG4gIGlmIChtZXNzYWdlLnRhcmdldCA9PT0gJ29mZnNjcmVlbicpIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVN0YXJ0T2Zmc2NyZWVuUmVjb3JkaW5nJzpcbiAgICAgICAgc3RhcnRSZWNvcmRpbmcobWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVN0b3BPZmZzY3JlZW5SZWNvcmRpbmcnOlxuICAgICAgICBzdG9wUmVjb3JkaW5nKG1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5yZWNvZ25pemVkIG1lc3NhZ2U6JywgbWVzc2FnZS50eXBlKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5sZXQgcmVjb3JkZXI7XG5sZXQgZGF0YSA9IFtdO1xuXG5hc3luYyBmdW5jdGlvbiBzdGFydFJlY29yZGluZyhtZXNzYWdlKSB7XG4gIGlmIChyZWNvcmRlcj8uc3RhdGUgPT09ICdyZWNvcmRpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsZWQgc3RhcnRSZWNvcmRpbmcgd2hpbGUgcmVjb3JkaW5nIGlzIGluIHByb2dyZXNzLicpO1xuICB9XG5cbiAgY29uc3Qgc2l6ZSA9IHsgeDogbWVzc2FnZS50YWJXaWR0aCwgeTogbWVzc2FnZS50YWJIZWlnaHQgfTtcbiAgY29uc3QgcGl4ZWxSYXRpbyA9IG1lc3NhZ2UucGl4ZWxSYXRpbztcbiAgY29uc3QgbWVkaWFPcHRpb25zID0ge307XG4gIGlmIChtZXNzYWdlLmV4cG9ydFZpZGVvKSB7XG4gICAgbWVkaWFPcHRpb25zLnZpZGVvID0ge1xuICAgICAgbWFuZGF0b3J5OiB7XG4gICAgICAgIGNocm9tZU1lZGlhU291cmNlOiAndGFiJyxcbiAgICAgICAgY2hyb21lTWVkaWFTb3VyY2VJZDogbWVzc2FnZS5zdHJlYW1JZCxcbiAgICAgICAgbWluV2lkdGg6IHNpemUueCAqIHBpeGVsUmF0aW8sXG4gICAgICAgIG1heFdpZHRoOiBzaXplLnggKiBwaXhlbFJhdGlvLFxuICAgICAgICBtaW5IZWlnaHQ6IHNpemUueSAqIHBpeGVsUmF0aW8sXG4gICAgICAgIG1heEhlaWdodDogc2l6ZS55ICogcGl4ZWxSYXRpbyxcbiAgICAgICAgbWluRnJhbWVSYXRlOiAzMCxcbiAgICAgICAgbWF4RnJhbWVSYXRlOiA2MCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICBpZiAobWVzc2FnZS5leHBvcnRBdWRpbykge1xuICAgIG1lZGlhT3B0aW9ucy5hdWRpbyA9IHtcbiAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZTogJ3RhYicsXG4gICAgICAgIGNocm9tZU1lZGlhU291cmNlSWQ6IG1lc3NhZ2Uuc3RyZWFtSWQsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgY29uc3QgbWVkaWEgPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShtZWRpYU9wdGlvbnMpO1xuXG4gIGlmIChtZXNzYWdlLmV4cG9ydEF1ZGlvKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIGNvbnN0IHNvdXJjZSA9IG91dHB1dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShtZWRpYSk7XG4gICAgc291cmNlLmNvbm5lY3Qob3V0cHV0LmRlc3RpbmF0aW9uKTtcbiAgfVxuXG4gIGxldCBtaW1lVHlwZSA9IG1lc3NhZ2UubWltZXR5cGU7XG4gIGxldCB2aWRlb0JpdHNQZXJTZWNvbmQgPSBtZXNzYWdlLnZpZGVvQml0c1BlclNlY29uZCB8fCAxNjtcbiAgbGV0IGF1ZGlvQml0c1BlclNlY29uZCA9IG1lc3NhZ2UuYXVkaW9CaXRzUGVyU2Vjb25kIHx8IDEyODtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1pbWVUeXBlLFxuICAgIGF1ZGlvQml0c1BlclNlY29uZDogYXVkaW9CaXRzUGVyU2Vjb25kICogMTAwMCxcbiAgICB2aWRlb0JpdHNQZXJTZWNvbmQ6IHZpZGVvQml0c1BlclNlY29uZCAqIDEwMDAwMDAsXG4gIH07XG5cbiAgc2VuZFRyYWNrRXZlbnRNZXNzYWdlKCdyZWNvcmRpbmcnLCAnbWltZVR5cGUnLCBvcHRpb25zLm1pbWVUeXBlKTtcblxuICByZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKG1lZGlhLCBvcHRpb25zKTtcbiAgcmVjb3JkZXIub25kYXRhYXZhaWxhYmxlID0gKGV2ZW50KSA9PiBkYXRhLnB1c2goZXZlbnQuZGF0YSk7XG4gIHJlY29yZGVyLm9uc3RvcCA9ICgpID0+IHtcbiAgICAvLyBjb25zdCBibG9iID0gbmV3IEJsb2IoZGF0YSwgeyB0eXBlOiBgdmlkZW8vJHtmb3JtYXR9YCB9KTtcbiAgICBjb25zdCBibG9iRm9ybWF0ID0gbWltZVR5cGUuc3BsaXQoJzsnKVswXTtcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoZGF0YSwgeyB0eXBlOiBibG9iRm9ybWF0IH0pO1xuICAgIGNvbnN0IHZpZGVvVVJMTWVzc2FnZSA9IE9iamVjdC5hc3NpZ24oe30sIG1lc3NhZ2UpO1xuICAgIE9iamVjdC5hc3NpZ24odmlkZW9VUkxNZXNzYWdlLCB7XG4gICAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVZpZGVvVVJMJyxcbiAgICAgIHZpZGVvVVJMOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpLFxuICAgIH0pO1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHZpZGVvVVJMTWVzc2FnZSk7XG4gICAgZGF0YSA9IFtdO1xuICB9O1xuICByZWNvcmRlci5zdGFydCgpO1xuXG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJ3JlY29yZGluZyc7XG59XG5cbmZ1bmN0aW9uIHN0b3BSZWNvcmRpbmcobWVzc2FnZSkge1xuICByZWNvcmRlci5zdG9wKCk7XG4gIHJlY29yZGVyLnN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKCh0KSA9PiB0LnN0b3AoKSk7XG4gIHJlY29yZGVyID0gdW5kZWZpbmVkO1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcnO1xufVxuIl0sIm5hbWVzIjpbInNlbmRUcmFja0V2ZW50TWVzc2FnZSIsImNhdGVnb3J5IiwiYWN0aW9uIiwibGFiZWwiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJjaHJvbWUiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJ0eXBlIiwic2VuZFRyYWNrUGFnZU1lc3NhZ2UiLCJwYXRoIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJtZXNzYWdlIiwidGFyZ2V0Iiwic3RhcnRSZWNvcmRpbmciLCJzdG9wUmVjb3JkaW5nIiwiRXJyb3IiLCJyZWNvcmRlciIsImRhdGEiLCJzdGF0ZSIsInNpemUiLCJ4IiwidGFiV2lkdGgiLCJ5IiwidGFiSGVpZ2h0IiwicGl4ZWxSYXRpbyIsIm1lZGlhT3B0aW9ucyIsImV4cG9ydFZpZGVvIiwidmlkZW8iLCJtYW5kYXRvcnkiLCJjaHJvbWVNZWRpYVNvdXJjZSIsImNocm9tZU1lZGlhU291cmNlSWQiLCJzdHJlYW1JZCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJtaW5GcmFtZVJhdGUiLCJtYXhGcmFtZVJhdGUiLCJleHBvcnRBdWRpbyIsImF1ZGlvIiwibWVkaWEiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJvdXRwdXQiLCJBdWRpb0NvbnRleHQiLCJzb3VyY2UiLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsIm1pbWVUeXBlIiwibWltZXR5cGUiLCJ2aWRlb0JpdHNQZXJTZWNvbmQiLCJhdWRpb0JpdHNQZXJTZWNvbmQiLCJvcHRpb25zIiwiTWVkaWFSZWNvcmRlciIsIm9uZGF0YWF2YWlsYWJsZSIsImV2ZW50IiwicHVzaCIsIm9uc3RvcCIsImJsb2JGb3JtYXQiLCJzcGxpdCIsImJsb2IiLCJCbG9iIiwidmlkZW9VUkxNZXNzYWdlIiwiT2JqZWN0IiwiYXNzaWduIiwidmlkZW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzdGFydCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInN0b3AiLCJzdHJlYW0iLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidCJdLCJzb3VyY2VSb290IjoiIn0=