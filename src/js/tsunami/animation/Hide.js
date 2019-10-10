import StateTransition from "./StateTransition";

export default class Hide extends StateTransition {

	constructor(element, delay, duration) {
		super(element, "hide", "data-state", delay, duration);
	}

}