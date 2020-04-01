import UIComponent from "../tsunami/components/UIComponent";
import * as tsunami from "../tsunami/tsunami";
import Style from "../tsunami/components/Style";
import {events} from "../tsunami/events";
import Point from "../tsunami/geom/Point";
import {app} from "../main";
import ActionsView from "./ActionsView";
import template from "../../templates/scroll-capture.html";
import WindowContentMain from "./WindowContentMain";

export default class ScrollCapture extends UIComponent {

	constructor(element) {
		super(element);
		this.style = new Style(this.element.style);
		this.style.right = 50;
		this.style.top = 50;

		this.dragStart = this.dragStart.bind(this);
		this.dragMove = this.dragMove.bind(this);
		this.dragEnd = this.dragEnd.bind(this);

		let dragArea = this.element.querySelector("* > .sc-window .sc-drag-area");
		dragArea.addEventListener(events.mousedown, this.dragStart);

		this.windowContent = this.element.querySelector(".sc-window-content").component;

		this.branches["scenario"] = this.windowContent.sections.scenario;
		this.branches["video"] = this.windowContent.sections.video;
	}

	windowResize(windowSize) {
		super.windowResize(windowSize);
		this.move(this.style.right, this.style.top);
	}
	
	showDelayComplete() {
		app.appendChild(this.element);
		app.appendChild(this.windowContent.sections.element);
		return super.showDelayComplete();
	}

	hideComplete() {
		app.removeChild(this.element);
		app.removeChild(this.windowContent.sections.element);
		return super.hideComplete();
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
		this.move(this.startPosition.x + diff.x, this.startPosition.y - diff.y);
	}

	dragEnd(event) {
		document.body.removeEventListener(events.mousemove, this.dragMove);
		document.body.removeEventListener(events.mouseup, this.dragEnd);
		app.save();
	}

	move(x, y) {
		this.style.right = x;
		this.style.top = y;
		this.windowContent.sections.style.right = x + this.windowContent.position.x;
		this.windowContent.sections.style.top = y + this.windowContent.position.y;
	}

	deserialize(obj) {
		this.move(obj.right, obj.top);
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

tsunami.define("actions-view", ActionsView);
tsunami.define("sc-window-content-main", WindowContentMain);
