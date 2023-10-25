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

async function startRecording(message) {
  console.log('offscreen.startRecording', message);
  if (recorder?.state === 'recording') {
    throw new Error('Called startRecording while recording is in progress.');
  }

  const size = {x:message.tabWidth, y:message.tagHeight};
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

  let videoCodec = message.videoCodec || "vp8";
  let audioCodec = message.audioCodec || "opus";
  let videoBitsPerSecond = message.videoBitsPerSecond || 16;
  let audioBitsPerSecond = message.audioBitsPerSecond || 128;


  const options = {
    mimeType: 'video/webm;codecs=' + videoCodec + "," + audioCodec,
    audioBitsPerSecond: audioBitsPerSecond * 1000,
    videoBitsPerSecond: videoBitsPerSecond * 1000000,
  };
  if (!MediaRecorder.isTypeSupported(options.mimeType)) {
    options.mimeType = 'video/webm;codecs=vp8';
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
      options.mimeType = 'video/webm;codecs=vp9';
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
          options.mimeType = 'video/webm;codecs=h264';
          if (!MediaRecorder.isTypeSupported(options.mimeType)) {
              options.mimeType = 'video/webm';
              if (!MediaRecorder.isTypeSupported(options.mimeType)) {
                  options.mimeType = '';
              }
          }
      }
    }
  }

  recorder = new MediaRecorder(media, options);
  recorder.ondataavailable = (event) => data.push(event.data);
  recorder.onstop = () => {
    console.log('offscreen recorder.onstop');
    const blob = new Blob(data, { type: 'video/webm' });
    const videoURL = URL.createObjectURL(blob);
    chrome.runtime.sendMessage({
        type: 'scrollCaptureVideoURL',
        videoURL: videoURL
    });
    data = [];
  };
  recorder.start();

  window.location.hash = 'recording';
}

function stopRecording(message) {
  console.log('offscreen.stopRecording', message);
  recorder.stop();
  recorder.stream.getTracks().forEach((t) => t.stop());
  recorder = undefined;
  window.location.hash = '';
}

function logMimeTypes() {
  let mimeTypes = [
    "video/webm;codecs=vp8,opus",
    "video/webm",
    "audio/webm",
    "video/webm;codecs=vp8",
    "video/webm;codecs=h264",
    "video/webm;codecs=avc1",
    "audio/webm;codecs=opus",
    "video/mpeg",
    "video/mp4",
    "video/mp4;codecs=h264",
    "video/m4v",
  ];

  mimeTypes.forEach((mimeType) => {
    console.log('MediaRecorder', mimeType, MediaRecorder.isTypeSupported(mimeType));
  });
}
