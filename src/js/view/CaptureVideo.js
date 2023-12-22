import UIComponent from '../../lib/tsunami/components/UIComponent';
import * as tsunami from '../../lib/tsunami/tsunami';
import SectionSettings from './SectionSettings';
import SectionVideo from './SectionVideo';
import SectionScenario from './SectionScenario';
import ActionsView from './ActionsView';
import { app } from '../main';
import Section from './Section';

export default class CaptureVideo extends Section {
  constructor(element) {
    super(element);

    // this.windowContent = this.element.querySelector(".sc-window-content[is='sc-window-content-main']").component;

    this.scenario = this.element.querySelector("[is='sc-scenario']").component;
    this.video = this.element.querySelector("[is='sc-video']").component;
    this.settings = this.element.querySelector("[is='sc-settings']").component;

    this.branches['scenario'] = this.scenario;
    this.branches['video'] = this.video;
    this.branches['settings'] = this.settings;

    this.defaultChild = 'scenario';
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
tsunami.define('sc-settings', SectionSettings);
