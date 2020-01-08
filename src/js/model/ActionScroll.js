import Tween from "../tsunami/animation/Tween";
import NumberData from "../tsunami/data/NumberData";
import TweenProperty from "../tsunami/animation/TweenProperty";
import ArrayData from "../tsunami/data/ArrayData";
import Data from "../tsunami/data/Data";
import Easing from "../tsunami/animation/Easing";
import ActionTween from "./ActionTween";
import StringData from "../tsunami/data/StringData";

export default class ActionScroll extends ActionTween {

	constructor(target = "window", units = "%", x = 0, y = 0, duration = 1, delay = 0) {
		super(0, 0, 0, 0, duration, delay);
		this.type = "ActionScroll";
		this.name = "Scroll";
		this.target = new StringData(target);
		this.unitX = new NumberData(x);
		this.unitY = new NumberData(y);
		this.units = new ArrayData("%", "px");
		this.units.selectedItem.value = units;
	}

	clone() {
		let action = new ActionScroll();
		action.copy(this);
		return action;
	}

	copy(action) {
		super.copy(action);
		this.target.value = action.target.value;
		this.unitX.value = action.unitX.value;
		this.unitY.value = action.unitY.value;
		this.units.selectedItem.value = action.units.selectedItem.value;
	}

	trigger() {
		switch (this.target.value) {
			case "window":
				this.startX.value = window.scrollX;
				this.startY.value = window.scrollY;
				break;
			default:
				let element = document.querySelector(this.target.value);
				this.startX.value = element.scrollLeft;
				this.startY.value = element.scrollTop;
				break;
		}
		if(this.units.selectedItem.value == "px") {
			this.endX.copy(this.unitX);
			this.endY.copy(this.unitY);
		}
		if(this.units.selectedItem.value == "%") {
			let maxScroll = {x:0, y:0};
			switch (this.target.value) {
				case "window":
					maxScroll.x = document.body.offsetWidth - window.innerWidth;
					maxScroll.y = document.body.offsetHeight - window.innerHeight;
					break;
				default:
					let element = document.querySelector(this.target.value);
					maxScroll.x = element.scrollWidth - element.clientWidth;
					maxScroll.y = element.scrollHeight - element.clientHeight;
					break;
			}
			this.endX.value = Math.round(this.unitX.value / 100 * maxScroll.x);
			this.endY.value = Math.round(this.unitY.value / 100 * maxScroll.y);
		}
		return super.trigger();
	}

	tweenUpdateHandler() {
		switch (this.target.value) {
			case "window":
				window.scroll(this.pos.x, this.pos.y);
				break;
			default:
				let element = document.querySelector(this.target.value);
				element.scrollLeft = this.pos.x;
				element.scrollTop = this.pos.y;
				break;
		}
	}

	serialize() {
		let data = super.serialize();
		data.target = this.target.value;
		data.unitX = this.unitX.value;
		data.unitY = this.unitY.value;
		data.units = this.units.selectedItem.value;
		return data;
	}

	deserialize(data) {
		super.deserialize(data);
		this.target.value = data.target;
		this.unitX.value = data.unitX;
		this.unitY.value = data.unitY;
		this.units.selectedItem.value = data.units;
	}

}