import Action from "./Action";

export default class ActionWait extends Action {

	constructor() {
		super("ActionWait", "Pause", "Add a pause");
		this.delay.value = 1;
		this.icon.value = "fas fa-clock";
	}

	clone() {
		let action = new ActionWait();
		action.copy(this);
		return action;
	}
	
}