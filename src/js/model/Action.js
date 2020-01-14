import BooleanData from "../tsunami/data/BooleanData";

export default class Action {

	constructor(type = "Action", name = "Action") {
		this.type = type;
		this.name = name;
		this.isCapturing = new BooleanData();
		this.capture = this.capture.bind(this);
	}

	clone() {}

	copy() {}

	trigger() {
		return Promise.resolve();
	}

	serialize() {
		return {
			type:this.type
		}
	}

	deserialize(data) {
		this.type = data.type;
	}

	capture() {
		console.log("Action.capture");
	}

}