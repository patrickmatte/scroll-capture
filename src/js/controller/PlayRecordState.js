import PlayState from './PlayState';
import { app } from '../main';
import { sendTrackEventMessage } from '../model/GABridge';

export default class PlayRecordState extends PlayState {
  constructor() {
    super();
  }

  get endLocation() {
    return 'stop';
  }

  show() {
    sendTrackEventMessage('record_actions_length', app.model.actions.value.length.toString());
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
