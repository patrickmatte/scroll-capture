import { loadXHR } from './loadXHR';

export function loadWebAudio(url, context, volume = 1, loop = false) {
  if (!context) {
    if (!window.webaudioContext) {
      window.AudioContext = window.AudioContext || window['webkitAudioContext'];
      if (window.AudioContext) {
        window.webaudioContext = new AudioContext();
      }
    }
    context = window.webaudioContext;
  }

  let promise2 = Promise.resolve(null);

  if (context) {
    const promise = loadXHR(url, 'GET', null, null, 'arraybuffer', null);

    promise2 = promise.then(function (xhr) {
      return new Promise(function (resolve, reject) {
        context.decodeAudioData(
          xhr.response,
          function (buffer) {
            if (!buffer) {
              alert('error decoding file data: ' + url);
              reject();
              return;
            }
            const sound = {};
            sound.source = context.createBufferSource();
            sound.gainNode = context.createGain();
            sound.gainNode.gain.value = volume;
            sound.source.buffer = buffer;

            sound.source.connect(sound.gainNode);
            sound.gainNode.connect(context.destination);
            sound.source.loop = loop;
            resolve(sound);
          },
          function (error) {
            reject();
          }
        );
      });
    });

    Object.defineProperty(promise2, 'progress', {
      get: function () {
        return promise.progress;
      },
    });
  }

  return promise2;
}
