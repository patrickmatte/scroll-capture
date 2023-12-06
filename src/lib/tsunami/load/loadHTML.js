import { loadXHR } from './loadXHR';

export function loadHTML(url) {
  const promise = loadXHR(url, 'GET', null, null, null, null);
  const promise2 = promise.then(function (xhr) {
    return xhr.response;
  });

  Object.defineProperty(promise2, 'progress', {
    get: function () {
      return promise.progress;
    },
  });

  return promise2;
}
