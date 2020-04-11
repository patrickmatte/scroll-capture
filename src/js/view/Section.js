import UIComponent from "../tsunami/components/UIComponent";
import { app } from "../main";

export default class Section extends UIComponent {

    constructor(element) {
        super(element);
        this.tabId = "";
    }

    showDelayComplete() {
        let tab = app.scrollCapture.element.querySelector(".sc-tab[data-id='" + this.tabId + "']");
        if (tab) tab.classList.add("sc-title-tab");
        // app.scrollCapture.windowContent.sections.appendChildAt(this.element, 0);
        app.scrollCapture.windowContent.appendChildAt(this.element, 0);
        this.dispatchResizeEvent();
        return super.showDelayComplete();
    }

    hideComplete() {
        let tab = app.scrollCapture.element.querySelector(".sc-tab[data-id='" + this.tabId + "']");
        if (tab) tab.classList.remove("sc-title-tab");
        // app.scrollCapture.windowContent.sections.removeChild(this.element);
        app.scrollCapture.windowContent.removeChild(this.element);
        this.dispatchResizeEvent();
        return super.hideComplete();
    }
    
}