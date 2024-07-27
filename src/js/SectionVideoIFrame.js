import { define, importTemplate } from '../lib/tsunami/tsunami';
import DownloadVideo from './view/DownloadVideo';
import template from '../templates/sc-video-iframe.html';
import SectionVideoIFrameModel from './model/SectionVideoIframeModel';
import App from '../lib/tsunami/App';
import { loadStyle } from '../lib/tsunami/load/loadStyle';

class SectionVideoIFrame extends App {
  constructor(element) {
    super(element);
    this.model = new SectionVideoIFrameModel();
    this.load();
    this.model.load().then(() => {
      this.scVideoIframe = importTemplate(template, this.model);
      this.appendChild(this.scVideoIframe);
    });
  }

  load() {
    let contentCSS = chrome.runtime.getURL('content.css');
    let contentCSSPromise = loadStyle(contentCSS);
    let fontawesomeCSS = chrome.runtime.getURL('fontawesome.css');
    let fontawesomeCSSPromise = loadStyle(fontawesomeCSS);
    return Promise.all([contentCSSPromise, fontawesomeCSSPromise]);
  }
}

define('sc-download-video', DownloadVideo);

export const app = new SectionVideoIFrame(document.body);
