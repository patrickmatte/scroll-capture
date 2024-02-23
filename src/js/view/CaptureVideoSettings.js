import Section from './Section';
import { app } from '../main';
import { define } from '../../lib/tsunami/tsunami';
import { GeneralSettings } from './GeneralSettings';

export default class CaptureVideoSettings extends Section {
  constructor(element) {
    super(element);
  }

  showDelayComplete() {
    let promise = super.showDelayComplete();

    app.model.setDefaultLocation(this.path);

    return promise;
  }

  hide() {
    app.model.save('CaptureVideoSettings.hide');
    return super.hide();
  }
}

define('general-settings', GeneralSettings);
