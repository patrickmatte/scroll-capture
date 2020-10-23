import * as tsunami from "../tsunami";
import SplitLetters from "./SplitLetters";
import UIList from "./UIList";
import Data from "../data/Data";

export default class SplitWords extends UIList {

	constructor(element) {
		super(element);
		this.alsoShowChildren = true;
		this.wordTemplate = '<span class="word" is="ui-text">{scope.data}</span>';
		this.spaceTemplate = '<span class="space">&nbsp;</span>';
		this.showChildrenDelay = 25;
		this.hideChildrenDelay = 25;
	}

	get model() {
		return super.model;
	}

	set model(value) {
		super.model = value;
		if (value instanceof Data) value = value.value;
		let array = value.split(" ").join("- -").split("-");
		this.provider = array;
	}

	getTemplateForModel(model) {
		let template;
		switch (model) {
			case " ":
				template = this.spaceTemplate;
				break;
			default:
				template = this.wordTemplate;
				break;
		}
		return template;
	}

}

tsunami.define("split-letters", SplitLetters);
