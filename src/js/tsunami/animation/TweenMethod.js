export default class TweenMethod {
  constructor(target, name, startValue, endValue, ease, roundingValue = 1000, debug = false) {
    this.target = target;
    this.name = name;
    this.startValue = startValue;
    this.endValue = endValue;
    this.ease = ease;
    this.roundingValue = roundingValue;
    this.debug = debug;
  }

  calculate(time) {
    const value =
      Math.round(this.ease(time, this.startValue, this.endValue - this.startValue, 1) * this.roundingValue) /
      this.roundingValue;
    this.target[this.name](value);
  }
}
