import { sendTrackEventMessage } from './model/GABridge';

const { createFFmpeg, fetchFile } = FFmpeg;
console.log('FFmpeg', FFmpeg);
console.log('window.FFmpeg', window.FFmpeg);

const ffmpeg = createFFmpeg({
    corePath: chrome.runtime.getURL("ffmpeg-core.js"),
    log: true,
    mainName: 'main'
});

chrome.runtime.onMessage.addListener((message) => {
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
  const size = { x: message.tabWidth, y: message.tabHeight };
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
        maxFrameRate: 60,
      },
    };
  }
  if (message.exportAudio) {
    mediaOptions.audio = {
      mandatory: {
        chromeMediaSource: 'tab',
        chromeMediaSourceId: message.streamId,
      },
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
    videoBitsPerSecond: videoBitsPerSecond * 1000000,
  };

  console.log('MediaRecorder options', JSON.stringify(options));

  sendTrackEventMessage('recording', 'mimeType', options.mimeType);
  console.log('options');
  recorder = new MediaRecorder(media, options);
  recorder.ondataavailable = (event) => data.push(event.data);
  recorder.onstop = () => {
    // const blob = new Blob(data, { type: `video/${format}` });
    const blobFormat = mimeType.split(';')[0];
    blob = new Blob(data, { type: blobFormat });

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
  recorder.stream.getTracks().forEach((t) => t.stop());
  recorder = undefined;
  window.location.hash = '';
}

var worker;
var aab;

function print(text) {
    console.log(JSON.stringify({
      "type" : "stdout",
      "data" : text
  }));
};

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
            "type" : "done",
            "data" : result,
            "time" : totalTime
        };
    }
};

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
    console.log("DONE!!!!")

    const videoURLMessage = Object.assign({}, message);
    Object.assign(videoURLMessage, {
      type: 'scrollCaptureVideoURL',
      videoURL: URL.createObjectURL(blob),
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
