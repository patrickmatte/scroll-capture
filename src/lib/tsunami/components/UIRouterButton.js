import UIButton from "./UIButton";

export default class UIRouterButton extends UIButton {

	constructor(element) {
		super(element);
		this.pushState = true;
	}

	clickHandler(event) {
		event.preventDefault();

		super.clickHandler(event);
	}

	clickDelayComplete(event) {
		super.clickDelayComplete(event);
		let href = this.element.href;
		if (href) {
			let path = href.substr(this.router.absoluteBasePath.length);
			if (this.pushState) {
				this.router.pushState(path);
			}
		} else {
			this.router.location = this.element.getAttribute("data-path");
		}
	}

}
