import {evalProperty, getAllObjects} from "../tsunami";
import Attribute from "./Attribute";
import Style from "./Style";
import Data from "../data/Data";
import {awaitTimeout} from "../await";
import ArrayData from "../data/ArrayData";
import ArrayDataOperation from "../data/ArrayDataOperation";
import Rectangle from "../geom/Rectangle";
import {isTouch, localToGlobal} from "../window";
import Branch from "../Branch";
import Point from "../geom/Point";
import EventHandler from "./EventHandler";
import ExpressionBinding from "./ExpressionBinding";

export default class UIComponent extends Branch {

    constructor(element) {
		super();

		this.modelChange = this.modelChange.bind(this);

		if(element) {
			this.debug = (element.getAttribute("data-debug") == "true");
			this.doChildrenAnimationFrame = (element.getAttribute("data-children-animation-frame") == "true");
			this.alsoShowChildren = (element.getAttribute("data-also-show-children") == "true");
			// this.style = new Style(element.style);
		}

		this.element = element;

		this.componentID = new Date().getTime();
		if(this.debug) this.element.setAttribute("data-componentId", this.componentID);

		this.calculateGlobalPosition = false;

		// this.childrenSelector = ":scope > *";

		this._model = null;
		this.rectangle = new Rectangle();
		this.globalRectangle = new Rectangle();
		this.windowSize = {};

		this.attributes = {};


		this.showDuration = 0;
		this.showDelay = 0;
		this.hideDuration = 0;
		this.hideDelay = 0;
		this.showChildrenDelay = NaN;
		this.hideChildrenDelay = NaN;

		this.alsoShowChildren = false;
	}

	get element() {
		return this._element;
	}

	set element(value) {
		this._element = value;
		if(value) value.component = this;
	}

	get componentContainer() {
		return this.element;
	}

	removeChild(value) {
		if (value) {
			if (this.componentContainer == value.parentNode) {
				value.parentNode.removeChild(value);
				let component = value.component;
				if (component) {
					if (this.isAdded) {
						component.elementRemoved();
					}
				}
			}
		}
	}

	appendChild(value) {
		if (value) {
			this.componentContainer.appendChild(value);
			let component = value.component;
			if(component) {
				if(this.isAdded) {
					component.elementAdded();
				}
				if (component.windowResize)  {
					component.windowResize(this.windowSize);
				}
				if (component.windowScroll) {
					component.windowScroll(this.windowScrollPoint);
				}
			}
		}
	}

	prependChild(child) {
    	this.appendChildAt(child, 0);
	}

	appendChildAt(child, index = 0) {
    	// if(child.parentNode) {
		// 	child.parentNode.removeChild(child);
		// }
		let children = this.children;
		if (index >= children.length) {
			this.appendChild(child);
		} else {
			let beforeChild = children[index];
			this.insertBefore(child, beforeChild);
		}
	}

	insertBefore(value, ref) {
		if (value) {
			if (ref) {
				this.componentContainer.insertBefore(value, ref);
				let component = value.component;
				if(component) {
					if (this.isAdded) {
						component.elementAdded();
					}
					if (component.windowResize)  {
						component.windowResize(this.windowSize);
					}
					if (component.windowScroll) {
						component.windowScroll(this.windowScrollPoint);
					}
				}
			}
		}
	}

	get isAdded() {
		let parent;
		if(this.element) {
			parent = this.element.parentNode;
		}
		while(parent && parent != document.body) {
			parent = parent.parentNode;
		}
		let isAdded = (parent == document.body);
		return isAdded;
	}

	getSVGPathTotalLength() {
		return this.element.getTotalLength();
	}

	get children() {
    	let array = [];
    	if(this.element) {
			array = ArrayData.nodeListToArray(this.element.children);
		}
    	return array;
	}

	get scope() {
        return this._scope;
    }

    set scope(value) {
        this._scope = value;

		if (this.debug) console.log("UIComponent.scope", value);

		let showDuration = this.element.getAttribute("data-show-duration");
		if (showDuration) {
			this.showDuration = Number(showDuration);
		}

		let hideDuration = this.element.getAttribute("data-hide-duration");
		if (hideDuration) {
			this.hideDuration = Number(hideDuration);
		}

		let showChildrenDelay = this.element.getAttribute("data-show-children-delay");
		if (showChildrenDelay) {
			this.showChildrenDelay = Number(showChildrenDelay);
		}

		let hideChildrenDelay = this.element.getAttribute("data-hide-children-delay");
		if (hideChildrenDelay) {
			this.hideChildrenDelay = Number(hideChildrenDelay);
		}
		
		for (let i = 0; i < this.element.attributes.length; i++) {
			let attribute = this.element.attributes[i];
			this._parseAttributeSetProperty(attribute, value);
		}
		for (let i = 0; i < this.element.attributes.length; i++) {
			let attribute = this.element.attributes[i];
			this._parseAttributeEventHandler(attribute, value);
		}
		for (let i = 0; i < this.element.attributes.length; i++) {
			let attribute = this.element.attributes[i];
			this._parseAttributeValue(attribute, value);
		}

		if (this.element.hasAttribute("data-model")) {
			let model = this.element.getAttribute("data-model");
			if (model) {
				this.model = evalProperty(model, value);
			} else {
				this.model = value;
			}
		}
	}

	_parseAttributeSetProperty(attribute, scope) {
		if (attribute.name.indexOf("data-set-") != -1) {
			let propertyName = attribute.name.split("data-set-")[1];
			let setValue = (value) => {
				this[propertyName] = value;
			}
			let expression = attribute.value;
			let attr = new ExpressionBinding(setValue, expression, scope);
			this.attributes[attribute.name] = attr;
			this.element.removeAttribute(attribute.name);
		}
	}

	_parseAttributeEventHandler(attribute, scope) {
		if (attribute.name.indexOf("data-on-") != -1) {
			let type = attribute.name.split("data-on-")[1];
			let expression = attribute.value;
			let func = new Function("event", expression).bind(this);
			let eventHandler = new EventHandler(this.element, type, func);
			this.attributes[attribute.name] = eventHandler;
			this.element.removeAttribute(attribute.name);
		}
	}

	_parseAttributeValue(attribute, scope) {
		if (attribute.value.indexOf("[[") != -1) {
			let attributeData = new ArrayDataOperation();
			attributeData.parseString(attribute.value, scope);
			let attr = new Attribute(this.element, attribute.name, attributeData);
			this.attributes[attribute.name] = attr;
		}
	}

    get model() {
        return this._model;
    }

    set model(value) {
    	if (this.debug) console.log("UIComponent.model", value);
        if (this._model) {
            if (this._model instanceof Data) {
				this._model.removeEventListener(Data.CHANGE, this.modelChange);
            }
        }
        this._model = value;
        if (value) {
            if (value instanceof Data) {
				value.addEventListener(Data.CHANGE, this.modelChange);
                this.modelChange();
            } else {
                this.updateValue(value);
            }
        } else {
			this.updateValue(value);
        }
    }

    modelChange(event) {
        this.updateValue(this.model.value);
    }

	load() {
		let promises = [];
		let children = this.children;
		for (let i = 0; i < children.length; i++) {
			let component = children[i].component;
			if(component) {
				promises.push(component.load());
			}
		}
		return Promise.all(promises);
	}

	show() {
    	let promise1 = awaitTimeout(this.showDelay);
		let promise2 = promise1.then(() => {
			this.showPromises = [this.showDelayComplete()];
			if(this.alsoShowChildren) {
				this.showPromises.push(this.showChildren());
			}
			return Promise.all(this.showPromises);
		});
		return promise2.then(this.showComplete.bind(this));
	}

	showDelayComplete() {
		if(this.element) {
			this.element.setAttribute("data-state", "show");
		}
		return awaitTimeout(this.showDuration);
	}

	showComplete() {

	}

	showChildren() {
		let promises = [];
		let delay = 0;
		let children = this.children;
		for (let i = 0; i < children.length; i++) {
			let component = children[i].component;
			if(component) {
				if (!isNaN(this.showChildrenDelay)) {
					component.showDelay = delay;
					delay += this.showChildrenDelay;
				}
				promises.push(component.show());
			}
		}
		return Promise.all(promises);
	}

	hide() {
		let promise1 = awaitTimeout(this.hideDelay);
		let promise2 = promise1.then(() => {
			this.hidePromises = [this.hideDelayComplete()];
			if(this.alsoShowChildren) {
				this.hidePromises.push(this.hideChildren());
			}
			return Promise.all(this.hidePromises);
		});
		return promise2.then(this.hideComplete.bind(this));
	}

	hideDelayComplete() {
    	if(this.element) {
			this.element.setAttribute("data-state", "hide");
		}
		return awaitTimeout(this.hideDuration);
	}

	hideComplete() {

	}

	hideChildren() {
		let promises = [];
		let delay = 0;
		let children = this.children;
		for (let i = 0; i < children.length; i++) {
			let component = children[i].component;
			if(component) {
				if (!isNaN(this.hideChildrenDelay)) {
					component.hideDelay = delay;
					delay += this.hideChildrenDelay;
				}
				promises.push(component.hide());
			}
		}
		return Promise.all(promises);
	}

	updateValue(value) {

    }

	windowResize(windowSize) {
		this.windowSize = windowSize;
		this.rectangle.x = this.element.offsetLeft;
		this.rectangle.y = this.element.offsetTop;
		this.rectangle.width = this.element.offsetWidth;
		this.rectangle.height = this.element.offsetHeight;
		this.globalRectangle.width = this.rectangle.width;
		this.globalRectangle.height = this.rectangle.height;
		if(this.calculateGlobalPosition) {
			this.globalRectangle.position = localToGlobal(this.element, document.body);
		}
		let children = this.children;
		for (let i = 0; i < children.length; i++) {
			let child = children[i];
			let component = child.component;
			if(component) {
				if (component.windowResize) {
					component.windowResize(windowSize);
				}
			}
		}
	}

	windowScroll(point) {
    	this.windowScrollPoint = point;
		let children = this.children;
		for (let i = 0; i < children.length; i++) {
			let component = children[i].component;
			if (component) {
				if (component.windowScroll) {
					component.windowScroll(point);
				}
			}
		}
	}

	animationFrame(data) {
    	this.animationFrameData = data;
    	if(this.doChildrenAnimationFrame) {
			let children = this.children;
			for (let i = 0; i < children.length; i++) {
				let component = children[i].component;
				if (component) {
					component.animationFrame(data);
				}
			}
		}
    }

	orientationChange(orientation) {
    	this.orientation = orientation;
		let children = this.children;
		for (let i = 0; i < children.length; i++) {
			let component = children[i].component;
			if (component) {
				if (component.orientationChange) {
					component.orientationChange(orientation);
				}
			}
		}
	}

	elementAdded() {
		let children = this.children;
		for (let i = 0; i < children.length; i++) {
			let component = children[i].component;
			if (component) {
				component.elementAdded();
			}
		}
	}

	elementRemoved() {
		let children = this.children;
		for (let i = 0; i < children.length; i++) {
			let component = children[i].component;
			if (component) {
				component.elementRemoved();
			}
		}
	}

	destroy() {
		if (this.debug) console.log("UIComponent.destroy", this.element);
        for (let i in this.attributes) {
        	let attribute = this.attributes[i];
        	attribute.destroy();
		}
        this.model = null;
        this.style.destroy();
        this.style = null;
        this.scope = null;
        if (this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
        this.element = null;
        this.element.compopnent = null;
        for(let i in this) {
        	this[i] = null;
		}
    }

    static getRect(element, parent, debug) {
		if(!parent) {
			parent = document.body;
		}
		let rectangle = new Rectangle(0,0, element.offsetWidth, element.offsetHeight);
		if (element.parentNode) {
			rectangle.position = localToGlobal(element, parent, null, debug);
		}
		return rectangle;
	}

	getRect(parent, debug) {
    	return UIComponent.getRect(this.element, parent);
	}

	querySelector(selector) {
		let element = this.element.querySelector(selector);
		if(!element) {
			console.log("No element with selector " + selector + " in " + this);
		}
		return element.component || element;
	}

	querySelectorAll(selector) {
		let array = [];
		let elements = this.element.querySelectorAll(selector);
		for(let i = 0; i < elements.length; i++) {
			let element = elements.item(i);
			array.push(element.component || element);
		}
		return array;
	}

	getTouchPoint(event) {
		let touch = event;
		if (isTouch) {
			touch = event.touches[0];
		}
		return new Point(touch.pageX, touch.pageY);
	}
	
	dispatchResizeEvent() {
		this.element.dispatchEvent(new Event("ui-resize", { bubbles: true, cancelable: true }));
	}

	// static callElementAdded (element) {
    // 	let component = element.component;
	// 	if (component) {
	// 		if (component instanceof UIComponent) {
	// 			component.elementAdded();
	// 			if (component.windowResize) {
	// 				component.windowResize(component.windowSize);
	// 			}
	// 		}
	// 	}
	// 	let objects = getAllObjects(element);
	// 	for (let i = 0; i < objects.length; i++) {
	// 		let object = objects[i];
	// 		let objectComponent = object.component;
	// 		if (objectComponent) {
	// 			if (objectComponent instanceof UIComponent) {
	// 				objectComponent.elementAdded();
	// 				if (objectComponent.windowResize && element.component) {
	// 					objectComponent.windowResize(element.component.windowSize);
	// 				}
	// 			}
	// 		}
	// 	}
	// }

	// static callElementRemoved (element) {
	// 	let component = element.component;
	// 	if (component) {
	// 		if (component instanceof UIComponent) {
	// 			component.elementRemoved();
	// 		}
	// 	}
	// 	let objects = getAllObjects(element);
	// 	for (let i = 0; i < objects.length; i++) {
	// 		let object = objects[i];
	// 		let objectComponent = object.component;
	// 		if (objectComponent) {
	// 			if (objectComponent instanceof UIComponent) {
	// 				objectComponent.elementRemoved();
	// 			}
	// 		}
	// 	}
	// }

}
