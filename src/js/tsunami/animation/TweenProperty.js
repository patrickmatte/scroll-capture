export default class TweenProperty {
  constructor(target, name, startValue, endValue, ease, roundingFunc, debug = false) {
    this.target = target;
    this.name = name;
    this.startValue = startValue;
    this.endValue = endValue;
    this.ease = ease;
    this.roundingFunc = roundingFunc || this.noRounding;
    this.debug = debug;
  }

  calculate(time) {
    let value = this.ease(time, this.startValue, this.endValue - this.startValue, 1);
    value = this.roundingFunc(value);
    this.target[this.name] = value;
  }

  noRounding(val) {
    return val;
  }
}
