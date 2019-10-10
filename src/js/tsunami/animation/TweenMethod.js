export default class TweenMethod {

	constructor(target, name, startValue, endValue, ease) {
		this.target = target;
		this.name = name;
		this.startValue = startValue;
		this.endValue = endValue;
		this.ease = ease;
	}

	calculate(time, duration) {
		let value = this.ease(time, this.startValue, this.endValue - this.startValue, duration);
		this.target[this.name](value);
	}

}