import PlayState from './PlayState';
import { app } from '../main';

export default class PlayRecordState extends PlayState {
  constructor() {
    super();
    this.trackName = 'record_actions';
  }

  get endLocation() {
    return 'stop';
  }

  show() {
    super.show();
  }

  startActions(index) {
    if (index == 0) {
      const message = app.model.settings.getSettingsForRecording();
      message.type = 'scrollCaptureStartRecording';
      app.model.sendMessage(message);
    }
    if (app.model.actions.value.length > 0) {
      return super.startActions(index);
    }
  }
}
