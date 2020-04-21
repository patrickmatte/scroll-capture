import Data from "./Data";
import Validation from "./Validation";

export default class StringData extends Data {

	constructor(value = "", modifiers = []) {
		super();
		this.modifiers = modifiers;
		this.length = new Data();
		this.value = value;
	}

	static validateLengthIsMinimum1(val) {
		return val.length > 0;
	}

	get value() {
		return this._value;
	}

	set value(value) {
		value = value.toString();
		if (!value) {
			value = "";
		}
		for (let i = 0; i < this.modifiers.length; i++) {
			let modifier = this.modifiers[i];
			value = modifier(value);
		}
		if (value != this._value) {
			this._value = value;
			this.length.value = Math.max(1, value.toString().length);
			this.dispatchChangeEvent();
		}
	}

	toString() {
		return this.value;
	}

	reset() {
		this.value = "";
	}

	destroy() {
		this.modifiers = [];
		if(this.validation instanceof Validation) {
			this.validation.destroy();
		}
		this.validation = null;
		return super.destroy();
	}

}
