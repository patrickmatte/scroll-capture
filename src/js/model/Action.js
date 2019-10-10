export default class Action {

	constructor(type = "Action", name = "Action") {
		this.type = type;
		this.name = name;
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

}