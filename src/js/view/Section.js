import UIComponent from "../tsunami/components/UIComponent";
import { app } from "../main";

export default class ScrollCaptureSection extends UIComponent {

    showDelayComplete() {
        app.scrollCapture.windowContent.component.appendChild(this.element);
        return super.showDelayComplete();
    }

    hideComplete() {
        app.scrollCapture.windowContent.component.removeChild(this.element);
        return super.hideComplete();
    }
    
}