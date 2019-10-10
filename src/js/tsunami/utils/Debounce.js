export default class Debounce {

	constructor(callback) {
		this.callback = callback;
		this.waiting = false;
		this.debounce = this.debounce.bind(this);
		this.timeoutComplete = this.timeoutComplete.bind(this);
		this.doCallback = false;
	}

	debounce(data) {
		this.data = data;
		if (!this.waiting) {
			this.callback(this.data);
			this.waiting = true;
			requestAnimationFrame(this.timeoutComplete);
		} else {
			this.doCallback = true;
		}
	}

	timeoutComplete() {
		this.callback(this.data);
		this.doCallback = false;
		this.waiting = false;
	}

}