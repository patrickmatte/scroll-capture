import * as tsunami from "../tsunami";
import SplitLetters from "./SplitLetters";
import List2 from "./List2";

export default class SplitWords extends List2 {

	constructor(element) {
		super(element);
		this.wordTemplate = `<span class="word" is="ui-component">{{item}}</span>`;
		this.spaceTemplate = `<span class="space">&nbsp;</span>`;
		this.showChildrenDelay = 25;
		this.hideChildrenDelay = 25;
	}

	updateValue(value) {
		let array = value.split(" ").join("- -").split("-");
		this.dataProvider = array;
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
