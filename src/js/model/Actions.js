import ArrayData from "../tsunami/data/ArrayData";
import ActionScroll from "./ActionScroll";
import ActionMouseEvent from "./ActionMouseEvent";
import ActionSwipe from "./ActionSwipe";
import ActionWait from "./ActionWait";
import { sendTrackEventMessage } from "./GABridge";

export default class Actions extends ArrayData {

	constructor() {
		super();

		this.push.apply(this, arguments);

		// this.addSelectedType = this.addSelectedType.bind(this);

		this.types = new ArrayData();
		this.types.value = [
			new ActionScroll(),
			new ActionMouseEvent(),
			new ActionSwipe(),
			new ActionWait()
		];
		// this.types.selectedItem.value = this.types.value[0];
	}

	cloneAction(action) {
		let clone = action.clone();
		this.addAction(clone);
	}

	// addSelectedType() {
	// 	if(!this.types.selectedItem.value) {
	// 		return;
	// 	}
	// 	let action = this.types.selectedItem.value.clone();
	// 	sendTrackEventMessage("Action", "add", action.type);
	// 	this.addAction(action);
	// 	// this.types.selectedItem.value = this.types.value[0];
	// }

	addAction(action) {
		if (!action) return;
		sendTrackEventMessage("Action", "add", action.type);
		action.captureAtInit();
		let index = this.selectedIndex.value + 1;
		if (isNaN(index)) index = this.value.length;
		this.splice(index, 0, action);
		this.selectedIndex.value = index;
	}

	removeAction(action) {
		sendTrackEventMessage("Action", "remove", action.type);
		let index = this.indexOf(action);
		this.remove(action);
		let newIndex = Math.max(index - 1, 0);
		this.selectedIndex.value = Math.min(newIndex, this.value.length - 1);
	}

	serialize() {
		let actions = [];
		this.map((action) => {
			actions.push(action.serialize());
		});
		return actions;
	}

	deserialize(json) {
		if (!json) return;
		let actions = [];
		for(let i = 0; i < json.length; i++) {
			let data = json[i];
			let action = this.types.find((type) => {
				return type.type == data.type;
			}).clone();
			action.deserialize(data);
			actions.push(action);
		}
		this.value = actions;
	}

}