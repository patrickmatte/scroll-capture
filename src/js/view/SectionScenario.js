import Section from './Section';
import { app } from '../main';
import EventHandler from '../../lib/tsunami/components/EventHandler';
import { VideoScrollpane } from './VideoScrollpane';
import { define } from '../../lib/tsunami/tsunami';

export default class SectionScenario extends Section {
  constructor(element) {
    super(element);
    this.beforeUnloadHandler = new EventHandler(window, 'beforeunload', () => {
      app.model.save('SectionScenario.beforeUnloadHandler');
    });
    this.beforeUnloadHandler.enabled = false;
  }

  showDelayComplete() {
    app.model.sendMessage({ type: 'scrollCaptureUpdatedTabListener', enabled: true, location: 'scenario', tabId: app.model.tabId.value });
    this.beforeUnloadHandler.enabled = true;

    let promise = super.showDelayComplete();

    app.model.setDefaultLocation(this.path);
    // this.router.redirect('default', () => {
    //   return this.path;
    // });

    if (!app.model.actions.selectedItem.value) {
      let lastIndex = app.model.actions.length.value - 1;
      app.model.actions.selectedIndex.value = lastIndex;
    }

    // app.model.save('SectionScenario.showDelayComplete');

    // let actionsViewElement = app.view.scrollCapture.windowContent.element.querySelector("[is='sc-actions-view']");
    // let actionsView = actionsViewElement.component;
    // let element = actionsView.getElementByModel(app.model.actions.selectedItem.value);
    // if (element) actionsView.scrollToElement(element, 0);
    return promise;
  }

  hideDelayComplete() {
    app.model.sendMessage({ type: 'scrollCaptureUpdatedTabListener', enabled: false, location: 'scenario', tabId: app.model.tabId.value });
    this.beforeUnloadHandler.enabled = false;

    app.model.actions.selectedItem.value = null;

    app.model.save('SectionScenario.hideDelayComplete');

    return super.hideDelayComplete();
  }
}

define('sc-video-scrollpane', VideoScrollpane);
