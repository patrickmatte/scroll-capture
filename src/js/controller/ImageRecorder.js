import Branch from '../../lib/tsunami/Branch';
import { awaitTimeout } from '../../lib/tsunami/await';
import Point from '../../lib/tsunami/geom/Point';
import Rectangle from '../../lib/tsunami/geom/Rectangle';
import { app } from '../main';

export class ImageRecorder extends Branch {
  constructor() {
    super();
  }

  show() {
    document.documentElement.setAttribute('data-sc-cursor', app.model.settings.showCursor.value);
    document.documentElement.setAttribute('data-sc-scrollbars', app.model.settings.showScrollbars.value);

    this.isCapturing = true;
    const innerSize = new Point(window.innerWidth, window.innerHeight);
    const pageSize = new Point(document.body.scrollWidth, document.body.scrollHeight);
    const maxChromePixels = 268435456;
    const pixels =
      pageSize.x * app.model.settings.pixelRatio.value * (pageSize.y * app.model.settings.pixelRatio.value);
    // console.log('maxChromePixels=', maxChromePixels, 'pixels=', pixels);
    if (pixels > maxChromePixels) {
      console.log('Page is too large!');
      pageSize.y = maxChromePixels / (pageSize.x * app.model.settings.pixelRatio.value);
    }

    const canvas = app.model.imgCapSettings.imageCanvas;
    canvas.width = pageSize.x * app.model.settings.pixelRatio.value;
    canvas.height = pageSize.y * app.model.settings.pixelRatio.value;

    const maxScroll = new Point(
      document.body.scrollWidth - window.innerWidth,
      document.body.scrollHeight - window.innerHeight
    );

    // console.log('innerSize', innerSize);
    // console.log('pageSize', pageSize);
    // console.log('maxScroll', maxScroll);

    const captures = [];
    const captureTotals = new Point(Math.ceil(pageSize.x / innerSize.x), Math.ceil(pageSize.y / innerSize.y));
    // console.log('captureTotals', captureTotals);
    for (let y = 0; y < captureTotals.y; y++) {
      for (let x = 0; x < captureTotals.x; x++) {
        const point = new Point(x * innerWidth, y * innerHeight);
        const scroll = new Point(Math.min(point.x, maxScroll.x), Math.min(point.y, maxScroll.y));
        const position = point.subtract(scroll);
        const size = innerSize.subtract(position);
        const drawRect = new Rectangle();
        drawRect.position = position;
        drawRect.size = size;
        captures.push({
          point,
          scroll,
          position,
          size,
          drawRect,
        });
      }
    }
    // console.log('captures', captures);
    let captureIndex = 0;
    const img = new Image();

    const captureStep = () => {
      // console.log(captureIndex);
      const scrollPromise = scroll();
      const capturePromise = scrollPromise.then(() => {
        return capture();
      });
      capturePromise.then((img) => {
        const captureData = captures[captureIndex];
        // const position = captureData.position.multiplyScalar(app.model.settings.pixelRatio.value);
        // const size = captureData.size.multiplyScalar(app.model.settings.pixelRatio.value);
        const scroll = captureData.scroll.multiplyScalar(app.model.settings.pixelRatio.value);
        canvas.getContext('2d').drawImage(img, scroll.x, scroll.y);

        captureIndex++;
        if (captureIndex < captures.length) {
          captureStep();
        } else {
          this.isCapturing = false;
          this.router.location = 'scroll-capture/image/download';
        }
      });
    };

    const scroll = () => {
      const captureData = captures[captureIndex];
      window.scroll(captureData.scroll.x, captureData.scroll.y);
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

  hide() {
    document.documentElement.removeAttribute('data-sc-cursor');
    document.documentElement.removeAttribute('data-sc-scrollbars');

    this.isCapturing = false;
  }
}
