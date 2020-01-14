import Action from "./Action";
import StringData from "../tsunami/data/StringData";
import NumberData from "../tsunami/data/NumberData";
import {getElementSelector, isTouch, localToGlobal} from "../tsunami/window";
import Point from "../tsunami/geom/Point";
import ArrayData from "../tsunami/data/ArrayData";

export default class ActionMouseEvent extends Action {

	constructor(eventType = "click", cssSelector = "body", x = 0, y = 0) {
		super("ActionMouseEvent", "MouseEvent");
		this.cssSelector = new StringData(cssSelector);
		this.x = new NumberData(x);
		this.y = new NumberData(y);
		this.eventTypes = new ArrayData("click", "mousedown", "mouseup", "mouseover", "mouseout", "dblclick", "mousemove", "mouseenter", "mouseleave", "contextmenu");
		this.eventTypes.selectedItem.value = this.eventTypes.value[0];
		this.captureMouseEventHandler = this.captureMouseEventHandler.bind(this);
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
		let point = new Point(this.x.value, this.y.value);
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
		let target = document.querySelector(this.cssSelector.value);
		target.dispatchEvent(event);
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

	capture() {
		this.isCapturing.value = true;
		setTimeout(()=> {
			document.body.addEventListener(this.eventTypes.selectedItem.value, this.captureMouseEventHandler);
		}, 33);
	}

	captureMouseEventHandler(event) {
		this.isCapturing.value = false;
		this.cssSelector.value = getElementSelector(event.target);
		let touch = event;
		if (isTouch) {
			touch = event.touches[0];
		}
		let point = new Point(touch.pageX, touch.pageY);
		this.x.value = point.x;
		this.y.value = point.y;
		document.body.removeEventListener(this.eventTypes.selectedItem.value, this.captureMouseEventHandler);
	}

}
