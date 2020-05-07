import UIComponent from "./UIComponent";

export default class Switch extends UIComponent {

	constructor(element) {
		super(element);

		this.caseElements = {};

		this.defaultElement = this.element.querySelector(".default");

		this.hideElement(this.defaultElement);

		let cases = this.element.querySelectorAll(".case");
		for (let i = 0; i < cases.length; i++) {
			let caseElement = cases.item(i);
			let val = caseElement.getAttribute("data-value");
			if (val) {
				this.caseElements[val] = caseElement;
			}
			this.hideElement(caseElement);
		}
	}

	modelUpdate(value) {
		value = value.toString();

		this.hideElement(this.selectedElement);
		this.selectedElement = this.caseElements[value] || this.defaultElement;
		this.showElement(this.selectedElement);
	}

	hideElement(element) {
		if (element) {
			if (element.parentNode) {
				element.parentNode.removeChild(element);
			}
		}
	}

	showElement(element) {
		if (element) {
			this.element.appendChild(element);
		}
	}

}
