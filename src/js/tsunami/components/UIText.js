import UIComponent from "./UIComponent";
import ArrayDataOperation from "../data/ArrayDataOperation";

export default class UIText extends UIComponent {
	
	constructor(element) {
		super(element);
		console.log("UIText");
	}

	get scope() {
		return super.scope;
	}

	set scope(value) {
		super.scope = value;

		let textContent = this.element.textContent;
		if (textContent.indexOf("[[") != -1) {
			let arrayOperation = new ArrayDataOperation();
			arrayOperation.parseString(textContent, value);
			this.model = arrayOperation;
		}
	}

	updateValue(value) {
		this.element.textContent = value;
	}

}