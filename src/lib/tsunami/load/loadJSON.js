import { loadXHR } from './loadXHR';

export function loadJSON(url, method, data, requestHeaders, noCache) {
  const promise = loadXHR(url, method, data, requestHeaders, null, noCache);
  const promise2 = promise.then(
    function (xhr) {
      let obj;
      try {
        obj = JSON.parse(xhr.response);
      } catch (e) {
        console.log(e, ' in ' + url);
      }
      return obj;
    },
    function () {
      return null;
    }
  );

  Object.defineProperty(promise2, 'progress', {
    get: function () {
      return promise.progress;
    },
  });

  return promise2;
}
