import Action from "./Action";
import {awaitTimeout} from "../tsunami/await";
import NumberData from "../tsunami/data/NumberData";

export default class ActionWait extends Action {

	constructor(timeout = 0.25) {
		super("ActionWait", "Pause");
		this.timeout = new NumberData(timeout);
	}

	clone() {
		let action = new ActionWait();
		action.copy(this);
		return action;
	}

	copy(action) {
		this.timeout.value = action.timeout.value;
	}

	trigger() {
		return awaitTimeout(this.timeout.value * 1000);
	}

	serialize() {
		return {type:"ActionWait", params:[this.timeout.value]};
	}

	serialize() {
		let data = super.serialize();
		data.timeout = this.timeout.value;
		return data;
	}

	deserialize(data) {
		super.deserialize(data);
		this.timeout.value = data.timeout;
	}

}