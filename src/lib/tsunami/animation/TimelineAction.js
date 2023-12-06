import Tween from './Tween';

export default class TimelineAction extends EventTarget {
  constructor(startTime, forward, backward) {
    super();
    this._startTime = startTime;
    this._time = NaN;
    this.forward = forward;
    this.backward = backward;
  }

  get startTime() {
    return this._startTime;
  }

  set startTime(value) {
    this._startTime = value;
    this.dispatchEvent(new Event(Tween.CHANGE));
  }

  get endTime() {
    return this.startTime;
  }

  get duration() {
    return 0;
  }

  get time() {
    return this._time;
  }

  set time(value) {
    const previousTime = this.time;
    // if (previousTime === value) return;
    const diff = value - previousTime;
    if (diff > 0) {
      if (value >= this.startTime && previousTime < this.startTime && this.forward) {
        this.forward();
      }
    } else {
      if (value <= this.startTime && previousTime > this.startTime && this.backward) {
        this.backward();
      }
    }
    this._time = value;
  }
}
