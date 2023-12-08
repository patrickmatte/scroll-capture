import Branch from '../../lib/tsunami/Branch';
import { app } from '../main';

export default class StopRecordingState extends Branch {
  constructor() {
    super();
  }

  show() {
    app.model.sendMessage({ type: 'scrollCaptureStopRecording' });
    this.router.location = 'scroll-capture/video';
  }
}
