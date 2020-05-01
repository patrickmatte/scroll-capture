import Data from "./Data";
import Validation from "./Validation";

export default class NumberData extends Data {

	constructor(value = NaN, modifiers = []) {
		super();
		this.modifiers = modifiers;
		this.length = new Data();
		this.value = value;
	}

	get value() {
		return this._value;
	}

	set value (value) {
		value = Number(value.toString());
		// if(isNaN(value)) value = 0;
		for (let i = 0; i < this.modifiers.length; i++) {
			let modifier = this.modifiers[i];
			value = modifier(value);
		}
		if (value != this._value || this.forceChangeEvent) {
			this._value = value;
			this.length.value = Math.max(1, value.toString().length);
			this.dispatchChangeEvent();
		}
	}

	add(value = 1) {
		this.value = this._value + value;
	}

	subtract(value = 1) {
		this.value = this._value - value;
	}

	toString() {
		return this.value.toString();
	}

	reset() {
		this.value = 0;
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
