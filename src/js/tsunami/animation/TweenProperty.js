export default class TweenProperty {

	constructor(target, name, startValue, endValue, ease, roundingValue = 10000, debug) {
		this.target = target;
		this.name = name;
		this.startValue = startValue;
		this.endValue = endValue;
		this.ease = ease;
		this.roundingValue = roundingValue;
		this.debug = debug;
	}

	calculate(time, duration, debug = false) {
		let roundedValue = this.endValue;
		if (duration > 0) {
			let value = this.ease(time, this.startValue, this.endValue - this.startValue, duration);
			roundedValue = Math.round(value * this.roundingValue) / this.roundingValue;
		}
		this.target[this.name] = roundedValue;
	}

}