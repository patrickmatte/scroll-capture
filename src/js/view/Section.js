import UIComponent from "../tsunami/components/UIComponent";
import { app } from "../main";

export default class Section extends UIComponent {

    showDelayComplete() {
        app.scrollCapture.windowContent.sections.appendChild(this.element);
        return super.showDelayComplete();
    }

    hideComplete() {
        app.scrollCapture.windowContent.sections.removeChild(this.element);
        return super.hideComplete();
    }
    
}