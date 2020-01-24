import Point from "../tsunami/geom/Point";
import ActionTween from "./ActionTween";
import ArrayData from "../tsunami/data/ArrayData";
import Vector2Data from "../tsunami/data/Vector2Data";
import {isTouch} from "../tsunami/window";
import * as THREE from "three";

export default class ActionSwipe extends ActionTween {

	constructor(points = [], duration = 1, delay = 0) {
		super(0, 0, 0, 0, duration, delay);
		this.type = "ActionSwipe";
		this.name = "Swipe";
		this.points = new ArrayData();
		this.points.dataClass = Vector2Data;
		while(points.length < 2) {
			points.push(new Vector2Data());
		}
		this.points.value = points;

		this.captureDownHandler = this.captureDownHandler.bind(this);
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
			points.push(new THREE.Vector3(pointData.x.value, pointData.y.value, 0));
		});
		this.curve = new THREE.CatmullRomCurve3(points, false, 'chordal', 0.75);

		this.dispatchMouseEvent("mousedown", 0);
		return super.trigger();
	}

	dispatchMouseEvent(eventType, offset) {
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
	//
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
		this.isCapturing.value = true;
		document.body.addEventListener("mousedown", this.captureDownHandler);
	}

	captureDownHandler(event) {
		let touch = event;
		if (isTouch) {
			touch = event.touches[0];
		}
		let point = new Point(touch.pageX, touch.pageY);
		let vec2 = this.points.value[0];
		vec2.x.value = point.x;
		vec2.y.value = point.y;

		document.body.removeEventListener("mousedown", this.captureDownHandler);
		document.body.addEventListener("mouseup", this.captureUpHandler);
	}

	captureUpHandler(event) {
		let touch = event;
		if (isTouch) {
			touch = event.touches[0];
		}
		let point = new Point(touch.pageX, touch.pageY);
		let vec2 = this.points.value[1];
		vec2.x.value = point.x;
		vec2.y.value = point.y;

		document.body.removeEventListener("mouseup", this.captureUpHandler);
		this.isCapturing.value = false;
	}

}