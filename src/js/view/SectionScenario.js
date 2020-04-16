import Section from "./Section";
import { app } from "../main";

export default class SectionScenario extends Section {

    constructor(element) {
        super(element);
        this.tabId = "scenario";
    }

    showDelayComplete() {
        let promise = super.showDelayComplete();
        
        app.startLocation = this.path;

        if (!app.actions.selectedItem.value) {
            let lastIndex = app.actions.length.value - 1;
            app.actions.selectedIndex.value = lastIndex;
        }
        let actionsViewElement = app.scrollCapture.windowContent.element.querySelector("sc-actions-view");
        let actionsView = actionsViewElement.component;
        let element = actionsView.getElementByModel(app.actions.selectedItem.value);
        if (element) actionsView.scrollToElement(element, 0);
        return promise;
    }

    hideDelayComplete() {
        app.actions.selectedItem.value = null;
        return super.hideDelayComplete();
    }

}