import Section from './Section';
import { app } from '../main';
import { define } from '../../lib/tsunami/tsunami';
import { GeneralSettings } from './GeneralSettings';
import EventHandler from '../../lib/tsunami/components/EventHandler';

export default class CaptureVideoSettings extends Section {
  constructor(element) {
    super(element);
    this.beforeUnloadHandler = new EventHandler(window, 'beforeunload', () => {
      app.model.save('SectionScenario.beforeUnloadHandler');
    });
    this.beforeUnloadHandler.enabled = false;
  }

  showDelayComplete() {
    let promise = super.showDelayComplete();

    this.beforeUnloadHandler.enabled = true;

    app.model.setDefaultLocation(this.path);

    return promise;
  }

  hideDelayComplete() {
    this.beforeUnloadHandler.enabled = false;

    app.model.save('CaptureVideoSettings.hide');
    return super.hideDelayComplete();
  }
}

define('general-settings', GeneralSettings);
