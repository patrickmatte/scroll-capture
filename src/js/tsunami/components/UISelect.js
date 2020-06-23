import UIList from "./UIList";
import Data from "../data/Data";
import {evalProperty} from "../tsunami";

export default class UISelect extends UIList {
	
	constructor(element) {
		super(element);
		this.valuePath = ".";
		this.template = '<option is="ui-text" value="`${[[scope.data]]}`">`${[[scope.data]]}`</option>';
		this.inputHandler = this.inputHandler.bind(this);
		this.element.addEventListener("input", this.inputHandler);
	}

	get valuePath() {
		return this._valuePath;
	}

	set valuePath(value) {
		this._valuePath = value;
		this.model = this.model;
	}

	modelUpdate(value) {
		if (value) {
			let propValue = evalProperty(this.valuePath, value);
			this.element.value = propValue;
		}
	}

	inputHandler(e) {
		if (this._model instanceof Data) {
			this._model.value = this.provider.find((model) => {
				let value = evalProperty(this.valuePath, model);
				return (value == this.element.value);
			});
		}
	}

	destroy() {
		this.element.removeEventListener("input", this.inputHandler);
		super.destroy();
	}

}
