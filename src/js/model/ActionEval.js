import Action from "./Action";
import StringData from "../tsunami/data/StringData";

export default class ActionEval extends Action {

	constructor(code = 'alert("test");') {
		super("ActionEval", "Eval");
		this.code = new StringData(code);
	}

	clone() {
		let action = new ActionEval();
		action.copy(this);
		return action;
	}

	copy(action) {
		this.code.value = action.code.value;
	}

	trigger() {
		eval(this.code.value);
		return Promise.resolve();
	}

	serialize() {
		let data = super.serialize();
		data.code = encodeURIComponent(this.code.value);
		return data;
	}

	deserialize(data) {
		super.deserialize(data);
		this.code.value = decodeURIComponent(data.code);
	}

}