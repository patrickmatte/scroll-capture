import BooleanData from "./BooleanData";
import Data from "./Data";

export default class Validation extends BooleanData {

	constructor(data, methods = []) {
		super();
		this.dataChangeBind = this.validate.bind(this);
		this.methods = methods;
		this.data = data;
	}

	get data() {
		return this._data;
	}

	set data(value) {
		if (this._data) {
			this._data.removeEventListener(Data.CHANGE, this.dataChangeBind);
		}
		this._data = value;
		if (this._data) {
			this._data.addEventListener(Data.CHANGE, this.dataChangeBind);
		}
		this.validate();
	}

	validate(event) {
		let isValid = false;
		if (this.data) {
			for (let i = 0; i < this.methods.length; i++) {
				let method = this.methods[i];
				isValid = method(this.data.value);
			}
		}
		this.value = isValid;
	}

	addValidation(method) {
		this.methods.push(method);
		this.validate();
	}

	destroy() {
		this.methods = null;
		this.data = null;
		return super.destroy();
	}

}