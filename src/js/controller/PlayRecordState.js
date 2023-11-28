import PlayState from './PlayState';
import { app } from '../main';
import ActionWait from '../model/ActionWait';
import { sendTrackEventMessage } from '../model/GABridge';

export default class PlayRecordState extends PlayState {
  constructor() {
    super();
    this.startLocation = 'scroll-capture/video';
  }

  show() {
    sendTrackEventMessage('record_actions_length', app.model.actions.value.length.toString());
    if (app.model.actions.value.length < 1) {
      this.timeout = new ActionWait();
      this.timeout.delay.value = 60 * 5;
      app.model.actions.addAction(this.timeout);
    }
    const message = app.model.settings.getSettingsForRecording();
    message.type = 'scrollCaptureStartRecording';
    app.model.sendMessage(message);
    return super.show();
  }

  allComplete() {
    if (!this.isPlaying) return;
    this.stopTheRecording();
    super.allComplete();
  }

  stopTheRecording() {
    app.model.sendMessage({ type: 'scrollCaptureStopRecording' });
    // app.model.sendMessage({ type: "scrollCaptureUpdateVideo" });
  }

  hide() {
    window.removeEventListener('onbeforeunload', this.onBeforeUnloadHandler);
    if (this.isPlaying) this.stopTheRecording();
    if (this.timeout) {
      app.model.actions.removeAction(this.timeout);
      this.timeout = null;
    }
    return super.hide();
  }
}
