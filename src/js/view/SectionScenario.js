import Section from './Section';
import { app } from '../main';

export default class SectionScenario extends Section {
  constructor(element) {
    super(element);
    this.beforeUnloadHandler = this.beforeUnloadHandler.bind(this);
  }

  beforeUnloadHandler() {
    app.model.save('SectionScenario.beforeUnloadHandler');
  }

  showDelayComplete() {
    app.model.sendMessage({ type: 'scrollCaptureUpdatedTabListener', enabled: true, location: 'scenario', tabId: app.model.tabId.value });
    window.addEventListener('beforeunload', this.beforeUnloadHandler);

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
    window.removeEventListener('beforeunload', this.beforeUnloadHandler);

    app.model.actions.selectedItem.value = null;

    app.model.save('SectionScenario.hideDelayComplete');

    return super.hideDelayComplete();
  }
}
