import UIComponent from "./UIComponent";
import {hasValue} from "../utils/validation";

export default class UIMedia extends UIComponent {

	constructor(element) {
		super(element);
	}

	modelUpdate(value) {
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
