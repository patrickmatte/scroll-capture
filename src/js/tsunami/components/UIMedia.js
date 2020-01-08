import UIComponent from "./UIComponent";
import {hasValue} from "../utils/validation";

export default class UIMedia extends UIComponent {

	constructor(element) {
		super(element);
	}

	updateValue(value) {
		if (hasValue(value)) {
			this.element.src = value;
		}
	}

	reload() {
		let url = this.element.src;
		this.element.src = url;
	}

	destroy() {
		let image = this.element;
		let result = super.destroy();
		image.removeAttribute('src');
		return result;
	}

}
