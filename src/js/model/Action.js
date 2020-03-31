import BooleanData from "../tsunami/data/BooleanData";
import NumberData from "../tsunami/data/NumberData";
import {awaitTimeout} from "../tsunami/await";
import StringData from "../tsunami/data/StringData";
import Data from "../tsunami/data/Data";
import { app } from "../main";

export default class Action {

	constructor(type = "Action", name = "Action") {
		this.type = type;
		this.name = new StringData();
		this.name.length = new NumberData();
		this.name.addEventListener(Data.CHANGE, () => {
			this.name.length.value = Math.max(this.name.value.length, 4);
		});
		this.name.value = name;
		this.isTestable = new BooleanData();
		this.isCaptureable = new BooleanData();
		this.isCapturing = new BooleanData();
		this.isCapturing.addEventListener(Data.CHANGE, (event) => {
			app.showCaptureIcon.value = event.value;
			if(!event.value) {
				app.save();
			}
		});
		this.isPlaying = new BooleanData();
		this.delay = new NumberData(0);
		this.isSelectedItem = new BooleanData();

		this.capture = this.capture.bind(this);
		this.play = this.play.bind(this);

		this.array = [this];
	}

	clone() {

	}

	copy(action) {
		this.delay.value = action.delay.value;
		this.name.value = action.name.value;
	}

	triggerDelay() {
		let promise1 = awaitTimeout(this.delay.value * 1000);
		let promise2 = promise1.then(() => {
			return this.trigger();
		});
		return promise2;
	}

	trigger() {
		return Promise.resolve();
	}

	serialize() {
		return {
			type:this.type,
			delay:this.delay.value,
			name:this.name.value
		}
	}

	deserialize(data) {
		this.type = data.type;
		this.delay.value = data.delay;
		this.name.value = data.name;
	}

	capture() {
	}

	captureComplete() {
		this.isCapturing.value = false;
		app.save();
	}

	captureAtInit() {
	}

	play() {
		this.isPlaying.value = true;
		let promise1 = this.trigger();
		let promise2 = promise1.then(() => {
			this.isPlaying.value = false;
		});
		return promise2;
	}

}