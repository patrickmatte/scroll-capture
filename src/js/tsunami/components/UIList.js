import UIComponent from "./UIComponent";
import {destroyElement, destroyElements, evalProperty, importTemplate} from "../tsunami";
import ArrayData from "../data/ArrayData";
import Data from "../data/Data";
import BaseEvent, {events} from "../events";
import Scope from "../Scope";
import Point from "../geom/Point";
import Tween from "../animation/Tween";
import TweenProperty from "../animation/TweenProperty";
import Easing from "../animation/Easing";
import Rectangle from "../geom/Rectangle";

export default class UIList extends UIComponent {

	constructor(element) {
		super(element);

		this._mouseDownHandler = this._mouseDownHandler.bind(this);
		this._dragMove = this._dragMove.bind(this);
		this._dragElementMove = this._dragElementMove.bind(this);
		this._dragEnd = this._dragEnd.bind(this);
		this._providerChange = this._providerChange.bind(this);
		this._providerAdd = this._providerAdd.bind(this);
		this._providerRemove = this._providerRemove.bind(this);
		this._providerSort = this._providerSort.bind(this);

		this.selectItemOnMouseDown = false;

		this.dragIndex = NaN;
		this.dragElementClass = "ui-list-drag-area";

		this.template = `<li><span is="ui-text">[[data]]</span></li>`;
		this.templates = {};
		this._provider = [];

		let templates = [];
		if(this.element) {
			this.children.map((el)=> {
				if(el.nodeName.toUpperCase() == "TEMPLATE") {
					templates.push(el);
				}
			})
		}
		for(let i = 0; i < templates.length; i++) {
			let template = templates[i];
			let type = template.getAttribute("data-type") || "*";
			this.templates[type] = template.innerHTML;
			this.element.removeChild(template);
		}

		this.element.addEventListener(events.mousedown, this._mouseDownHandler);
	}

	get scope() {
		return super.scope;
	}

	set scope(value) {
		this._scope = value;
		let dataProvider = this.element.getAttribute("data-provider");
		if (dataProvider) {
			this.dataProvider = evalProperty(dataProvider, value);
		}
		super.scope = value;
	}

	get dataProvider() {
		return this._provider;
	}

	set dataProvider(value) {
		if(this.debug) {
			console.log("dataProvider", value);
		}
		if (this._provider) {
			if (this._provider instanceof ArrayData) {
				this._provider.removeEventListener("add", this._providerAdd);
				this._provider.removeEventListener("remove", this._providerRemove);
				this._provider.removeEventListener("reset", this._providerChange);
				this._provider.removeEventListener("sort", this._providerSort);
			}
		}
		this._removeElements(this.children.slice());
		this._provider = value;
		if (this._provider) {
			if (this._provider instanceof ArrayData) {
				this._provider.addEventListener("add", this._providerAdd);
				this._provider.addEventListener("remove", this._providerRemove);
				this._provider.addEventListener("reset", this._providerChange);
				this._provider.addEventListener("sort", this._providerSort);
				this._addElements(this._provider.value);
			} else {
				this._addElements(this._provider);
			}
		}
		// this.model = this.model;
	}

	_removeElements(array) {
		for (let i = 0; i < array.length; i++) {
			let element = array[i];
			this.removeChild(element);
			destroyElement(element);
		}
	}

	_addElements(array, index = 0) {
		for (let i in array) {
			let data = array[i];
			let element = this.createElement(data, index, array.length);
			// element.model = model;
			// if(element.component instanceof UIComponent) {
			// 	element.component.model = model;
			// }
			this.appendChildAt(element, index);
			if (this.isAdded) {
				UIComponent.callElementAdded(element);
			}
			index++;
		}
		this.dispatchEvent(new BaseEvent("listChange", array));
		return array;
	}

	createElement(data, index, length) {
		let template = this.getTemplateForModel(data);
		let scope = new Scope(data, this.scope, index, length);
		return importTemplate(template, scope);
	}

	getModelType(model) {
		let type = model.type;
		if(type instanceof Data) {
			type = type.value;
		}
		return type;
	}

	getTemplateForModel(model) {
		let selectedTemplate;
		if (model) {
			let type = this.getModelType(model);
			selectedTemplate = this.templates[type];
		}
		if(!selectedTemplate) {
			selectedTemplate =  this.templates["*"] || this.template;
		}
		if (!selectedTemplate) {
			throw new Error("UIList " + this.element.outerHTML + " has no template");
		}
		return selectedTemplate;
	}

	_providerChange(event) {
		let children = this.children.slice();
		this._removeElements(children);
		this._addElements(this._provider.value);
	}

	_providerAdd(event) {
		let addedElements = [];
		let start = event.index;
		let end = event.index + event.total;
		for (let i = start; i < end; i++ ) {
			let model = this.dataProvider.value[i];
			addedElements.push(model);
		}
		return this._addElements(addedElements, start);
	}

	_providerRemove(event) {
		this._saveChildrenPositions();
		let children = this.children;
		let removedElements = [];
		let start = event.index;
		let end = event.index + event.total;
		for (let i = start; i < end; i++) {
			removedElements.push(children[i]);
		}
		// this.children.splice(event.index, event.total);
		this._removeElements(removedElements);
		this.windowResize(this.windowSize);
		this._setChildrenTransform();
		setTimeout(this._resetChildrenTransform.bind(this), 0);
	}

	_providerSort(event) {
		this._saveChildrenPositions();
		let array = this.dataProvider.value;
		for (let i = 0; i < array.length; i++ ) {
			let model = array[i];
			let child = this.getElementByModel(model);
			if (child) {
				this.element.appendChild(child);
			}
		}
		this.windowResize(this.windowSize);
		this._setChildrenTransform();
		setTimeout(this._resetChildrenTransform.bind(this), 0);
	}

	getElementByModel(model) {
		let element = this.children.find((child) => {
			let match = false;
			if(child.component) {
				match = (child.component.model == model);
			}
			return match;
		});
		return element;
	}

	_saveChildrenPositions() {
		this.childrenPositions = [];
		this.children.map((child) => {
			this.childrenPositions.push({child:child, position:new Point(child.offsetLeft, child.offsetTop)});
		});
	}

	_setChildrenTransform() {
		this.childrenPositions.map((obj, index) => {
			let newPosition = new Point(obj.child.offsetLeft, obj.child.offsetTop);
			let offset = obj.position.subtract(newPosition);
			let magnitude = offset.magnitude;
			if(magnitude > 0) {
				obj.child.classList.remove("smooth-transform");
				obj.child.style.transform = "translate3d(" + offset.x + "px, " + offset.y  + "px, 0px)";
			}
		});
	}

	_resetChildrenTransform() {
		this.children.map((child, index) => {
			child.classList.add("smooth-transform");
			child.style.transform = "translate3d(0px, 0px, 0px)";
		});
	}

	_mouseDownHandler(event) {
		if(this.debug) console.log("_mouseDownHandler", "target", event.target, "currentTarget", event.currentTarget);
		let selectedIndex = NaN;
		let selectedChild = this.children.find((child, index) => {
			let contains = child.contains(event.target);
			let isChild = (child == event.target);
			let isMatch = (contains || isChild);
			if(this.debug) console.log(index, "contains", contains, "isChild", isChild, "isMatch", isMatch);
			if(isMatch) selectedIndex = index;
			return isMatch;
		});
		if(this.debug) console.log("selectedChild", selectedChild, "selectedIndex", selectedIndex);
		if(selectedChild) {
			if(this.selectItemOnMouseDown) {
				if(this.dataProvider.selectedIndex) {
					this.dataProvider.selectedIndex.value = selectedIndex;
				}
			}
			let isDragElement = event.target.classList.contains(this.dragElementClass);
			if(this.debug) console.log("isDragElement", isDragElement);
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
			this.dragElement.classList.add("is-dragged");
			document.body.removeEventListener(events.mousemove, this._dragMove);
			document.body.addEventListener(events.mousemove, this._dragElementMove);
		}
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
			this.dataProvider.swap(this.dragIndex, index);

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
		this.dragElement.classList.remove("is-dragged");
		this.dragElement.style.transform = "";
		document.body.removeEventListener(events.mousemove, this._dragMove);
		document.body.removeEventListener(events.mousemove, this._dragElementMove);
		document.body.removeEventListener(events.mouseup, this._dragEnd);
		this.dragStartPoint = null;
		this.dragIndex = NaN;
		this.dragElement = null;
	}

	scrollToElement(element, duration) {
		let pos = new Point();

		let maxScroll = new Point();
		maxScroll.x = this.element.scrollWidth - this.element.clientWidth;
		maxScroll.y = this.element.scrollHeight - this.element.clientHeight;

		let elementRect = new Rectangle(element.offsetLeft, element.offsetTop, element.offsetWidth, element.offsetHeight);

		pos.x = Math.min(elementRect.x, maxScroll.x);
		pos.y = Math.min(elementRect.y, maxScroll.y);

		return this.scrollTo(pos.x, pos.y, duration);
	}

	scrollTo(scrollLeft, scrollTop, duration = 1) {
		this.tween = new Tween(0, duration, [
			new TweenProperty(this.element, "scrollLeft", this.element.scrollLeft, scrollLeft, Easing.cubic.easeInOut, 10),
			new TweenProperty(this.element, "scrollTop", this.element.scrollTop, scrollTop, Easing.cubic.easeInOut, 10)
		]);
		return this.tween.start();
	}

	tweenUpdateHandler() {
		this.element.scrollLeft = this.scrollLeft;
		this.element.scrollTop = this.scrollTop;
	}

	destroy() {
		this.childrenPositions = null;
		this.dataProvider = null;
		super.destroy();
	}

}
