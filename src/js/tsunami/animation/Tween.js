import BaseEvent from "../events";
import Clock, { clock } from "./Clock";
import { round3 } from "../utils/number";

export default class Tween extends EventTarget {
  constructor(startTime, duration, tweenProps, updateHandler, completeHandler) {
    super();
    this.tick = this.tick.bind(this);
    this.tweenProps = tweenProps;
    this.updateHandler = updateHandler;
    this.completeHandler = completeHandler;
    this._startTime = startTime;
    this._duration = duration;
    this._tweenTime = NaN;
    this.forceUpdate = false;
  }

  get startTime() {
    return this._startTime;
  }

  set startTime(value) {
    this._startTime = value;
    this.dispatchEvent(new Event(Tween.CHANGE));
  }

  get endTime() {
    return this.startTime + this.duration;
  }

  get duration() {
    return this._duration;
  }

  set duration(value) {
    this._duration = round3(value);
    this.dispatchEvent(new Event(Tween.CHANGE));
  }

  start() {
    let promise = new Promise((resolve, reject) => {
      let tweenComplete = (event) => {
        if (this.debug) console.log("tweenComplete");
        this.removeEventListener(Tween.COMPLETE, tweenComplete);
        resolve(this);
      };
      this.addEventListener(Tween.COMPLETE, tweenComplete);
    });
    this._tweenTime = NaN;
    this.clockStartTime = clock.time;
    clock.addEventListener(Clock.TICK, this.tick);
    this.time = 0;
    return promise;
  }

  tick(event) {
    this.time = (clock.time - this.clockStartTime) / 1000;
  }

  stop() {
    clock.removeEventListener(Clock.TICK, this.tick);
  }

  get time() {
    return this._time;
  }

  set time(value) {
    value = Math.min(this.startTime + this.duration, value);
    value = Math.max(0, value);
    this._time = value;
    let tweenTime = value - this.startTime;
    tweenTime = Math.max(tweenTime, 0);
    tweenTime = Math.min(tweenTime, this.duration);
    if (tweenTime != this._tweenTime || this.forceUpdate) {
      this._tweenTime = tweenTime;
      for (let i = 0; i < this.tweenProps.length; i++) {
        let tweenProp = this.tweenProps[i];
        tweenProp.calculate(tweenTime, this.duration, this.debug);
      }
      let updateEvent = new Event(Tween.UPDATE);
      if (this.updateHandler) {
        this.updateHandler(updateEvent);
      }
      this.dispatchEvent(updateEvent);
    }
    if (tweenTime >= this.duration) {
      let completeEvent = new Event(Tween.COMPLETE);
      if (this.completeHandler) this.completeHandler(completeEvent);
      this.stop();
      this.dispatchEvent(completeEvent);
    }
  }

  static get COMPLETE() {
    return "complete";
  }

  static get UPDATE() {
    return "update";
  }

  static get CHANGE() {
    return "change";
  }
}
