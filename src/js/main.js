import * as tsunami from "./tsunami/tsunami";
import {importTemplate} from "./tsunami/tsunami";
import ScreenCapturePro from "./view/ScreenCapturePro";
import App from "./app";
import ActionSwipe from "./model/ActionSwipe";
import Actions from "./model/Actions";

export default class Main extends App {

	constructor() {
		super();

		this.actions = new Actions(
			new ActionSwipe(),
			// new ActionWait(),
			// new ActionScrollWindow(),
			// new ActionMouseEvent("click", ".spacer-1 button", 0, 0),
			// new ActionEval('console.log("finished")')
		);

		tsunami.define("screen-capture-pro", ScreenCapturePro);

		this.screenCaptureScenario = importTemplate(ScreenCapturePro.template, this);
		document.body.appendChild(this.screenCaptureScenario);
	}

	start() {
		let data = this.actions.serialize();
		let json = JSON.stringify(data);
		let code = `window.startActions('${json}')`;
		chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
			chrome.tabs.executeScript(tabs[0].id, {code: code});
		});
	}

}

export let main = new Main();
