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

		this.save = this.save.bind(this);
		this.play = this.play.bind(this);
		this.playSelectedAction = this.playSelectedAction.bind(this);
		this.playAndCapture = this.playAndCapture.bind(this);
		this.clear = this.clear.bind(this);

		app = this;

		this.startLocation = "scroll-capture/scenario";

		this.router = new Router(this);

		let icoFont = chrome.extension.getURL('assets/fonts/icofont.woff');
		let DefaultFontRegular = chrome.extension.getURL('assets/fonts/Menlo-Regular.woff');
		let defaultFontBold = chrome.extension.getURL('assets/fonts/Menlo-Bold.woff');
		let customCursor = chrome.extension.getURL('assets/images/customCursor.png');
		let fonts = document.createElement('style');
		fonts.type = 'text/css';
		fonts.textContent = `
		@font-face {
			font-family: IcoFont;
			src: url("${icoFont}");
		}
		@font-face {
			font-family: DefaultFont;
			font-weight: 400;
			src: url("${DefaultFontRegular}");
		}
		@font-face {
			font-family: DefaultFont;
			font-weight: 700;
			src: url("${defaultFontBold}");
		}

		body.is-capturing * {
			cursor: url('${customCursor}'), auto !important;
		}
		`;
		document.head.appendChild(fonts);

		this.showCaptureIcon = new BooleanData();
		this.showCaptureIcon.addEventListener(Data.CHANGE, (event) => {
			if (event.data) {
				document.body.classList.add("is-capturing");
			} else {
				document.body.classList.remove("is-capturing");
			}
		})
		this.isSaving = new BooleanData();
		this.selectedActionIsPlaying = new BooleanData();
		this.settings = new Settings();
		this.actions = new Actions();
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

		// this.actions.value = [
		// 	new ActionSwipe([new Vector2Data(150, 250), new Vector2Data(400, 450)]),
		// 	new ActionScroll("window", "px", 0, 500),
		// 	new ActionMouseEvent("click", 0, 0),
		// 	new ActionEval(),
		// 	// new ActionScroll(".scrollpane", "%", 0, 100),
		// 	// new ActionMouseEvent("click", 0, 0),
		// ];
	}

	load() {
		let promise = new Promise((resolve, reject) => {
			chrome.storage.sync.get(["json"], (result) => {
				resolve(result.json);
			});
		});
		return promise.then((json) => {
			let data = JSON.parse(json);
			this.actions.deserialize(data.actions);
			this.settings.deserialize(data.settings);
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

	play() {
		this.router.location = "play";
	}

	playAndCapture() {
		this.router.location = "record";
	}

	playSelectedAction() {
		this.selectedActionIsPlaying.value = true;
		let promise = this.actions.selectedItem.value.play();
		promise.then(()=> {
			this.selectedActionIsPlaying.value = false;
			this.save();
		});
	}

	doPlay(doCapture = false) {
		// let json = JSON.stringify(data);
		// let code = `window.startActions('${json}')`;
		// chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
		// 	chrome.tabs.executeScript(tabs[0].id, {code: code});
		// });
	}

	clear() {
		this.actions.value = [];
		this.save();
	}

}

tsunami.define("router-button", RouterButton);
tsunami.define("scroll-capture", ScrollCapture);
