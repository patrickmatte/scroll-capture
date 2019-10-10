import UIComponent from "./UIComponent";

export default class Noun extends UIComponent {

	constructor(element, singular, plural) {
		super(element);
		this.singular = singular;
		this.plural = plural;
	}

	set scope(value) {
		if (this.element.hasAttribute("data-plural")) {
			this.plural = this.element.getAttribute("data-plural");
		}
		if (this.element.hasAttribute("data-singular")) {
			this.singular = this.element.getAttribute("data-singular");
		}
		super.scope = value;
	}

	updateValue(value) {
		let word = this.singular;
		if (value > 1) {
			word = this.plural;
		}
		this.element.innerHTML = word;
	}

}