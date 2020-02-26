import Action from "./Action";
import StringData from "../tsunami/data/StringData";

export default class ActionEval extends Action {

	constructor(code = '') {
		super("ActionEval", "Eval");
		if(!code) {
			code = `return new Promise(function(resolve, reject) {
    console.log("Wait for 1 second");
    setTimeout(function() {resolve(); }, 1000);
});`;
		}
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
		let expression = this.code.value;
		// let promise = eval('(function() {' + expression + '}())');
		let promise = new Function(expression)();
		let isPromise = (promise instanceof Promise);
		if(!isPromise) {
			promise = Promise.resolve();
		}
		return promise;
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