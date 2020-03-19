import Data from "../data/Data";

export default class Attribute {

    constructor(element, name, model, unit = "") {
        this.modelChange = this.modelChange.bind(this);
        this.element = element;
        this.name = name;
		this.model = model;
        this.unit = unit;
    }

    get model() {
        return this._model;
    }

    set model(value) {
        if (this._model) {
            if (this._model instanceof Data) {
                this._model.removeEventListener(Data.CHANGE, this.modelChange);
            }
        }
        this._model = value;

        if (value instanceof Data) {
            value.addEventListener(Data.CHANGE, this.modelChange);
            this.modelChange();
        } else {
            this.updateValue(value);
        }
    }

    modelChange(event) {
        this.updateValue(this._model.value);
    }

    updateValue(value) {
		if (value == null || value == undefined) {
			value = "";
		}
        let string = value.toString();
        if (string && this.unit) {
            string += this.unit;
        }
        this.element.setAttribute(this.name, string);
    }

    destroy() {
        this.model = null;
    }

}