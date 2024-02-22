import { createFilename, createFilenameOnly } from './model/utils';

let recorder;
let data = [];
let blob;
let currentTabId;

const ffmpeg = FFmpeg.createFFmpeg({
  corePath: chrome.runtime.getURL('ffmpeg-core.js'),
  log: true,
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
  if (recorder?.state === 'recording') {
    throw new Error('Called startRecording while recording is in progress.');
  }
  console.log('startRecording', JSON.stringify(message));
  const size = { x: message.tabWidth, y: message.tabHeight };
  const pixelRatio = message.pixelRatio;
  const constraints = {};
  const constraintSizes = [
    { width: size.x, height: size.y },
    { width: size.x * message.zoomLevel, height: size.y * message.zoomLevel },
    { width: size.x * pixelRatio, height: size.y * pixelRatio },
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

  let mimeType;
  if (message.exportVideo) {
    mimeType = 'video/webm;codecs=h264';
    if (message.exportAudio) {
      mimeType += ',opus';
    }
  } else {
    mimeType = 'audio/webm;codecs=opus';
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
    console.log('data=', data);
    const blobFormat = mimeType.split(';')[0];
    console.log('blobFormat=', blobFormat);
    blob = new Blob(data, { type: blobFormat });
    console.log('blob=', blob);

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

function convertStreams(videoBlob, message) {
  currentTabId = message.tabId;
  var fileReader = new FileReader();
  fileReader.onload = async function () {
    // var blob = new File([result.data], 'test.mp4', {
    //   type: 'video/mp4',
    // });

    let inputFileName = 'sample_video.webm';
    let outputFileName = 'sample_video.mp4';
    let downloadExtension = 'mp4';
    let commandStr;

    if (message.exportVideo) {
      if (message.exportAudio) {
        commandStr = `ffmpeg -i ${inputFileName} -c:v copy -c:a aac ${outputFileName}`;
      } else {
        commandStr = `ffmpeg -i ${inputFileName} -c:v copy ${outputFileName}`;
      }
    } else {
      downloadExtension = 'm4a';
      outputFileName = `sample_video.m4a`;
      commandStr = `ffmpeg -i ${inputFileName} -c:a aac ${outputFileName}`;
    }

    const fileName = createFilenameOnly();
    const downloadFileName = `${fileName}.${downloadExtension}`;

    const blob = await runFFmpeg(inputFileName, outputFileName, commandStr, new Uint8Array(this.result));
    // console.log('runFFmpeg blob', blob);
    // var file = new File([blob], downloadFileName, {
    //   type: `video/${downloadExtension}`,
    // });
    // console.log('runFFmpeg file', file);
    const videoURLMessage = {
      type: 'scrollCaptureVideoURLBackground',
      videoURL: URL.createObjectURL(blob),
      fileName: downloadFileName,
      tabId: message.tabId,
      mimeType: `video/${downloadExtension}`,
    };
    // console.log('videoURLMessage', videoURLMessage);
    chrome.runtime.sendMessage(videoURLMessage);
  };
  fileReader.readAsArrayBuffer(videoBlob);
}

async function runFFmpeg(inputFileName, outputFileName, commandStr, file) {
  // console.log('runFFmpeg commandStr', commandStr);

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

function downloadFile(blob, fileName) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  a.click();
}
