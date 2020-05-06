import UIList from "./UIList";

export default class SplitLetters extends UIList {

	constructor(element) {
		super(element);

		this.template = '<span class="letter" is="ui-text">`${[[scope.data]]}`</span>';
	}

	updateValue(value) {
		let array = new Array();
		for(let i = 0; i < value.length; i++) {
			array.push(value.charAt(i));
		}
		this.provider = array;
	}

}