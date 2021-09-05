import { loadXHR } from './loadXHR';

export function loadStyle(url, id, noCache) {
  const promise = loadXHR(url, 'GET', null, null, null, noCache);
  const promise2 = promise.then(function (xhr) {
    const style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = xhr.response;
    } else {
      style.appendChild(document.createTextNode(xhr.response));
    }
    document.querySelector('head').appendChild(style);
    return style;
  });

  Object.defineProperty(promise2, 'progress', {
    get: function () {
      return promise.progress;
    },
  });

  return promise2;
}
