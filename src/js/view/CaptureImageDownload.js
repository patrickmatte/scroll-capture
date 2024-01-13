import { app } from '../main';
import Section from './Section';
import { createFilename } from '../model/utils';

export class CaptureImageDownload extends Section {
  constructor(element) {
    super(element);
  }

  show() {
    const img = this.querySelector('.img-container img');
    let dataURL;
    console.log(app.model.imgCapSettings.format.selectedItem.value);
    switch (app.model.imgCapSettings.format.selectedItem.value) {
      case 'jpeg':
        dataURL = app.model.imgCapSettings.imageCanvas.toDataURL(
          'image/jpeg',
          app.model.imgCapSettings.compression.value / 100
        );
        break;
      default:
        dataURL = app.model.imgCapSettings.imageCanvas.toDataURL();
        break;
    }
    img.src = dataURL;

    let videoFileName = createFilename(app.model.imgCapSettings.format.selectedItem.value);
    let buttons = document.querySelectorAll('a.sc-download-button');
    for (let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
      button.href = dataURL;
      button.download = videoFileName;
      button.addEventListener('click', () => {
        sendTrackEventMessage('download', 'click');
      });
    }
    let fileNameButton = document.querySelector('.sc-video-filename a.sc-download-button');
    fileNameButton.textContent = videoFileName;

    return super.show();
  }
}
