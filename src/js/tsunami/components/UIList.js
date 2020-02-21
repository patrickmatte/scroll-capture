import UIComponent from "./UIComponent";
import {destroyElements, evalProperty, importTemplate} from "../tsunami";
import ArrayData from "../data/ArrayData";
import Data from "../data/Data";
import BaseEvent, {events} from "../events";
import Scope from "../Scope";
import Point from "../geom/Point";
import {localToGlobal} from "../window";
import NumberData from "../data/NumberData";

export default class UIList extends UIComponent {

	constructor(element) {
		super(element);

		this._dragStart = this._dragStart.bind(this);
		this._dragMove = this._dragMove.bind(this);
		this._dragElementMove = this._dragElementMove.bind(this);
		this._dragEnd = this._dragEnd.bind(this);
		this._providerChange = this._providerChange.bind(this);
		this._providerAdd = this._providerAdd.bind(this);
		this._providerRemove = this._providerRemove.bind(this);
		this._providerSort = this._providerSort.bind(this);

		this.dragIndex = NaN;

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
		}

		this.element.addEventListener(events.mousedown, this._dragStart);
	}

	_dragStart(event) {
		if(event.target.classList.contains("ui-list-drag-area")) {
			this.dragStartPoint = this.getTouchPoint(event);
			this.dragIndex = NaN;
			this.dragElement = this.children.find((child, index) => {
				let match = (event.target == child.querySelector(".ui-list-drag-area"));
				if (match) this.dragIndex = index;
				return match;
			});
			this.dragElementStartPos = localToGlobal(this.dragElement, this.element);
			this.dragElementsMinHeight = Number.MAX_VALUE;
			this.children.map((child) => {
				this.dragElementsMinHeight = Math.min(this.dragElementsMinHeight, child.component.rectangle.height);
			});
			document.body.addEventListener(events.mousemove, this._dragMove);
			document.body.addEventListener(events.mouseup, this._dragEnd);
		}
	}

	_dragMove(event) {
		let point = this.getTouchPoint(event);
		let distance = Point.distance(point, this.dragStartPoint);
		if(distance > 3) {
			this.dragElement.classList.add("is-dragged");
			document.body.removeEventListener(events.mousemove, this._dragMove);
			document.body.addEventListener(events.mousemove, this._dragElementMove);
		}
	}

	_dragElementMove(event) {
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
			this.appendChildAt(this.dragElement, index);
			let oldPos = this.dragElementStartPos;
			this.dragElementStartPos = localToGlobal(this.dragElement, this.element);
			let posDiff = this.dragElementStartPos.subtract(oldPos);
			this.dragStartPoint = this.dragStartPoint.add(posDiff);

			dragDiff = point.subtract(this.dragStartPoint);

			if (this._provider instanceof ArrayData) {
				this._provider.removeEventListener("add", this._providerAdd);
				this._provider.removeEventListener("remove", this._providerRemove);
				this._provider.removeEventListener("reset", this._providerChange);
				this._provider.removeEventListener("sort", this._providerSort);
			}

			let data = this.dataProvider.splice(this.dragIndex, 1)[0];
			this.dataProvider.splice(index, 0, data);

			this.dragIndex = index;

			if (this._provider instanceof ArrayData) {
				this._provider.addEventListener("add", this._providerAdd);
				this._provider.addEventListener("remove", this._providerRemove);
				this._provider.addEventListener("reset", this._providerChange);
				this._provider.addEventListener("sort", this._providerSort);
			}

			this.windowResize(this.windowSize);
		}

		this.dragElement.style.transform = "translate3d(" + dragDiff.x + "px, " + dragDiff.y + "px, 0px)";
	}

	_dragEnd(event) {
		this.dragElement.classList.remove("is-dragged");
		this.dragElement.style.transform = "translate3d(0px, 0px, 0px)";

		// this.removeChild(this.dragElement);
		// this.dragComponent.isDragging = false;
		document.body.removeEventListener(events.mousemove, this._dragMove);
		document.body.removeEventListener(events.mousemove, this._dragElementMove);
		document.body.removeEventListener(events.mouseup, this._dragEnd);
		//
		this.dragStartPoint = null;
		this.dragIndex = NaN;
		this.dragElement = null;
		// this.dragComponent = null;
		// this.dragElementsMinHeight = NaN;
	}

	get scope() {
		return super.scope;
	}

	set scope(value) {
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
			if (this.isAdded) {
				UIComponent.callElementRemoved(element);
			}
		}
		destroyElements(array);
	}

	_addElements(array, index = 0) {
		for (let i = 0; i < array.length; i++) {
			let data = array[i];
			let scope = new Scope(data, this.scope, index + i, array.length);
			let template = this.getTemplateForModel(data);
			if (!template) {
				throw new Error("UIList component for " + this.element.outerHTML + " returned no template");
			}
			let element = importTemplate(template, scope);
			// element.model = model;
			// if(element.component instanceof UIComponent) {
			// 	element.component.model = model;
			// }
			this.appendChildAt(element, index + i);
			if (this.isAdded) {
				UIComponent.callElementAdded(element);
			}
		}
		this.dispatchEvent(new BaseEvent("listChange", array));
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
		this._addElements(addedElements, start);
	}

	_providerRemove(event) {
		let children = this.children;
		let removedElements = [];
		let start = event.index;
		let end = event.index + event.total;
		for (let i = start; i < end; i++) {
			removedElements.push(children[i]);
		}
		// this.children.splice(event.index, event.total);
		this._removeElements(removedElements);
	}

	_providerSort(event) {
		for (let i = 0; i < this.dataProvider.value.length; i++ ) {
			let model = this.dataProvider.value[i];
			let child = this.getElementByModel(model);
			if (child) {
				this.element.appendChild(child);
			}
		}
	}

	getElementByModel(model) {
		let element;
		let children = this.children;
		for (let i = 0; i < children.length; i++) {
			let child = children[i];
			if (child.model == model) {
				element = child;
			}
		}
		return element;
	}

	destroy() {
		this.dataProvider = null;
		super.destroy();
	}

}
