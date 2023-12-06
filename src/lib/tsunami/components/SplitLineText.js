import UIComponent from "./UIComponent";
import Data from "../data/Data";

export default class SplitLineText extends UIComponent {

	constructor(element) {
		super(element);
		this.list = this.element.querySelector(".lines-list").component;
	}

	show() {
		super.show();
		return this.list.show();
	}

	hide() {
		super.hide();
		return this.list.hide();
	}

	get scope() {
		return super.scope;
	}

	set scope(value) {
		let listSelector = this.element.getAttribute("data-list-selector");
		if (listSelector) {
			this.list = this.element.querySelector(listSelector).component;
		}
		super.scope = value;
	}

	get model() {
		return super.model;
	}

	set model(value) {
		super.model = value;
		if (value instanceof Data) value = value.value;
		this.modelValue = value;
		if (this.isAdded) {
			this.updateList();
		}
	}

	elementAdded() {
		if (this.debug) console.log("SplitLineText.elementAdded");
		super.elementAdded();
		this.updateList();
	}

	updateList() {
		if (!this.modelValue) {
			return;
		}
		if (this.debug) console.log("SplitLineText.updateList offsetWidth", this.element.offsetWidth);

		let words = this.modelValue.split(" ");

		let smallestHeight = 100000000;
		let height = NaN;
		let lines = [];
		let textLine = "";
		for (let i = 0; i < words.length; i++) {
			let joinded = lines.slice().join("_");
			let word = words[i];
			let text = textLine;
			if (i > 0) {
				text += " ";
			}
			text += word;
			this.list.element.innerHTML = text;
			let textHeight = this.element.offsetHeight;
			if (textHeight < smallestHeight) {
				smallestHeight = textHeight;
				"smallestHeight", smallestHeight;
			}
			if (isNaN(height)) {
				height = textHeight;
				textLine += word;
			} else {
				if (textHeight > smallestHeight) {
					height = 0;
					lines.push(textLine);
					textLine = word;
				} else {
					textLine += " " + word;
				}
			}
		}
		if (textLine != "") {
			lines.push(textLine);
		}
		this.list.element.innerHTML = "";
		this.list.provider = lines;
	}
}