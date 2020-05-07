import UIList from "../tsunami/components/UIList";
import * as tsunami from "../tsunami/tsunami";
import ActionView from "./ActionView";
import {app} from "../main";

export default class ActionsView extends UIList {

	constructor(element) {
		super(element);
		this.selectItemOnMouseDown = true;
	}

	_providerAdd(event) {
		let elements = super._providerAdd(event);
		let element = this.getElementByModel(elements[0]);
		this.scrollToElement(element, 0.5);
		return elements;
	}

	_dragEnd(event) {
		let wasDragged = this.isDragged;
		let result = super._dragEnd(event);
		if (wasDragged) app.model.save();
		return result;
	}

}

tsunami.define("sc-action-view", ActionView);
