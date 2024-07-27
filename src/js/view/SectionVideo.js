import Section from './Section';
import { app } from '../main';

export default class SectionVideo extends Section {
  constructor(element) {
    super(element);
    this.iframe = this.element.querySelector('iframe');
    this.iframe.src = chrome.runtime.getURL('SectionVideoIFrame.html');
  }

  showDelayComplete() {
    app.model.sendMessage({ type: 'scrollCaptureShowVideo' });
    return super.showDelayComplete();
  }

  hideComplete() {
    app.model.sendMessage({ type: 'scrollCaptureUnloadVideo' });
    return super.hideComplete();
  }
}
