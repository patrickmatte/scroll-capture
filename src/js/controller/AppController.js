import Branch from '../tsunami/Branch';
import { app } from '../main';
import { sendTrackPageMessage, sendTrackEventMessage } from '../model/GABridge';
import Router from '../tsunami/Router';
import PlayState from './PlayState';
import PlayRecordState from './PlayRecordState';
import CloseState from './CloseState';

export default class AppController extends Branch {
  constructor() {
    super();

    this.trackRouterLocation = this.trackRouterLocation.bind(this);
    this.beforeUnloadHandler = this.beforeUnloadHandler.bind(this);

    this.router = new Router(this);
    this.router.redirect('default', () => {
      return 'scroll-capture/scenario';
    });
    this.router.addEventListener(Router.CHANGE, this.trackRouterLocation);

    this.branches = {
      'scroll-capture': app.view.scrollCapture,
      play: new PlayState(),
      record: new PlayRecordState(),
      closed: new CloseState(),
    };

    window.addEventListener('beforeunload', this.beforeUnloadHandler);
  }

  trackRouterLocation(e) {
    // console.log(e.type, this.router.location);
    sendTrackPageMessage('/' + this.router.location);
  }

  beforeUnloadHandler(event) {
    this.router.removeEventListener(Router.CHANGE, this.trackRouterLocation);
    this.router.location = '';
  }

  load() {
    let viewPromise = app.view.load();

    let promise = new Promise((resolve, reject) => {
      chrome.storage.local.get(['json'], (result) => {
        resolve(result);
      });
    });

    return Promise.all([promise, viewPromise]).then((results) => {
      if (results[0]) {
        let json = results[0].json;
        if (json) {
          let data = JSON.parse(json);
          app.model.actions.deserialize(data.actions);
          app.model.settings.deserialize(data.settings);
        }
      }
    });
  }

  show() {
    sendTrackEventMessage('ScrollCaptureStart', window.location.origin + window.location.pathname);
  }

  hide() {}
}
