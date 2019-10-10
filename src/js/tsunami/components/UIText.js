import UIComponent from "./UIComponent";
import ArrayDataOperation from "../data/ArrayDataOperation";

export default class UIText extends UIComponent {

	constructor(element) {
		super(element);
	}

	get scope() {
		return super.scope;
	}

	set scope(value) {
		super.scope = value;

		let innerHTML = this.element.innerHTML;
		if (innerHTML.indexOf("[[") != -1) {
			let arrayOperation = new ArrayDataOperation();
			arrayOperation.parseString(innerHTML, value);
			this.model = arrayOperation;
		}
	}

	updateValue(value) {
		this.element.innerHTML = value;
	}

}