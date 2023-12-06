import {events} from "../events";
import UIComponent from "./UIComponent";

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
