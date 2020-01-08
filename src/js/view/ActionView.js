import UIComponent from "../tsunami/components/UIComponent";
import {importTemplate} from "../tsunami/tsunami";

export default class ActionView extends UIComponent {

	constructor(element) {
		super(element);
		this.title = this.element.querySelector(".title");
	}

	get scope() {
		return super.scope;
	}

	set scope(value) {
		super.scope = value;
		let deleteButton = importTemplate(`<button class="delete-button" data-model="item" is="ui-button">x</button>`, value);
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
