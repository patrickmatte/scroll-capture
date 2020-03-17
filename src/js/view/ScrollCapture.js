import UIComponent from "../tsunami/components/UIComponent";
import * as tsunami from "../tsunami/tsunami";
import ActionView from "./ActionView";
import Style from "../tsunami/components/Style";
import {events} from "../tsunami/events";
import Point from "../tsunami/geom/Point";
import {app} from "../main";
import ActionsView from "./ActionsView";
import template from "../../templates/ScrollCapture.html";

export default class ScrollCapture extends UIComponent {

	constructor(element) {
		super(element);
		this.style = new Style(this.element.style);
		this.style.right = 50;
		this.style.top = 50;

		this.dragStart = this.dragStart.bind(this);
		this.dragMove = this.dragMove.bind(this);
		this.dragEnd = this.dragEnd.bind(this);

		let dragArea = this.element.querySelector(".sc-header .sc-drag-area");
		dragArea.addEventListener(events.mousedown, this.dragStart);
	}

	dragStart(event) {
		event.preventDefault();
		this.startPosition = new Point(this.style.right, this.style.top);
		this.startPoint = this.getTouchPoint(event);
		document.body.addEventListener(events.mousemove, this.dragMove);
		document.body.addEventListener(events.mouseup, this.dragEnd);
	}

	dragMove(event) {
		let point = this.getTouchPoint(event);
		let diff = this.startPoint.subtract(point);
		this.style.right = this.startPosition.x + diff.x;
		this.style.top = this.startPosition.y - diff.y;
	}

	dragEnd(event) {
		document.body.removeEventListener(events.mousemove, this.dragMove);
		document.body.removeEventListener(events.mouseup, this.dragEnd);
		app.save();
	}

	deserialize(obj) {
		this.style.right = obj.right;
		this.style.top = obj.top;
	}

	serialize() {
		let obj = {
			right:this.style.right,
			top:this.style.top
		};
		return obj;
	}

}

ScrollCapture.template = template;

// tsunami.define("start-button", StartButton);
tsunami.define("actions-view", ActionsView);
