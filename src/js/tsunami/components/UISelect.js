import UIList from "./UIList";
import {getProperty} from "../tsunami";
import { hasValue } from "../utils/validation";
import ChangeEvent from "../ChangeEvent";

export default class UISelect extends UIList {
	
	constructor(element) {
		super(element);
		this.valuepath = "this";
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
		let value = this.provider.find((item) => {
			let itemValue = getProperty(this.valuepath, item);
			return (itemValue == this.element.value);
		});
		return value;
	}

	set model(value) {
		if (hasValue(value)) this.element.value = getProperty(this.valuepath, value);
		super.model = value;
	}

	inputHandler(e) {
		ChangeEvent.dispatch(this, "model", this.model);
	}

	destroy() {
		this.element.removeEventListener("input", this.inputHandler);
		super.destroy();
	}

}
