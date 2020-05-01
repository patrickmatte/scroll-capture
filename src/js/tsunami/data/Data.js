import EventDispatcher from "../EventDispatcher";
import BaseEvent from "../events";

export default class Data extends EventDispatcher {

	constructor() {
		super();
		this.dispatchChangeEvent = this.dispatchChangeEvent.bind(this);
		// this._value = this;
	}

	get value() {
		return this._value;
	}

	set value(val) {
		// this._value = val;
		if (val != this._value) {
			this._value = val;
			this.dispatchChangeEvent();
		}
	}

	serialize() {
		return this.value;
	}

	deserialize(value) {
		this.value = value;
	}
	
	copy(data) {
		this.value = data.value;
		this.dispatchChangeEvent();
	}

	destroy() {
		this.value = null;
		return super.destroy();
	}

	dispatchChangeEvent() {
		// if (!data) data = this.value;
		this.dispatchEvent(new BaseEvent(Data.CHANGE, this.value));
	}

	static get CHANGE() {
		return "change";
	}

	static serialize(obj) {
		let str = [];
		for(let p in obj)
			if (obj.hasOwnProperty(p)) {
				str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			}
		return str.join("&");
	}

}
