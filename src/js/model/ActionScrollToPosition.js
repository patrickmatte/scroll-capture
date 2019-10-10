import Action from "./Action";
import Tween from "../tsunami/animation/Tween";
import NumberData from "../tsunami/data/NumberData";
import TweenProperty from "../tsunami/animation/TweenProperty";
import ArrayData from "../tsunami/data/ArrayData";
import Data from "../tsunami/data/Data";
import Easing from "../tsunami/animation/Easing";

export default class ActionScrollToPosition extends Action {

	constructor(x = 0, y = 0, duration = 1, delay = 0) {
		super("ActionScrollToPosition", "Scroll to point");
		this.x = new NumberData(x);
		this.y = new NumberData(y);
		this.duration = new NumberData(duration);
		this.delay = new NumberData(delay);
		this.easingMethods = new ArrayData();
		this.easingClasses = new ArrayData();
		for(let i in Easing) {
			this.easingClasses.push(i);
		}
		this.easingClasses.selectedItem.addEventListener(Data.CHANGE, ()=> {
			let easingClass = Easing[this.easingClasses.selectedItem.value];
			let methods = [];
			for(let j in easingClass) {
				methods.push(j);
			}
			this.easingMethods.value = methods;
			let method = this.easingMethods.find((item)=> {
				return item == "easeInOut";
			});
			this.easingMethods.selectedItem.value = method || this.easingMethods.value[0];
		});
		this.easingClasses.selectedItem.value = this.easingClasses.value[1];
	}

	clone() {
		let action = new ActionScrollToPosition();
		action.copy(this);
		return action;
	}

	copy(action) {
		this.x.value = action.x.value;
		this.y.value = action.y.value;
		this.duration.value = action.duration.value;
		this.delay.value = action.delay.value;
		this.easingClasses.selectedIndex.value = action.easingClasses.selectedIndex.value;
		this.easingMethods.selectedIndex.value = action.easingMethods.selectedIndex.value;
	}

	trigger() {
		let easingClass = Easing[this.easingClasses.selectedItem.value];
		let easingMethod = easingClass[this.easingMethods.selectedItem.value];
		let scrollX = window.scrollX;
		let scrollY = window.scrollY;
		let pos = {x:scrollX, y:scrollY};
		this.tween = new Tween(0, this.duration.value, [
			new TweenProperty(pos, "x", pos.x, this.x.value, easingMethod),
			new TweenProperty(pos, "y", pos.y, this.y.value, easingMethod),
		]);
		this.tween.addEventListener(Tween.CHANGE, (e) => {
			window.scroll(pos.x, pos.y);

		});
		return this.tween.start();
	}

	serialize() {
		let data = super.serialize();
		data.x = this.x.value;
		data.y = this.y.value;
		data.duration = this.duration.value;
		data.delay = this.delay.value;
		data.easingClass = this.easingClasses.selectedItem.value;
		data.easingMethod = this.easingMethods.selectedItem.value;
		return data;
	}

	deserialize(data) {
		super.deserialize(data);
		this.x.value = data.x;
		this.y.value = data.y;
		this.duration.value = data.duration;
		this.delay.value = data.delay;
		this.easingClasses.selectedItem.value = data.easingClass;
		this.easingMethods.selectedItem.value = data.easingMethod;
	}

}