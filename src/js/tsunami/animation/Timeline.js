import EventDispatcher from "../../tsunami/EventDispatcher";
import TimelineAction from "./TimelineAction";
import Tween from "./Tween";

export default class Timeline extends EventDispatcher {

	constructor(updateHandler, completeHandler) {
		super();

		this.updateHandler = updateHandler;
		this.completeHandler = completeHandler;
		this.tweenChangeHandler = this.tweenChangeHandler.bind(this);

		this._time = 0;
		this._duration = 0;

		this.actions = [];
		this.tweens = [];

		this.minTimeReached = 0;
		this.maxTimeReached = 0;

		this.resetTweensOnScrub = false;

		this.tickHandler = this.tick.bind(this);

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
		Tween.clock.addEventListener("tick", this.tickHandler);
		return promise;
	}

	stop() {
		Tween.clock.removeEventListener("tick", this.tickHandler);
	}

	tick(event) {
		if (isNaN(this.clockStartTime)) {
			this.clockStartTime = Tween.clock.time;

		}
		let currentTime = (Tween.clock.time - this.clockStartTime) / 1000;
		this.time = currentTime;

		if (this.time >= this.duration) {
			this.stop();
			if (this.completeHandler) {
				this.completeHandler();
			}
			this.dispatchEvent({type:Timeline.COMPLETE, target:this});
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

		let realTime = Math.max(value, 0);
		realTime = Math.min(value, this.duration);

		this.minTimeReached = Math.min(this.minTimeReached, value);
		this.maxTimeReached = Math.max(this.maxTimeReached, value);

		let min;
		let max;
		let direction;
		if (this.time > oldTime) {
			direction = TimelineAction.FORWARDS;
			min = oldTime;
			max = realTime;
		}
		if (this.time < oldTime) {
			direction = TimelineAction.BACKWARDS;
			min = realTime;
			max = oldTime;
		}

		if (direction) {
			let selectedActions = [];

			if (direction == TimelineAction.FORWARDS) {
				for (let i = 0; i < this.actions.length; i++) {
					let action = this.actions[i];
					if (action.direction == direction || action.direction == "both") {
						if (action.time > min && action.time <= max) {
							selectedActions.push(action);
						}
					}
				}
				selectedActions.sort(function(a, b){
					return a.time- b.time;
				});
			}
			if (direction == TimelineAction.BACKWARDS) {
				for (let i = 0; i < this.actions.length; i++) {
					let action = this.actions[i];
					if (action.direction == direction || action.direction == "both") {
						if (action.time >= min && action.time < max) {
							selectedActions.push(action);
						}
					}
				}
				selectedActions.sort(function(a, b){
					return b.time-a.time;
				});
			}
			for (let j = 0; j < selectedActions.length; j++) {
				let selectedAction = selectedActions[j];
				selectedAction.count++;
				if (selectedAction.count >= selectedAction.repeat) {
					this.removeAction(selectedAction);
				}
				selectedAction.execute();
			}
		}

		for (let i = 0; i < this.tweens.length; i++) {
			let tween = this.tweens[i];
			let startTime = tween.startTime;
			let endTime = tween.startTime + tween.duration;
			if (realTime >= startTime && realTime <= endTime) {
				tween.time = realTime;
			} else if (direction == TimelineAction.FORWARDS && realTime > endTime && tween.time != endTime && endTime >= this.minTimeReached && this.resetTweensOnScrub) {
				tween.time = endTime;
			} else if (direction == TimelineAction.BACKWARDS && realTime < startTime && tween.time != startTime && this.maxTimeReached > startTime && this.resetTweensOnScrub) {
				tween.time = startTime;
			}
		}

		let changeEvent = {type:Timeline.UPDATE, target:this};
		if (this.updateHandler) {
			this.updateHandler(changeEvent);
		}
		this.dispatchEvent(changeEvent);
	}

	addAction(action) {
		this.actions.push(action);
		if (action.time == this.time) {
			action.method();
		}
	}

	removeAction(action) {
		let array = [];
		for (let i = 0; i < this.actions.length; i++) {
			let oldAction = this.actions[i];
			if (oldAction != action) {
				array.push(oldAction);
			}
		}
		this.actions = array;
	}

	addTween(tween) {
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
