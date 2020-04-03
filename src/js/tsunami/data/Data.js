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
		this._value = val;
	}

	serialize() {
		return this.value;
	}

	deserialize(data) {
		this.value = data;
	}
	
	copy(data) {
		this.value = data.value;
		this.dispatchChangeEvent(this.value);
	}

	destroy() {
		this.value = null;
		return super.destroy();
	}

	dispatchChangeEvent(data) {
		if (!data) data = this;
		this.dispatchEvent(new BaseEvent(Data.CHANGE, data));
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
