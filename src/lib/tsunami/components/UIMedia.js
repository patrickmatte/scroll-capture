import UIComponent from "./UIComponent";
import {hasValue} from "../utils/validation";

export default class UIMedia extends UIComponent {

	constructor(element) {
		super(element);
	}

	get model() {
		return this.element.src;
	}

	set model(value) {
		if (value instanceof Data) value = value.value;
		if (hasValue(value)) {
			this.element.src = value;
		} else {
			this.element.removeAttribute('src');
		}
	}
	
	reload() {
		let url = this.element.src;
		this.element.src = url;
	}

}
