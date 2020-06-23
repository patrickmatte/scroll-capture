import UIButton from "./UIButton";

export default class UIToggle extends UIButton {

	clickDelayComplete() {
		this.model.value = !this.model.value;
		return super.clickDelayComplete(event);
	}
	
}