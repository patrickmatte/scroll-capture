import UIComponent from "./UIComponent";
import {destroyElement, importTemplate} from "../tsunami";
import ArrayData from "../data/ArrayData";
import Data from "../data/Data";
import Scope from "../Scope";
import Tween from "../animation/Tween";
import TweenProperty from "../animation/TweenProperty";
import Easing from "../animation/Easing";
import Point from "../geom/Point";
import Rectangle from "../geom/Rectangle";
import { round1 } from "../utils/number";

export default class UIListBase extends UIComponent {

    constructor(element) {
        super(element);

		this._providerAdd = this._providerAdd.bind(this);
		this._providerRemove = this._providerRemove.bind(this);
        this._providerSort = this._providerSort.bind(this);
        
        this.template = '<li is="ui-text">{this.scope.data}</li>';
		this.templates = {};
        this._provider = new ArrayData();
        
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
    }

    get provider() {
		return this._provider;
	}

	set provider(value) {
		if (this.debug) console.log("UIList.provider", value);
		if (this._provider) {
			if (this._provider instanceof ArrayData) {
				this._provider.removeEventListener("add", this._providerAdd);
				this._provider.removeEventListener("remove", this._providerRemove);
				this._provider.removeEventListener("sort", this._providerSort);
			}
		}
		this._removeElements(this.children.slice());
		this._provider = value;
		if (this._provider) {
			if (this._provider instanceof ArrayData) {
				this._provider.addEventListener("add", this._providerAdd);
				this._provider.addEventListener("remove", this._providerRemove);
				this._provider.addEventListener("sort", this._providerSort);
				this._addElements(this._provider.value);
			} else {
				this._addElements(this._provider);
			}
		}
	}

    _removeElements(array) {
		if(this.debug) console.log("UIList._removeElements", array.length);
		for (let i = 0; i < array.length; i++) {
			let element = array[i];
			this.removeChild(element);
			destroyElement(element);
		}
		this.dispatchResizeEvent();
	}

    _addElements(array, index = 0) {
		if (this.debug) console.log("UIList._addElements", array.length);
		for (let i in array) {
			let data = array[i];
			let element = this._createElement(data, index, array.length);
			// element.model = model;
			// if(element.component instanceof UIComponent) {
			// 	element.component.model = model;
			// }
			this.appendChildAt(element, index);
			// if (this.isAdded) {
			// 	UIComponent.callElementAdded(element);
			// }
			index++;
		}
		// this.dispatchEvent(new BaseEvent("listChange", array));
		this.dispatchResizeEvent();
		return array;
	}
    
    _createElement(data, index, length) {
		let template = this._getTemplateForModel(data);
		let scope = new Scope(data, this.scope, index, length);
		return importTemplate(template, scope);
	}

	_getModelType(model) {
		let type = model.type;
		if(type instanceof Data) {
			type = type.value;
		}
		return type;
	}

	_getTemplateForModel(model) {
		let selectedTemplate;
		if (model) {
			let type = this._getModelType(model);
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

	_providerAdd(event) {
		if (this.debug) console.log("UIList._providerAdd");
		this._saveChildrenPositions();
		let addedElements = [];
		let start = event.data.index;
		let end = event.data.index + event.data.total;
		for (let i = start; i < end; i++ ) {
			let model = this.provider.value[i];
			addedElements.push(model);
		}
		this._addElements(addedElements, start);
		this.windowResize(this.windowSize);
		this._setChildrenTransform();
		setTimeout(this._resetChildrenTransform.bind(this), 0);
		return addedElements;
	}

	_providerRemove(event) {
		if (this.debug) console.log("UIList._providerRemove", event);
		this._saveChildrenPositions();
		let children = this.children;
		if (this.debug) console.log("children=", children);
		let removedElements = [];
		let start = event.data.index;
		let end = event.data.index + event.data.total;
		if (this.debug) console.log("start=", start, "end=", end);
		for (let i = start; i < end; i++) {
			removedElements.push(children[i]);
		}
		// this.children.splice(event.data.index, event.data.total);
		this._removeElements(removedElements);
		this.windowResize(this.windowSize);
		this._setChildrenTransform();
		setTimeout(this._resetChildrenTransform.bind(this), 0);
		return removedElements;
	}

	_providerSort(event) {
		this._saveChildrenPositions();
		let array = this.provider.value;
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
			new TweenProperty(this.element, "scrollLeft", this.element.scrollLeft, scrollLeft, Easing.cubic.easeInOut, round1),
			new TweenProperty(this.element, "scrollTop", this.element.scrollTop, scrollTop, Easing.cubic.easeInOut, round1)
		]);
		return this.tween.start();
	}

	destroy() {
		this.childrenPositions = null;
		this.provider = null;
		super.destroy();
	}

}