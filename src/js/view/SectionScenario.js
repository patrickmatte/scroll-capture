import Section from "./Section";
import { app } from "../main";

export default class SectionScenario extends Section {

    constructor(element) {
        super(element);
    }

    showDelayComplete() {
        let promise = super.showDelayComplete();
        app.startLocation = this.path;
        let lastIndex = app.actions.length.value - 1;
        app.actions.selectedIndex.value = lastIndex;
        let actionsViewElement = app.scrollCapture.windowContent.sections.element.querySelector("actions-view");
        let actionsView = actionsViewElement.component;
        let element = actionsView.getElementByModel(app.actions.selectedItem.value);
        // actionsView.scrollToElement(element, 0);
        return promise;
    }

}