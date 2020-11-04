import ChangeEvent from "../ChangeEvent";
import Data from "./Data";

export default class DataModel extends Data {

	constructor(properties = {}) {
		super();
		this.changeHandler = this.changeHandler.bind(this);

		for(let i in properties) {
			this["_" + i] = properties[i];
			Object.defineProperty(this, i, {
				get : function(){
					return this["_" + i];
				},
                set : function(value) {
					if(this["_" + i] != value) {
						this["_" + i] = value;
						ChangeEvent.dispatch(this, i,  value);
						this.changeHandler();
					}
				},
				enumerable : true,
				configurable : true
			});
		}
	}

	get value() {
		return this;
	}

	changeHandler() {
		ChangeEvent.dispatch(this, "value", this);
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