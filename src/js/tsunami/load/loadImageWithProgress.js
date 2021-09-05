import { loadXHR } from './loadXHR';

export function loadImageWithProgress(url, img) {
  if (!img) {
    img = new Image();
  }

  const promise = loadXHR(url, 'GET', null, null, 'blob', false);
  const promise2 = promise.then(function (xhr) {
    return new Promise(function (resolve, reject) {
      img.onload = function () {
        URL.revokeObjectURL(img.src);
        resolve(img);
      };

      img.src = URL.createObjectURL(xhr.response);
    });
  });

  Object.defineProperty(promise2, 'progress', {
    get: function () {
      return promise.progress;
    },
  });

  return promise2;
}
