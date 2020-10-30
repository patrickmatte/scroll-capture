import ChangeEvent from "../ChangeEvent";

export default class Data extends EventTarget {

	constructor() {
		super();
		this.dispatchChangeEvent = this.dispatchChangeEvent.bind(this);
		// this._value = this;
	}

	get value() {
		return this._value;
	}

	set value(value) {
		if (value != this._value || this.forceChangeEvent) {
			this._value = value;
			this.dispatchChangeEvent("value", this.value);
		}
	}

	reset(value) {
		this.value = value;
	}

	toString() {
		if(this.debug) console.log("Data.toString", this.value);
		return this.value.toString();
	}

	serialize() {
		return this.value;
	}

	deserialize(value) {
		this.value = value;
	}
	
	copy(data) {
		this.value = data.value;
		this.dispatchChangeEvent("value", this.value);
	}

	destroy() {
		this.value = null;
		return super.destroy();
	}

	dispatchChangeEvent(name, value) {
		// if (!data) data = this.value;
		this.dispatchEvent(new ChangeEvent(name, value));
	}

	static get CHANGE() {
		return "value";
	}

}
