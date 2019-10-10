import {awaitTimeout} from "../await";

export default class ListStateTransition {

	constructor(transitions, delay = 0, staggerDelay = 0, debug = false) {
		this.transitions = transitions;
		this.delay = delay;
		this.staggerDelay = staggerDelay;
		this.debug = debug;
		if (this.debug) {
			console.log(this.transitions);
		}
	}

	trigger() {
		return awaitTimeout(this.delay).then(this.delayComplete.bind(this));
	}

	delayComplete() {
		let delay = 0;
		let promises = [];
		for(let i = 0; i < this.transitions.length; i++) {
			let transition = this.transitions[i];
			transition.delay = delay;
			promises.push(transition.trigger());
			delay += this.staggerDelay;
		}
		return Promise.all(promises);
	}

}