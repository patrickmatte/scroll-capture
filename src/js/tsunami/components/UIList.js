import UIComponent from "./UIComponent";
import {destroyElements, evalProperty, importTemplate} from "../tsunami";
import ArrayData from "../data/ArrayData";
import Data from "../data/Data";
import BaseEvent from "../events";
import Scope from "../Scope";

export default class UIList extends UIComponent {

	constructor(element) {
		super(element);
		this.template = `<li><span is="ui-text">[[data]]</span></li>`;
		this.templates = {};
		this._provider = [];
		this._providerChange = this._providerChange.bind(this);
		this._providerAdd = this._providerAdd.bind(this);
		this._providerRemove = this._providerRemove.bind(this);
		this._providerSort = this._providerSort.bind(this);

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
