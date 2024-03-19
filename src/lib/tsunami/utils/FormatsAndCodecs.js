/* returns
{
  video: [
    { name: 'mp4', ext: 'mp4', video: ['h264', 'avc1', 'av1'], audio: ['aac'], needsTranscode:true },
    { name: 'webm', ext: 'webm', video: ['h264', 'avc1', 'av1', 'vp8', 'vp9'], audio: ['opus', 'pcm'] },
    { name: 'x-matroska', ext: 'mkv', video: ['h264', 'avc1', 'av1', 'vp8', 'vp9'], audio: ['opus', 'pcm'] },
  ],
  audio: [
    { name: 'm4a', ext: 'm4a', video: [], audio: ['aac'], needsTranscode:true },
    { name: 'webm', ext: 'webm', video: [], audio: ['opus', 'pcm']}
  ],
}
*/

export function getSupportedFormatsAndCodecs() {
  const formats = [
    { name: 'mp4', ext: 'mp4' },
    { name: 'webm', ext: 'webm' },
    { name: 'mkv', ext: 'mkv' },
    { name: 'ogg', ext: 'ogg' },
    { name: 'mp3', ext: 'mp3' },
    { name: 'mp2t', ext: 'mp2t' },
    { name: '3gpp', ext: '3gpp' },
    { name: 'mov', ext: 'mov' },
    { name: 'msvideo', ext: 'msvideo' },
    { name: 'wmv', ext: 'wmv' },
    { name: 'mpeg', ext: 'mpeg' },
    { name: 'wav', ext: 'wav' },
  ];
  const videoCodecs = ['vp9', 'vp8', 'h264', 'avc1', 'av1', 'h265', 'h263'];
  const audioCodecs = ['opus', 'pcm', 'aac', 'mpeg', 'mp4a', 'mp3'];

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
          const videoCodecIsSupported = MediaRecorder.isTypeSupported(videoType);
          if (videoCodecIsSupported) {
            supportedFormat.video.push(videoCodec);
          }
        });
        audioCodecs.forEach((audioCodec) => {
          let audioType = `${formatType};codecs=${audioCodec}`;
          const audioCodecIsSupported = MediaRecorder.isTypeSupported(audioType);
          if (audioCodecIsSupported) {
            supportedFormat.audio.push(audioCodec);
          }
        });
      }
    });
    return supported;
  }

  const supportedFormats = {
    video: getSupportedFormatsAndCodecsForType('video'),
    audio: getSupportedFormatsAndCodecsForType('audio'),
  };
  return supportedFormats;
}

// export const supportedFormatsAndCodecs = getSupportedFormatsAndCodecs();

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
