import * as tsunami from "./tsunami/tsunami";
import {importTemplate} from "./tsunami/tsunami";
import ScrollCapture from "./view/ScrollCapture";
import App from "./tsunami/App";
import ActionSwipe from "./model/ActionSwipe";
import Actions from "./model/Actions";
import ActionWait from "./model/ActionWait";
import ActionScroll from "./model/ActionScroll";
import ActionMouseEvent from "./model/ActionMouseEvent";
import ActionEval from "./model/ActionEval";
import BooleanData from "./tsunami/data/BooleanData";
import Vector2Data from "./tsunami/data/Vector2Data";

export default class Main extends App {

	constructor(element) {
		super(element);

		this.isCapturing = new BooleanData();
		this.actions = new Actions();

		chrome.storage.sync.get(["json"], (result) => {
			let json = result.json;
			if(json) {
				this.actions.deserialize(JSON.parse(json));
			}
		});


		// this.actions.value = [
		// 	new ActionSwipe([new Vector2Data(150, 250), new Vector2Data(400, 450)]),
		// 	new ActionScroll("window", "px", 0, 500),
		// 	new ActionMouseEvent("click", 0, 0),
		// 	new ActionEval(),
		// 	// new ActionScroll(".scrollpane", "%", 0, 100),
		// 	// new ActionMouseEvent("click", 0, 0),
		// ];

		this.save = this.save.bind(this);
		this.play = this.play.bind(this);
		this.clear = this.clear.bind(this);
		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
	}

	init() {
		super.init();
		this.scrollCapture = importTemplate(ScrollCapture.template, this).component;
		this.show();
	}

	hide() {
		this.removeChild(this.scrollCapture.element);
	}

	show() {
		this.appendChild(this.scrollCapture.element);
	}

	save() {
		let data = this.actions.serialize();
		let json = JSON.stringify(data);
		chrome.storage.sync.set({json:json}, () => {
			// console.log(json);
		});
	}

	play() {
		this.save();
		this.hide();
		this.actions.selectedIndex.value = 0;
		setTimeout(()=> {
			this.triggerAction();
		}, 500);
		// let json = JSON.stringify(data);
		// let code = `window.startActions('${json}')`;
		// chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
		// 	chrome.tabs.executeScript(tabs[0].id, {code: code});
		// });
	}

	clear() {
		this.actions.value = [];
	}

	triggerAction() {
		let action = this.actions.selectedItem.value;
		if(action) {
			let promise = action.triggerDelay();
			promise.then(this.actionComplete.bind(this));
		} else {
			this.allComplete();
		}
	}

	actionComplete() {
		this.actions.selectedIndex.value = this.actions.selectedIndex.value + 1;
		if(this.actions.selectedIndex.value < this.actions.value.length) {
			this.triggerAction();
		} else {
			this.allComplete();
		}
	}

	allComplete() {
		// console.log("done!");
	}

}

tsunami.define("scroll-capture", ScrollCapture);
