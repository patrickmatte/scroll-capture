import EventDispatcher from "../EventDispatcher";

export default class Data extends EventDispatcher {

	constructor() {
		super();
	}

	get value() {
		return this;
	}

	set value(val) {

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

	copy(data) {
		this.value = data.value;
	}

	destroy() {
		this.value = null;
		return super.destroy();
	}

}
