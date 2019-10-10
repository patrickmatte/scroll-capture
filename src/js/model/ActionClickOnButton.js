import Action from "./Action";
import StringData from "../tsunami/data/StringData";

export default class ActionClickOnButton extends Action {

	constructor(cssSelector) {
		super("ActionClickOnButton");
		this.cssSelector = new StringData(cssSelector);
	}

	trigger() {
		let button = document.querySelector(this.cssSelector.value);
		if(button.click) {
			button.click();
		} else {
			console.log("No click function on button ", this.cssSelector.value);
		}
		return Promise.resolve();
	}

	serialize() {
		let data = super.serialize();
		data.cssSelector = this.cssSelector.value;
		return data;
	}

	deserialize(data) {
		super.deserialize(data);
		this.cssSelector.value = data.cssSelector;
	}

}