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
  let label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  chrome.runtime.sendMessage({
    type: "scrollCaptureTrackEvent",
    category,
    action,
    label
  });
}
function sendTrackPageMessage(path) {
  chrome.runtime.sendMessage({
    type: "scrollCaptureTrackPage",
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
    y: message.tagHeight
  };
  const pixelRatio = message.pixelRatio;
  const media = await navigator.mediaDevices.getUserMedia({
    audio: {
      mandatory: {
        chromeMediaSource: 'tab',
        chromeMediaSourceId: message.streamId
      }
    },
    video: {
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
    }
  });
  const output = new AudioContext();
  const source = output.createMediaStreamSource(media);
  source.connect(output.destination);
  let format = message.format || "webm";
  let videoCodec = message.videoCodec || "vp8";
  let audioCodec = message.audioCodec || "opus";
  let videoBitsPerSecond = message.videoBitsPerSecond || 16;
  let audioBitsPerSecond = message.audioBitsPerSecond || 128;
  const options = {
    mimeType: `video/${format};codecs=${videoCodec},${audioCodec}`,
    audioBitsPerSecond: audioBitsPerSecond * 1000,
    videoBitsPerSecond: videoBitsPerSecond * 1000000
  };
  // if (!MediaRecorder.isTypeSupported(options.mimeType)) {
  //   options.mimeType = 'video/webm;codecs=vp8';
  //   if (!MediaRecorder.isTypeSupported(options.mimeType)) {
  //     options.mimeType = 'video/webm;codecs=vp9';
  //     if (!MediaRecorder.isTypeSupported(options.mimeType)) {
  //         options.mimeType = 'video/webm;codecs=h264';
  //         if (!MediaRecorder.isTypeSupported(options.mimeType)) {
  //             options.mimeType = 'video/webm';
  //             if (!MediaRecorder.isTypeSupported(options.mimeType)) {
  //                 options.mimeType = '';
  //             }
  //         }
  //     }
  //   }
  // }

  (0,_model_GABridge__WEBPACK_IMPORTED_MODULE_0__.sendTrackEventMessage)("recording", "start", options.mimeType);
  recorder = new MediaRecorder(media, options);
  recorder.ondataavailable = event => data.push(event.data);
  recorder.onstop = () => {
    const blob = new Blob(data, {
      type: `video/${format}`
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
function logMimeTypes() {
  let mimeTypes = ["video/webm;codecs=vp8,opus", "video/webm;codecs=h264,aac", "video/webm;codecs=avc1,aac", "video/webm;codecs=h264,opus", "video/webm;codecs=avc1,opus", "video/webm;codecs=av1,opus", "video/webm;codecs=av1,pcm", "video/webm", "audio/webm", "video/webm;codecs=vp8", "video/webm;codecs=h264", "video/webm;codecs=avc1", "audio/webm;codecs=opus", "video/mpeg", "video/mp4", "video/mp4;codecs=h264", "video/mp4;codecs=h264,aac", "video/mp4;codecs=h264,mp3", "video/x-matroska;codecs=h264,opus", "video/x-matroska;codecs=av1,opus", "video/x-matroska;codecs=avc1,pcm", "video/x-matroska;codecs=vp8,pcm", "video/x-matroska;codecs=vp9,pcm"];
  mimeTypes.forEach(mimeType => {
    console.log('MediaRecorder', mimeType, MediaRecorder.isTypeSupported(mimeType));
  });
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXdCLEVBQ3hCLHdCQUF3QixFQUN4QixZQUFZLEVBQ1osV0FBVyxFQUNYLHVCQUF1QixFQUN2QiwyQkFBMkIsRUFDM0IsMkJBQTJCLEVBQzNCLG1DQUFtQyxFQUNuQyxrQ0FBa0MsRUFDbEMsa0NBQWtDLEVBQ2xDLGlDQUFpQyxFQUNqQyxpQ0FBaUMsQ0FDbEM7RUFFREEsU0FBUyxDQUFDSCxPQUFPLENBQUVyQixRQUFRLElBQUs7SUFDOUJ5QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEVBQUUxQixRQUFRLEVBQUVDLGFBQWEsQ0FBQzBCLGVBQWUsQ0FBQzNCLFFBQVEsQ0FBQyxDQUFDO0VBQ2pGLENBQUMsQ0FBQztBQUNKLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tb2RlbC9HQUJyaWRnZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy9vZmZzY3JlZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNlbmRUcmFja0V2ZW50TWVzc2FnZShjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCA9IFwiXCIpIHtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHR5cGU6IFwic2Nyb2xsQ2FwdHVyZVRyYWNrRXZlbnRcIiwgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZW5kVHJhY2tQYWdlTWVzc2FnZShwYXRoKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiBcInNjcm9sbENhcHR1cmVUcmFja1BhZ2VcIiwgcGF0aCB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHNlbmRUcmFja0V2ZW50TWVzc2FnZSB9IGZyb20gXCIuL21vZGVsL0dBQnJpZGdlXCI7XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSkgPT4ge1xuICBpZiAobWVzc2FnZS50YXJnZXQgPT09ICdvZmZzY3JlZW4nKSB7XG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVTdGFydE9mZnNjcmVlblJlY29yZGluZyc6XG4gICAgICAgIHN0YXJ0UmVjb3JkaW5nKG1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVTdG9wT2Zmc2NyZWVuUmVjb3JkaW5nJzpcbiAgICAgICAgc3RvcFJlY29yZGluZyhtZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VucmVjb2duaXplZCBtZXNzYWdlOicsIG1lc3NhZ2UudHlwZSk7XG4gICAgfVxuICB9XG59KTtcblxubGV0IHJlY29yZGVyO1xubGV0IGRhdGEgPSBbXTtcblxuYXN5bmMgZnVuY3Rpb24gc3RhcnRSZWNvcmRpbmcobWVzc2FnZSkge1xuICBpZiAocmVjb3JkZXI/LnN0YXRlID09PSAncmVjb3JkaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2FsbGVkIHN0YXJ0UmVjb3JkaW5nIHdoaWxlIHJlY29yZGluZyBpcyBpbiBwcm9ncmVzcy4nKTtcbiAgfVxuXG4gIGNvbnN0IHNpemUgPSB7eDptZXNzYWdlLnRhYldpZHRoLCB5Om1lc3NhZ2UudGFnSGVpZ2h0fTtcbiAgY29uc3QgcGl4ZWxSYXRpbyA9IG1lc3NhZ2UucGl4ZWxSYXRpbztcbiAgY29uc3QgbWVkaWEgPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgYXVkaW86IHtcbiAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZTogJ3RhYicsXG4gICAgICAgIGNocm9tZU1lZGlhU291cmNlSWQ6IG1lc3NhZ2Uuc3RyZWFtSWRcbiAgICAgIH1cbiAgICB9LFxuICAgIHZpZGVvOiB7XG4gICAgICBtYW5kYXRvcnk6IHtcbiAgICAgICAgY2hyb21lTWVkaWFTb3VyY2U6ICd0YWInLFxuICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZUlkOiBtZXNzYWdlLnN0cmVhbUlkLFxuICAgICAgICBtaW5XaWR0aDogc2l6ZS54ICogcGl4ZWxSYXRpbyxcbiAgICAgICAgbWF4V2lkdGg6IHNpemUueCAqIHBpeGVsUmF0aW8sXG4gICAgICAgIG1pbkhlaWdodDogc2l6ZS55ICogcGl4ZWxSYXRpbyxcbiAgICAgICAgbWF4SGVpZ2h0OiBzaXplLnkgKiBwaXhlbFJhdGlvLFxuICAgICAgICBtaW5GcmFtZVJhdGU6IDMwLFxuICAgICAgICBtYXhGcmFtZVJhdGU6IDYwXG5cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG91dHB1dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgY29uc3Qgc291cmNlID0gb3V0cHV0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKG1lZGlhKTtcbiAgc291cmNlLmNvbm5lY3Qob3V0cHV0LmRlc3RpbmF0aW9uKTtcblxuICBsZXQgZm9ybWF0ID0gbWVzc2FnZS5mb3JtYXQgfHwgXCJ3ZWJtXCI7XG4gIGxldCB2aWRlb0NvZGVjID0gbWVzc2FnZS52aWRlb0NvZGVjIHx8IFwidnA4XCI7XG4gIGxldCBhdWRpb0NvZGVjID0gbWVzc2FnZS5hdWRpb0NvZGVjIHx8IFwib3B1c1wiO1xuICBsZXQgdmlkZW9CaXRzUGVyU2Vjb25kID0gbWVzc2FnZS52aWRlb0JpdHNQZXJTZWNvbmQgfHwgMTY7XG4gIGxldCBhdWRpb0JpdHNQZXJTZWNvbmQgPSBtZXNzYWdlLmF1ZGlvQml0c1BlclNlY29uZCB8fCAxMjg7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtaW1lVHlwZTogYHZpZGVvLyR7Zm9ybWF0fTtjb2RlY3M9JHt2aWRlb0NvZGVjfSwke2F1ZGlvQ29kZWN9YCxcbiAgICBhdWRpb0JpdHNQZXJTZWNvbmQ6IGF1ZGlvQml0c1BlclNlY29uZCAqIDEwMDAsXG4gICAgdmlkZW9CaXRzUGVyU2Vjb25kOiB2aWRlb0JpdHNQZXJTZWNvbmQgKiAxMDAwMDAwLFxuICB9O1xuICAvLyBpZiAoIU1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkKG9wdGlvbnMubWltZVR5cGUpKSB7XG4gIC8vICAgb3B0aW9ucy5taW1lVHlwZSA9ICd2aWRlby93ZWJtO2NvZGVjcz12cDgnO1xuICAvLyAgIGlmICghTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQob3B0aW9ucy5taW1lVHlwZSkpIHtcbiAgLy8gICAgIG9wdGlvbnMubWltZVR5cGUgPSAndmlkZW8vd2VibTtjb2RlY3M9dnA5JztcbiAgLy8gICAgIGlmICghTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQob3B0aW9ucy5taW1lVHlwZSkpIHtcbiAgLy8gICAgICAgICBvcHRpb25zLm1pbWVUeXBlID0gJ3ZpZGVvL3dlYm07Y29kZWNzPWgyNjQnO1xuICAvLyAgICAgICAgIGlmICghTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQob3B0aW9ucy5taW1lVHlwZSkpIHtcbiAgLy8gICAgICAgICAgICAgb3B0aW9ucy5taW1lVHlwZSA9ICd2aWRlby93ZWJtJztcbiAgLy8gICAgICAgICAgICAgaWYgKCFNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZChvcHRpb25zLm1pbWVUeXBlKSkge1xuICAvLyAgICAgICAgICAgICAgICAgb3B0aW9ucy5taW1lVHlwZSA9ICcnO1xuICAvLyAgICAgICAgICAgICB9XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIHNlbmRUcmFja0V2ZW50TWVzc2FnZShcInJlY29yZGluZ1wiLCBcInN0YXJ0XCIsIG9wdGlvbnMubWltZVR5cGUpO1xuXG4gIHJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIobWVkaWEsIG9wdGlvbnMpO1xuICByZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSAoZXZlbnQpID0+IGRhdGEucHVzaChldmVudC5kYXRhKTtcbiAgcmVjb3JkZXIub25zdG9wID0gKCkgPT4ge1xuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihkYXRhLCB7IHR5cGU6IGB2aWRlby8ke2Zvcm1hdH1gIH0pO1xuICAgIGNvbnN0IHZpZGVvVVJMTWVzc2FnZSA9IE9iamVjdC5hc3NpZ24oe30sIG1lc3NhZ2UpO1xuICAgIE9iamVjdC5hc3NpZ24odmlkZW9VUkxNZXNzYWdlLCB7XG4gICAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVZpZGVvVVJMJyxcbiAgICAgIHZpZGVvVVJMOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXG4gICAgfSk7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UodmlkZW9VUkxNZXNzYWdlKTtcbiAgICBkYXRhID0gW107XG4gIH07XG4gIHJlY29yZGVyLnN0YXJ0KCk7XG5cbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAncmVjb3JkaW5nJztcbn1cblxuZnVuY3Rpb24gc3RvcFJlY29yZGluZyhtZXNzYWdlKSB7XG4gIHJlY29yZGVyLnN0b3AoKTtcbiAgcmVjb3JkZXIuc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goKHQpID0+IHQuc3RvcCgpKTtcbiAgcmVjb3JkZXIgPSB1bmRlZmluZWQ7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyc7XG59XG5cbmZ1bmN0aW9uIGxvZ01pbWVUeXBlcygpIHtcbiAgbGV0IG1pbWVUeXBlcyA9IFtcbiAgICBcInZpZGVvL3dlYm07Y29kZWNzPXZwOCxvcHVzXCIsXG4gICAgXCJ2aWRlby93ZWJtO2NvZGVjcz1oMjY0LGFhY1wiLFxuICAgIFwidmlkZW8vd2VibTtjb2RlY3M9YXZjMSxhYWNcIixcbiAgICBcInZpZGVvL3dlYm07Y29kZWNzPWgyNjQsb3B1c1wiLFxuICAgIFwidmlkZW8vd2VibTtjb2RlY3M9YXZjMSxvcHVzXCIsXG4gICAgXCJ2aWRlby93ZWJtO2NvZGVjcz1hdjEsb3B1c1wiLFxuICAgIFwidmlkZW8vd2VibTtjb2RlY3M9YXYxLHBjbVwiLFxuICAgIFwidmlkZW8vd2VibVwiLFxuICAgIFwiYXVkaW8vd2VibVwiLFxuICAgIFwidmlkZW8vd2VibTtjb2RlY3M9dnA4XCIsXG4gICAgXCJ2aWRlby93ZWJtO2NvZGVjcz1oMjY0XCIsXG4gICAgXCJ2aWRlby93ZWJtO2NvZGVjcz1hdmMxXCIsXG4gICAgXCJhdWRpby93ZWJtO2NvZGVjcz1vcHVzXCIsXG4gICAgXCJ2aWRlby9tcGVnXCIsXG4gICAgXCJ2aWRlby9tcDRcIixcbiAgICBcInZpZGVvL21wNDtjb2RlY3M9aDI2NFwiLFxuICAgIFwidmlkZW8vbXA0O2NvZGVjcz1oMjY0LGFhY1wiLFxuICAgIFwidmlkZW8vbXA0O2NvZGVjcz1oMjY0LG1wM1wiLFxuICAgIFwidmlkZW8veC1tYXRyb3NrYTtjb2RlY3M9aDI2NCxvcHVzXCIsXG4gICAgXCJ2aWRlby94LW1hdHJvc2thO2NvZGVjcz1hdjEsb3B1c1wiLFxuICAgIFwidmlkZW8veC1tYXRyb3NrYTtjb2RlY3M9YXZjMSxwY21cIixcbiAgICBcInZpZGVvL3gtbWF0cm9za2E7Y29kZWNzPXZwOCxwY21cIixcbiAgICBcInZpZGVvL3gtbWF0cm9za2E7Y29kZWNzPXZwOSxwY21cIixcbiAgXTtcblxuICBtaW1lVHlwZXMuZm9yRWFjaCgobWltZVR5cGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnTWVkaWFSZWNvcmRlcicsIG1pbWVUeXBlLCBNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZChtaW1lVHlwZSkpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJzZW5kVHJhY2tFdmVudE1lc3NhZ2UiLCJjYXRlZ29yeSIsImFjdGlvbiIsImxhYmVsIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY2hyb21lIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwidHlwZSIsInNlbmRUcmFja1BhZ2VNZXNzYWdlIiwicGF0aCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwibWVzc2FnZSIsInRhcmdldCIsInN0YXJ0UmVjb3JkaW5nIiwic3RvcFJlY29yZGluZyIsIkVycm9yIiwicmVjb3JkZXIiLCJkYXRhIiwic3RhdGUiLCJzaXplIiwieCIsInRhYldpZHRoIiwieSIsInRhZ0hlaWdodCIsInBpeGVsUmF0aW8iLCJtZWRpYSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwibWFuZGF0b3J5IiwiY2hyb21lTWVkaWFTb3VyY2UiLCJjaHJvbWVNZWRpYVNvdXJjZUlkIiwic3RyZWFtSWQiLCJ2aWRlbyIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJtaW5GcmFtZVJhdGUiLCJtYXhGcmFtZVJhdGUiLCJvdXRwdXQiLCJBdWRpb0NvbnRleHQiLCJzb3VyY2UiLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImZvcm1hdCIsInZpZGVvQ29kZWMiLCJhdWRpb0NvZGVjIiwidmlkZW9CaXRzUGVyU2Vjb25kIiwiYXVkaW9CaXRzUGVyU2Vjb25kIiwib3B0aW9ucyIsIm1pbWVUeXBlIiwiTWVkaWFSZWNvcmRlciIsIm9uZGF0YWF2YWlsYWJsZSIsImV2ZW50IiwicHVzaCIsIm9uc3RvcCIsImJsb2IiLCJCbG9iIiwidmlkZW9VUkxNZXNzYWdlIiwiT2JqZWN0IiwiYXNzaWduIiwidmlkZW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzdGFydCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInN0b3AiLCJzdHJlYW0iLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidCIsImxvZ01pbWVUeXBlcyIsIm1pbWVUeXBlcyIsImNvbnNvbGUiLCJsb2ciLCJpc1R5cGVTdXBwb3J0ZWQiXSwic291cmNlUm9vdCI6IiJ9