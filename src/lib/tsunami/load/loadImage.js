export function loadImage(url, img, crossorigin = '') {
  if (!img) {
    img = new Image();
  }

  if (crossorigin) {
    img.setAttribute('crossorigin', crossorigin);
  }

  const promise = new Promise(function (resolve, reject) {
    const loadHandler = function () {
      img.removeEventListener('load', loadHandler);
      img.removeEventListener('error', errorHandler);
      promise.progress = 1;
      resolve(img);
    };

    const errorHandler = function (event) {
      img.removeEventListener('load', loadHandler);
      img.removeEventListener('error', errorHandler);
      promise.progress = 1;
      resolve(new Error('404'));
    };

    img.addEventListener('load', loadHandler);
    img.addEventListener('error', errorHandler);

    try {
      img.src = url;
    } catch (error) {
      resolve(img);
    }
    //setTimeout(function() {img.src = url;}, Math.random() * 1000);
  });

  promise.progress = 0;

  return promise;
}
