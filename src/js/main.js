import { importTemplate, define } from "./tsunami/tsunami";
import { loadStyle } from "./tsunami/load";
import { sendTrackPageMessage, sendTrackEventMessage } from "./view/GABridge";
import Data from "./tsunami/data/Data";
import BooleanData from "./tsunami/data/BooleanData";
import ScrollCapture from "./view/ScrollCapture";
import App from "./tsunami/App";
import Actions from "./model/Actions";
import Settings from "./model/Settings";
import ArrayData from "./tsunami/data/ArrayData";
import Router from "./tsunami/Router";
import RouterButton from "./view/RouterButton";
import PlayState from "./view/PlayState";
import PlayRecordState from "./view/PlayRecordState";
import CloseState from "./view/CloseState";
import StringData from "./tsunami/data/StringData";

export let app;

export default class Main extends App {

	constructor(element) {
		super(element);
		
		this.isActive = true;
		
		this.testString = new StringData("TestString123");

		window.addEventListener("beforeunload", () => {
			this.isActive = false;
			this.router.removeEventListener(Router.CHANGE, this.trackRouterLocation);
			this.router.location = "";
		});
		
		this.save = this.save.bind(this);
		// this.playSelected = this.playSelected.bind(this);
		// this.captureSelected = this.captureSelected.bind(this);
		// this.deleteSelected = this.deleteSelected.bind(this);
		// this.clearActions = this.clearActions.bind(this);
		this.trackRouterLocation = this.trackRouterLocation.bind(this);

		app = this;

		this.router = new Router(this);
		this.router.redirect("default", () => { return "scroll-capture/scenario" });
		this.router.addEventListener(Router.CHANGE, this.trackRouterLocation);
		// this.router.addEventListener(Router.COMPLETE, (e) => {console.log(e.type, this.router.location);});

		this.showCaptureIcon = new BooleanData();
		this.showCaptureIcon.addEventListener(Data.CHANGE, (event) => {
			let className = "is-capturing";
			if (event.data) {
				document.body.classList.add(className);
			} else {
				document.body.classList.remove(className);
			}
		})

		this.isSaving = new BooleanData();
		// this.isPlayingSelected = new BooleanData();
		// this.isCapturingSelected = new BooleanData();

		this.settings = new Settings();
		this.actions = new Actions();

		// this.actions.value = [
		// 	new ActionSwipe([new Vector2Data(150, 250), new Vector2Data(400, 450)]),
		// 	new ActionScroll("window", "px", 0, 500),
		// 	new ActionMouseEvent("click", 0, 0),
		// 	new ActionEval(),
		// 	// new ActionScroll(".scrollpane", "%", 0, 100),
		// 	// new ActionMouseEvent("click", 0, 0),
		// ];

		this.actions.addEventListener("add", (event) => {
			this.save();
		});
		this.actions.addEventListener("remove", (event) => {
			this.save();
		});
		
		this.capturedVideo = new ArrayData("test.mp4");

		this.scrollCapture = importTemplate(ScrollCapture.template, this).component;
		
		this.branches = {
			"scroll-capture": this.scrollCapture,
			"play": new PlayState(),
			"record": new PlayRecordState(),
			"closed": new CloseState()
		}
	}

	sendMessage(message) {
		if (this.isActive) {
			chrome.runtime.sendMessage(message);
		}
	}

	trackRouterLocation() {
		// console.log(e.type, this.router.location);
		sendTrackPageMessage("/" + this.router.location);
	}

	load() {
		let contentCSS = chrome.extension.getURL("content.css");
		let contentCSSPromise = loadStyle(contentCSS);
		let fontawesomeCSS = chrome.extension.getURL("fontawesome.css");
		let fontawesomeCSSPromise = loadStyle(fontawesomeCSS);

		this.appendChild(this.scrollCapture.element);

		let promise = new Promise((resolve, reject) => {
			chrome.storage.local.get(["json"], (result) => {
				resolve(result);
			});
		});

		return Promise.all([promise, contentCSSPromise, fontawesomeCSSPromise]).then((results) => {
			if (results[0]) {
				let json = results[0].json;
				if (json) {
					let data = JSON.parse(json)
					this.actions.deserialize(data.actions);
					this.settings.deserialize(data.settings);
				}
			}
		});
	}

	show() {
		sendTrackEventMessage("ScrollCaptureStart", window.location.origin + window.location.pathname);
	}

	hide() {
	}
	
	save() {
		this.isSaving.value = true;
		let obj = {
			actions: this.actions.serialize(),
			settings: this.settings.serialize()
		};
		let json = JSON.stringify(obj);
		chrome.storage.local.set({json:json}, () => {
			setTimeout(()=> {
				this.isSaving.value = false;
			}, 100);
		});
	}

	// playSelected() {
	// 	this.isPlayingSelected.value = true;
	// 	let promise = this.actions.selectedItem.value.play();
	// 	promise.then(()=> {
	// 		this.isPlayingSelected.value = false;
	// 		this.save();
	// 	});
	// }

	// captureSelected() {

	// }

	// deleteSelected() {
	// 	this.actions.selectedItem.value.deleteAction();
	// }
	
	clearActions() {
		sendTrackEventMessage("clearActions", "click");
		this.actions.value = [];
		this.save();
	}

}

define("router-button", RouterButton);
define("scroll-capture", ScrollCapture);

if(!window.scrollCaptureApp) window.scrollCaptureApp = new Main(document.body);
app = window.scrollCaptureApp;
app.router.location = "default";