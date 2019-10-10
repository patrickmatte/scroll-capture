import UIList from "../tsunami/components/UIList";

export default class SpacersView extends UIList {

	constructor(element) {
		super(element);

		this.element.addEventListener("click", (event) => {
			console.log("SpacersView", event.type, event);
		});
	}

}