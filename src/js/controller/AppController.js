import Branch from '../../lib/tsunami/Branch';
import { app } from '../main';
import { sendTrackPageMessage, sendTrackEventMessage } from '../model/GABridge';
import Router from '../../lib/tsunami/Router';
import PlayState from './PlayState';
import PlayRecordState from './PlayRecordState';
import CloseState from './CloseState';
import StopRecordingState from './StopRecordingState';
import { ImageCapture } from './ImageCapture';

export default class AppController extends Branch {
  constructor() {
    super();

    this.trackRouterLocation = this.trackRouterLocation.bind(this);

    this.router = new Router(this);
    this.router.addEventListener(Router.COMPLETE, this.trackRouterLocation);

    this.branches = {
      play: new PlayState(),
      record: new PlayRecordState(),
      closed: new CloseState(),
      stop: new StopRecordingState(),
      'image-capture': new ImageCapture(),
    };

    this.defaultChild = 'scroll-capture';
  }

  getBranch(slug) {
    this.branches['scroll-capture'] = app.view.scrollCapture;
    return super.getBranch(slug);
  }

  trackRouterLocation(e) {
    app.model.location = e.data.fullLocation;
    // console.log('############## trackRouterLocation', this.router.location);
    // sendTrackPageMessage('/' + this.router.location);
  }

  load() {
    let modelPromise = app.model.load();
    let viewPromise = app.view.load();
    return Promise.all([modelPromise, viewPromise]);
  }

  show() {
    sendTrackEventMessage('ScrollCaptureStart', { url: window.location.origin + window.location.pathname });
  }

  hide() {}
}
