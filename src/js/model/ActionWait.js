import Action from "./Action";

export default class ActionWait extends Action {

	constructor() {
		super("ActionWait", "Pause");
	}

	clone() {
		let action = new ActionWait();
		action.copy(this);
		return action;
	}

}