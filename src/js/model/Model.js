import ArrayData from "../tsunami/data/ArrayData";
import ActionScrollToPosition from "./ActionScrollToPosition";
import ActionWait from "./ActionWait";
import Actions from "./Actions";
import {startActions} from "../content";
import ActionScrollToBottom from "./ActionScrollToBottom";
import ActionMouseEvent from "./ActionMouseEvent";
import ActionEval from "./ActionEval";

export default class Model {

	constructor() {
		this.spacers = new ArrayData();
		for(let i = 0; i < 10; i++) {
			let spacer = {};
			this.spacers.push(spacer);
		}

		this.isTest = (window.location.origin.indexOf("0.0.0.0:8888") != -1)?true:false;
		// console.log("this.isTest", this.isTest);
		this.actions = new Actions(
			new ActionScrollToBottom(),
			new ActionWait(),
			new ActionScrollToPosition(),
			new ActionMouseEvent("click", ".spacer-1 button", 0, 0),
			new ActionEval('console.log("finished")')
		);
	}

	start() {
		let data = this.actions.serialize();
		let json = JSON.stringify(data);
		let code = `window.startActions('${json}')`;
		if(this.isTest) {
			eval(code);
		} else {
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.executeScript(tabs[0].id, {code: code});
			});
		}
	}

}

export let model = new Model();