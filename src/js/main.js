import * as tsunami from "./tsunami/tsunami";
import {importTemplate} from "./tsunami/tsunami";
import ScrollCapture from "./view/ScrollCapture";
import App from "./tsunami/App";
import Actions from "./model/Actions";
import BooleanData from "./tsunami/data/BooleanData";
import Data from "./tsunami/data/Data";
import ArrayData from "./tsunami/data/ArrayData";

export let app;

export default class Main extends App {

	constructor(element) {
		super(element);

		app = this;

		let icoFont = chrome.extension.getURL('assets/fonts/icofont.woff');
		let DefaultFontRegular = chrome.extension.getURL('assets/fonts/Menlo/Menlo-Regular.ttf');
		let defaultFontBold = chrome.extension.getURL('assets/fonts/Menlo/Menlo-Bold.ttf');
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

		body.is-capturing {
			cursor: url('${customCursor}'), auto;
		}	
		`;
		document.head.appendChild(fonts);

		this.save = this.save.bind(this);
		this.play = this.play.bind(this);
		this.playAndCapture = this.playAndCapture.bind(this);
		this.clear = this.clear.bind(this);
		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);

		this.showCaptureIcon = new BooleanData();
		this.showCaptureIcon.addEventListener(Data.CHANGE, (event) => {
			if(event.value) {
				document.body.classList.add("is-capturing");
			} else {
				document.body.classList.remove("is-capturing");
			}
		})
		this.isSaving = new BooleanData();
		this.actions = new Actions();

		this.capturedVideo = new ArrayData("test.mp4");

		chrome.storage.sync.get(["json"], (result) => {
			this.scrollCapture = importTemplate(ScrollCapture.template, this).component;

			let json = result.json;
			if(json) {
				this.deserialize(JSON.parse(json));
			}
			this.actions.addEventListener("add", (event) => {
				this.save();
			});
			this.actions.addEventListener("remove", (event) => {
				this.save();
			});

			this.show();
		});

		// this.actions.value = [
		// 	new ActionSwipe([new Vector2Data(150, 250), new Vector2Data(400, 450)]),
		// 	new ActionScroll("window", "px", 0, 500),
		// 	new ActionMouseEvent("click", 0, 0),
		// 	new ActionEval(),
		// 	// new ActionScroll(".scrollpane", "%", 0, 100),
		// 	// new ActionMouseEvent("click", 0, 0),
		// ];

	}

	hide() {
		console.log("hide");
		this.removeChild(this.scrollCapture.element);
	}

	show() {
		this.resizeHandler();
		this.appendChild(this.scrollCapture.element);
	}

	deserialize(obj) {
		this.actions.deserialize(obj.actions);
		this.scrollCapture.deserialize(obj.scrollCapture);
	}

	serialize() {
		let obj = {
			actions:this.actions.serialize(),
			scrollCapture:this.scrollCapture.serialize()
		};
		return obj;
	}

	save() {
		console.log("save");
		this.isSaving.value = true;
		let obj = this.serialize();
		let json = JSON.stringify(obj);
		chrome.storage.sync.set({json:json}, () => {
			// console.log(json);
			setTimeout(()=> {
				this.isSaving.value = false;
			}, 100);
		});
	}

	play() {
		this.doPlay();
	}

	playAndCapture() {
		console.log("playAndCapture");
		this.doPlay(true);
	}

	doPlay(doCapture = false) {
		this.doCapture = doCapture;
		console.log("doPlay", this.doCapture);
		this.save();
		console.log("saved");
		this.hide();
		console.log("hidden");
		this.actions.selectedIndex.value = 0;
		setTimeout(() => {
			if (doCapture) {
				let msg = { txt: "scrollCaptureStartRecording" };
				console.log("sendMessage", msg);
				chrome.runtime.sendMessage(msg);
			}
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
		this.save();
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
		console.log("allComplete", this.doCapture);
		if(this.doCapture) {
			let msg = { txt: "scrollCaptureStopRecording" };
			chrome.runtime.sendMessage(msg);
		}
	}

}

tsunami.define("scroll-capture", ScrollCapture);
