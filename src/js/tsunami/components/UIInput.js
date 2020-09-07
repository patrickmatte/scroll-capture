import UIComponent from "./UIComponent";
import Data from "../data/Data";

export default class UIInput extends UIComponent {

    constructor(element) {
        super(element);
        
        this.inputHandler = this.inputHandler.bind(this);
        this.blurHandler = this.blurHandler.bind(this);

        // this._valuemultiplier = 1;
        
        switch (this.element.type) {
            case "radio":
            case "checkbox":
                // this.element.addEventListener("change", this.inputHandler);
                this.inputType = "change";
            break;
            default:
                // this.element.addEventListener("input", this.inputHandler);
                this.inputType = "input";
                break;
        }
        
        this.element.addEventListener("blur", this.blurHandler);
    }

    get inputType() {
        return this._inputType;
    }

    set inputType(value = "input") {
        this.element.removeEventListener(this.inputType, this.inputHandler);
        this._inputType = value;
        this.element.addEventListener(value, this.inputHandler);
    }
    
    get model() {
        return super.model;
    }

    set model(value) {
        super.model = value;
        if (value instanceof Data) value = value.value;
        switch (this.element.type) {
            // case "range":
            //     this.element.value = value * this.multiplier;
            //     break;
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
                // case "range":
                //     value = value / this.multiplier;
                //     break;
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
        this.element.removeEventListener(this.inputtype, this.inputHandler);
        return super.destroy();
    }

    // get multiplier(value) {
    //     return this._multiplier;
    // }

    // set multiplier(value) {
    //     this._multiplier = value;
    // }

    // get min(value) {
    //     return this._min;
    // }

    // set min(value) {
    //     this._min = value;
    //     this.element.setAttribute("min", value * this.multiplier);
    // }

    // get max(value) {
    //     return this._max;
    // }

    // set max(value) {
    //     this._max = value;
    //     this.element.setAttribute("max", value * this.multiplier);
    // }

}