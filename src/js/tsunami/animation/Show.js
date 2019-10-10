import StateTransition from "./StateTransition";

export default class Show extends StateTransition {

	constructor(element, delay, duration) {
		super(element, "show", "data-state", delay, duration);
	}

}