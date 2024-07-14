import Section from './Section';
import { app } from '../main';
import { sendTrackEventMessage } from '../model/GABridge';
import { define } from '../../lib/tsunami/tsunami';
import { VideoScrollpane } from './VideoScrollpane';

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
        case 'scrollCaptureFFmpegLogToCC':
          // console.log('sc msg', msg);
          app.model.ffmpegLogs.push(msg.message);
          sendResponse({ gotIt: true });
          break;
      }
    });

    this.videoContainer = this.querySelector('.sc-video-player-container');

    let player = this.querySelector('.sc-video-player');
    player.setAttribute('muted', 'true');
    player.setAttribute('autoplay', 'true');
    player.setAttribute('playsinline', 'true');
    player.setAttribute('controls', '1');
    // player.setAttribute('controlsList', 'nodownload');
    player.addEventListener('canplay', () => {
      this.showVideo();
    });
  }

  showVideo() {
    this.element.setAttribute('data-show-video', true);
  }

  updateVideo(message) {
    this.updateButtons(message.videoURL, message.fileName);
    const fetchPromise = fetch(message.videoURL);
    fetchPromise.then((req) => {
      const bufferPromise = req.arrayBuffer();
      bufferPromise.then((buf) => {
        const blob = new Blob([buf]);
        const file = new File([blob], message.fileName, {
          type: message.mimeType,
        });
        const videoURL = URL.createObjectURL(file);
        let player = this.querySelector('.sc-video-player');
        player.setAttribute('download', message.fileName);
        try {
          player.src = videoURL;
        } catch (error) {
          console.log('player.src', error);
        }
        this.showVideo();
      });
      bufferPromise.catch((error) => {
        console.log('bufferPromise.catch', error);
        this.showVideo();
      });
    });
    fetchPromise.catch((error) => {
      console.log('fetchPromise.catch', error);
      this.showVideo();
    });
  }

  updateButtons(videoURL, videoFileName) {
    console.log('updateButtons', videoURL, videoFileName);
    let buttons = this.element.querySelectorAll('a.sc-download-button');
    for (let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
      button.href = videoURL;
      button.download = videoFileName;
      button.addEventListener('click', () => {
        sendTrackEventMessage('download', { media: 'video' });
      });
    }
  }

  showDelayComplete() {
    app.model.ffmpegLogs.value = [];
    let promise = super.showDelayComplete();
    app.model.sendMessage({ type: 'scrollCaptureShowVideo' });
    // this.querySelector('.sc-logger-container').style.paddingTop = `${(window.innerHeight / window.innerWidth) * 100}%`;
    return promise;
  }

  hideComplete() {
    // app.model.sendMessage({ type: 'scrollCaptureUnloadVideo' });
    let player = this.querySelector('.sc-video-player');
    player.pause();
    player.removeAttribute('src');
    player.load();
    this.element.setAttribute('data-show-video', false);
    return super.hideComplete();
  }
}

define('sc-video-scrollpane', VideoScrollpane);
