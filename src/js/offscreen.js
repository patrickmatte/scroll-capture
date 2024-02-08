import { createFilename, createFilenameOnly } from './model/utils';

const { createFFmpeg, fetchFile } = FFmpeg;

const ffmpeg = createFFmpeg({
  corePath: chrome.runtime.getURL('ffmpeg-core.js'),
  log: true,
  mainName: 'main',
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
  console.log('startRecording', JSON.stringify(message));
  const size = { x: message.tabWidth, y: message.tabHeight };
  const pixelRatio = message.pixelRatio;
  const constraints = {};
  if (message.exportVideo) {
    constraints.video = {
      mandatory: {
        chromeMediaSource: 'tab',
        chromeMediaSourceId: message.streamId,
        minWidth: size.x,
        maxWidth: size.x * pixelRatio,
        minHeight: size.y,
        maxHeight: size.y * pixelRatio,
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
  const media = await navigator.mediaDevices.getUserMedia(constraints);
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

    const result = await runFFmpeg(inputFileName, outputFileName, commandStr, new Uint8Array(this.result));
    var blob = new File([result], downloadFileName, {
      type: `video/${downloadExtension}`,
    });

    const videoURLMessage = Object.assign({}, message);
    Object.assign(videoURLMessage, {
      type: 'scrollCaptureVideoURL',
      videoURL: URL.createObjectURL(blob),
      fileName: downloadFileName,
    });
    console.log('videoURLMessage.videoURL', videoURLMessage.videoURL);
    chrome.runtime.sendMessage(videoURLMessage);
  };
  fileReader.readAsArrayBuffer(videoBlob);
}

async function runFFmpeg(inputFileName, outputFileName, commandStr, file) {
  console.log('runFFmpeg commandStr', commandStr);

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
  await ffmpeg.run(...commandList);
  const data = ffmpeg.FS('readFile', outputFileName);
  console.log('ffmpeg data', data);

  const blob = new Blob([data.buffer]);
  console.log('ffmpeg blob', blob);
  return blob;
  // downloadFile(blob, outputFileName);
}

function downloadFile(blob, fileName) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  a.click();
}
