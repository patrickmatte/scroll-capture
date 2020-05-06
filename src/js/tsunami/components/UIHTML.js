import UIText from "./UIText";

export default class UIHTML extends UIText {

    get model() {
        return this.element.innerHTML;
    }

    set model(value) {
        this.element.innerHTML = value;
    }

}
