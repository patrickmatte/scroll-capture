import UIComponent from "../tsunami/components/UIComponent";
import * as tsunami from "../tsunami/tsunami";
import NumberData from "../tsunami/data/NumberData";
import ArrayData from "../tsunami/data/ArrayData";
import Point from "../tsunami/geom/Point";
import UIList from "../tsunami/components/UIList";
import Data from "../tsunami/data/Data";
import { app } from "../main";
import { roundDecimalTo2, roundDecimalTo3 } from "../tsunami/utils/number";

export default class EasingGraph extends UIComponent {

	constructor(element) {
		super(element);
	}

}

export class EasingGraphControlPoints extends UIList {

	constructor(element) {
		super(element);
		this.dragElementClass = "shape";
	}

	_dragElementStart() {
		super._dragElementStart();
		app.model.actions.selectedItem.value.resetEasing();
	}

	_dragElementMove(event) {
		event.preventDefault();
		let point = this.getTouchPoint(event);
		let dragDiff = point.subtract(this.dragStartPoint);
		let originOffset = dragDiff.add(this.dragElementStartPos);
		let factor = originOffset.clone();
		factor.x = (factor.x / this.rectangle.width);
		factor.y = 1 - (factor.y / this.rectangle.height);
		this.dragElement.component.model.x.value = factor.x;
		this.dragElement.component.model.y.value = factor.y;
	}

}

export class EasingGraphControlPointLines extends UIList {

	constructor(props) {
		super(props);
		this.updateLines = this.updateLines.bind(this);
	}


	get provider() {
		return super.provider;
	}

	set provider(value) {
		super.provider = value;
		for(let i in value) {
			let pair = value[i];
			for(let j in pair) {
				let vec = pair[j];
				vec.addEventListener(Data.CHANGE, this.updateLines);
			}
		}
	}

	windowResize(windowSize) {
		super.windowResize(windowSize);
		this.updateLines();
	}

	updateLines() {
		this.children.map((child) => {
			child.component.updateLine();
		})
	}

}


export class EasingGraphControlPointLine extends UIComponent {

	constructor(element) {
		super(element);
		this.updateLine = this.updateLine.bind(this);
	}

	updateLine() {
		if(!this.model) {
			return;
		}
		let parent = this.element.parentNode;
		let parentComponent = parent.component;
		let parentRectangle = parentComponent.rectangle;
		let point0 = this.model[0].point;
		point0.y = 1 - point0.y;
		let point1 = this.model[1].point;
		point1.y = 1 - point1.y;
		let scale = Point.distance(point0, point1);
		let angle = roundDecimalTo2(Point.getAngle(point1, point0) * 180 / Math.PI);
		let position = new Point(point0.x * parentRectangle.width, point0.y * parentRectangle.height);
		let transform = `translateX(${position.x}px) translateY(${position.y}px) rotate(${angle}deg) scaleX(${scale})`;
		this.element.style.transform = transform;
	}

}

export class EasingGraphCurve extends UIComponent {

	constructor(element) {
		super(element);
	}

	get model() {
		return this._model;
	}

	set model(value) {
		this._model = value;
		let totalPoints = 15;
		let points = [];
		let pointsString = "";
		for(let i = 0; i < totalPoints; i++) {
			let x = i / (totalPoints - 1);
			let point = new Point(x, value(x, 0, 1, 1));
			points.push(point);
			pointsString += roundDecimalTo3(point.x * 200) + "," + roundDecimalTo3(200 - (point.y * 200)) + " ";
		}
		this.element.setAttribute("points", pointsString);
	}

}

export class EasingGraphPoints extends UIComponent {

	constructor(element) {
		super(element);
	}

	get model() {
		return this._model;
	}

	set model(value) {
		this._model = value;
		this.element.innerHTML = "";
		let totalPoints = 15;
		let points = [];
		for(let i = 0; i < totalPoints; i++) {
			let x = i / (totalPoints - 1);
			let point = new Point(x, value(x, 0, 1, 1));
			points.push(point);
		}
		for(let i = 0; i < points.length; i++) {
			let position = points[i];
			let point = tsunami.importTemplate("<point></point>");
			point.style.left = position.x * 100 + "%";
			point.style.top = 100 - (position.y * 100) + "%";
			this.element.appendChild(point);
		}
	}

}

tsunami.define("easing-graph-control-points", EasingGraphControlPoints);
tsunami.define("control-point-lines", EasingGraphControlPointLines);
tsunami.define("control-point-line", EasingGraphControlPointLine);
tsunami.define("easing-graph-curve", EasingGraphCurve);
tsunami.define("easing-graph-points", EasingGraphPoints);


