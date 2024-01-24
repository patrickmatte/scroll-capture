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

const {
  createFFmpeg,
  fetchFile
} = FFmpeg;
console.log('FFmpeg', FFmpeg);
console.log('window.FFmpeg', window.FFmpeg);
const ffmpeg = createFFmpeg({
  corePath: chrome.runtime.getURL("ffmpeg-core.js"),
  log: true,
  mainName: 'main'
});
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
let blob;
async function startRecording(message) {
  if (recorder?.state === 'recording') {
    throw new Error('Called startRecording while recording is in progress.');
  }
  console.log(startRecording, message);
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
  console.log('navigator.mediaDevices.getUserMedia', JSON.stringify(mediaOptions));
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
  console.log('MediaRecorder options', JSON.stringify(options));
  (0,_model_GABridge__WEBPACK_IMPORTED_MODULE_0__.sendTrackEventMessage)('recording', 'mimeType', options.mimeType);
  console.log('options');
  recorder = new MediaRecorder(media, options);
  recorder.ondataavailable = event => data.push(event.data);
  recorder.onstop = () => {
    // const blob = new Blob(data, { type: `video/${format}` });
    const blobFormat = mimeType.split(';')[0];
    blob = new Blob(data, {
      type: blobFormat
    });

    // const videoURLMessage = Object.assign({}, message);
    // Object.assign(videoURLMessage, {
    //   type: 'scrollCaptureVideoURL',
    //   videoURL: URL.createObjectURL(blob),
    // });
    // chrome.runtime.sendMessage(videoURLMessage);

    convertStreams(blob, message);
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
var worker;
var aab;
function print(text) {
  console.log(JSON.stringify({
    "type": "stdout",
    "data": text
  }));
}
;
function ffmpegConvert(message) {
  if (message.type === "command") {
    var Module = {
      print: print,
      printErr: print,
      files: message.files || [],
      arguments: message.arguments || [],
      TOTAL_MEMORY: message.TOTAL_MEMORY || false
    };
    var time = Date.now();
    var result = ffmpeg_run(Module);
    var totalTime = Date.now() - time;
    return {
      "type": "done",
      "data": result,
      "time": totalTime
    };
  }
}
;
function convertStreams(videoBlob, message) {
  var fileReader = new FileReader();
  fileReader.onload = async function () {
    aab = this.result;
    // const ffmpegResult = ffmpegConvert({
    //   type: 'command',
    //   arguments: '-i video.webm -nostdin -c:v copy output.mp4'.split(' '),
    //   files: [
    //     {
    //       data: new Uint8Array(aab),
    //       name: 'video.webm',
    //     },
    //   ],
    //   TOTAL_MEMORY: 256 * 1024 * 1024
    // });

    // var result = ffmpegResult.data[0];

    // var blob = new File([result.data], 'test.mp4', {
    //   type: 'video/mp4',
    // });

    // console.log('blob=', JSON.stringify(blob));

    const inputFileName = 'sample_video.webm';
    const outputFileName = 'sample_video.mp4';
    const commandStr = `ffmpeg -i ${inputFileName} -c:v copy -c:a aac ${outputFileName}`;
    const blob = await runFFmpeg(inputFileName, outputFileName, commandStr, new Uint8Array(aab));
    console.log("DONE!!!!");
    const videoURLMessage = Object.assign({}, message);
    Object.assign(videoURLMessage, {
      type: 'scrollCaptureVideoURL',
      videoURL: URL.createObjectURL(blob)
    });
    chrome.runtime.sendMessage(videoURLMessage);
  };
  fileReader.readAsArrayBuffer(videoBlob);
}
async function runFFmpeg(inputFileName, outputFileName, commandStr, file) {
  if (ffmpeg.isLoaded()) {
    await ffmpeg.exit();
  }
  await ffmpeg.load();
  const commandList = commandStr.split(' ');
  if (commandList.shift() !== 'ffmpeg') {
    alert('Please start with ffmpeg');
    return;
  }
  ffmpeg.FS('writeFile', inputFileName, await fetchFile(file));
  console.log(commandList);
  await ffmpeg.run(...commandList);
  const data = ffmpeg.FS('readFile', outputFileName);
  const blob = new Blob([data.buffer]);
  return blob;
  // downloadFile(blob, outputFileName);
}

function downloadFile(blob, fileName) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  a.click();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aWRnZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy9vZmZzY3JlZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNlbmRUcmFja0V2ZW50TWVzc2FnZShjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCA9ICcnKSB7XG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHlwZTogJ3Njcm9sbENhcHR1cmVUcmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZW5kVHJhY2tQYWdlTWVzc2FnZShwYXRoKSB7XG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHlwZTogJ3Njcm9sbENhcHR1cmVUcmFja1BhZ2UnLCBwYXRoIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzZW5kVHJhY2tFdmVudE1lc3NhZ2UgfSBmcm9tICcuL21vZGVsL0dBQnJpZGdlJztcblxuY29uc3QgeyBjcmVhdGVGRm1wZWcsIGZldGNoRmlsZSB9ID0gRkZtcGVnO1xuY29uc29sZS5sb2coJ0ZGbXBlZycsIEZGbXBlZyk7XG5jb25zb2xlLmxvZygnd2luZG93LkZGbXBlZycsIHdpbmRvdy5GRm1wZWcpO1xuXG5jb25zdCBmZm1wZWcgPSBjcmVhdGVGRm1wZWcoe1xuICAgIGNvcmVQYXRoOiBjaHJvbWUucnVudGltZS5nZXRVUkwoXCJmZm1wZWctY29yZS5qc1wiKSxcbiAgICBsb2c6IHRydWUsXG4gICAgbWFpbk5hbWU6ICdtYWluJ1xufSk7XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSkgPT4ge1xuICBpZiAobWVzc2FnZS50YXJnZXQgPT09ICdvZmZzY3JlZW4nKSB7XG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVTdGFydE9mZnNjcmVlblJlY29yZGluZyc6XG4gICAgICAgIHN0YXJ0UmVjb3JkaW5nKG1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVTdG9wT2Zmc2NyZWVuUmVjb3JkaW5nJzpcbiAgICAgICAgc3RvcFJlY29yZGluZyhtZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VucmVjb2duaXplZCBtZXNzYWdlOicsIG1lc3NhZ2UudHlwZSk7XG4gICAgfVxuICB9XG59KTtcblxubGV0IHJlY29yZGVyO1xubGV0IGRhdGEgPSBbXTtcbmxldCBibG9iO1xuXG5hc3luYyBmdW5jdGlvbiBzdGFydFJlY29yZGluZyhtZXNzYWdlKSB7XG4gIGlmIChyZWNvcmRlcj8uc3RhdGUgPT09ICdyZWNvcmRpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsZWQgc3RhcnRSZWNvcmRpbmcgd2hpbGUgcmVjb3JkaW5nIGlzIGluIHByb2dyZXNzLicpO1xuICB9XG4gIGNvbnNvbGUubG9nKHN0YXJ0UmVjb3JkaW5nLCBtZXNzYWdlKTtcbiAgY29uc3Qgc2l6ZSA9IHsgeDogbWVzc2FnZS50YWJXaWR0aCwgeTogbWVzc2FnZS50YWJIZWlnaHQgfTtcbiAgY29uc3QgcGl4ZWxSYXRpbyA9IG1lc3NhZ2UucGl4ZWxSYXRpbztcbiAgY29uc3QgbWVkaWFPcHRpb25zID0ge307XG4gIGlmIChtZXNzYWdlLmV4cG9ydFZpZGVvKSB7XG4gICAgbWVkaWFPcHRpb25zLnZpZGVvID0ge1xuICAgICAgbWFuZGF0b3J5OiB7XG4gICAgICAgIGNocm9tZU1lZGlhU291cmNlOiAndGFiJyxcbiAgICAgICAgY2hyb21lTWVkaWFTb3VyY2VJZDogbWVzc2FnZS5zdHJlYW1JZCxcbiAgICAgICAgbWluV2lkdGg6IHNpemUueCAqIHBpeGVsUmF0aW8sXG4gICAgICAgIG1heFdpZHRoOiBzaXplLnggKiBwaXhlbFJhdGlvLFxuICAgICAgICBtaW5IZWlnaHQ6IHNpemUueSAqIHBpeGVsUmF0aW8sXG4gICAgICAgIG1heEhlaWdodDogc2l6ZS55ICogcGl4ZWxSYXRpbyxcbiAgICAgICAgbWluRnJhbWVSYXRlOiAzMCxcbiAgICAgICAgbWF4RnJhbWVSYXRlOiA2MCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICBpZiAobWVzc2FnZS5leHBvcnRBdWRpbykge1xuICAgIG1lZGlhT3B0aW9ucy5hdWRpbyA9IHtcbiAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZTogJ3RhYicsXG4gICAgICAgIGNocm9tZU1lZGlhU291cmNlSWQ6IG1lc3NhZ2Uuc3RyZWFtSWQsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgY29uc29sZS5sb2coJ25hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhJywgSlNPTi5zdHJpbmdpZnkobWVkaWFPcHRpb25zKSk7XG4gIGNvbnN0IG1lZGlhID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEobWVkaWFPcHRpb25zKTtcblxuICBpZiAobWVzc2FnZS5leHBvcnRBdWRpbykge1xuICAgIGNvbnN0IG91dHB1dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICBjb25zdCBzb3VyY2UgPSBvdXRwdXQuY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UobWVkaWEpO1xuICAgIHNvdXJjZS5jb25uZWN0KG91dHB1dC5kZXN0aW5hdGlvbik7XG4gIH1cblxuICBsZXQgbWltZVR5cGUgPSBtZXNzYWdlLm1pbWV0eXBlO1xuICBsZXQgdmlkZW9CaXRzUGVyU2Vjb25kID0gbWVzc2FnZS52aWRlb0JpdHNQZXJTZWNvbmQgfHwgMTY7XG4gIGxldCBhdWRpb0JpdHNQZXJTZWNvbmQgPSBtZXNzYWdlLmF1ZGlvQml0c1BlclNlY29uZCB8fCAxMjg7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtaW1lVHlwZSxcbiAgICBhdWRpb0JpdHNQZXJTZWNvbmQ6IGF1ZGlvQml0c1BlclNlY29uZCAqIDEwMDAsXG4gICAgdmlkZW9CaXRzUGVyU2Vjb25kOiB2aWRlb0JpdHNQZXJTZWNvbmQgKiAxMDAwMDAwLFxuICB9O1xuXG4gIGNvbnNvbGUubG9nKCdNZWRpYVJlY29yZGVyIG9wdGlvbnMnLCBKU09OLnN0cmluZ2lmeShvcHRpb25zKSk7XG5cbiAgc2VuZFRyYWNrRXZlbnRNZXNzYWdlKCdyZWNvcmRpbmcnLCAnbWltZVR5cGUnLCBvcHRpb25zLm1pbWVUeXBlKTtcbiAgY29uc29sZS5sb2coJ29wdGlvbnMnKTtcbiAgcmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihtZWRpYSwgb3B0aW9ucyk7XG4gIHJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IChldmVudCkgPT4gZGF0YS5wdXNoKGV2ZW50LmRhdGEpO1xuICByZWNvcmRlci5vbnN0b3AgPSAoKSA9PiB7XG4gICAgLy8gY29uc3QgYmxvYiA9IG5ldyBCbG9iKGRhdGEsIHsgdHlwZTogYHZpZGVvLyR7Zm9ybWF0fWAgfSk7XG4gICAgY29uc3QgYmxvYkZvcm1hdCA9IG1pbWVUeXBlLnNwbGl0KCc7JylbMF07XG4gICAgYmxvYiA9IG5ldyBCbG9iKGRhdGEsIHsgdHlwZTogYmxvYkZvcm1hdCB9KTtcblxuICAgIC8vIGNvbnN0IHZpZGVvVVJMTWVzc2FnZSA9IE9iamVjdC5hc3NpZ24oe30sIG1lc3NhZ2UpO1xuICAgIC8vIE9iamVjdC5hc3NpZ24odmlkZW9VUkxNZXNzYWdlLCB7XG4gICAgLy8gICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVZpZGVvVVJMJyxcbiAgICAvLyAgIHZpZGVvVVJMOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpLFxuICAgIC8vIH0pO1xuICAgIC8vIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHZpZGVvVVJMTWVzc2FnZSk7XG5cbiAgICBjb252ZXJ0U3RyZWFtcyhibG9iLCBtZXNzYWdlKTtcblxuICAgIGRhdGEgPSBbXTtcbiAgfTtcbiAgcmVjb3JkZXIuc3RhcnQoKTtcblxuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICdyZWNvcmRpbmcnO1xufVxuXG5mdW5jdGlvbiBzdG9wUmVjb3JkaW5nKG1lc3NhZ2UpIHtcbiAgcmVjb3JkZXIuc3RvcCgpO1xuICByZWNvcmRlci5zdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCgodCkgPT4gdC5zdG9wKCkpO1xuICByZWNvcmRlciA9IHVuZGVmaW5lZDtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnJztcbn1cblxudmFyIHdvcmtlcjtcbnZhciBhYWI7XG5cbmZ1bmN0aW9uIHByaW50KHRleHQpIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh7XG4gICAgICBcInR5cGVcIiA6IFwic3Rkb3V0XCIsXG4gICAgICBcImRhdGFcIiA6IHRleHRcbiAgfSkpO1xufTtcblxuZnVuY3Rpb24gZmZtcGVnQ29udmVydChtZXNzYWdlKSB7XG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gXCJjb21tYW5kXCIpIHtcbiAgICAgICAgdmFyIE1vZHVsZSA9IHtcbiAgICAgICAgICAgIHByaW50OiBwcmludCxcbiAgICAgICAgICAgIHByaW50RXJyOiBwcmludCxcbiAgICAgICAgICAgIGZpbGVzOiBtZXNzYWdlLmZpbGVzIHx8IFtdLFxuICAgICAgICAgICAgYXJndW1lbnRzOiBtZXNzYWdlLmFyZ3VtZW50cyB8fCBbXSxcbiAgICAgICAgICAgIFRPVEFMX01FTU9SWTogbWVzc2FnZS5UT1RBTF9NRU1PUlkgfHwgZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgdGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIHZhciByZXN1bHQgPSBmZm1wZWdfcnVuKE1vZHVsZSk7XG4gICAgICAgIHZhciB0b3RhbFRpbWUgPSBEYXRlLm5vdygpIC0gdGltZTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImRvbmVcIixcbiAgICAgICAgICAgIFwiZGF0YVwiIDogcmVzdWx0LFxuICAgICAgICAgICAgXCJ0aW1lXCIgOiB0b3RhbFRpbWVcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBjb252ZXJ0U3RyZWFtcyh2aWRlb0Jsb2IsIG1lc3NhZ2UpIHtcbiAgdmFyIGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICBmaWxlUmVhZGVyLm9ubG9hZCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBhYWIgPSB0aGlzLnJlc3VsdDtcbiAgICAvLyBjb25zdCBmZm1wZWdSZXN1bHQgPSBmZm1wZWdDb252ZXJ0KHtcbiAgICAvLyAgIHR5cGU6ICdjb21tYW5kJyxcbiAgICAvLyAgIGFyZ3VtZW50czogJy1pIHZpZGVvLndlYm0gLW5vc3RkaW4gLWM6diBjb3B5IG91dHB1dC5tcDQnLnNwbGl0KCcgJyksXG4gICAgLy8gICBmaWxlczogW1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgZGF0YTogbmV3IFVpbnQ4QXJyYXkoYWFiKSxcbiAgICAvLyAgICAgICBuYW1lOiAndmlkZW8ud2VibScsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICBdLFxuICAgIC8vICAgVE9UQUxfTUVNT1JZOiAyNTYgKiAxMDI0ICogMTAyNFxuICAgIC8vIH0pO1xuXG4gICAgLy8gdmFyIHJlc3VsdCA9IGZmbXBlZ1Jlc3VsdC5kYXRhWzBdO1xuXG4gICAgLy8gdmFyIGJsb2IgPSBuZXcgRmlsZShbcmVzdWx0LmRhdGFdLCAndGVzdC5tcDQnLCB7XG4gICAgLy8gICB0eXBlOiAndmlkZW8vbXA0JyxcbiAgICAvLyB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdibG9iPScsIEpTT04uc3RyaW5naWZ5KGJsb2IpKTtcblxuICAgIGNvbnN0IGlucHV0RmlsZU5hbWUgPSAnc2FtcGxlX3ZpZGVvLndlYm0nO1xuICAgIGNvbnN0IG91dHB1dEZpbGVOYW1lID0gJ3NhbXBsZV92aWRlby5tcDQnO1xuICBcbiAgICBjb25zdCBjb21tYW5kU3RyID0gYGZmbXBlZyAtaSAke2lucHV0RmlsZU5hbWV9IC1jOnYgY29weSAtYzphIGFhYyAke291dHB1dEZpbGVOYW1lfWA7XG4gICAgY29uc3QgYmxvYiA9IGF3YWl0IHJ1bkZGbXBlZyhpbnB1dEZpbGVOYW1lLCBvdXRwdXRGaWxlTmFtZSwgY29tbWFuZFN0ciwgbmV3IFVpbnQ4QXJyYXkoYWFiKSk7XG4gICAgY29uc29sZS5sb2coXCJET05FISEhIVwiKVxuXG4gICAgY29uc3QgdmlkZW9VUkxNZXNzYWdlID0gT2JqZWN0LmFzc2lnbih7fSwgbWVzc2FnZSk7XG4gICAgT2JqZWN0LmFzc2lnbih2aWRlb1VSTE1lc3NhZ2UsIHtcbiAgICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlVmlkZW9VUkwnLFxuICAgICAgdmlkZW9VUkw6IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYiksXG4gICAgfSk7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UodmlkZW9VUkxNZXNzYWdlKTtcblxuICB9O1xuICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHZpZGVvQmxvYik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJ1bkZGbXBlZyhpbnB1dEZpbGVOYW1lLCBvdXRwdXRGaWxlTmFtZSwgY29tbWFuZFN0ciwgZmlsZSkge1xuICBpZiAoZmZtcGVnLmlzTG9hZGVkKCkpIHtcbiAgICAgIGF3YWl0IGZmbXBlZy5leGl0KCk7XG4gIH1cblxuICBhd2FpdCBmZm1wZWcubG9hZCgpO1xuXG4gIGNvbnN0IGNvbW1hbmRMaXN0ID0gY29tbWFuZFN0ci5zcGxpdCgnICcpO1xuICBpZiAoY29tbWFuZExpc3Quc2hpZnQoKSAhPT0gJ2ZmbXBlZycpIHtcbiAgICAgIGFsZXJ0KCdQbGVhc2Ugc3RhcnQgd2l0aCBmZm1wZWcnKTtcbiAgICAgIHJldHVybjtcbiAgfVxuXG4gIGZmbXBlZy5GUygnd3JpdGVGaWxlJywgaW5wdXRGaWxlTmFtZSwgYXdhaXQgZmV0Y2hGaWxlKGZpbGUpKTtcbiAgY29uc29sZS5sb2coY29tbWFuZExpc3QpO1xuICBhd2FpdCBmZm1wZWcucnVuKC4uLmNvbW1hbmRMaXN0KTtcbiAgY29uc3QgZGF0YSA9IGZmbXBlZy5GUygncmVhZEZpbGUnLCBvdXRwdXRGaWxlTmFtZSk7XG4gIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbZGF0YS5idWZmZXJdKTtcbiAgcmV0dXJuIGJsb2I7XG4gIC8vIGRvd25sb2FkRmlsZShibG9iLCBvdXRwdXRGaWxlTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGRvd25sb2FkRmlsZShibG9iLCBmaWxlTmFtZSkge1xuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICBhLmRvd25sb2FkID0gZmlsZU5hbWU7XG4gIGEuY2xpY2soKTtcbn1cbiJdLCJuYW1lcyI6WyJzZW5kVHJhY2tFdmVudE1lc3NhZ2UiLCJjYXRlZ29yeSIsImFjdGlvbiIsImxhYmVsIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY2hyb21lIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwidHlwZSIsInNlbmRUcmFja1BhZ2VNZXNzYWdlIiwicGF0aCIsImNyZWF0ZUZGbXBlZyIsImZldGNoRmlsZSIsIkZGbXBlZyIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJmZm1wZWciLCJjb3JlUGF0aCIsImdldFVSTCIsIm1haW5OYW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJtZXNzYWdlIiwidGFyZ2V0Iiwic3RhcnRSZWNvcmRpbmciLCJzdG9wUmVjb3JkaW5nIiwiRXJyb3IiLCJyZWNvcmRlciIsImRhdGEiLCJibG9iIiwic3RhdGUiLCJzaXplIiwieCIsInRhYldpZHRoIiwieSIsInRhYkhlaWdodCIsInBpeGVsUmF0aW8iLCJtZWRpYU9wdGlvbnMiLCJleHBvcnRWaWRlbyIsInZpZGVvIiwibWFuZGF0b3J5IiwiY2hyb21lTWVkaWFTb3VyY2UiLCJjaHJvbWVNZWRpYVNvdXJjZUlkIiwic3RyZWFtSWQiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwibWluRnJhbWVSYXRlIiwibWF4RnJhbWVSYXRlIiwiZXhwb3J0QXVkaW8iLCJhdWRpbyIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZWRpYSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsIm91dHB1dCIsIkF1ZGlvQ29udGV4dCIsInNvdXJjZSIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwibWltZVR5cGUiLCJtaW1ldHlwZSIsInZpZGVvQml0c1BlclNlY29uZCIsImF1ZGlvQml0c1BlclNlY29uZCIsIm9wdGlvbnMiLCJNZWRpYVJlY29yZGVyIiwib25kYXRhYXZhaWxhYmxlIiwiZXZlbnQiLCJwdXNoIiwib25zdG9wIiwiYmxvYkZvcm1hdCIsInNwbGl0IiwiQmxvYiIsImNvbnZlcnRTdHJlYW1zIiwic3RhcnQiLCJsb2NhdGlvbiIsImhhc2giLCJzdG9wIiwic3RyZWFtIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInQiLCJ3b3JrZXIiLCJhYWIiLCJwcmludCIsInRleHQiLCJmZm1wZWdDb252ZXJ0IiwiTW9kdWxlIiwicHJpbnRFcnIiLCJmaWxlcyIsIlRPVEFMX01FTU9SWSIsInRpbWUiLCJEYXRlIiwibm93IiwicmVzdWx0IiwiZmZtcGVnX3J1biIsInRvdGFsVGltZSIsInZpZGVvQmxvYiIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiaW5wdXRGaWxlTmFtZSIsIm91dHB1dEZpbGVOYW1lIiwiY29tbWFuZFN0ciIsInJ1bkZGbXBlZyIsIlVpbnQ4QXJyYXkiLCJ2aWRlb1VSTE1lc3NhZ2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ2aWRlb1VSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlYWRBc0FycmF5QnVmZmVyIiwiZmlsZSIsImlzTG9hZGVkIiwiZXhpdCIsImxvYWQiLCJjb21tYW5kTGlzdCIsInNoaWZ0IiwiYWxlcnQiLCJGUyIsInJ1biIsImJ1ZmZlciIsImRvd25sb2FkRmlsZSIsImZpbGVOYW1lIiwiYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJkb3dubG9hZCIsImNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==