import Data from "./Data";
import Validation from "./Validation";

export default class NumberData extends Data {

	constructor(value = NaN, modifiers = []) {
		super();
		this.modifiers = modifiers;
		this.length = new Data();
		this.value = value;
	}

	static roundDecimal(val, divider = 10) {
		return Math.round(val * divider) / divider;
	}

	static roundDecimal1(val) {
		return NumberData.roundDecimal(val, 10);
	}

	static roundDecimal2(val) {
		return NumberData.roundDecimal(val, 100);
	}

	static roundDecimal3(val) {
		return NumberData.roundDecimal(val, 1000);
	}

	get value() {
		return this._value;
	}

	set value (value) {
		value = Number(value);
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
