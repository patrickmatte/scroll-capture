import Branch from "../tsunami/Branch";
import { app } from "../main";

export default class SectionScenarioDefault extends Branch {

    constructor() {
        super();
    }

    show() {
        let lastIndex = app.actions.length.value - 1;
        app.actions.selectedIndex.value = lastIndex;
        let actionsViewElement = app.scrollCapture.windowContent.sections.element.querySelector("actions-view");
        let actionsView = actionsViewElement.component;
        let element = actionsView.getElementByModel(app.actions.selectedItem.value);
        actionsView.scrollToElement(element, 0);
    }

    hide() {
    }

}