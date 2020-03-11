import Action from "./Action";
import NumberData from "../tsunami/data/NumberData";
import ArrayData from "../tsunami/data/ArrayData";
import Data from "../tsunami/data/Data";
import Tween from "../tsunami/animation/Tween";
import TweenProperty from "../tsunami/animation/TweenProperty";
import Point from "../tsunami/geom/Point";
import CubicBezierEasing from "../tsunami/animation/CubicBezierEasing";
import {evalProperty} from "../tsunami/tsunami";
import CubicBezierPoints from "./CubicBezierPoints";
import Easing from "../tsunami/animation/Easing";
import ObjectData from "../tsunami/data/ObjectData";

export default class ActionTween extends Action {

	constructor(startX, startY, x = 0, y = 0, duration = 1, delay = 0) {
		super("ActionTween", "ActionTween");
		this.startX = new NumberData(startX);
		this.startY = new NumberData(startY);
		this.endX = new NumberData(x);
		this.endY = new NumberData(y);
		this.duration = new NumberData(duration);
		this.easing = new CubicBezierEasing();
		this.easingMethod = new ObjectData(this.easing.ease);
		this.cubicBezier = new CubicBezierPoints();
		this.debugEasing = new ObjectData(Easing.cubic.easeInOut);
		this.cubicBezier.addEventListener(Data.CHANGE, (event) => {
			this.easing.p1.x = this.cubicBezier.p1.x.value;
			this.easing.p1.y = this.cubicBezier.p1.y.value;
			this.easing.p2.x = this.cubicBezier.p2.x.value;
			this.easing.p2.y = this.cubicBezier.p2.y.value;
			this.easing.calculateLength();
		});
		this.easingPresets = new ArrayData("Easing Presets");
		this.easingPresets.selectedItem.addEventListener(Data.CHANGE, this.easingPresetChange.bind(this));

		for(let i in CubicBezierEasing) {
			let cubicEasingClass = CubicBezierEasing[i];
			for(let j in cubicEasingClass) {
				let easingPreset = i + "." + j;
				this.easingPresets.push(easingPreset);
			}
		}
		this.easingPresets.selectedItem.value = this.easingPresets.value[0];
		this.tweenUpdateHandler = this.tweenUpdateHandler.bind(this);
		this.tweenCompleteHandler = this.tweenCompleteHandler.bind(this);

		this.pos = new Point();
	}

	easingPresetChange() {
		let value = this.easingPresets.selectedItem.value;
		let debugEasingMethod = evalProperty(value, Easing);
		if(debugEasingMethod) {
			this.debugEasing.value = debugEasingMethod;
		}
		let cb = evalProperty(value, CubicBezierEasing);
		if(cb) {
			this.cubicBezier.p1.x.value = cb.p1.x;
			this.cubicBezier.p1.y.value = cb.p1.y;
			this.cubicBezier.p2.x.value = cb.p2.x;
			this.cubicBezier.p2.y.value = cb.p2.y;
		}
	}

	copy(action) {
		super.copy(action);
		this.startX.value = action.startX.value;
		this.startY.value = action.startY.value;
		this.endX.value = action.endX.value;
		this.endY.value = action.endY.value;
		this.duration.value = action.duration.value;
		this.cubicBezier.p1.copy(action.cubicBezier.p1);
		this.cubicBezier.p2.copy(action.cubicBezier.p2);
	}

	trigger() {
		this.tween = new Tween(0, this.duration.value, [
			new TweenProperty(this.pos, "x", this.startX.value, this.endX.value, this.easing.ease),
			new TweenProperty(this.pos, "y", this.startY.value, this.endY.value, this.easing.ease),
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
		data.p1 = this.cubicBezier.p1.serialize();
		data.p2 = this.cubicBezier.p2.serialize();
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
		this.cubicBezier.p1.deserialize(data.p1);
		this.cubicBezier.p2.deserialize(data.p2);
	}

}
