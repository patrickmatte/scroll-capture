import UIList from "./UIList";
import Data from "../data/Data";
import {evalProperty} from "../tsunami";

export default class UISelect extends UIList {

	constructor(element) {
		super(element);
		this.valuePath = element.getAttribute("data-valuePath") || ".";
		this.template = `<option value="[[item]]" is="ui-text">[[item]]</option>`;
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
			this._model.removeEventListener(Data.CHANGE, this.modelChangeBind);
			this._model.value = this.dataProvider.find(this.getModel);
			if (this._model) {
				this._model.addEventListener(Data.CHANGE, this.modelChangeBind);
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
