import Data from "./Data";

export default class DataModel extends Data {

	constructor() {
		super();
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