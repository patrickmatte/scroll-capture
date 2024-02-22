import { app } from '../main';
import Section from './Section';
import { createFilename } from '../model/utils';
import { sendTrackEventMessage } from '../model/GABridge';

export class CaptureImageDownload extends Section {
  constructor(element) {
    super(element);
  }

  show() {
    let videoFileName = createFilename(app.model.imgCapSettings.format);
    const imgContainer = this.querySelector('.img-container');
    let dataURL;
    const canvas = app.model.imgCapSettings.imageCanvas;
    let mimetype = `image/${app.model.imgCapSettings.format}`;

    const blobResult = (result) => {
      const file = new File([result], videoFileName, {
        type: mimetype,
      });
      const dataURL = URL.createObjectURL(file);

      const img = new Image();
      img.addEventListener('load', () => {
        imgContainer.appendChild(img);
      });
      img.src = dataURL;

      let buttons = this.querySelectorAll('a.sc-download-button');
      for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        button.href = dataURL;
        button.download = videoFileName;
        button.addEventListener('click', () => {
          sendTrackEventMessage('download', { media: 'image' });
        });
      }
      let fileNameButton = this.querySelector('.sc-video-filename a.sc-download-button');
      fileNameButton.textContent = videoFileName;
    };

    switch (app.model.imgCapSettings.format) {
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

  hideComplete() {
    const imgContainer = this.querySelector('.img-container');
    const img = this.querySelector('.img-container img');
    if (img) imgContainer.removeChild(img);
  }
}
