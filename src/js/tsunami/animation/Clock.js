import EventDispatcher from "../../tsunami/EventDispatcher";
import BaseEvent from "../events";

export default class Clock extends EventDispatcher {

	constructor() {
		super();
		this.index = 0;
		this.seconds = 0;
		this.allFrames = 0;
		this.animationFrame = this.animationFrame.bind(this);
	}

	static get TICK() {
		return "tick";
	}

	static get FPS() {
		return "fps";
	}

	start() {
		if(this.isRunning) return;
		this.isRunning = true;
		this.animationFrame(0);
		this.fpsTimeout = setTimeout(this.dispatchFrameSeconds.bind(this), 1000);
	}

	pause() {
		this.isRunning = false;
		clearTimeout(this.fpsTimeout);
	}

	animationFrame(time) {
		this.time = time;
		this.index++;
		this.dispatchEvent(new BaseEvent(Clock.TICK, this.time));
		if (this.isRunning) {
			window.requestAnimationFrame(this.animationFrame);
		}
	}

	dispatchFrameSeconds() {
		this.allFrames += this.index;
		this.seconds++;
		this.dispatchEvent({type:Clock.FPS, frames:this.index, averageFrames:Math.round(this.allFrames / this.seconds * 10) / 10});
		this.index = 0;
		setTimeout(this.dispatchFrameSeconds.bind(this), 1000);
	}

}

export let clock = new Clock();
