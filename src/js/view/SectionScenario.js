import Section from './Section';
import { app } from '../main';

export default class SectionScenario extends Section {
  constructor(element) {
    super(element);
  }

  showDelayComplete() {
    app.model.sendMessage({ type: 'scrollCaptureUpdatedTabListener', enabled: true, location: 'scenario' });

    let promise = super.showDelayComplete();

    app.model.setDefaultLocation(this.path);
    // this.router.redirect('default', () => {
    //   return this.path;
    // });

    if (!app.model.actions.selectedItem.value) {
      let lastIndex = app.model.actions.length.value - 1;
      app.model.actions.selectedIndex.value = lastIndex;
    }

    app.model.save();

    // let actionsViewElement = app.view.scrollCapture.windowContent.element.querySelector("[is='sc-actions-view']");
    // let actionsView = actionsViewElement.component;
    // let element = actionsView.getElementByModel(app.model.actions.selectedItem.value);
    // if (element) actionsView.scrollToElement(element, 0);
    return promise;
  }

  hideDelayComplete() {
    app.model.sendMessage({ type: 'scrollCaptureUpdatedTabListener', enabled: false, location: 'scenario' });

    app.model.actions.selectedItem.value = null;
    return super.hideDelayComplete();
  }
}
