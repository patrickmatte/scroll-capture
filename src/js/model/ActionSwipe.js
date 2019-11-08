import Action from "./Action";
import Point from "../tsunami/geom/Point";
import StringData from "../tsunami/data/StringData";
import ActionTween from "./ActionTween";
import ArrayData from "../tsunami/data/ArrayData";
import Vector2Data from "../tsunami/data/Vector2Data";
import {localToGlobal} from "../tsunami/window";
import * as THREE from "three";

export default class ActionSwipe extends ActionTween {

	constructor(x = 0, y = 0, duration = 1, delay = 0) {
		super(0, 0, 0, 0, duration, delay);
		this.type = "ActionSwipe";
		this.name = "Swipe";
		this.elementSelector = new StringData("body");
		this.points = new ArrayData();
	}

	clone() {
		let action = new ActionSwipe();
		action.copy(this);
		return action;
	}

	copy(action) {
		super.copy(action);
		this.elementSelector.copy(action.elementSelector);
		let points = [];
		action.points.map((point) => {
			points.push(point.clone());
		});
		this.points.value = points;
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

		let target = document.querySelector(this.elementSelector.value);
		this.origin = localToGlobal(target, document.body);
		let point = this.curve.getPoint(0);
		this.dispatchMouseEvent("mousedown", point);
	}

	dispatchMouseEvent(eventType, offset) {
		let point = new Point(this.origin.x + offset.x, this.origin.y + offset.y);
		let element = document.elementFromPoint(point.x - window.scrollX, point.y - window.scrollY);
		let event = new MouseEvent(eventType, {bubbles: true, cancelable: true, view: window, clientX: point.x, clientY: point.y, pageX: point.x, pageY: point.y, x: point.x, y: point.y});
		element.dispatchEvent(event);
	}

	addPoint() {
		this.points.push(new Vector2Data());
	}

	removePoint(point) {
		this.points.remove(point);
	}

	tweenUpdateHandler() {
		let point = this.curve.getPoint(this.pos.x);
		this.dispatchMouseEvent("mousemove", point);
	}

	tweenCompleteHandler(e) {
		let point = this.curve.getPoint(1);
		this.dispatchMouseEvent("mouseup", point);
	}

}