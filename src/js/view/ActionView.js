import UIComponent from "../tsunami/components/UIComponent";

export default class ActionView extends UIComponent {

	constructor(element) {
		super(element);

		this.title = this.element.querySelector(".sc-title");

		let deleteButton = this.title.querySelector("button.close-button");
		deleteButton.component.onRelease = (event) => {
			this.element.parentNode.component.dataProvider.remove(this.model);
		};
	}

}
