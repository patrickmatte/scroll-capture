import Branch from '../../lib/tsunami/Branch';
import { awaitTimeout } from '../../lib/tsunami/await';
import Point from '../../lib/tsunami/geom/Point';
import { app } from '../main';

export class ImageRecorder extends Branch {
  constructor() {
    super();
  }

  show() {
    document.documentElement.setAttribute('data-sc-cursor', app.model.settings.showCursor.value);
    document.documentElement.setAttribute('data-sc-scrollbars', app.model.settings.showScrollbars.value);

    const target = app.model.imgCapSettings.target;
    const isDocumentElement = target == 'window' || target == 'documentElement' || !target;
    const element = isDocumentElement ? document.documentElement : document.querySelector(target);
    this.isCapturing = true;
    const clientPosition = new Point(0, 0);
    if (element != document.documentElement) {
      const clientRect = element.getBoundingClientRect();
      clientPosition.set(clientRect.x, clientRect.y);
    }
    const clientSize = new Point(element.clientWidth, element.clientHeight);
    const scrollSize = new Point(element.scrollWidth, element.scrollHeight);
    const maxChromePixels = 268435456;
    const pixels =
      scrollSize.x * app.model.settings.pixelRatio.value * (scrollSize.y * app.model.settings.pixelRatio.value);
    // console.log('maxChromePixels=', maxChromePixels, 'pixels=', pixels);
    if (pixels > maxChromePixels) {
      console.log('Page is too large!');
      scrollSize.y = maxChromePixels / (scrollSize.x * app.model.settings.pixelRatio.value);
    }

    const canvas = app.model.imgCapSettings.imageCanvas;
    const canvasSize = scrollSize.multiplyScalar(app.model.settings.pixelRatio.value);
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
      if (captureIndex == 1) {
        this.hideElements();
      }
      const scrollPromise = scroll();
      const capturePromise = scrollPromise.then(() => {
        return capture();
      });
      capturePromise.then((img) => {
        const captureData = captures[captureIndex];
        const pixelRatio = app.model.settings.pixelRatio.value;
        const cropPosition = captureData.cropPosition.multiplyScalar(pixelRatio);
        const cropSize = captureData.cropSize.multiplyScalar(pixelRatio);
        const drawPosition = captureData.drawPosition.multiplyScalar(pixelRatio);
        const drawSize = captureData.drawSize.multiplyScalar(pixelRatio);

        // const position = captureData.position.multiplyScalar(app.model.settings.pixelRatio.value);
        // const size = captureData.size.multiplyScalar(app.model.settings.pixelRatio.value);
        ctx.drawImage(
          img,
          cropPosition.x,
          cropPosition.y,
          cropSize.x,
          cropSize.y,
          drawPosition.x,
          drawPosition.y,
          drawSize.x,
          drawSize.y
        );

        captureIndex++;
        if (captureIndex < captures.length) {
          captureStep();
        } else {
          this.showElements();
          this.isCapturing = false;
          this.router.location = 'scroll-capture/image/download';
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

    captureStep();
  }

  hideElements() {
    console.log('hideElements');
    app.model.imgCapSettings.fixedElements.value.forEach((obj) => {
      if (obj.selector) {
        document.documentElement.querySelectorAll(obj.selector).forEach((el) => {
          el.style.visibility = 'hidden';
        });
      }
    });
  }

  showElements() {
    console.log('showElements');
    app.model.imgCapSettings.fixedElements.value.forEach((obj) => {
      if (obj.selector) {
        document.documentElement.querySelectorAll(obj.selector).forEach((el) => {
          el.style.visibility = 'visible';
        });
      }
    });
  }

  hide() {
    document.documentElement.removeAttribute('data-sc-cursor');
    document.documentElement.removeAttribute('data-sc-scrollbars');

    this.isCapturing = false;
  }
}
