import { loadXHR } from './loadXHR';

export function loadTemplates(url) {
  const promise = loadXHR(url, 'GET', null, null, null, null);
  const promise2 = promise.then(function (xhr) {
    const object = {};
    const container = document.createElement('div');
    container.innerHTML = xhr.response;
    const scripts = container.querySelectorAll('script');
    for (let i = 0; i < scripts.length; i++) {
      const script = scripts.item(i);
      object[script.id] = script.text;
    }
    return object;
  });

  Object.defineProperty(promise2, 'progress', {
    get: function () {
      return promise.progress;
    },
  });

  return promise2;
}
