import {events} from "../events";
import UIComponent from "./UIComponent";

export default class UIButton extends UIComponent {

    constructor(element) {
        super(element);
        this.onRelease = () => {};
		this.clickHandler = this.clickHandler.bind(this);
		this.pressHandler = this.pressHandler.bind(this);
		this.element.addEventListener(events.click, this.clickHandler);
		this.element.addEventListener(events.mousedown, this.pressHandler);
    }

	pressHandler(event) {
		this.element.setAttribute("data-event", "press");
	}

	clickHandler(event) {
		this.element.setAttribute("data-event", "click");
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
