import EventDispatcher from "./EventDispatcher";

export default class Branch extends EventDispatcher {

	constructor() {
		super();
		this.branches = {};
		this.slug = null;
		this.parent = null;
		this.router = null;
		this.path = null;
		this.arrowKeyHandler = this.arrowKeyHandler.bind(this);
	}

	get defaultChild() {
		return this._defaultChild;
	}

	set defaultChild(value) {
		this._defaultChild = value;
	}

	getBranch(slug) {
		let branch;
		if (this.branches[slug]) {
			branch = this.branches[slug];
		} else if (this.branches["*"]) {
			branch = this.branches["*"];
		} else {
			branch = new Branch();
		}
		return branch;
	}

	load(assetList) {
		return Promise.resolve();
	}

	show() {
		return Promise.resolve();
	}

	hide() {
		return Promise.resolve();
	}

	get arrowKeyNavigation() {
		return this._arrowKeyNavigation;
	}

	set arrowKeyNavigation(value) {
		this._arrowKeyNavigation = value;
		window.removeEventListener("keyup", this.arrowKeyHandler);
		if(value) {
			window.addEventListener("keyup", this.arrowKeyHandler);
		}
	}

	arrowKeyHandler(event) {
		let increment = 0;
		switch(event.keyCode) {
			case 37:
			case 38:
				increment = -1;
				break;
			case 39:
			case 40:
				increment = 1;
				break;
		}
		return increment;
	}

}