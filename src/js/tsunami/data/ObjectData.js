import Data from "./Data";
import BooleanData from "./BooleanData";

export default class ObjectData extends Data {

	constructor(value) {
		super();
		this.value = value;
	}

	get value() {
		return this._value;
	}

	set value(value) {
		if (value != this._value) {
			this._deselectValue(this._value);
			this._value = value;
			this._selectValue(this._value);
			this.dispatchEvent({type:Data.CHANGE, value:this._value});
		}
	}

	toString() {
		return this.value.toString();
	}

	_deselectValue(data) {
		if (data) {
			if (data.isSelected) {
				if (data.isSelected instanceof BooleanData) {
					data.isSelected.value = false;
				}
			}
		}
	}

	_selectValue(data) {
		if (data) {
			if (data.isSelected) {
				if (data.isSelected instanceof BooleanData) {
					data.isSelected.value = true;
				}
			}
		}
	}

}
