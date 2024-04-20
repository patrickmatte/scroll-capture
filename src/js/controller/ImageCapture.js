import Branch from '../../lib/tsunami/Branch';
import { awaitAnimationFrame, awaitTimeout } from '../../lib/tsunami/await';
import Point from '../../lib/tsunami/geom/Point';
import { app } from '../main';

export class ImageCapture extends Branch {
  constructor() {
    super();
  }

  show() {
    app.model.sendMessage({ type: 'scrollCaptureImageCaptureStart' });

    document.documentElement.setAttribute('data-sc-cursor', app.model.settings.showCursor.value);
    // document.documentElement.setAttribute('data-sc-pointer-events', app.model.settings.pointerEvents.value);
    document.documentElement.setAttribute('data-sc-scrollbars', app.model.settings.showScrollbars.value);

    const target = app.model.imgCapSettings.target;
    const isDocumentElement = target == 'window' || target == 'documentElement' || !target;
    const element = isDocumentElement ? document.documentElement : document.querySelector(target);
    this.isCapturing = true;
    const devicePixelRatio = window.devicePixelRatio;
    const pixelRatio = app.model.settings.pixelRatio.value;

    const clientPosition = new Point(0, 0);
    if (element != document.documentElement) {
      const clientRect = element.getBoundingClientRect();
      clientPosition.set(clientRect.x, clientRect.y);
    }
    const clientSize = new Point(element.clientWidth, element.clientHeight);
    const scrollSize = new Point(element.scrollWidth, element.scrollHeight);
    const maxChromePixels = 268435456;
    const pixels = scrollSize.x * scrollSize.y;
    // console.log('maxChromePixels=', maxChromePixels, 'pixels=', pixels);
    if (pixels > maxChromePixels) {
      console.log('Page is too large!');
      scrollSize.y = maxChromePixels / scrollSize.x;
    }

    const canvas = app.model.imgCapSettings.imageCanvas;
    const canvasSize = scrollSize.multiplyScalar(pixelRatio);
    canvas.width = canvasSize.x;
    canvas.height = canvasSize.y;
    const ctx = canvas.getContext('2d');

    const maxScroll = scrollSize.subtract(clientSize);

    // console.log('target', target);
    // console.log('clientPosition', clientPosition);
    // console.log('clientSize', clientSize);
    // console.log('scrollSize', scrollSize);
    // console.log('maxScroll', maxScroll);

    const captures = [];
    const captureTotals = new Point(Math.ceil(scrollSize.x / clientSize.x), Math.ceil(scrollSize.y / clientSize.y));
    // console.log('captureTotals', captureTotals);
    for (let y = 0; y < captureTotals.y; y++) {
      for (let x = 0; x < captureTotals.x; x++) {
        const point = clientSize.multiply(new Point(x, y));
        const scroll = new Point(Math.min(point.x, maxScroll.x), Math.min(point.y, maxScroll.y));
        const position = point.subtract(scroll);
        const size = clientSize.subtract(position);
        const cropPosition = clientPosition.add(position);
        const cropSize = size.clone();
        const drawPosition = point.clone();
        const drawSize = size.clone();
        captures.push({
          cropPosition,
          cropSize,
          drawPosition,
          drawSize,
          point,
          position,
          scroll,
          size,
        });
      }
    }
    // console.log('captures', captures);
    let captureIndex = 0;
    const img = new Image();

    const captureStep = () => {
      const scrollPromise = scroll();
      let hidePromise = Promise.resolve();
      if (captureIndex != 0) {
        hidePromise = scrollPromise.then(() => {
          return this.hideElements();
        });
      }
      const capturePromise = hidePromise.then(() => {
        return capture();
      });
      capturePromise.then((img) => {
        const captureData = captures[captureIndex];
        const cropPosition = captureData.cropPosition.multiplyScalar(devicePixelRatio);
        const cropSize = captureData.cropSize.multiplyScalar(devicePixelRatio);
        const drawPosition = captureData.drawPosition.multiplyScalar(pixelRatio);
        const drawSize = captureData.drawSize.multiplyScalar(pixelRatio);

        // const position = captureData.position.multiplyScalar(app.model.settings.pixelRatio.value);
        // const size = captureData.size.multiplyScalar(app.model.settings.pixelRatio.value);
        ctx.drawImage(img, cropPosition.x, cropPosition.y, cropSize.x, cropSize.y, drawPosition.x, drawPosition.y, drawSize.x, drawSize.y);

        captureIndex++;
        if (this.isCapturing) {
          if (captureIndex < captures.length) {
            captureStep();
          } else {
            this.showElements();
            this.isCapturing = false;
            this.router.location = 'scroll-capture/image-download';
          }
        }
      });
    };

    const scroll = () => {
      const captureData = captures[captureIndex];
      element.scrollLeft = captureData.scroll.x;
      element.scrollTop = captureData.scroll.y;
      // window.scroll(captureData.scroll.x, captureData.scroll.y);
      return awaitTimeout(app.model.imgCapSettings.delay);
    };

    const capture = () => {
      const promise = new Promise((resolve, reject) => {
        const loadHandler = () => {
          img.removeEventListener('load', loadHandler);
          resolve(img);
        };
        chrome.runtime.sendMessage({ type: 'scrollCaptureVisibleTab' }, (response) => {
          img.addEventListener('load', loadHandler);
          img.setAttribute('src', response.dataUrl);
        });
      });
      return promise;
    };

    if (this.isCapturing) captureStep();
  }

  hideElements() {
    app.model.imgCapSettings.hiddenElements.forEach((obj) => {
      if (obj.selector) {
        const list = document.documentElement.querySelectorAll(obj.selector);
        list.forEach((el) => {
          el.style.visibility = 'hidden';
        });
      }
    });
    return awaitAnimationFrame(2);
  }

  showElements() {
    app.model.imgCapSettings.hiddenElements.forEach((obj) => {
      if (obj.selector) {
        const list = document.documentElement.querySelectorAll(obj.selector);
        list.forEach((el) => {
          el.style.visibility = 'visible';
        });
      }
    });
  }

  hide() {
    app.model.sendMessage({ type: 'scrollCaptureImageCaptureStop' });
    document.documentElement.removeAttribute('data-sc-cursor');
    // document.documentElement.removeAttribute('data-sc-pointer-events');
    document.documentElement.removeAttribute('data-sc-scrollbars');

    this.isCapturing = false;
  }
}
