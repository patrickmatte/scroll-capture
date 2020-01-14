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

export default class Main extends App {

	constructor(element) {
		super(element);

		this.isCapturing = new BooleanData();
		this.actions = new Actions();

		this.actions.value = [
			// new ActionSwipe(),
			// new ActionWait(),
			new ActionScroll("window", "px", 0, 500),
			new ActionMouseEvent(),
			// new ActionMouseEvent("click", ".spacer-1 button"),
			// new ActionEval(),
			new ActionScroll(".scrollpane", "%", 0, 100),
			// new ActionMouseEvent("click", ".scrollpane button"),
		];

		this.playAll = this.playAll.bind(this);
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

	playAll() {
		let data = this.actions.serialize();
		// let json = JSON.stringify(data);
		// let code = `window.startActions('${json}')`;
		// chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
		// 	chrome.tabs.executeScript(tabs[0].id, {code: code});
		// });
		this.actions.selectedIndex.value = 0;
		this.triggerAction();
	}

	triggerAction() {
		let action = this.actions.selectedItem.value;
		if(action) {
			let promise = action.trigger();
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
