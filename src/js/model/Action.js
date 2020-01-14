import BooleanData from "../tsunami/data/BooleanData";
import NumberData from "../tsunami/data/NumberData";

export default class Action {

	constructor(type = "Action", name = "Action") {
		this.type = type;
		this.name = name;
		this.isCapturing = new BooleanData();
		this.delay = new NumberData(0);
		this.capture = this.capture.bind(this);
	}

	clone() {

	}

	copy(action) {
		this.delay.value = action.delay.value;
	}

	trigger() {
		return Promise.resolve();
	}

	serialize() {
		return {
			type:this.type,
			delay:this.delay.value
		}
	}

	deserialize(data) {
		this.type = data.type;
		this.delay.value = data.delay;
	}

	capture() {
		console.log("Action.capture");
	}

}