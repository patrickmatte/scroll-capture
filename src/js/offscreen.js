import { createFilename, createFilenameOnly } from './model/utils';

let recorder;
let data = [];
let blob;
let currentTabId;

const ffmpeg = FFmpeg.createFFmpeg({
  corePath: chrome.runtime.getURL('ffmpeg-core.js'),
  log: false,
  mainName: 'main',
});
// console.log('ffmpeg', ffmpeg);

ffmpeg.setProgress((params) => {
  console.log('progress:', params);
});

ffmpeg.setLogger((params) => {
  switch (params.type) {
    case 'fferr':
    // case 'info':
    case 'ffout':
      const msg = {
        type: 'scrollCaptureFFmpegLogToSW',
        logType: params.type,
        message: params.message,
        tabId: currentTabId,
      };
      // console.log('offscreen msg', msg);
      chrome.runtime.sendMessage(msg);
      break;
  }
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

async function startRecording(message) {
  currentTabId = message.tabId;

  if (recorder?.state === 'recording') {
    throw new Error('Called startRecording while recording is in progress.');
  }
  console.log('startRecording', JSON.stringify(message));
  const size = { x: message.tabWidth, y: message.tabHeight };
  const pixelRatio = message.pixelRatio;
  const constraints = {};
  const constraintSizes = [
    { width: Math.floor(size.x), height: Math.floor(size.y) },
    { width: Math.floor(size.x * message.zoomLevel), height: Math.floor(size.y * message.zoomLevel) },
    { width: Math.floor(size.x * pixelRatio), height: Math.floor(size.y * pixelRatio) },
  ];
  constraintSizes.sort((a, b) => {
    return a.width * a.height - b.width * b.height;
  });
  console.log('constraintSizes', constraintSizes);
  if (message.exportVideo) {
    constraints.video = {
      mandatory: {
        chromeMediaSource: 'tab',
        chromeMediaSourceId: message.streamId,
        minWidth: constraintSizes[0].width,
        minHeight: constraintSizes[0].height,
        maxWidth: constraintSizes[2].width,
        maxHeight: constraintSizes[2].height,
        minFrameRate: 30,
        maxFrameRate: 60,
      },
    };
  }
  if (message.exportAudio) {
    constraints.audio = {
      mandatory: {
        chromeMediaSource: 'tab',
        chromeMediaSourceId: message.streamId,
      },
    };
  }
  console.log('navigator.mediaDevices.getUserMedia', JSON.stringify(constraints));
  let media;
  try {
    media = await navigator.mediaDevices.getUserMedia(constraints);
  } catch (error) {
    console.log('navigator.mediaDevices.getUserMedia error', error);
  }
  console.log('media=', media);

  if (message.exportAudio) {
    const output = new AudioContext();
    const source = output.createMediaStreamSource(media);
    source.connect(output.destination);
  }

  let format = message.format;
  let audioCodec = message.audioCodec;
  if (message.needsFFMPEG) {
    format = 'webm';
    audioCodec = 'pcm';
  }

  let mimeType;
  if (message.exportVideo) {
    mimeType = `video/${format};codecs=${message.videoCodec}`;
    if (message.exportAudio) {
      mimeType += `,${audioCodec}`;
    }
  } else {
    mimeType = `audio/${format};codecs=${audioCodec}`;
  }

  let videoBitsPerSecond = message.videoBitsPerSecond || 16;
  let audioBitsPerSecond = message.audioBitsPerSecond || 128;

  const options = {
    mimeType,
    audioBitsPerSecond: audioBitsPerSecond * 1000,
    videoBitsPerSecond: videoBitsPerSecond * 1000000,
  };

  console.log('MediaRecorder', JSON.stringify(options));

  recorder = new MediaRecorder(media, options);
  recorder.ondataavailable = (event) => data.push(event.data);
  recorder.onstop = () => {
    // console.log('data=', data);
    const blobFormat = mimeType.split(';')[0];
    // console.log('blobFormat=', blobFormat);
    blob = new Blob(data, { type: blobFormat });
    // console.log('blob=', blob);

    const transcodedCodecs = ['aac', 'mp3'];

    if (message.needsFFMPEG) {
      convertStreams(blob, message);
    } else {
      sendBlob(blob, message);
    }

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

function convertStreams(videoBlob, message) {
  var fileReader = new FileReader();
  fileReader.onload = async function () {
    let inputFileName = `sample_video.webm`;
    let outputFileName = `sample_video.${message.extension}`;
    let commandStr = `ffmpeg -i ${inputFileName}`;
    if (message.exportVideo) commandStr += ` -c:v copy`;
    if (message.exportAudio) commandStr += ` -c:a ${message.audioCodec} -b:a ${message.audioBitsPerSecond}k`;
    commandStr += ` ${outputFileName}`;

    const blob = await runFFmpeg(inputFileName, outputFileName, commandStr, new Uint8Array(this.result));

    sendBlob(blob, message);

    // const videoURLMessage = {
    //   type: 'scrollCaptureVideoURLBackground',
    //   videoURL: URL.createObjectURL(blob),
    //   fileName: downloadFileName,
    //   tabId: message.tabId,
    //   mimeType: `video/${downloadExtension}`,
    // };
    // chrome.runtime.sendMessage(videoURLMessage);
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

  ffmpeg.FS('writeFile', inputFileName, await FFmpeg.fetchFile(file));
  await ffmpeg.run(...commandList);
  const data = ffmpeg.FS('readFile', outputFileName);
  // console.log('ffmpeg data', data);

  const blob = new Blob([data.buffer]);
  // console.log('ffmpeg blob', blob);
  return blob;
  // downloadFile(blob, outputFileName);
}

function sendBlob(blob, message) {
  const videoURLMessage = {
    type: 'scrollCaptureVideoURLBackground',
    videoURL: URL.createObjectURL(blob),
    fileName: createFilename(message.extension),
    tabId: message.tabId,
    mimeType: message.exportVideo ? 'video' : 'audio' + '/' + message.extension,
  };
  chrome.runtime.sendMessage(videoURLMessage);
}
function downloadFile(blob, fileName) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  a.click();
}
