import ArrayData from "../tsunami/data/ArrayData";
import ActionScrollToPosition from "./ActionScrollToPosition";
import ActionWait from "./ActionWait";
import ActionScrollToBottom from "./ActionScrollToBottom";
import ActionMouseEvent from "./ActionMouseEvent";
import ActionEval from "./ActionEval";
import Action from "./Action";

export default class Actions extends ArrayData {

	constructor() {
		super();
		this.push.apply(this, arguments);

		this.addSelectedType = this.addSelectedType.bind(this);

		this.types = new ArrayData();
		this.types.value = [
			new Action("", "Add an action"),
			new ActionWait(),
			new ActionScrollToPosition(),
			new ActionScrollToBottom(),
			new ActionMouseEvent(),
			new ActionEval()
		];
	}

	addSelectedType() {
		if(!this.types.selectedItem.value) {
			return;
		}
		let action = this.types.selectedItem.value.clone();
		if(action) {
			this.push(action);
		}
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