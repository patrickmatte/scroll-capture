import {awaitTimeout} from "../await";

export default class StateTransition {

	constructor(element, state, attribute, delay = 0, duration = 0, promise) {
		this.element = element;
		this.attribute = attribute;
		this.state = state;
		this.delay = delay;
		this.duration = duration;

		this.promise = promise;
		if (!this.promise) {
			this.promise = () => {
				awaitTimeout(this.duration);
			};
		}
	}

	trigger() {
		return awaitTimeout(this.delay).then(this.delayComplete.bind(this));
	}

	delayComplete() {
		this.element.setAttribute(this.attribute, this.state);
		return this.promise();
	}

}