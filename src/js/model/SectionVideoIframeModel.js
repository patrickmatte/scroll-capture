import CaptureVideoModel from './CaptureVideoModel';

export default class SectionVideoIFrameModel {
  constructor() {
    this.settings = new CaptureVideoModel({ sendMessage() {} }, 13.5);

    this.resizeHandler = this.resizeHandler.bind(this);
    window.addEventListener('resize', this.resizeHandler);
  }

  resizeHandler() {
    this.settings.size.x.value = window.innerWidth;
    this.settings.size.y.value = window.innerHeight;
  }

  sendMessage(message) {
    message.tabId = this.tabId.value;
    try {
      chrome.runtime.sendMessage(message);
    } catch (error) {
      console.log(error);
    }
  }

  load() {
    let jsonPromise = chrome.storage.local.get(['json']).then((result) => {
      if (result.json) {
        let data = JSON.parse(result.json);
        this.settings.deserialize(data.settings);

        this.resizeHandler();
      }
    });
    return jsonPromise;
  }
}
