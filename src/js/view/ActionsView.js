import UIList from "../tsunami/components/UIList";
import * as tsunami from "../tsunami/tsunami";
import ActionView from "./ActionView";
import {app} from "../main";

export default class ActionsView extends UIList {

	constructor(element) {
		super(element);
		this.selectItemOnMouseDown = true;

		// this.previousClientY = 0;

		// this.element.addEventListener("wheel", (event) => {
		// 	var scrollTop = this.element.scrollTop;
		// 	var maxScroll = this.element.scrollHeight - this.element.offsetHeight;
		// 	var deltaY = event.deltaY;
		// 	if ( (scrollTop >= maxScroll && deltaY > 0) || (scrollTop === 0 && deltaY < 0) ) {
		// 		event.preventDefault();
		// 	}
		// }, {passive:false});
		
		// this.element.addEventListener("touchstart", (event) => {
		// 	this.previousClientY = event.touches[0].clientY;
		// }, {passive:false});
		
		// this.element.addEventListener("touchmove", (event) => {
		// 	var scrollTop = this.element.scrollTop;
		// 	var maxScroll = this.element.scrollHeight - this.element.offsetHeight;
		// 	var currentClientY = event.touches[0].clientY;
		// 	var deltaY = this.previousClientY - currentClientY;
		// 	if ( (scrollTop >= maxScroll && deltaY > 0) || (scrollTop === 0 && deltaY < 0) ) {
		// 		event.preventDefault();
		// 	}
		// 	this.previousClientY = currentClientY;
		// }, {passive:false});
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
		if (wasDragged) app.save();
		return result;
	}

}

tsunami.define("action-view", ActionView);
