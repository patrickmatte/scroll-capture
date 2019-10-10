import Data from "./Data";
import BaseEvent from "../events";

export default class DataModel extends Data {

	constructor() {
		super();
	}

	copy(data) {
		for(let i in data) {
			let source = data[i];
			let destination = this[i];
			if(source instanceof Data) {
				if(destination instanceof Data) {
					destination.copy(source);
				} else {
					this[i] = source.value;
				}
			} else {
				if(destination instanceof Data) {
					destination.value = source;
				} else {
					this[i] = source;
				}
			}
		}
		this.dispatchEvent(new BaseEvent(Data.CHANGE, this));
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