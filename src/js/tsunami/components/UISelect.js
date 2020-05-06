import UIList from "./UIList";
import Data from "../data/Data";
import {evalProperty} from "../tsunami";

export default class UISelect extends UIList {
	
	constructor(element) {
		super(element);
		this.valuePath = ".";
		this.template = '<option is="ui-text" value="`${[[scope.data]]}`">`${[[scope.data]]}`</option>';
		this.getModel = this.getModel.bind(this);
		this.inputHandler = this.inputHandler.bind(this);
		this.element.addEventListener("input", this.inputHandler);
	}

	updateValue(model) {
		if (model) {
			let value = evalProperty(this.valuePath, model);
			this.element.value = value;
		}
	}

	inputHandler(e) {
		if (this._model) {
			this._model.removeEventListener(Data.CHANGE, this.modelChange);
			this._model.value = this.provider.find(this.getModel);
			if (this._model) {
				this._model.addEventListener(Data.CHANGE, this.modelChange);
			}
		}
	}

	getModel(model) {
		let value = evalProperty(this.valuePath, model);
		let match = value == this.element.value;
		return match;
	}

	destroy() {
		this.element.removeEventListener("input", this.inputHandler);
		super.destroy();
	}

}
