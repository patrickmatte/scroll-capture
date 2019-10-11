import Action from "./Action";
import StringData from "../tsunami/data/StringData";
import NumberData from "../tsunami/data/NumberData";
import {localToGlobal} from "../tsunami/window";
import Point from "../tsunami/geom/Point";
import ArrayData from "../tsunami/data/ArrayData";

export default class ActionMouseEvent extends Action {

	constructor(eventType = "click", cssSelector = "body", x = 0, y = 0) {
		super("ActionMouseEvent", "Dispatch a MouseEvent");
		this.cssSelector = new StringData(cssSelector);
		this.x = new NumberData(x);
		this.y = new NumberData(y);
		this.eventTypes = new ArrayData("click", "mousedown", "mouseup", "mouseover", "mouseout", "dblclick", "mousemove", "mouseenter", "mouseleave", "contextmenu");
		this.eventTypes.selectedItem.value = this.eventTypes.value[0];
	}

	clone() {
		let action = new ActionMouseEvent();
		action.copy(this);
		return action;
	}

	copy(action) {
		this.eventTypes.selectedItem.value = action.eventTypes.selectedItem.value;
		this.x.value = action.x.value;
		this.y.value = action.y.value;
		this.cssSelector.value = action.cssSelector.value;
	}

	trigger() {
		let target = document.querySelector(this.cssSelector.value);
		let point = localToGlobal(target, document.body, new Point(this.x.value - window.scrollX, this.y.value - window.scrollY));
		let element = document.elementFromPoint(point.x, point.y);
		console.log("this.eventTypes.selectedItem.value", this.eventTypes.selectedItem.value);
		let event = new MouseEvent(this.eventTypes.selectedItem.value, {
			bubbles: true,
			cancelable: true,
			clientX: point.x,
			clientY: point.y,
			pageX: point.x,
			pageY: point.y,
			x: point.x,
			y: point.y,
			view: window
		});
		if (!element) {
			element = target;
		}
		element.dispatchEvent(event);
		return Promise.resolve();
	}

	serialize() {
		let data = super.serialize();
		data.eventType = this.eventTypes.selectedItem.value;
		data.cssSelector = this.cssSelector.value;
		data.x = this.x.value;
		data.y = this.y.value;
		return data;
	}

	deserialize(data) {
		super.deserialize(data);
		this.eventTypes.selectedItem.value = data.eventType;
		this.cssSelector.value = data.cssSelector;
		this.x.value = data.x;
		this.y.value = data.y;
	}

}