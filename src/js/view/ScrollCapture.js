import UIComponent from "../tsunami/components/UIComponent";
import * as tsunami from "../tsunami/tsunami";
import Style from "../tsunami/components/Style";
import {events} from "../tsunami/events";
import Point from "../tsunami/geom/Point";
import {app} from "../main";
import ActionsView from "./ActionsView";
import template from "../../templates/scroll-capture.html";
import WindowContentMain from "./WindowContentMain";
import Data from "../tsunami/data/Data";

export default class ScrollCapture extends UIComponent {

	constructor(element) {
		super(element);

		this.positionChangeHandler = this.positionChangeHandler.bind(this);

		this.style = new Style(this.element.style);
		this.style.right = 50;
		this.style.top = 50;

		this.dragStart = this.dragStart.bind(this);
		this.dragMove = this.dragMove.bind(this);
		this.dragEnd = this.dragEnd.bind(this);

		let dragArea = this.element.querySelector("* > .sc-window .sc-drag-area");
		dragArea.addEventListener(events.mousedown, this.dragStart);

		this.windowContent = this.element.querySelector(".sc-window-content[is='sc-window-content-main']").component;

		this.branches["scenario"] = this.windowContent.scenario;
		this.branches["video"] = this.windowContent.video;
		this.branches["settings"] = this.windowContent.settings;
	}

	get model() {
		return super.model;
	}

	set model(value) {
		if(this.model) {
			this.model.settings.position.removeEventListener(Data.CHANGE, this.positionChangeHandler);
		}
		super.model = value;
		this.model.settings.position.addEventListener(Data.CHANGE, this.positionChangeHandler);
	}

	windowResize(windowSize) {
		super.windowResize(windowSize);
		let x = this.model.settings.position.x.value;
		let y = this.model.settings.position.y.value;
		this.move(x, y);
	}

	dragStart(event) {
		event.preventDefault();
		this.startPosition = new Point(this.model.settings.position.x.value, this.model.settings.position.y.value);
		this.startPoint = this.getTouchPoint(event);
		document.body.addEventListener(events.mousemove, this.dragMove);
		document.body.addEventListener(events.mouseup, this.dragEnd);
	}

	dragMove(event) {
		let point = this.getTouchPoint(event);
		let diff = this.startPoint.subtract(point);
		this.model.settings.position.x.value = this.startPosition.x + diff.x;
		this.model.settings.position.y.value = this.startPosition.y - diff.y;
		// this.move(, );
	}

	dragEnd(event) {
		document.body.removeEventListener(events.mousemove, this.dragMove);
		document.body.removeEventListener(events.mouseup, this.dragEnd);
		app.save();
	}

	positionChangeHandler(event) {
		this.move(event.data.x.value, event.data.y.value);
	}

	move(x, y) {
		this.style.right = x;
		this.style.top = y;
		// this.windowContent.sections.style.right = x + this.windowContent.position.x;
		// this.windowContent.sections.style.top = y + this.windowContent.position.y;
	}

	deserialize(obj) {
	}

}

ScrollCapture.template = template;

tsunami.define("sc-actions-view", ActionsView);
tsunami.define("sc-window-content-main", WindowContentMain);
