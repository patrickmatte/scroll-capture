import Section from "./Section";
import { app } from "../main";

export default class SectionScenario extends Section {

    constructor(element) {
        super(element);
    }

    showDelayComplete() {
        let promise = super.showDelayComplete();
                
        this.router.redirect("default", () => { return this.path });
        
        if (!app.model.actions.selectedItem.value) {
            let lastIndex = app.model.actions.length.value - 1;
            app.model.actions.selectedIndex.value = lastIndex;
        }
 
        app.model.save();

        // let actionsViewElement = app.view.scrollCapture.windowContent.element.querySelector("sc-actions-view");
        // let actionsView = actionsViewElement.component;
        // let element = actionsView.getElementByModel(app.model.actions.selectedItem.value);
        // if (element) actionsView.scrollToElement(element, 0);
        return promise;
    }

    hideDelayComplete() {
        app.model.actions.selectedItem.value = null;
        return super.hideDelayComplete();
    }

}