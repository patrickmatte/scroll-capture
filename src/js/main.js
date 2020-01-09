import * as tsunami from "./tsunami/tsunami";
import {importTemplate} from "./tsunami/tsunami";
import ScreenCapturePro from "./view/ScreenCapturePro";
import App from "./app";
import ActionSwipe from "./model/ActionSwipe";
import Actions from "./model/Actions";
import ActionWait from "./model/ActionWait";
import ActionScroll from "./model/ActionScroll";
import ActionMouseEvent from "./model/ActionMouseEvent";
import ActionEval from "./model/ActionEval";
import Router from "./tsunami/Router";

export default class Main extends App {

	constructor(element) {
		super(element);
		console.log("Main", element);

		this.router = new Router();

		this.actions = new Actions();

		this.actions.value = [
			// new ActionSwipe(),
			// new ActionWait(),
			// new ActionScroll("window", "px", 0, 500),
			// new ActionMouseEvent("click", ".spacer-1 button", 0, 0),
			// new ActionEval(),
			// new ActionScroll(".scrollpane", "%", 0, 100),
			// new ActionMouseEvent("click", ".scrollpane button", 0, 0),
		];

		this.start = this.start.bind(this);
	}

	init() {
		super.init(true);
		this.screenCaptureScenario = importTemplate(ScreenCapturePro.template, this);
		console.log("this.screenCaptureScenario", this.screenCaptureScenario);
		this.appendChild(this.screenCaptureScenario, true);
	}

	start () {
		console.log("Main.start this", this);
		let data = this.actions.serialize();
		let json = JSON.stringify(data);
		let code = `window.startActions('${json}')`;
		chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
			chrome.tabs.executeScript(tabs[0].id, {code: code});
		});
	}

}

tsunami.define("screen-capture-pro", ScreenCapturePro);

let main = new Main(document.body);
main.init();
