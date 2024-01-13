import * as tsunami from '../../lib/tsunami/tsunami';
import CaptureVideoSettings from './CaptureVideoSettings';
import SectionVideo from './SectionVideo';
import SectionScenario from './SectionScenario';
import ActionsView from './ActionsView';
import { app } from '../main';
import Section from './Section';

export default class CaptureVideo extends Section {
  constructor(element) {
    super(element);

    // this.windowContent = this.element.querySelector(".sc-window-content[is='sc-window-content-main']").component;

    this.settings = this.element.querySelector('sc-video-settings').component;
    this.scenario = this.element.querySelector('sc-scenario').component;
    this.video = this.element.querySelector('sc-video').component;

    this.branches['settings'] = this.settings;
    this.branches['scenario'] = this.scenario;
    this.branches['video'] = this.video;

    this.defaultChild = 'settings';
  }

  hide() {
    const promise = app.model.setActionIndex(0);
    const promise2 = promise.then(() => {
      return super.hide();
    });
    return promise2;
  }
}

tsunami.define('sc-actions-view', ActionsView);
tsunami.define('sc-scenario', SectionScenario);
tsunami.define('sc-video', SectionVideo);
tsunami.define('sc-video-settings', CaptureVideoSettings);
