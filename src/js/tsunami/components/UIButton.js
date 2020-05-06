import {events} from "../events";
import UIComponent from "./UIComponent";
import {evalProperty} from "../tsunami";

export default class UIButton extends UIComponent {

	constructor(element) {
		super(element);
		this.onRelease = () => {};
		this.clickHandler = this.clickHandler.bind(this);
		this.pressHandler = this.pressHandler.bind(this);
		this.clickDelayComplete = this.clickDelayComplete.bind(this)

		this.clickDelay = 0;

		this.element.addEventListener(events.click, this.clickHandler);
		this.element.addEventListener(events.mousedown, this.pressHandler);
	}

	get scope() {
		return super.scope;
	}

	set scope(value) {
		super.scope = value;

		let clickDelay = this.element.getAttribute("data-click-delay");
		if (clickDelay) this.clickDelay = Number(clickDelay);

		let click = this.element.getAttribute("data-click");
		if (click) {
			this.onRelease = (event) => {
				let method = evalProperty(click, this.scope);
				method(event);
			}
		}
	}

	pressHandler(event) {
		this.element.setAttribute("data-event", "press");
	}

	clickHandler(event) {
		this.element.setAttribute("data-event", "click");

		if (this.clickDelay > 0) {
			setTimeout(this.clickDelayComplete, this.clickDelay * 1000, event);
		} else {
			this.clickDelayComplete(event);
		}
	}

	clickDelayComplete(event) {
		if (this.onRelease) {
			this.onRelease(event);
		}
	}

	destroy() {
		this.element.removeEventListener(events.click, this.clickHandler);
		this.element.removeEventListener(events.mousedown, this.pressHandler);
		super.destroy();
	}

}
