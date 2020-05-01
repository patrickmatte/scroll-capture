import UIComponent from "./UIComponent";
import Data from "../data/Data";

export default class UIInput2 extends UIComponent {

    constructor(element) {
        super(element);
        this._model = null;

        this.inputHandler = this.inputHandler.bind(this);
        this.element.addEventListener("input", this.inputHandler);
    }

    get model() {
        return this._model;
    }

    set model(value) {
        this._model = value;
        if (value instanceof Data) value = value.value;
        switch (this.element.type) {
            case "checkbox":
                this.element.checked = value;
                break;
            case "radio":
                let checked = (value == this.element.value);
                if (checked != this.element.checked) {
                    this.element.checked = checked;
                }
                break;
            default:
                this.element.value = value;
                break;
        }
    }

    inputHandler(event) {
        if (this.model instanceof Data) {
            let value;
            switch (this.element.type) {
                case "checkbox":
                    value = this.element.checked;
                    break;
                case "radio":
                default:
                    value = this.element.value;
                    break;
            }

            this.model.value = value;
        }
    }

}