import Point from "../tsunami/geom/Point";
import ActionTween from "./ActionTween";
import ArrayData from "../tsunami/data/ArrayData";
import Vector2Data from "../tsunami/data/Vector2Data";
import {isTouch} from "../tsunami/window";

import NumberData from "../tsunami/data/NumberData";
import { events } from "../tsunami/events";
import { Vector3, CatmullRomCurve3 } from "three";

export default class ActionSwipe extends ActionTween {

	constructor(points = [], duration = 1, delay = 0) {
		super(0, 0, 0, 0, duration, delay);
		this.type = "ActionSwipe";
		this.name.value = "Mouse gesture";
		this.description.value = "Add a mouse gesture";
		this.points = new ArrayData();
		this.points.dataClass = Vector2Data;
		while(points.length < 2) {
			points.push(new Vector2Data());
		}
		this.points.value = points;
		this.isCaptureable.value = true;
		this.isTestable.value = true;
		this.smoothness = new NumberData(20);
		this.changeCursorOnCapture.value = true;
		this.icon.value = "fas fa-arrows-alt";
	
		this.captureDownHandler = this.captureDownHandler.bind(this);
		this.captureMoveHandler = this.captureMoveHandler.bind(this);
		this.captureUpHandler = this.captureUpHandler.bind(this);
	}

	clone() {
		let action = new ActionSwipe();
		action.copy(this);
		return action;
	}

	copy(action) {
		super.copy(action);
		let points = [];
		action.points.map((point) => {
			points.push(point.clone());
		});
		this.points.value = points;
	}

	serialize() {
		let data = super.serialize();
		data.points = this.points.serialize();
		return data;
	}

	deserialize(data) {
		super.deserialize(data);
		this.points.deserialize(data.points);
	}

	trigger() {
		this.startX.value = 0;
		this.startY.value = 0;
		this.endX.value = 1;
		this.endY.value = 0;

		let points = [];
		this.points.map((pointData) => {
			points.push(new Vector3(pointData.x.value, pointData.y.value, 0));
		});
		this.curve = new CatmullRomCurve3(points, false, 'chordal', 0.75);
		
		this.dispatchMouseEvent("mousedown", 0);
		return super.trigger();
	}

	dispatchMouseEvent(eventType, offset) {
		offset = Math.min(offset, 1);
		offset = Math.max(offset, 0);
		let point = this.curve.getPoint(offset);
		point.x = point.x - window.scrollX;
		point.y = point.y - window.scrollY;
		let element = document.elementFromPoint(point.x, point.y);
		let event = new MouseEvent(eventType, {
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
		element.dispatchEvent(event);
	}

	// addPoint() {
	// 	this.points.push(new Vector2Data());
	// }
	
	// removePoint(point) {
	// 	this.points.remove(point);
	// }

	tweenUpdateHandler() {
		this.dispatchMouseEvent("mousemove", this.pos.x);
	}

	tweenCompleteHandler(e) {
		this.dispatchMouseEvent("mouseup", 1);
	}

	capture() {
		super.capture();
		document.body.addEventListener(events.mousedown, this.captureDownHandler);
	}

	captureDownHandler(event) {
		let touch = event;
		if (isTouch) {
			touch = event.touches[0];
		}
		let point = new Point(touch.pageX, touch.pageY);
		this.capturedPoints = [new Vector2Data(point.x, point.y)];

		this.lastPoint = point;
		this.startDate = new Date();

		document.body.removeEventListener(events.mousedown, this.captureDownHandler);
		document.body.addEventListener(events.mousemove, this.captureMoveHandler);
		document.body.addEventListener(events.mouseup, this.captureUpHandler);
	}

	captureMoveHandler(event) {
		let touch = event;
		if (isTouch) {
			touch = event.touches[0];
		}
		let point = new Point(touch.pageX, touch.pageY);
		let distance = Point.distance(this.lastPoint, point);
		if (distance > this.smoothness.value) {
			this.lastPoint = point;
			this.capturedPoints.push(new Vector2Data(point.x, point.y));
		}
	}

	captureUpHandler(event) {
		let touch = event;
		if (isTouch) {
			touch = event.touches[0];
		}
		let point = new Point(touch.pageX, touch.pageY);
		let distance = Point.distance(this.lastPoint, point);
		if (distance > 0) {
			this.capturedPoints.push(new Vector2Data(point.x, point.y));
		}
		this.points.value = this.capturedPoints;
		this.capturedPoints = [];

		let duration = NumberData.roundDecimal1((new Date() - this.startDate) / 1000);
		this.duration.value = duration;
		
		document.body.removeEventListener(events.mousemove, this.captureMoveHandler);
		document.body.removeEventListener(events.mouseup, this.captureUpHandler);
		this.captureComplete();
	}

	captureAtInit() {
		super.captureAtInit();
		this.capture();
	}
	
}