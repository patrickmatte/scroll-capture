import Clock, { getClock } from './Clock';
import { roundDecimalToPlace } from '../utils/number';

export default class Tween extends EventTarget {
  constructor(
    startTime = 0,
    duration = 1,
    properties = [],
    updateHandler = null,
    completeHandler = null,
    name = '',
    debug = false
  ) {
    super();
    if (startTime < 0) {
      throw new Error('Tween startTime must be greater than or equal to 0');
    }
    if (duration <= 0) {
      throw new Error('Tween duration must be greater than 0');
    }
    this.tick = this.tick.bind(this);
    this._startTime = startTime;
    this._duration = duration;
    this.name = name;
    this.debug = debug;
    this.properties = properties;
    this.updateHandler = updateHandler;
    this.completeHandler = completeHandler;
    this._tweenTime = NaN;
    this._time = NaN;
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
    this._duration = roundDecimalToPlace(value, 3);
    this.dispatchEvent(new Event(Tween.CHANGE));
  }

  start(time = 0, updateHandler = null) {
    this.clock = getClock();
    this.stop();
    if (updateHandler) {
      this.updateHandler = updateHandler;
    }
    const promise = new Promise((resolve, reject) => {
      const completeCallback = (event) => {
        this.removeEventListener(Tween.COMPLETE, completeCallback);
        resolve(this);
      };
      this.addEventListener(Tween.COMPLETE, completeCallback);
    });
    this._tweenTime = NaN;
    this.time = time;
    this.previousTime = this.clock.time;
    this.clock.addEventListener(Clock.TICK, this.tick);
    return promise;
  }

  tick(event) {
    const currentTime = this.clock.time;
    this.time += (currentTime - this.previousTime) / 1000;
    this.previousTime = currentTime;
  }

  pause() {
    this.clock.removeEventListener(Clock.TICK, this.tick);
  }

  resume() {
    this.previousTime = this.clock.time;
    this.clock.addEventListener(Clock.TICK, this.tick);
  }

  stop() {
    if(this.clock) this.clock.removeEventListener(Clock.TICK, this.tick);
  }

  get time() {
    return this._time;
  }

  set time(value) {
    // value = Math.min(this.startTime + this.duration, value);
    // value = Math.max(0, value);
    this._time = value;
    let tweenTime = value - this.startTime;
    tweenTime = Math.max(tweenTime, 0);
    tweenTime = Math.min(tweenTime, this.duration);
    if (tweenTime !== this._tweenTime || this.forceUpdate) {
      this._tweenTime = tweenTime;
      this.properties.forEach((property) => {
        property.calculate(tweenTime / this.duration, this.debug);
      });
      const updateEvent = new Event(Tween.UPDATE);
      if (this.updateHandler) {
        this.updateHandler(updateEvent);
      }
      this.dispatchEvent(updateEvent);
    }
    if (tweenTime >= this.duration) {
      const completeEvent = new Event(Tween.COMPLETE);
      if (this.completeHandler) {
        this.completeHandler(completeEvent);
      }
      this.stop();
      this.dispatchEvent(completeEvent);
    }
  }

  set timeFraction(value) {
    this.time = value * this.duration;
  }

  get timeFraction() {
    return this.time / this.duration;
  }

  static get COMPLETE() {
    return 'complete';
  }

  static get UPDATE() {
    return 'update';
  }

  static get CHANGE() {
    return 'change';
  }
}
