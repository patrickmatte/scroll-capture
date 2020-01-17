import Action from "./Action";
import {awaitTimeout} from "../tsunami/await";
import NumberData from "../tsunami/data/NumberData";

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