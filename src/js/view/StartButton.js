import UIButton from "../tsunami/components/UIButton";

export default class StartButton extends UIButton {

	clickHandler(event) {
		super.clickHandler(event);
		this.model.start();
	}

}