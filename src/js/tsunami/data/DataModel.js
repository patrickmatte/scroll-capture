import Data from "./Data";

export default class DataModel extends Data {

	constructor() {
		super();
		this.changeHandler = this.changeHandler.bind(this);
	}

	get value() {
		return this;
	}

	changeHandler() {
		this.dispatchChangeEvent("value", this);
	}

	destroy() {
		for(let i in this) {
			let data = this[i];
			if(data instanceof Data) {
				data.destroy();
			}
			this[i] = null;
		}
		return super.destroy();
	}

}