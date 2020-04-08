import UIComponent from "../tsunami/components/UIComponent";
import { app } from "../main";

export default class Section extends UIComponent {

    showDelayComplete() {
        app.scrollCapture.windowContent.sections.appendChildAt(this.element, 0);
        this.dispatchResizeEvent();
        return super.showDelayComplete();
    }

    hideComplete() {
        app.scrollCapture.windowContent.sections.removeChild(this.element);
        this.dispatchResizeEvent();
        return super.hideComplete();
    }
    
}