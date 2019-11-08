import Action from "./Action";
import NumberData from "../tsunami/data/NumberData";
import ArrayData from "../tsunami/data/ArrayData";
import Easing from "../tsunami/animation/Easing";
import Data from "../tsunami/data/Data";
import Tween from "../tsunami/animation/Tween";
import TweenProperty from "../tsunami/animation/TweenProperty";
import Point from "../tsunami/geom/Point";

export default class ActionTween extends Action {

	constructor(startX, startY, x = 0, y = 0, duration = 1, delay = 0) {
		super("ActionTween", "ActionTween");
		this.startX = new NumberData(startX);
		this.startY = new NumberData(startY);
		this.endX = new NumberData(x);
		this.endY = new NumberData(y);
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
		this.tweenUpdateHandler = this.tweenUpdateHandler.bind(this);
		this.tweenCompleteHandler = this.tweenCompleteHandler.bind(this);
		this.pos = new Point();
	}

	copy(action) {
		this.startX.value = action.startX.value;
		this.startY.value = action.startY.value;
		this.endX.value = action.endX.value;
		this.endY.value = action.endY.value;
		this.duration.value = action.duration.value;
		this.delay.value = action.delay.value;
		this.easingClasses.selectedIndex.value = action.easingClasses.selectedIndex.value;
		this.easingMethods.selectedIndex.value = action.easingMethods.selectedIndex.value;
	}

	trigger() {
		let easingClass = Easing[this.easingClasses.selectedItem.value];
		let easingMethod = easingClass[this.easingMethods.selectedItem.value];
		this.tween = new Tween(0, this.duration.value, [
			new TweenProperty(this.pos, "x", this.startX.value, this.endX.value, easingMethod),
			new TweenProperty(this.pos, "y", this.startY.value, this.endY.value, easingMethod),
		]);
		this.tween.addEventListener(Tween.UPDATE, this.tweenUpdateHandler);
		this.tween.addEventListener(Tween.COMPLETE, this.tweenCompleteHandler);
		return this.tween.start();
	}

	tweenUpdateHandler(e) {

	}

	tweenCompleteHandler(e) {

	}

	serialize() {
		let data = super.serialize();
		data.startX = this.startX.value;
		data.startY = this.startY.value;
		data.endX = this.endX.value;
		data.endY = this.endY.value;
		data.duration = this.duration.value;
		data.delay = this.delay.value;
		data.easingClass = this.easingClasses.selectedItem.value;
		data.easingMethod = this.easingMethods.selectedItem.value;
		return data;
	}

	deserialize(data) {
		super.deserialize(data);
		this.startX.value = data.startX;
		this.startY.value = data.startY;
		this.endX.value = data.endX;
		this.endY.value = data.endY;
		this.duration.value = data.duration;
		this.delay.value = data.delay;
		this.easingClasses.selectedItem.value = data.easingClass;
		this.easingMethods.selectedItem.value = data.easingMethod;
	}

}