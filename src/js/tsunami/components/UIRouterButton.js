import UIButton from "./UIButton";

export default class UIRouterButton extends UIButton {

	constructor(element) {
		super(element);
		this.pushState = true;
		this.clickDelay = 0;
	}

	get scope() {
		return super.scope;
	}

	set scope(value) {
		super.scope = value;

		let pushState = this.element.hasAttribute("data-pushstate");
		if (pushState) {
			this.pushState = Boolean(pushState);
		}

		let clickDelay = this.element.hasAttribute("data-click-delay");
		if (clickDelay) {
			this.clickDelay = Boolean(clickDelay);
		}
	}

	clickHandler(event) {
		event.preventDefault();

		if (this.cancelClick) {
			this.cancelClick = false;
			return;
		}

		super.clickHandler(event);

		if (this.clickDelay > 0) {
			setTimeout(this.clickDelayComplete.bind(this), this.clickDelay * 1000);
		} else {
			this.clickDelayComplete();
		}

	}

	clickDelayComplete() {
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
