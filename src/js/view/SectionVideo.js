import Section from './Section';
import { app } from '../main';
import { sendTrackEventMessage } from '../model/GABridge';

export default class SectionVideo extends Section {
  constructor(element) {
    super(element);

    // this.iframe = this.element.querySelector('iframe');
    // this.iframe.src = chrome.runtime.getURL('video-recording.html');

    chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
      switch (msg.type) {
        // case 'scrollCaptureVideoHeight':
        //   this.iframe.style.height = msg.height + 'px';
        //   break;
        case 'scrollCaptureVideoURL':
          this.updateVideo(msg);
          break;
      }
    });

    let player = this.querySelector('.sc-video-player');
    player.setAttribute('muted', 'true');
    player.setAttribute('autoplay', 'true');
    player.setAttribute('playsinline', 'true');
    player.setAttribute('controls', '1');
    // player.addEventListener('canplay', () => {
    //   dispatchVideoHeight();
    // });
  }

  updateVideo(message) {
    let player = this.querySelector('.sc-video-player');

    fetch(message.videoURL).then((req) => {
      req.arrayBuffer().then((buf) => {
        // const { headers, statusText, status } = req;
        // const bufInit = { headers: Object.fromEntries(headers), status, statusText };
        // const result = [buf, bufInit];
        const blob = new Blob([buf]);
        let videoFileName = message.fileName;
        const file = new File([blob], videoFileName, {
          type: message.mimeType,
        });
        const videoURL = URL.createObjectURL(file);
        player.src = videoURL;
        player.download = videoFileName;
        let buttons = this.querySelectorAll('a.sc-download-button');
        for (let i = 0; i < buttons.length; i++) {
          let button = buttons[i];
          button.href = videoURL;
          button.download = videoFileName;
          button.addEventListener('click', () => {
            sendTrackEventMessage('download', { media: 'video' });
          });
        }
        let fileNameButton = document.querySelector('.sc-video-filename a.sc-download-button');
        fileNameButton.textContent = videoFileName;
      });
    });
  }

  showDelayComplete() {
    let promise = super.showDelayComplete();
    app.model.sendMessage({ type: 'scrollCaptureShowVideo' });
    return promise;
  }

  hideComplete() {
    // app.model.sendMessage({ type: 'scrollCaptureUnloadVideo' });
    let player = this.querySelector('.sc-video-player');
    player.pause();
    // player.removeAttribute('src');
    // player.load();

    return super.hideComplete();
  }
}
