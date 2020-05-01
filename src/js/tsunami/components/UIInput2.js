import UIComponent from "./UIComponent";
import Data from "../data/Data";

export default class UIInput2 extends UIComponent {

    constructor(element) {
        super(element);

        this.inputHandler = this.inputHandler.bind(this);
        this.blurHandler = this.blurHandler.bind(this);
        
        switch (this.element.type) {
            case "radio":
            case "checkbox":
                this.element.addEventListener("change", this.inputHandler);
            break;
            default:
                this.element.addEventListener("input", this.inputHandler);
                break;
        }

        this.element.addEventListener("blur", this.blurHandler);
    }

    get model() {
        return this._model;
    }

    set model(value) {
        console.log("UIInput2.model", value);
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
        console.log("UIInput2.inputHandler", this.element.value);
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

    blurHandler() {
        if (!this.element.value) {
            let placeholder = this.element.getAttribute("placeholder");
            if (placeholder) {
                this.element.value = placeholder;
                if (this.model instanceof Data) this.model.value = placeholder;
            }
        }
    }

    destroy() {
        this.element.removeEventListener("blur", this.blurHandler);
        this.element.removeEventListener("input", this.inputHandler);
        this.element.removeEventListener("change", this.inputHandler);
        return super.destroy();
    }

}