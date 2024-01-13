import Section from './Section';
import { app } from '../main';
import { define } from '../../lib/tsunami/tsunami';
import { GeneralSettings } from './GeneralSettings';

export default class CaptureImageSettings extends Section {
  constructor(element) {
    super(element);
  }

  showDelayComplete() {
    let promise = super.showDelayComplete();

    app.model.setDefaultLocation(this.path);

    app.model.save();

    return promise;
  }
}

define('general-settings', GeneralSettings);
