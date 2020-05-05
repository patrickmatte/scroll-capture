import UIText2 from "./UIText2";

export default class UIHTML extends UIText2 {

    get model() {
        return this.element.innerHTML;
    }

    set model(value) {
        this.element.innerHTML = value;
    }

}
