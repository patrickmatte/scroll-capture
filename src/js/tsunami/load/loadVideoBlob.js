import { loadXHR } from './loadXHR';

export function loadVideoBlob(url) {
  const promise1 = loadXHR(url, 'GET', null, null, 'blob');
  const promise2 = promise1.then((xhr) => {
    return URL.createObjectURL(xhr.response);
  });

  return promise2;
}
