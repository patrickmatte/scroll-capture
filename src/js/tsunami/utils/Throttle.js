export default class Throttle {

	constructor(callback, timeout = 500) {
		this.callback = callback;
		this.timeout = timeout;

		this.throttle = this.throttle.bind(this);
		this.timeoutComplete = this.timeoutComplete.bind(this);

		this.isWaiting = false;
		this.doCallback = false;
	}

	throttle(data) {
		this.data = data;
		this.doCallback = true;
		if (!this.isWaiting) {
			this.timeoutComplete();
		}
	}

	timeoutComplete() {
		if(this.doCallback) {
			this.isWaiting = true;
			this.callback(this.data);
			this.doCallback = false;
			setTimeout(this.timeoutComplete, this.timeout);
		} else {
			this.isWaiting = false;
		}
	}

}