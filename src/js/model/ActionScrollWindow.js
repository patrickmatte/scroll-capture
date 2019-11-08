import Tween from "../tsunami/animation/Tween";
import NumberData from "../tsunami/data/NumberData";
import TweenProperty from "../tsunami/animation/TweenProperty";
import ArrayData from "../tsunami/data/ArrayData";
import Data from "../tsunami/data/Data";
import Easing from "../tsunami/animation/Easing";
import ActionTween from "./ActionTween";
import StringData from "../tsunami/data/StringData";

export default class ActionScrollWindow extends ActionTween {

	constructor(x = 0, y = 0, duration = 1, delay = 0) {
		super(0, 0, 0, 0, duration, delay);
		this.type = "ActionScrollWindow";
		this.name = "Window Scroll";
		this.unitX = new NumberData(x);
		this.unitY = new NumberData(y);
		this.units = new ArrayData("px", "%");
		this.units.selectedItem.value = this.units.value[0];
	}

	clone() {
		let action = new ActionScrollWindow();
		action.copy(this);
		return action;
	}

	copy(action) {
		super.copy(action);
		this.unitX.value = action.unitX.value;
		this.unitY.value = action.unitY.value;
		this.units.selectedItem.value = action.units.selectedItem.value;
	}

	trigger() {
		this.startX.value = window.scrollX;
		this.startY.value = window.scrollY;
		if(this.units.selectedItem.value == "px") {
			this.endX.copy(this.unitX);
			this.endY.copy(this.unitY);
		}
		if(this.units.selectedItem.value == "%") {
			let maxScroll = document.body.offsetHeight - window.innerHeight;
			this.endX.value = Math.round(this.unitX.value / 100 * maxScroll);
			this.endY.value = Math.round(this.unitY.value / 100 * maxScroll);
		}
		return super.trigger();
	}

	tweenUpdateHandler() {
		window.scroll(this.pos.x, this.pos.y);
	}

	serialize() {
		let data = super.serialize();
		data.unitX = this.unitX.value;
		data.unitY = this.unitY.value;
		data.units = this.units.selectedItem.value;
		return data;
	}

	deserialize(data) {
		super.deserialize(data);
		this.unitX.value = data.unitX;
		this.unitY.value = data.unitY;
		this.units.selectedItem.value = data.units;
	}

}