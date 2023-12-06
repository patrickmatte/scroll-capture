import PlayState from './PlayState';
import { app } from '../main';
import ActionWait from '../model/ActionWait';
import { sendTrackEventMessage } from '../model/GABridge';

export default class StopState extends PlayState {
  constructor() {
    super();
  }

  show() {
    this.stopTheRecording();

    this.router.location = 'scroll-capture/video';
  }

  stopTheRecording() {
    app.model.sendMessage({ type: 'scrollCaptureStopRecording' });
    // app.model.sendMessage({ type: "scrollCaptureUpdateVideo" });
  }
}
