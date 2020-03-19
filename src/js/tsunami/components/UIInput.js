import UIComponent from "./UIComponent";
import Data from "../data/Data";

export default class UIInput extends UIComponent {

	constructor(element) {
		super(element);

		this.inputHandler = this.inputHandler.bind(this);
		this.element.addEventListener("input", this.inputHandler);

		this.changeHandler = this.changeHandler.bind(this);
		// this.element.addEventListener("change", this.changeHandler);
	}
	
	updateValue(value) {
		switch(this.element.type) {
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
		if (this._model) {
			if (this._model instanceof Data) {
				this._model.removeEventListener(Data.CHANGE, this.modelChange);
				switch(this.element.type) {
					case "checkbox":
						this._model.value = this.element.checked;
						break;
					case "radio":
					default:
						this._model.value = this.element.value;
						break;
				}
				this._model.addEventListener(Data.CHANGE, this.modelChange);
			}
		}
	}

	changeHandler(event) {
		if (this._model) {
			if (this._model instanceof Data) {
				this._model.removeEventListener(Data.CHANGE, this.modelChange);
				switch(this.element.type) {
					case "checkbox":
						this._model.value = this.element.checked;
						break;
					case "radio":
					default:
						this._model.value = this.element.value;
						break;
				}
				this._model.addEventListener(Data.CHANGE, this.modelChange);
			}
		}
	}

	destroy() {
		this.element.removeEventListener("input", this.inputHandler);
		this.element.removeEventListener("change", this.changeHandler);
		super.destroy();
	}

}
