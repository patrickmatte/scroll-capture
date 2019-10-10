import BaseEvent from "../events";
import EventDispatcher from "../EventDispatcher";
import Clock, {clock} from "./Clock";

export default class Tween extends EventDispatcher {

	constructor(startTime, duration, tweenProps, updateHandler, completeHandler) {
		super();
		this.tick = this.tick.bind(this);
		this.startTime = startTime;
		this.duration = duration;
		this.tweenProps = tweenProps;
		this.updateHandler = updateHandler;
		this.completeHandler = completeHandler;
		this._startTime = startTime;
		this._duration = duration;
		this._tweenTime = 0;
		this.forceUpdate = false;
	}

	get startTime() {
		return this._startTime;
	}

	set startTime(value) {
		this._startTime = value;
		this.dispatchEvent(new BaseEvent(Tween.CHANGE))
	}

	get duration() {
		return this._duration;
	}

	set duration(value) {
		this._duration = value;
		this.dispatchEvent(new BaseEvent(Tween.CHANGE))
	}

	static get COMPLETE() {
		return "complete";
	}

	static get UPDATE() {
		return "update";
	}

	static get CHANGE() {
		return "update";
	}

	start() {
		let tween = this;
		let promise;
		if (Promise) {
			promise = new Promise(function(resolve, reject) {
				let tweenComplete = function(event) {
					tween.removeEventListener(Tween.COMPLETE, tweenComplete);
					resolve(tween);
				};
				tween.addEventListener(Tween.COMPLETE, tweenComplete);
			});
		}
		this.clockStartTime = NaN;
		clock.addEventListener(Clock.TICK, this.tick);
		return promise;
	}

	tick(event) {
		if (isNaN(this.clockStartTime)) {
			this.clockStartTime = clock.time;
		}
		let clockTime = (clock.time - this.clockStartTime) / 1000;
		if (clockTime >= this.startTime + this.duration) {
			clockTime = this.startTime + this.duration;
			this.time = clockTime;
			this.stop();
			if (this.completeHandler) {
				this.completeHandler();
			}
			this.dispatchEvent({type:Tween.COMPLETE, target:this});
		} else {
			this.time = clockTime;
		}
	}

	stop() {
		clock.removeEventListener(Clock.TICK, this.tick);
		this.dispatchEvent({type:Tween.COMPLETE, target:this});
	}

	get time() {
		return this._time;
	}

	set time(value) {
		value = Math.min(this.startTime + this.duration, value);
		value = Math.max(0, value);
		this._time = value;
		let tweenTime = value - this.startTime;
		tweenTime = Math.round(tweenTime * 1000) / 1000;
		tweenTime = Math.max(tweenTime, 0);
		tweenTime = Math.min(tweenTime, this.duration);
		if (tweenTime != this._tweenTime || this.forceUpdate) {
			this._tweenTime = tweenTime;
			for (let i = 0; i < this.tweenProps.length; i++) {
				let tweenProp = this.tweenProps[i];
				tweenProp.calculate(tweenTime, this.duration);
			}
			let changeEvent = {type:Tween.UPDATE, target:this, currentTarget:this};
			if (this.updateHandler) {
				this.updateHandler(changeEvent);
			}
			this.dispatchEvent(changeEvent);
		}
	}

}
