import UIList from "../tsunami/components/UIList";
import * as tsunami from "../tsunami/tsunami";
import ActionView from "./ActionView";

export default class ActionsView extends UIList {

	constructor(element) {
		super(element);
	}

	_providerAdd(event) {
		let elements = super._providerAdd(event);
		let element = this.getElementByModel(elements[0]);
		this.scrollToElement(element, 0.5);
		return elements;
	}

}

tsunami.define("action-view", ActionView);
