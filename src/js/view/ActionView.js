import UIComponent from "../tsunami/components/UIComponent";
import {importTemplate} from "../tsunami/tsunami";
import {events} from "../tsunami/events";
import BooleanData from "../tsunami/data/BooleanData";

export default class ActionView extends UIComponent {

	constructor(element) {
		super(element);

		// this.dragStart = this.dragStart.bind(this);

		this.title = this.element.querySelector(".sc-title");

		// this.dragArea = this.title.querySelector(".sc-drag-area");
		// this.dragArea.addEventListener(events.mousedown, this.dragStart);
	}

	// set isDragging(value) {
	// 	if(value) {
	// 		this.element.classList.add("is-dragging");
	// 	} else {
	// 		this.element.classList.remove("is-dragging");
	// 	}
	// }

	// dragStart(event) {
	// 	let point = this.getTouchPoint(event);
	// 	this.element.parentNode.component.dragStart(point, this);
	// }

	get scope() {
		return super.scope;
	}

	set scope(value) {
		super.scope = value;
		let deleteButton = importTemplate(`<button class="close-button" data-model="data" is="ui-button"></button>`, value);
		deleteButton.component.onRelease = (event) => {
			this.element.classList.add("deleted");
			setTimeout(()=> {
				this.element.parentNode.component.dataProvider.remove(this.model);
			}, 333);
		};
		this.title.appendChild(deleteButton);
	}

}

// export class CloseButton extends UIButton {
//
// 	constructor(element) {
// 		super(element);
// 		console.log("CloseButton", element);
// 	}
//
// 	clickHandler(event) {
// 		super.clickHandler(event);
// 		console.log("CloseButton.clickHandler", this.model);
// 	}
//
// }
//
// tsunami.define("close-button", CloseButton);
