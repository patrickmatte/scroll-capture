import AppModel from './model/AppModel';
import AppView from './view/AppView';
import AppController from './controller/AppController';

export let app;

export default class Main {
  constructor() {
    app = this;
    this.controller = new AppController();
    this.model = new AppModel();
    this.view = new AppView();

    chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
      switch (msg.type) {
        case 'scrollCaptureLocation':
          this.model.tabId.value = msg.tabId;
          this.controller.router.location = msg.location;
          break;
      }
    });
  }
}

if (!window.scrollCaptureApp) {
  window.scrollCaptureApp = new Main();
}
app = window.scrollCaptureApp;
