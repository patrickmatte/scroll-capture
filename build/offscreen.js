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
  if (message.target === "offscreen") {
    switch (message.type) {
      case "scrollCaptureStartOffscreenRecording":
        startRecording(message);
        break;
      case "scrollCaptureStopOffscreenRecording":
        stopRecording(message);
        break;
      default:
        throw new Error("Unrecognized message:", message.type);
    }
  }
});
let recorder;
let data = [];
async function startRecording(message) {
  if (recorder?.state === "recording") {
    throw new Error("Called startRecording while recording is in progress.");
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
        chromeMediaSource: "tab",
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
        chromeMediaSource: "tab",
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
  (0,_model_GABridge__WEBPACK_IMPORTED_MODULE_0__.sendTrackEventMessage)("recording", "start", options.mimeType);
  recorder = new MediaRecorder(media, options);
  recorder.ondataavailable = event => data.push(event.data);
  recorder.onstop = () => {
    // const blob = new Blob(data, { type: `video/${format}` });
    const blobFormat = mimeType.split(";")[0];
    const blob = new Blob(data, {
      type: blobFormat
    });
    const videoURLMessage = Object.assign({}, message);
    Object.assign(videoURLMessage, {
      type: "scrollCaptureVideoURL",
      videoURL: URL.createObjectURL(blob)
    });
    chrome.runtime.sendMessage(videoURLMessage);
    data = [];
  };
  recorder.start();
  window.location.hash = "recording";
}
function stopRecording(message) {
  recorder.stop();
  recorder.stream.getTracks().forEach(t => t.stop());
  recorder = undefined;
  window.location.hash = "";
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQztJQUN6QyxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDOUMsSUFBSSxFQUFFO01BQUVYLElBQUksRUFBRXNEO0lBQVcsQ0FBQyxDQUFDO0lBQ2pELE1BQU1JLGVBQWUsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUV2RCxPQUFPLENBQUM7SUFDbERzRCxNQUFNLENBQUNDLE1BQU0sQ0FBQ0YsZUFBZSxFQUFFO01BQzdCMUQsSUFBSSxFQUFFLHVCQUF1QjtNQUM3QjZELFFBQVEsRUFBRUMsR0FBRyxDQUFDQyxlQUFlLENBQUNQLElBQUk7SUFDcEMsQ0FBQyxDQUFDO0lBQ0YzRCxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDMkQsZUFBZSxDQUFDO0lBQzNDL0MsSUFBSSxHQUFHLEVBQUU7RUFDWCxDQUFDO0VBQ0RELFFBQVEsQ0FBQ3NELEtBQUssQ0FBQyxDQUFDO0VBRWhCQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLFdBQVc7QUFDcEM7QUFFQSxTQUFTM0QsYUFBYUEsQ0FBQ0gsT0FBTyxFQUFFO0VBQzlCSyxRQUFRLENBQUMwRCxJQUFJLENBQUMsQ0FBQztFQUNmMUQsUUFBUSxDQUFDMkQsTUFBTSxDQUFDQyxTQUFTLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUVDLENBQUMsSUFBS0EsQ0FBQyxDQUFDSixJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3BEMUQsUUFBUSxHQUFHZCxTQUFTO0VBQ3BCcUUsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksR0FBRyxFQUFFO0FBQzNCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tb2RlbC9HQUJyaWRnZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy9vZmZzY3JlZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNlbmRUcmFja0V2ZW50TWVzc2FnZShjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCA9IFwiXCIpIHtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHR5cGU6IFwic2Nyb2xsQ2FwdHVyZVRyYWNrRXZlbnRcIiwgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZW5kVHJhY2tQYWdlTWVzc2FnZShwYXRoKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiBcInNjcm9sbENhcHR1cmVUcmFja1BhZ2VcIiwgcGF0aCB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHNlbmRUcmFja0V2ZW50TWVzc2FnZSB9IGZyb20gXCIuL21vZGVsL0dBQnJpZGdlXCI7XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSkgPT4ge1xuICBpZiAobWVzc2FnZS50YXJnZXQgPT09IFwib2Zmc2NyZWVuXCIpIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVTdGFydE9mZnNjcmVlblJlY29yZGluZ1wiOlxuICAgICAgICBzdGFydFJlY29yZGluZyhtZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZVN0b3BPZmZzY3JlZW5SZWNvcmRpbmdcIjpcbiAgICAgICAgc3RvcFJlY29yZGluZyhtZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnJlY29nbml6ZWQgbWVzc2FnZTpcIiwgbWVzc2FnZS50eXBlKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5sZXQgcmVjb3JkZXI7XG5sZXQgZGF0YSA9IFtdO1xuXG5hc3luYyBmdW5jdGlvbiBzdGFydFJlY29yZGluZyhtZXNzYWdlKSB7XG4gIGlmIChyZWNvcmRlcj8uc3RhdGUgPT09IFwicmVjb3JkaW5nXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYWxsZWQgc3RhcnRSZWNvcmRpbmcgd2hpbGUgcmVjb3JkaW5nIGlzIGluIHByb2dyZXNzLlwiKTtcbiAgfVxuXG4gIGNvbnN0IHNpemUgPSB7IHg6IG1lc3NhZ2UudGFiV2lkdGgsIHk6IG1lc3NhZ2UudGFiSGVpZ2h0IH07XG4gIGNvbnN0IHBpeGVsUmF0aW8gPSBtZXNzYWdlLnBpeGVsUmF0aW87XG4gIGNvbnN0IG1lZGlhT3B0aW9ucyA9IHt9O1xuICBpZiAobWVzc2FnZS5leHBvcnRWaWRlbykge1xuICAgIG1lZGlhT3B0aW9ucy52aWRlbyA9IHtcbiAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZTogXCJ0YWJcIixcbiAgICAgICAgY2hyb21lTWVkaWFTb3VyY2VJZDogbWVzc2FnZS5zdHJlYW1JZCxcbiAgICAgICAgbWluV2lkdGg6IHNpemUueCAqIHBpeGVsUmF0aW8sXG4gICAgICAgIG1heFdpZHRoOiBzaXplLnggKiBwaXhlbFJhdGlvLFxuICAgICAgICBtaW5IZWlnaHQ6IHNpemUueSAqIHBpeGVsUmF0aW8sXG4gICAgICAgIG1heEhlaWdodDogc2l6ZS55ICogcGl4ZWxSYXRpbyxcbiAgICAgICAgbWluRnJhbWVSYXRlOiAzMCxcbiAgICAgICAgbWF4RnJhbWVSYXRlOiA2MCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICBpZiAobWVzc2FnZS5leHBvcnRBdWRpbykge1xuICAgIG1lZGlhT3B0aW9ucy5hdWRpbyA9IHtcbiAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZTogXCJ0YWJcIixcbiAgICAgICAgY2hyb21lTWVkaWFTb3VyY2VJZDogbWVzc2FnZS5zdHJlYW1JZCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICBjb25zdCBtZWRpYSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKG1lZGlhT3B0aW9ucyk7XG5cbiAgaWYgKG1lc3NhZ2UuZXhwb3J0QXVkaW8pIHtcbiAgICBjb25zdCBvdXRwdXQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgY29uc3Qgc291cmNlID0gb3V0cHV0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKG1lZGlhKTtcbiAgICBzb3VyY2UuY29ubmVjdChvdXRwdXQuZGVzdGluYXRpb24pO1xuICB9XG5cbiAgbGV0IG1pbWVUeXBlID0gbWVzc2FnZS5taW1ldHlwZTtcbiAgbGV0IHZpZGVvQml0c1BlclNlY29uZCA9IG1lc3NhZ2UudmlkZW9CaXRzUGVyU2Vjb25kIHx8IDE2O1xuICBsZXQgYXVkaW9CaXRzUGVyU2Vjb25kID0gbWVzc2FnZS5hdWRpb0JpdHNQZXJTZWNvbmQgfHwgMTI4O1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWltZVR5cGUsXG4gICAgYXVkaW9CaXRzUGVyU2Vjb25kOiBhdWRpb0JpdHNQZXJTZWNvbmQgKiAxMDAwLFxuICAgIHZpZGVvQml0c1BlclNlY29uZDogdmlkZW9CaXRzUGVyU2Vjb25kICogMTAwMDAwMCxcbiAgfTtcblxuICBzZW5kVHJhY2tFdmVudE1lc3NhZ2UoXCJyZWNvcmRpbmdcIiwgXCJzdGFydFwiLCBvcHRpb25zLm1pbWVUeXBlKTtcblxuICByZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKG1lZGlhLCBvcHRpb25zKTtcbiAgcmVjb3JkZXIub25kYXRhYXZhaWxhYmxlID0gKGV2ZW50KSA9PiBkYXRhLnB1c2goZXZlbnQuZGF0YSk7XG4gIHJlY29yZGVyLm9uc3RvcCA9ICgpID0+IHtcbiAgICAvLyBjb25zdCBibG9iID0gbmV3IEJsb2IoZGF0YSwgeyB0eXBlOiBgdmlkZW8vJHtmb3JtYXR9YCB9KTtcbiAgICBjb25zdCBibG9iRm9ybWF0ID0gbWltZVR5cGUuc3BsaXQoXCI7XCIpWzBdO1xuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihkYXRhLCB7IHR5cGU6IGJsb2JGb3JtYXQgfSk7XG4gICAgY29uc3QgdmlkZW9VUkxNZXNzYWdlID0gT2JqZWN0LmFzc2lnbih7fSwgbWVzc2FnZSk7XG4gICAgT2JqZWN0LmFzc2lnbih2aWRlb1VSTE1lc3NhZ2UsIHtcbiAgICAgIHR5cGU6IFwic2Nyb2xsQ2FwdHVyZVZpZGVvVVJMXCIsXG4gICAgICB2aWRlb1VSTDogVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSxcbiAgICB9KTtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh2aWRlb1VSTE1lc3NhZ2UpO1xuICAgIGRhdGEgPSBbXTtcbiAgfTtcbiAgcmVjb3JkZXIuc3RhcnQoKTtcblxuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwicmVjb3JkaW5nXCI7XG59XG5cbmZ1bmN0aW9uIHN0b3BSZWNvcmRpbmcobWVzc2FnZSkge1xuICByZWNvcmRlci5zdG9wKCk7XG4gIHJlY29yZGVyLnN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKCh0KSA9PiB0LnN0b3AoKSk7XG4gIHJlY29yZGVyID0gdW5kZWZpbmVkO1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiXCI7XG59XG4iXSwibmFtZXMiOlsic2VuZFRyYWNrRXZlbnRNZXNzYWdlIiwiY2F0ZWdvcnkiLCJhY3Rpb24iLCJsYWJlbCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNocm9tZSIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsInR5cGUiLCJzZW5kVHJhY2tQYWdlTWVzc2FnZSIsInBhdGgiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJzdGFydFJlY29yZGluZyIsInN0b3BSZWNvcmRpbmciLCJFcnJvciIsInJlY29yZGVyIiwiZGF0YSIsInN0YXRlIiwic2l6ZSIsIngiLCJ0YWJXaWR0aCIsInkiLCJ0YWJIZWlnaHQiLCJwaXhlbFJhdGlvIiwibWVkaWFPcHRpb25zIiwiZXhwb3J0VmlkZW8iLCJ2aWRlbyIsIm1hbmRhdG9yeSIsImNocm9tZU1lZGlhU291cmNlIiwiY2hyb21lTWVkaWFTb3VyY2VJZCIsInN0cmVhbUlkIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsIm1pbkZyYW1lUmF0ZSIsIm1heEZyYW1lUmF0ZSIsImV4cG9ydEF1ZGlvIiwiYXVkaW8iLCJtZWRpYSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsIm91dHB1dCIsIkF1ZGlvQ29udGV4dCIsInNvdXJjZSIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwibWltZVR5cGUiLCJtaW1ldHlwZSIsInZpZGVvQml0c1BlclNlY29uZCIsImF1ZGlvQml0c1BlclNlY29uZCIsIm9wdGlvbnMiLCJNZWRpYVJlY29yZGVyIiwib25kYXRhYXZhaWxhYmxlIiwiZXZlbnQiLCJwdXNoIiwib25zdG9wIiwiYmxvYkZvcm1hdCIsInNwbGl0IiwiYmxvYiIsIkJsb2IiLCJ2aWRlb1VSTE1lc3NhZ2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ2aWRlb1VSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInN0YXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3RvcCIsInN0cmVhbSIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0Il0sInNvdXJjZVJvb3QiOiIifQ==