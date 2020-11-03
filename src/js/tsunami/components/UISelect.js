import UIList from "./UIList";
import {getProperty} from "../tsunami";
import { hasValue } from "../utils/validation";
import ChangeEvent from "../ChangeEvent";

export default class UISelect extends UIList {
	
	constructor(element) {
		super(element);
		this._valuepath = "this";
		this.template = '<option is="ui-text" value="{this.scope.data}">{this.scope.data}</option>';
		this.inputHandler = this.inputHandler.bind(this);
		this.element.addEventListener("input", this.inputHandler);
	}

	get valuepath() {
		return this._valuepath;
	}

	set valuepath(value) {
		this._valuepath = value;
		this.model = this.model;
	}

	get model() {
		return super.model;
	}

	set model(value) {
		if (hasValue(value)) {
			let itemValue = value;
			if(this.valuepath != "this") itemValue = getProperty(this.valuepath, item);
			this.element.value = itemValue;
		}
		super.model = value;
	}

	inputHandler(e) {
		let value = this.provider.find((item) => {
			let itemValue = item;
			if(this.valuepath != "this") itemValue = getProperty(this.valuepath, item);
			return (itemValue == this.element.value);
		});
		super.model = value;
	}

	destroy() {
		this.element.removeEventListener("input", this.inputHandler);
		super.destroy();
	}

}
