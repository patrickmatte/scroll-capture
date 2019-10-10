import ActionScrollToPosition from "./ActionScrollToPosition";

export default class ActionScrollToBottom extends ActionScrollToPosition {

	constructor(duration = 1, delay = 0) {
		super(0, 0, duration, delay);
		this.type = "ActionScrollToBottom";
		this.name = "Scroll to end";
	}

	clone() {
		let action = new ActionScrollToBottom();
		action.copy(this);
		return action;
	}

	trigger() {
		this.y.value = document.body.offsetHeight - window.innerHeight;
		return super.trigger();
	}

}