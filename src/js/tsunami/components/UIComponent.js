import { awaitTimeout } from "../await";
import Rectangle from "../geom/Rectangle";
import { isTouch, localToGlobal } from "../window";
import Branch from "../Branch";
import Point from "../geom/Point";
import { nodeListToArray } from "../utils/array";
import ChangeEvent from "../ChangeEvent";
import { onDirective } from "../directives/onDirective";
import { setDirective } from "../directives/setDirective";
import { attributeDirective } from "../directives/attributeDirective";
import { bindDirective } from "../directives/bindDirective";

export default class UIComponent extends Branch {

	constructor(element) {
		super();

		if (element) {
			this.debug = (element.getAttribute("data-debug") == "true");
		}

		this.element = element;

		this.componentID = new Date().getTime();
		if (this.debug) this.element.setAttribute("data-componentId", this.componentID);

		// this.childrenSelector = ":scope > *";

		this._model = null;
		this.rectangle = new Rectangle();
		this.globalRectangle = new Rectangle();
		this.windowSize = new Rectangle();

		this.attributes = {};

		this.showDuration = 0;
		this.showDelay = 0;
		this.hideDuration = 0;
		this.hideDelay = 0;
		this.showChildrenDelay = 0;
		this.hideChildrenDelay = 0;

		this.doChildrenAnimationFrame = false;
		this.alsoShowChildren = false;
		this.calculateGlobalPosition = false;
	}

	get element() {
		return this._element;
	}

	set element(value) {
		this._element = value;
		if (value) value.component = this;
	}

	get containerElement() {
		return this.element;
	}

	removeChild(value) {
		if(this.debug) console.log("UIList.removeChild", value);
		if (value) {
			if (this.containerElement == value.parentNode) {
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
			this.containerElement.appendChild(value);
			let component = value.component;
			if (component) {
				if (this.isAdded) {
					component.elementAdded();
				}
				if (component.windowResize) {
					component.windowResize(this.windowSize);
				}
				// if (component.windowScroll) {
				// 	component.windowScroll(this.windowScrollPoint);
				// }
				// if (component.animationFrame) {
				// 	component.animationFrame(this.animationFrameData);
				// }
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
				this.containerElement.insertBefore(value, ref);
				let component = value.component;
				if (component) {
					if (this.isAdded) {
						component.elementAdded();
					}
					if (component.windowResize) {
						component.windowResize(this.windowSize);
					}
					// if (component.windowScroll) {
					// 	component.windowScroll(this.windowScrollPoint);
					// }
					// if (component.animationFrame) {
					// 	component.animationFrame(this.animationFrameData);
					// }
				}
			}
		}
	}

	insertAfter(value, ref) {
		let children = this.children;
		let index = children.indexOf(ref);
		if (!isNaN(index)) {
			this.appendChildAt(value, index + 1);
		} else {
			console.log("Can't find depth index for", ref);
		}
	}

	setAttribute(name, value) {
		this.element.setAttribute(name, value);
	}

	get isAdded() {
		let parent;
		if (this.element) {
			parent = this.element.parentNode;
		}
		while (parent && parent != document.body) {
			parent = parent.parentNode;
		}
		let isAdded = (parent == document.body);
		return isAdded;
	}

	get children() {
		let array = [];
		if (this.element) {
			array = nodeListToArray(this.element.children);
		}
		return array;
	}

	get scope() {
		return this._scope;
	}

	set scope(value) {
		this._scope = value;
		if (this.debug) console.log("debug UIComponent.scope", value);
		attributeDirective(this);
		onDirective(this);
		setDirective(this);
		bindDirective(this);
	}

	get model() {
		return this._model;
	}

	set model(value) {
		if (value != this._model) {
			this._model = value;
		 	ChangeEvent.dispatch(this, "model", value);
		}
	}

	load() {
		let promises = [];
		let children = this.children;
		for (let i = 0; i < children.length; i++) {
			let component = children[i].component;
			if (component && component.load) {	
				promises.push(component.load());
			}
		}
		return Promise.all(promises);
	}

	show(props) {
		let promise1 = awaitTimeout(this.showDelay);
		let promise2 = promise1.then(() => {
			this.showPromises = [this.showDelayComplete()];
			if (this.alsoShowChildren) {
				this.showPromises.push(this.showChildren());
			}
			return Promise.all(this.showPromises);
		});
		return promise2.then(this.showComplete.bind(this));
	}

	showDelayComplete() {
		this.isVisible = true;
		if (this.element) {
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
			if (component) {
				if (this.showChildrenDelay > 0) {
					component.showDelay = delay;
					delay += this.showChildrenDelay;
				}
				promises.push(component.show());
			}
		}
		return Promise.all(promises);
	}

	hide(props) {
		let promise1 = awaitTimeout(this.hideDelay);
		let promise2 = promise1.then(() => {
			this.hidePromises = [this.hideDelayComplete()];
			if (this.alsoShowChildren) {
				this.hidePromises.push(this.hideChildren());
			}
			return Promise.all(this.hidePromises);
		});
		return promise2.then(this.hideComplete.bind(this));
	}

	hideDelayComplete() {
		if (this.element) {
			this.element.setAttribute("data-state", "hide");
		}
		return awaitTimeout(this.hideDuration);
	}

	hideComplete() {
		this.isVisible = false;
	}

	hideChildren() {
		let promises = [];
		let delay = 0;
		let children = this.children;
		for (let i = 0; i < children.length; i++) {
			let component = children[i].component;
			if (component) {
				if (this.hideChildrenDelay > 0) {
					component.hideDelay = delay;
					delay += this.hideChildrenDelay;
				}
				promises.push(component.hide());
			}
		}
		return Promise.all(promises);
	}

	windowResize(windowSize) {
		this.windowSize = windowSize;
		this.rectangle.x = this.element.offsetLeft;
		this.rectangle.y = this.element.offsetTop;
		this.rectangle.width = this.element.offsetWidth;
		this.rectangle.height = this.element.offsetHeight;
		this.globalRectangle.width = this.rectangle.width;
		this.globalRectangle.height = this.rectangle.height;
		if (this.calculateGlobalPosition) {
			this.globalRectangle.position = localToGlobal(this.element, document.body);
		}
		let children = this.children;
		for (let i = 0; i < children.length; i++) {
			let child = children[i];
			let component = child.component;
			if (component) {
				if (component.windowResize) {
					component.windowResize(windowSize);
				}
			}
		}
	}

	// windowScroll(point) {
	// 	this.windowScrollPoint = point;
	// 	let children = this.children;
	// 	for (let i = 0; i < children.length; i++) {
	// 		let component = children[i].component;
	// 		if (component) {
	// 			if (component.windowScroll) {
	// 				component.windowScroll(point);
	// 			}
	// 		}
	// 	}
	// }

	animationFrame(data) {
		this.animationFrameData = data;
		if (this.doChildrenAnimationFrame) {
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

	static getRect(element, parent, debug) {
		if (!parent) {
			parent = document.body;
		}
		let rectangle = new Rectangle(0, 0, element.offsetWidth, element.offsetHeight);
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
		if (!element) {
			console.log("No element with selector " + selector + " in " + this);
		}
		return element.component || element;
	}

	querySelectorAll(selector) {
		let array = [];
		let elements = this.element.querySelectorAll(selector);
		for (let i = 0; i < elements.length; i++) {
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

	destroy() {
		if (this.debug) console.log("UIComponent.destroy", this.element);
		for (let i in this.attributes) {
			let attribute = this.attributes[i];
			attribute.destroy();
		}
		this.model = null;
		this.scope = null;
		if (this.element.parentNode) {
			this.element.parentNode.removeChild(this.element);
		}
		this.element = null;
		this.element.compopnent = null;
		for (let i in this) {
			this[i] = null;
		}
	}

}
