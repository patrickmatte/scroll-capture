import Tween from "./Tween";
import Clock, { clock } from "./Clock";

export default class Timeline extends EventTarget {

  constructor(updateHandler = null, completeHandler = null, debug = false) {
    super();
    this.debug = debug;

    this.updateHandler = updateHandler;
    this.completeHandler = completeHandler;
    this.tweenChangeHandler = this.tweenChangeHandler.bind(this);

    this._time = NaN;
    this._duration = 0;

    this.tweens = [];
    this.tweensByStartTime = [];
    this.tweensByEndTime = [];

    this.resetTweensOnScrub = true;

    this.tick = this.tick.bind(this);

    this.setTimeOnAddTween = true;
  }

  static get COMPLETE() {
    return "complete";
  }

  static get UPDATE() {
    return "update";
  }

  start() {
    let timeline = this;
    let promise;

    if (Promise) {
      promise = new Promise(function (resolve, reject) {
        let timelineComplete = function (event) {
          timeline.removeEventListener(Timeline.COMPLETE, timelineComplete);
          resolve(timeline);
        };
        timeline.addEventListener(Timeline.COMPLETE, timelineComplete);
      });
    }
    this.time = 0;
    this.clockStartTime = NaN;
    clock.addEventListener(Clock.TICK, this.tick);
    return promise;
  }

  stop() {
    clock.removeEventListener(Clock.TICK, this.tick);
  }

  tick(event) {
    if (isNaN(this.clockStartTime)) {
      this.clockStartTime = clock.time;
    }
    let currentTime = (clock.time - this.clockStartTime) / 1000;
    this.time = currentTime;

    if (this.time >= this.duration) {
      this.stop();
      if (this.completeHandler) {
        this.completeHandler();
      }
      let event = new Event(Timeline.COMPLETE);
      this.dispatchEvent(event);
    }
  }

  recalculateDuration() {
    let duration = 0;
    for (let i = 0; i < this.tweens.length; i++) {
      let tween = this.tweens[i];
      let tweenDuration = tween.startTime + tween.duration;
      duration = Math.max(duration, tweenDuration);
    }
    this._duration = duration;

    this.tweensByStartTime = this.tweens.slice();
    this.tweensByStartTime.sort((a, b) => {
      return b.startTime - a.startTime;
    });
    this.tweensByEndTime = this.tweens.slice();
    this.tweensByEndTime.sort((a, b) => {
      return a.endTime - b.endTime;
    });
  }


  get duration() {
    return this._duration;
  }

  get time() {
    return this._time;
  }

  set time(value) {
    let oldTime = this._time;
    if (oldTime == value) {
      return;
    }

    this._time = value;

    let currentTime = Math.max(value, 0);
    currentTime = Math.min(value, this.duration);

    for (let i = 0; i < this.tweensByStartTime.length; i++) {
      let tween = this.tweensByStartTime[i];
      if (currentTime < tween.startTime && this.resetTweensOnScrub) {
        tween.time = currentTime;
      }
    }

    for (let i = 0; i < this.tweensByEndTime.length; i++) {
      let tween = this.tweensByEndTime[i];
      if (currentTime > tween.endTime && this.resetTweensOnScrub) {
        tween.time = currentTime;
      }
    }

    for (let i = 0; i < this.tweens.length; i++) {
      let tween = this.tweens[i];

      let startTime = tween.startTime;
      let endTime = tween.endTime;

      if (currentTime >= startTime && currentTime <= endTime) {
        tween.time = currentTime;
      }
    }

    let changeEvent = new Event(Timeline.UPDATE);
    if (this.updateHandler) {
      this.updateHandler(changeEvent);
    }
    this.dispatchEvent(changeEvent);
  }

  get endTime() {
    return this.startTime + this.duration;
  }

  add(tween) {
    tween.addEventListener(Tween.CHANGE, this.tweenChangeHandler);
    this.tweens.push(tween);
    let startTime = tween.startTime;
    let endTime = tween.startTime + tween.duration;
    if (this.time >= startTime && this.time <= endTime && this.setTimeOnAddTween) {
      tween.time = this.time;
    }
    this.recalculateDuration();
  }

  removeTween(tween) {
    let array = [];
    for (let i = 0; i < this.tweens.length; i++) {
      let oldTween = this.tweens[i];
      if (oldTween == tween) {
        tween.removeEventListener(Tween.CHANGE, this.tweenChangeHandler);
      } else {
        array.push(oldTween);
      }
    }
    this.tweens = array;
    this.recalculateDuration();
  }

  tweenChangeHandler(event) {
    this.recalculateDuration();
  }

}
