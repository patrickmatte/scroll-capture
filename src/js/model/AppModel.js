import { sendTrackEventMessage } from "./GABridge";
import BooleanData from "../tsunami/data/BooleanData";
import Actions from "./Actions";
import Settings from "./Settings";
import { app } from "../main";
import NumberData from "../tsunami/data/NumberData";
import BaseEvent from "../tsunami/events";

export default class AppModel extends EventTarget {

    constructor() {
		super();
        this.save = this.save.bind(this);
        // this.playSelected = this.playSelected.bind(this);
		// this.captureSelected = this.captureSelected.bind(this);
		// this.deleteSelected = this.deleteSelected.bind(this);
		// this.clearActions = this.clearActions.bind(this);

        this.showCaptureIcon = new BooleanData();
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
        
        this.test1 = new NumberData(1);
        this.test2 = new NumberData(2);
        this.test3 = new NumberData(3);
    }

    get actions() {
        return this._actions;
    }

    set actions(value) {
        this._actions = value;
		this.dispatchEvent(new BaseEvent("change_actions", value));
    }

    sendMessage(message) {
        chrome.runtime.sendMessage(message);
    }

    save() {
        this.isSaving.value = true;
        let obj = {
            actions: this.actions.serialize(),
            settings: this.settings.serialize()
        };
        let json = JSON.stringify(obj);
        chrome.storage.local.set({ json: json }, () => {
            setTimeout(() => {
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
