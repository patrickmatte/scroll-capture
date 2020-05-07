import UIComponent from "../tsunami/components/UIComponent";
import { app } from "../main";

export default class Section extends UIComponent {

    constructor(element) {
        super(element);
    }

    showDelayComplete() {
        // let tab = app.view.scrollCapture.element.querySelector(".sc-window.sc-window-sections .sc-tab[data-id='" + this.slug + "']");
        let tab = app.view.scrollCapture.element.querySelector(".sc-tab[data-id='" + this.slug + "']");
        if (tab) tab.classList.add("sc-title-tab");
        let promise = super.showDelayComplete();
        this.windowResize(this.windowSize);
        return promise;
    }

    hideComplete() {
        let tab = app.view.scrollCapture.element.querySelector(".sc-tab[data-id='" + this.slug + "']");
        if (tab) tab.classList.remove("sc-title-tab");
        return super.hideComplete();
    }
    
}