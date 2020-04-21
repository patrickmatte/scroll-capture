import UIInput from "./UIInput";
import Data from "../data/Data";

export default class UIInputNumber extends UIInput {

    constructor(element) {
        super(element);
        
        this.defaultCharacter = "0";
        this.inputFilter = function (value) {
            return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
        }

        this.blurHandler = this.blurHandler.bind(this);
        this.element.addEventListener("blur", this.blurHandler);
    }

    blurHandler() {
        if(!this.element.value) {
            if (this.model) {
                if (this.model instanceof Data) {
                    this.model.value = this.defaultCharacter;
               }
            }
        }
    }
}