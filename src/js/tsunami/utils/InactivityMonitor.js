import {events} from "../events";

export default class InactivityMonitor extends EventTarget {

	constructor(element, duration = 10000) {
		super();
		this.element = element;
		this.timeoutDuration = duration;
		this.bodyTouchHandler = this.bodyTouchHandler.bind(this);
	}

	static get TIMER_COMPLETE() {
		return "timer-complete";
	}

	bodyTouchHandler(event) {
		this.startTimer();
	}

	timerCompleteHandler() {
		this.stopTimer();
		this.dispatchEvent(new Event(InactivityMonitor.TIMER_COMPLETE));
	}

	stopTimer() {
		clearTimeout(this.idleTimeout);
		this.element.removeEventListener(events.mousedown, this.bodyTouchHandler);
	}

	startTimer() {
		this.stopTimer();
		this.element.addEventListener(events.mousedown, this.bodyTouchHandler);
		this.idleTimeout = setTimeout(this.timerCompleteHandler.bind(this), this.timeoutDuration);
	}

}