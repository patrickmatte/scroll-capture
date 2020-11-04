import ChangeEvent from "../ChangeEvent";
import UIList from "./UIList";

export default class UISelect extends UIList {
	
	constructor(element) {
		super(element);
		this._value = this.element.value;
		this.template = '<option is="ui-text" value="{this.scope.data}">{this.scope.data}</option>';
		this.inputHandler = this.inputHandler.bind(this);
		this.element.addEventListener("input", this.inputHandler);
	}

	get provider() {
		return super.provider;
	}

	set provider(value) {
		let currentValue = this.value;
		super.provider = value;
		this.value = currentValue;
	}

	get value() {
		return this._value;
	}

	set value(value) {
		if(this.element.value != value) {
			this._value = value;
			this.element.value = value;
			ChangeEvent.dispatch(this, "value", value);
		}
	}

	_providerAdd(event) {
		let currentValue = this.value;
		let elements = super._providerAdd(event);
		this.value = currentValue;
		return elements;
	}

	_providerRemove(event) {
		let currentValue = this.value;
		let elements = super._providerRemove(event);
		this.value = currentValue;
		return elements;
	}

	inputHandler(event) {
		this._value = this.element.value;
		ChangeEvent.dispatch(this, "value", this._value);
	}

	destroy() {
		this.element.removeEventListener("input", this.inputHandler);
		super.destroy();
	}

}
