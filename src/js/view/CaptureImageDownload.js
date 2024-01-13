import { app } from '../main';
import Section from './Section';
import { createFilename } from '../model/utils';

export class CaptureImageDownload extends Section {
  constructor(element) {
    super(element);
  }

  show() {
    const img = this.querySelector('.img-container img');
    const dataURL = app.model.imgCapSettings.imageCanvas.toDataURL('image/jpeg', 1.0);
    img.src = dataURL;

    let videoFileName = createFilename('jpeg');
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
