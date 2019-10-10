import Data from "./Data";
import Validation from "./Validation";

export default class NumberData extends Data {

	constructor(value = NaN, modifiers = []) {
		super();
		this.modifiers = modifiers;
		this.value = value;
	}

	static roundDecimal1(val) {
		return Math.round(val * 10) / 10;
	}

	static roundDecimal2(val) {
		return Math.round(val * 100) / 100;
	}

	static roundDecimal3(val) {
		return Math.round(val * 1000) / 1000;
	}

	get value() {
		return this._value;
	}

	set value (value) {
		for (let i = 0; i < this.modifiers.length; i++) {
			let modifier = this.modifiers[i];
			value = modifier(value);
		}
		if (value != this._value || this.forceChangeEvent) {
			this._value = value;
			this.dispatchEvent({type:Data.CHANGE, value:this._value});
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
