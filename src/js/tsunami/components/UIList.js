import {events} from "../events";
import Point from "../geom/Point";
import UIListBase from "./UIListBase";

export default class UIList extends UIListBase {

	constructor(element) {
		super(element);
		
		this._mouseDownHandler = this._mouseDownHandler.bind(this);
		this._dragMove = this._dragMove.bind(this);
		this._dragElementMove = this._dragElementMove.bind(this);
		this._dragEnd = this._dragEnd.bind(this);

		this.selectItemOnMouseDown = false;
		this.isDragged = false;

		this.dragIndex = NaN;
		this.dragElementClass = "ui-list-drag-area";

		this.element.addEventListener(events.mousedown, this._mouseDownHandler);
	}

	_mouseDownHandler(event) {
		// if(this.debug) console.log("_mouseDownHandler", "target", event.target, "currentTarget", event.currentTarget);
		let selectedIndex = NaN;
		let selectedChild = this.children.find((child, index) => {
			let contains = child.contains(event.target);
			let isChild = (child == event.target);
			let isMatch = (contains || isChild);
			if(this.debug) console.log(index, "contains", contains, "isChild", isChild, "isMatch", isMatch);
			if(isMatch) selectedIndex = index;
			return isMatch;
		});
		// if(this.debug) console.log("selectedChild", selectedChild, "selectedIndex", selectedIndex);
		if(selectedChild) {
			if(this.selectItemOnMouseDown) {
				if (this.provider.selectedIndex) {
					this.provider.selectedIndex.value = selectedIndex;
				}
			}
			let isDragElement = event.target.classList.contains(this.dragElementClass);
			// if(this.debug) console.log("isDragElement", isDragElement);
			if(isDragElement) {
				event.preventDefault();
				this.dragStartPoint = this.getTouchPoint(event);
				this.dragIndex = NaN;
				// this.dragElement = this.children.find((child, index) => {
				// 	let match = (event.target == child.querySelector(".ui-list-drag-area"));
				// 	if (match) this.dragIndex = index;
				// 	return match;
				// });
				this.dragElement = selectedChild;
				this.dragIndex = selectedIndex;
				this.dragElementStartPos = new Point(this.dragElement.offsetLeft, this.dragElement.offsetTop);
				this.dragElementsMinHeight = Number.MAX_VALUE;
				this.children.map((child) => {
					this.dragElementsMinHeight = Math.min(this.dragElementsMinHeight, child.component.rectangle.height);
				});
				document.body.addEventListener(events.mousemove, this._dragMove);
				document.body.addEventListener(events.mouseup, this._dragEnd);
			}
		}
	}

	_dragMove(event) {
		let point = this.getTouchPoint(event);
		let distance = Point.distance(point, this.dragStartPoint);
		if(distance > 0) {
			document.body.removeEventListener(events.mousemove, this._dragMove);
			document.body.addEventListener(events.mousemove, this._dragElementMove);
			this._dragElementStart();
		}
	}
	
	_dragElementStart() {
		this.isDragged = true;
		this.dragElement.classList.add("is-dragged");
		this.dragElement.dispatchEvent(new Event('drag-start', {bubbles:false, cancelable:true}));
	}

	_dragElementMove(event) {
		event.preventDefault();
		let point = this.getTouchPoint(event);
		let dragDiff = point.subtract(this.dragStartPoint);
		let originOffset = dragDiff.add(this.dragElementStartPos);
		let children = this.children;
		let index = this.dragIndex;
		for(let i = children.length - 1; i > -1; i--) {
			let child = children[i];
			if(originOffset.y < child.component.rectangle.y + this.dragElementsMinHeight / 2) {
				index = i;
			}
		}
		if(index != this.dragIndex) {
			this.provider.swap(this.dragIndex, index);

			let oldPos = this.dragElementStartPos;
			this.dragElementStartPos = new Point(this.dragElement.offsetLeft, this.dragElement.offsetTop);
			let posDiff = this.dragElementStartPos.subtract(oldPos);
			this.dragStartPoint = this.dragStartPoint.add(posDiff);

			dragDiff = point.subtract(this.dragStartPoint);

			this.dragIndex = index;
		}
		this.dragElement.style.transform = "translate3d(" + dragDiff.x + "px, " + dragDiff.y + "px, 0px)";
	}

	_dragEnd(event) {
		this.isDragged = false;
		this.dragElement.classList.remove("is-dragged");
		this.dragElement.style.transform = "";
		document.body.removeEventListener(events.mousemove, this._dragMove);
		document.body.removeEventListener(events.mousemove, this._dragElementMove);
		document.body.removeEventListener(events.mouseup, this._dragEnd);
		this.dragStartPoint = null;
		this.dragIndex = NaN;
		this.dragElement = null;
	}

}
