import UIComponent from "./UIComponent";
import Data from "../data/Data";

export default class UIInput extends UIComponent {

	constructor(element) {
		super(element);

		// this.inputFilter = function() {
		// 	return true;
		// }

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
				let value;
				switch(this.element.type) {
					case "checkbox":
						value = this.element.checked;
						break;
					case "radio":
					default:
						value = this.element.value;
						break;
				}
				
				// if (this.inputFilter(this.element.value)) {
				// 	this.oldValue = this.element.value;
				// 	this.oldSelectionStart = this.element.selectionStart;
				// 	this.oldSelectionEnd = this.element.selectionEnd;
				// } else if (this.oldValue) {
				// 	value = this.oldValue;
				// 	this.element.value = value;
				// 	this.element.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
				// } else {
				// 	value = "";
				// 	this.element.value = value;
				// }
				
				this._model.value = value;
				
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
