import UIButton from "./UIButton";

export default class UIToggle extends UIButton {

	clickHandler(event) {
		event.preventDefault();
		super.clickHandler(event);
		this.model.value = !this.model.value;
	}

}