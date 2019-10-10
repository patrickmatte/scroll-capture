import UIComponent from "./UIComponent";

export default class SingularPlural extends UIComponent {

	constructor(element) {
		super(element);

		this.checkAttributes();
	}

	get scope() {
		return super.scope;
	}

	set scope(value) {
		super.scope = value;
		this.checkAttributes();
	}

	checkAttributes() {
		let singular = this.element.getAttribute("data-singular");
		if (singular) {
			this.singular = singular;
		}
		let plural = this.element.getAttribute("data-plural");
		if (plural) {
			this.plural = plural;
		}
	}

	updateValue(value) {
		let word = this.singular;
		if(value > 1) {
			word = this.plural;
		}
		this.element.innerHTML = word;
	}

}