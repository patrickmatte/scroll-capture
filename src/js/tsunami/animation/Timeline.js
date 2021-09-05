import Tween from './Tween';
import Clock, { getClock } from './Clock';

export default class Timeline extends EventTarget {
  constructor(tweens = null, startTime = 0, updateHandler = null, completeHandler = null, name = '', debug = false) {
    super();
    if (startTime < 0) {
      throw new Error('Timeline startTime must be greater than or equal to 0');
    }
    this.tick = this.tick.bind(this);
    this._startTime = startTime;
    this._duration = 0;
    this.name = name;
    this.debug = debug;
    this.updateHandler = updateHandler;
    this.completeHandler = completeHandler;
    this._tweenTime = NaN;
    this._time = NaN;
    this.forceUpdate = false;

    this.tweenChangeHandler = this.tweenChangeHandler.bind(this);
    this.resetTweensOnScrub = true;
    this.setTimeOnAddTween = true;
    this.tweens = [];
    this.tweensByStartTime = [];
    this.tweensByEndTime = [];
    tweens = tweens !== null ? tweens : [];
    this.add(tweens);
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
    this._time = value;
    let tweenTime = value - this.startTime;
    tweenTime = Math.max(tweenTime, 0);
    tweenTime = Math.min(tweenTime, this.duration);
    if (tweenTime !== this._tweenTime || this.forceUpdate) {
      this._tweenTime = tweenTime;

      this.tweensByStartTime.forEach((tween) => {
        if (tweenTime < tween.startTime && this.resetTweensOnScrub) {
          tween.time = tweenTime;
        }
      });

      this.tweensByEndTime.forEach((tween) => {
        if (tweenTime > tween.endTime && this.resetTweensOnScrub) {
          tween.time = tweenTime;
        }
      });

      this.tweens.forEach((tween) => {
        const startTime = tween.startTime;
        const endTime = tween.endTime;
        if (tweenTime >= startTime && tweenTime <= endTime) {
          tween.time = tweenTime;
        }
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

  add(tween) {
    const tweens = tween instanceof Array ? tween : [tween];
    tweens.forEach((tween, i) => {
      tween.addEventListener(Tween.CHANGE, this.tweenChangeHandler);
      this.tweens.push(tween);
      const startTime = tween.startTime;
      const endTime = tween.startTime + tween.duration;
      if (this.time >= startTime && this.time <= endTime && this.setTimeOnAddTween) {
        tween.time = this.time;
      }
      this.recalculateDuration();
    });
  }

  removeTween(tween) {
    const array = [];
    this.tweens.forEach((oldTween) => {
      if (oldTween === tween) {
        tween.removeEventListener(Tween.CHANGE, this.tweenChangeHandler);
      } else {
        array.push(oldTween);
      }
    });
    this.tweens = array;
    this.recalculateDuration();
  }

  tweenChangeHandler(event) {
    this.recalculateDuration();
  }

  recalculateDuration() {
    let duration = 0;
    this.tweens.forEach((tween) => {
      const tweenDuration = tween.startTime + tween.duration;
      duration = Math.max(duration, tweenDuration);
    });
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
}
