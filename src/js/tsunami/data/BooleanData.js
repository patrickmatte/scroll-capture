import Data from "./Data";
import Validation from "./Validation";

export default class BooleanData extends Data {

	constructor(value = false) {
		super();
		this.value = value;
	}

	get value() {
		return this._value;
	}

	set value(value) {
		if (value != this._value) {
			this._value = value;
			this.dispatchEvent({type:Data.CHANGE, value:this._value});
		}
	}

	toString() {
		return this.value.toString();
	}

	reset() {
		this.value = true;
	}

	destroy() {
		if(this.validation instanceof Validation) {
			this.validation.destroy();
		}
		this.validation = null;
		return super.destroy();
	}

}
