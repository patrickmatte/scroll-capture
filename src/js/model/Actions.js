import ArrayData from "../tsunami/data/ArrayData";
import ActionScroll from "./ActionScroll";
import ActionMouseEvent from "./ActionMouseEvent";
import ActionEval from "./ActionEval";
import Action from "./Action";
import ActionSwipe from "./ActionSwipe";
import ActionWait from "./ActionWait";

export default class Actions extends ArrayData {

	constructor() {
		super();
		this.push.apply(this, arguments);

		this.addSelectedType = this.addSelectedType.bind(this);

		this.types = new ArrayData();
		this.types.value = [
			new ActionScroll(),
			new ActionMouseEvent(),
			new ActionSwipe(),
			new ActionWait(),
			new ActionEval()
		];
		this.types.selectedItem.value = this.types.value[0];
	}

	addSelectedType() {
		if(!this.types.selectedItem.value) {
			return;
		}
		let action = this.types.selectedItem.value.clone();
		if(action) {
			action.captureAtInit();

			let index = this.selectedIndex.value + 1;
			if(isNaN(index)) index = this.value.length;
			this.splice(index, 0, action);
			this.selectedIndex.value = index;
		}
		// this.types.selectedItem.value = this.types.value[0];
	}

	serialize() {
		let actions = [];
		this.map((action) => {
			actions.push(action.serialize());
		});
		return actions;
	}

	deserialize(json) {
		let actions = [];
		for(let i = 0; i < json.length; i++) {
			let data = json[i];
			let action = this.types.find((type) => {
				return type.type == data.type;
			}).clone();
			// let action = new classRef();
			action.deserialize(data);
			actions.push(action);
		}
		this.value = actions;
	}

}