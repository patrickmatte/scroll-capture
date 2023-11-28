export function getSupportedFormatsAndCodecs() {
  const formats = [
    { name: "mp4", ext: "mp4" },
    { name: "webm", ext: "webm" },
    { name: "x-matroska", ext: "mkv" },
    { name: "ogg", ext: "ogg" },
    { name: "mp3", ext: "mp3" },
    { name: "MP2T", ext: "mp2t" },
    { name: "3gpp", ext: "3gpp" },
    { name: "quicktime", ext: "mov" },
    { name: "x-msvideo", ext: "msvideo" },
    { name: "x-ms-wmv", ext: "wmv" },
    { name: "mpeg", ext: "mpeg" },
    { name: "wav", ext: "wav" },
  ];
  const videoCodecs = ["vp9", "h264", "vp8", "av1", "avc1", "h265", "h263"];
  const audioCodecs = ["opus", "pcm", "aac", "mpeg", "mp4a", "mp3"];

  function getSupportedFormatsAndCodecsForType(type) {
    const supported = [];
    formats.forEach((format) => {
      let formatType = `${type}/${format.name}`;
      const formatIsSupported = MediaRecorder.isTypeSupported(formatType);
      if (formatIsSupported) {
        const supportedFormat = {
          name: format.name,
          ext: format.ext,
          video: [],
          audio: [],
        };
        supported.push(supportedFormat);
        videoCodecs.forEach((videoCodec) => {
          let videoType = `${formatType};codecs=${videoCodec}`;
          const videoCodecIsSupported =
            MediaRecorder.isTypeSupported(videoType);
          if (videoCodecIsSupported) {
            supportedFormat.video.push(videoCodec);
          }
        });
        audioCodecs.forEach((audioCodec) => {
          let audioType = `${formatType};codecs=${audioCodec}`;
          const audioCodecIsSupported =
            MediaRecorder.isTypeSupported(audioType);
          if (audioCodecIsSupported) {
            supportedFormat.audio.push(audioCodec);
          }
        });
      }
    });
    return supported;
  }

  const supportedFormats = {
    video: getSupportedFormatsAndCodecsForType("video"),
    audio: getSupportedFormatsAndCodecsForType("audio"),
  };
  return supportedFormats;
}

// function logMimeTypes() {
//   let mimeTypes = [
//     "video/webm;codecs=vp8,opus",
//     "video/webm;codecs=h264,aac",
//     "video/webm;codecs=avc1,aac",
//     "video/webm;codecs=h264,opus",
//     "video/webm;codecs=avc1,opus",
//     "video/webm;codecs=av1,opus",
//     "video/webm;codecs=av1,pcm",
//     "video/webm",
//     "audio/webm",
//     "video/webm;codecs=vp8",
//     "video/webm;codecs=h264",
//     "video/webm;codecs=avc1",
//     "audio/webm;codecs=opus",
//     "video/mpeg",
//     "video/mp4",
//     "video/mp4;codecs=h264",
//     "video/mp4;codecs=h264,aac",
//     "video/mp4;codecs=h264,mp3",
//     "video/x-matroska;codecs=h264,opus",
//     "video/x-matroska;codecs=av1,opus",
//     "video/x-matroska;codecs=avc1,pcm",
//     "video/x-matroska;codecs=vp8,pcm",
//     "video/x-matroska;codecs=vp9,pcm",
//   ];

//   mimeTypes.forEach((mimeType) => {
//     console.log(
//       "MediaRecorder",
//       mimeType,
//       MediaRecorder.isTypeSupported(mimeType)
//     );
//   });
// }
