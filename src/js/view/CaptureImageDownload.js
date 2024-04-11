import { app } from '../main';
import Section from './Section';
import { createFilename } from '../model/utils';
import { sendTrackEventMessage } from '../model/GABridge';
import { ChangeEvent } from '../../lib/tsunami/ChangeEvent';

export class CaptureImageDownload extends Section {
  constructor(element) {
    super(element);
    this.imageLoaded = false;
  }

  show() {
    const format = app.model.imgCapSettings.formats.find((format) => {
      return format.type == app.model.imgCapSettings.format;
    });
    let videoFileName = createFilename(format.ext);
    const imgContainer = this.querySelector('.img-container');
    let dataURL;
    const canvas = app.model.imgCapSettings.imageCanvas;
    let mimetype = `image/${format.type}`;

    const blobResult = (result) => {
      const file = new File([result], videoFileName, {
        type: mimetype,
      });
      const dataURL = URL.createObjectURL(file);

      const img = new Image();
      img.addEventListener('load', () => {
        this.imageLoaded = true;
        imgContainer.appendChild(img);

        let buttons = this.element.querySelectorAll('a.sc-download-button');
        for (let i = 0; i < buttons.length; i++) {
          let button = buttons[i];
          button.href = dataURL;
          button.download = videoFileName;
          button.addEventListener('click', () => {
            sendTrackEventMessage('download', { media: 'image' });
          });
        }
        // let fileNameButton = this.querySelector('.sc-video-filename a.sc-download-button span.sc-label');
        // fileNameButton.textContent = videoFileName;
      });
      img.src = dataURL;
    };

    switch (format.type) {
      case 'jpeg':
        // dataURL = canvas.toDataURL('image/jpeg', app.model.imgCapSettings.compression / 100);
        const compression = app.model.imgCapSettings.compression / 100;
        canvas.toBlob(blobResult, mimetype, compression);
        break;
      default:
        canvas.toBlob(blobResult, mimetype);
        // console.time('canvas.toDataURL');
        // dataURL = canvas.toDataURL();
        // console.timeEnd('canvas.toDataURL');
        break;
    }
    return super.show();
  }

  get imageLoaded() {
    return this._imageLoaded;
  }

  set imageLoaded(value) {
    if (this._imageLoaded != value) {
      this._imageLoaded = value;
      ChangeEvent.dispatchEvent(this, 'imageLoaded', value);
    }
  }

  hideComplete() {
    const imgContainer = this.querySelector('.img-container');
    const img = this.querySelector('.img-container img');
    if (img) imgContainer.removeChild(img);
    this.imageLoaded = false;
  }
}
