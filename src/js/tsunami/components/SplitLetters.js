import UIList from "./UIList";
import Data from "../data/Data";

export default class SplitLetters extends UIList {

	constructor(element) {
		super(element);

		this.template = '<span class="letter" is="ui-text">~{[[scope.data]]}</span>';
	}

	get model() {
		return super.model;
	}

	set model(value) {
		super.model = value;
		if (value instanceof Data) value = value.value;
		let array = new Array();
		for (let i = 0; i < value.length; i++) {
			array.push(value.charAt(i));
		}
		this.provider = array;
	}

}