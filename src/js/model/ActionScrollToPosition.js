import Tween from "../tsunami/animation/Tween";
import NumberData from "../tsunami/data/NumberData";
import TweenProperty from "../tsunami/animation/TweenProperty";
import ArrayData from "../tsunami/data/ArrayData";
import Data from "../tsunami/data/Data";
import Easing from "../tsunami/animation/Easing";
import ActionTween from "./ActionTween";

export default class ActionScrollToPosition extends ActionTween {

	constructor(x = 0, y = 0, duration = 1, delay = 0) {
		super(0, 0, x, y, duration, delay);
		this.type = "ActionScrollToPosition";
		this.name = "Scroll to point";
	}

	clone() {
		let action = new ActionScrollToPosition();
		action.copy(this);
		return action;
	}


	trigger() {
		this.startX.value = window.scrollX;
		this.startY.value = window.scrollY;
		return super.trigger();
	}

	tweenChangeHandler() {
		window.scroll(this.pos.x, this.pos.y);
	}

}