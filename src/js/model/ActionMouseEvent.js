import Action from "./Action";
import NumberData from "../tsunami/data/NumberData";
import {isTouch} from "../tsunami/window";
import Point from "../tsunami/geom/Point";
import ArrayData from "../tsunami/data/ArrayData";
import StringData from "../tsunami/data/StringData";

export default class ActionMouseEvent extends Action {

	constructor(eventType = "click", x = "0", y = "0") {
		super("ActionMouseEvent", "MouseEvent", "Add a mouse event");
		this.x = new StringData(x);
		this.y = new StringData(y);
		this.eventTypes = new ArrayData("click", "mousedown", "mouseup", "mouseover", "mouseout", "dblclick", "mousemove", "mouseenter", "mouseleave", "contextmenu", "touchstart", "touchmove", "touchend");
		this.eventTypes.selectedItem.value = this.eventTypes.value[0];
		this.isTestable.value = true;
		this.isCaptureable.value = true;
		this.changeCursorOnCapture.value = true;
		this.captureMouseEventHandler = this.captureMouseEventHandler.bind(this);
		this.icon.value = "fas fa-hand-pointer";
	}

	clone() {
		let action = new ActionMouseEvent();
		action.copy(this);
		return action;
	}

	copy(action) {
		super.copy(action);
		this.eventTypes.selectedItem.value = action.eventTypes.selectedItem.value;
		this.x.value = action.x.value;
		this.y.value = action.y.value;
	}

	trigger() {
		let point = new Point(this.x.value - window.scrollX, this.y.value  - window.scrollY);
		let el = document.elementFromPoint(point.x, point.y);
		let event = new MouseEvent(this.eventTypes.selectedItem.value, {
			bubbles: true,
			cancelable: true,
			view: window,
			clientX: point.x,
			clientY: point.y,
			pageX: point.x,
			pageY: point.y,
			x: point.x,
			y: point.y
		});
		if (el) {
			el.dispatchEvent(event);
		} else {
			console.log("MouseEvent action cannot find element at pageX " + this.x.value + " and pageY " + this.y.value);
		}
		return Promise.resolve();
	}

	serialize() {
		let data = super.serialize();
		data.eventType = this.eventTypes.selectedItem.value;
		data.x = this.x.value.toString();
		data.y = this.y.value.toString();
		return data;
	}

	deserialize(data) {
		super.deserialize(data);
		this.eventTypes.selectedItem.value = data.eventType;
		this.x.value = data.x || "0";
		this.y.value = data.y || "0";
	}

	capture() {
		super.capture();
		setTimeout(() => {
			document.body.addEventListener("click", this.captureMouseEventHandler);
		}, 33);
	}

	captureMouseEventHandler(event) {
		// if (event.preventDefaut) {
		// 	event.preventDefaut();
		// }
		// if (event.stopImmediatePropagation) {
		// 	event.stopImmediatePropagation();
		// }
		// if (event.stopPropagation) {
		// 	event.stopPropagation();
		// }
		let touch = event;
		if (isTouch) {
			touch = event.touches[0];
		}
		let point = new Point(touch.pageX, touch.pageY);
		this.x.value = point.x;
		this.y.value = point.y;
		document.body.removeEventListener("click", this.captureMouseEventHandler);
		this.captureComplete();
	}

	captureAtInit() {
		super.captureAtInit();
		this.capture();
	}
	
}
