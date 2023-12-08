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
  console.log('offscreen.startRecording');
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
    console.log('recorder.onstop');
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
  console.log('offscreen.stopRecording');
  recorder.stop();
  recorder.stream.getTracks().forEach(t => t.stop());
  recorder = undefined;
  window.location.hash = '';
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2pzL29mZnNjcmVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gc2VuZFRyYWNrRXZlbnRNZXNzYWdlKGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsID0gJycpIHtcbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVRyYWNrRXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRUcmFja1BhZ2VNZXNzYWdlKHBhdGgpIHtcbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVRyYWNrUGFnZScsIHBhdGggfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHNlbmRUcmFja0V2ZW50TWVzc2FnZSB9IGZyb20gJy4vbW9kZWwvR0FCcmlkZ2UnO1xuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UpID0+IHtcbiAgaWYgKG1lc3NhZ2UudGFyZ2V0ID09PSAnb2Zmc2NyZWVuJykge1xuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlICdzY3JvbGxDYXB0dXJlU3RhcnRPZmZzY3JlZW5SZWNvcmRpbmcnOlxuICAgICAgICBzdGFydFJlY29yZGluZyhtZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzY3JvbGxDYXB0dXJlU3RvcE9mZnNjcmVlblJlY29yZGluZyc6XG4gICAgICAgIHN0b3BSZWNvcmRpbmcobWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnJlY29nbml6ZWQgbWVzc2FnZTonLCBtZXNzYWdlLnR5cGUpO1xuICAgIH1cbiAgfVxufSk7XG5cbmxldCByZWNvcmRlcjtcbmxldCBkYXRhID0gW107XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0UmVjb3JkaW5nKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5sb2coJ29mZnNjcmVlbi5zdGFydFJlY29yZGluZycpO1xuXG4gIGlmIChyZWNvcmRlcj8uc3RhdGUgPT09ICdyZWNvcmRpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsZWQgc3RhcnRSZWNvcmRpbmcgd2hpbGUgcmVjb3JkaW5nIGlzIGluIHByb2dyZXNzLicpO1xuICB9XG5cbiAgY29uc3Qgc2l6ZSA9IHsgeDogbWVzc2FnZS50YWJXaWR0aCwgeTogbWVzc2FnZS50YWJIZWlnaHQgfTtcbiAgY29uc3QgcGl4ZWxSYXRpbyA9IG1lc3NhZ2UucGl4ZWxSYXRpbztcbiAgY29uc3QgbWVkaWFPcHRpb25zID0ge307XG4gIGlmIChtZXNzYWdlLmV4cG9ydFZpZGVvKSB7XG4gICAgbWVkaWFPcHRpb25zLnZpZGVvID0ge1xuICAgICAgbWFuZGF0b3J5OiB7XG4gICAgICAgIGNocm9tZU1lZGlhU291cmNlOiAndGFiJyxcbiAgICAgICAgY2hyb21lTWVkaWFTb3VyY2VJZDogbWVzc2FnZS5zdHJlYW1JZCxcbiAgICAgICAgbWluV2lkdGg6IHNpemUueCAqIHBpeGVsUmF0aW8sXG4gICAgICAgIG1heFdpZHRoOiBzaXplLnggKiBwaXhlbFJhdGlvLFxuICAgICAgICBtaW5IZWlnaHQ6IHNpemUueSAqIHBpeGVsUmF0aW8sXG4gICAgICAgIG1heEhlaWdodDogc2l6ZS55ICogcGl4ZWxSYXRpbyxcbiAgICAgICAgbWluRnJhbWVSYXRlOiAzMCxcbiAgICAgICAgbWF4RnJhbWVSYXRlOiA2MCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICBpZiAobWVzc2FnZS5leHBvcnRBdWRpbykge1xuICAgIG1lZGlhT3B0aW9ucy5hdWRpbyA9IHtcbiAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZTogJ3RhYicsXG4gICAgICAgIGNocm9tZU1lZGlhU291cmNlSWQ6IG1lc3NhZ2Uuc3RyZWFtSWQsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgY29uc3QgbWVkaWEgPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShtZWRpYU9wdGlvbnMpO1xuXG4gIGlmIChtZXNzYWdlLmV4cG9ydEF1ZGlvKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIGNvbnN0IHNvdXJjZSA9IG91dHB1dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShtZWRpYSk7XG4gICAgc291cmNlLmNvbm5lY3Qob3V0cHV0LmRlc3RpbmF0aW9uKTtcbiAgfVxuXG4gIGxldCBtaW1lVHlwZSA9IG1lc3NhZ2UubWltZXR5cGU7XG4gIGxldCB2aWRlb0JpdHNQZXJTZWNvbmQgPSBtZXNzYWdlLnZpZGVvQml0c1BlclNlY29uZCB8fCAxNjtcbiAgbGV0IGF1ZGlvQml0c1BlclNlY29uZCA9IG1lc3NhZ2UuYXVkaW9CaXRzUGVyU2Vjb25kIHx8IDEyODtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1pbWVUeXBlLFxuICAgIGF1ZGlvQml0c1BlclNlY29uZDogYXVkaW9CaXRzUGVyU2Vjb25kICogMTAwMCxcbiAgICB2aWRlb0JpdHNQZXJTZWNvbmQ6IHZpZGVvQml0c1BlclNlY29uZCAqIDEwMDAwMDAsXG4gIH07XG5cbiAgc2VuZFRyYWNrRXZlbnRNZXNzYWdlKCdyZWNvcmRpbmcnLCAnbWltZVR5cGUnLCBvcHRpb25zLm1pbWVUeXBlKTtcblxuICByZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKG1lZGlhLCBvcHRpb25zKTtcbiAgcmVjb3JkZXIub25kYXRhYXZhaWxhYmxlID0gKGV2ZW50KSA9PiBkYXRhLnB1c2goZXZlbnQuZGF0YSk7XG4gIHJlY29yZGVyLm9uc3RvcCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmVjb3JkZXIub25zdG9wJyk7XG4gICAgLy8gY29uc3QgYmxvYiA9IG5ldyBCbG9iKGRhdGEsIHsgdHlwZTogYHZpZGVvLyR7Zm9ybWF0fWAgfSk7XG4gICAgY29uc3QgYmxvYkZvcm1hdCA9IG1pbWVUeXBlLnNwbGl0KCc7JylbMF07XG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKGRhdGEsIHsgdHlwZTogYmxvYkZvcm1hdCB9KTtcbiAgICBjb25zdCB2aWRlb1VSTE1lc3NhZ2UgPSBPYmplY3QuYXNzaWduKHt9LCBtZXNzYWdlKTtcbiAgICBPYmplY3QuYXNzaWduKHZpZGVvVVJMTWVzc2FnZSwge1xuICAgICAgdHlwZTogJ3Njcm9sbENhcHR1cmVWaWRlb1VSTCcsXG4gICAgICB2aWRlb1VSTDogVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSxcbiAgICB9KTtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh2aWRlb1VSTE1lc3NhZ2UpO1xuICAgIGRhdGEgPSBbXTtcbiAgfTtcbiAgcmVjb3JkZXIuc3RhcnQoKTtcblxuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICdyZWNvcmRpbmcnO1xufVxuXG5mdW5jdGlvbiBzdG9wUmVjb3JkaW5nKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5sb2coJ29mZnNjcmVlbi5zdG9wUmVjb3JkaW5nJyk7XG4gIHJlY29yZGVyLnN0b3AoKTtcbiAgcmVjb3JkZXIuc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goKHQpID0+IHQuc3RvcCgpKTtcbiAgcmVjb3JkZXIgPSB1bmRlZmluZWQ7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyc7XG59XG4iXSwibmFtZXMiOlsic2VuZFRyYWNrRXZlbnRNZXNzYWdlIiwiY2F0ZWdvcnkiLCJhY3Rpb24iLCJsYWJlbCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNocm9tZSIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsInR5cGUiLCJzZW5kVHJhY2tQYWdlTWVzc2FnZSIsInBhdGgiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJzdGFydFJlY29yZGluZyIsInN0b3BSZWNvcmRpbmciLCJFcnJvciIsInJlY29yZGVyIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsInNpemUiLCJ4IiwidGFiV2lkdGgiLCJ5IiwidGFiSGVpZ2h0IiwicGl4ZWxSYXRpbyIsIm1lZGlhT3B0aW9ucyIsImV4cG9ydFZpZGVvIiwidmlkZW8iLCJtYW5kYXRvcnkiLCJjaHJvbWVNZWRpYVNvdXJjZSIsImNocm9tZU1lZGlhU291cmNlSWQiLCJzdHJlYW1JZCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJtaW5GcmFtZVJhdGUiLCJtYXhGcmFtZVJhdGUiLCJleHBvcnRBdWRpbyIsImF1ZGlvIiwibWVkaWEiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJvdXRwdXQiLCJBdWRpb0NvbnRleHQiLCJzb3VyY2UiLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsIm1pbWVUeXBlIiwibWltZXR5cGUiLCJ2aWRlb0JpdHNQZXJTZWNvbmQiLCJhdWRpb0JpdHNQZXJTZWNvbmQiLCJvcHRpb25zIiwiTWVkaWFSZWNvcmRlciIsIm9uZGF0YWF2YWlsYWJsZSIsImV2ZW50IiwicHVzaCIsIm9uc3RvcCIsImJsb2JGb3JtYXQiLCJzcGxpdCIsImJsb2IiLCJCbG9iIiwidmlkZW9VUkxNZXNzYWdlIiwiT2JqZWN0IiwiYXNzaWduIiwidmlkZW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzdGFydCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInN0b3AiLCJzdHJlYW0iLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidCJdLCJzb3VyY2VSb290IjoiIn0=