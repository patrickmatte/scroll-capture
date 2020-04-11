import * as tsunami from "./tsunami/tsunami";
import {importTemplate} from "./tsunami/tsunami";
import ScrollCapture from "./view/ScrollCapture";
import App from "./tsunami/App";
import Actions from "./model/Actions";
import Settings from "./model/Settings";
import BooleanData from "./tsunami/data/BooleanData";
import Data from "./tsunami/data/Data";
import ArrayData from "./tsunami/data/ArrayData";
import Router from "./tsunami/Router";
import RouterButton from "./view/RouterButton";
import PlayState from "./view/PlayState";
import PlayRecordState from "./view/PlayRecordState";

export let app;

export default class Main extends App {

	constructor(element) {
		super(element);

		window.onbeforeunload = ()=> {
			this.router.location = "";
		}

		this.save = this.save.bind(this);
		// this.playSelected = this.playSelected.bind(this);
		// this.captureSelected = this.captureSelected.bind(this);
		// this.deleteSelected = this.deleteSelected.bind(this);
		this.clearActions = this.clearActions.bind(this);

		app = this;

		// this.startLocation = "scroll-capture/scenario";

		this.router = new Router(this);

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
			"record":new PlayRecordState()
		}
	}

	load() {
		let promise = new Promise((resolve, reject) => {
			chrome.storage.sync.get(["json"], (result) => {
				resolve(result);
			});
		});
		return promise.then((result) => {
			if (result.json) {
				let data = JSON.parse(result.json)
				this.actions.deserialize(data.actions);
				this.settings.deserialize(data.settings);
			}
		});
	}

	show() {
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
		chrome.storage.sync.set({json:json}, () => {
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
		this.actions.value = [];
		this.save();
	}

}

tsunami.define("router-button", RouterButton);
tsunami.define("scroll-capture", ScrollCapture);
