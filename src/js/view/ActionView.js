import UIComponent from "../tsunami/components/UIComponent";
import {app} from "../main";
import * as tsunami from "../tsunami/tsunami";
import ActionTweenView from "./ActionTweenView";

export default class ActionView extends UIComponent {

	constructor(element) {
		super(element);

		this.title = this.element.querySelector(".sc-title");

		let deleteButton = this.title.querySelector("button.sc-close-button");
		deleteButton.component.onRelease = (event) => {
			let index = app.actions.selectedIndex.value;
			app.actions.remove(app.actions.selectedItem.value);
			app.actions.selectedIndex.value = Math.min(index, app.actions.value.length - 1);
		};
	}

}

tsunami.define("action-tween", ActionTweenView);
