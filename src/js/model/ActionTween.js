import Action from './Action';
import NumberData from '../tsunami/data/NumberData';
import ArrayData from '../tsunami/data/ArrayData';
import Data from '../tsunami/data/Data';
import Tween from '../tsunami/animation/Tween';
import TweenProperty from '../tsunami/animation/TweenProperty';
import Point from '../tsunami/geom/Point';
import CubicBezierEasing from '../tsunami/animation/CubicBezierEasing';
import { getProperty } from '../tsunami/tsunami';
import CubicBezierPoints from './CubicBezierPoints';
import Easing from '../tsunami/animation/Easing';

export default class ActionTween extends Action {
  constructor(startX, startY, x = 0, y = 0, duration = 1, delay = 0) {
    super('ActionTween', 'ActionTween');
    this.startX = new NumberData(startX);
    this.startY = new NumberData(startY);
    this.endX = new NumberData(x);
    this.endY = new NumberData(y);
    this.duration = new NumberData(duration);
    this.cubicBezierPoints = new CubicBezierPoints();
    this.easingPresets = new ArrayData();
    this.easingPresets.selectedItem.addEventListener(Data.CHANGE, this.easingPresetChange.bind(this));
    this.easingPresets.selectedItem.debug = true;
    // this.easingPresets.selectedItem.forceChangeEvent = true;
    let presets = ['Select a preset'];
    for (let i in CubicBezierEasing) {
      let cubicEasingClass = CubicBezierEasing[i];
      for (let j in cubicEasingClass) {
        let easingPreset = i + '.' + j;
        presets.push(easingPreset);
      }
    }
    this.easingPresets.value = presets;
    this.easingPresets.selectedItem.value = 'quad.easeInOut';
    this.tweenUpdateHandler = this.tweenUpdateHandler.bind(this);
    this.tweenCompleteHandler = this.tweenCompleteHandler.bind(this);

    this.pos = new Point();
  }

  resetEasing() {
    this.easingPresets.selectedItem.value = this.easingPresets.value[0];
  }

  easingPresetChange() {
    let value = this.easingPresets.selectedItem.value;

    let debugEasingMethod = getProperty(value, Easing);
    if (debugEasingMethod) {
      this.cubicBezierPoints.debugEasing = debugEasingMethod;
    }

    let cb = getProperty(value, CubicBezierEasing);
    if (cb) {
      this.cubicBezierPoints.p1.x.value = cb.p1.x;
      this.cubicBezierPoints.p1.y.value = cb.p1.y;
      this.cubicBezierPoints.p2.x.value = cb.p2.x;
      this.cubicBezierPoints.p2.y.value = cb.p2.y;
    }
  }

  copy(action) {
    super.copy(action);
    this.startX.value = action.startX.value;
    this.startY.value = action.startY.value;
    this.endX.value = action.endX.value;
    this.endY.value = action.endY.value;
    this.duration.value = action.duration.value;
    this.cubicBezierPoints.copy(action.cubicBezierPoints);
  }

  trigger() {
    this.tween = new Tween(0, this.duration.value, [
      new TweenProperty(this.pos, 'x', this.startX.value, this.endX.value, this.cubicBezierPoints.easing.ease),
      new TweenProperty(this.pos, 'y', this.startY.value, this.endY.value, this.cubicBezierPoints.easing.ease),
    ]);
    this.tween.addEventListener(Tween.UPDATE, this.tweenUpdateHandler);
    this.tween.addEventListener(Tween.COMPLETE, this.tweenCompleteHandler);
    return this.tween.start();
  }

  tweenUpdateHandler(e) {}

  tweenCompleteHandler(e) {}

  serialize() {
    let data = super.serialize();
    data.startX = this.startX.serialize();
    data.startY = this.startY.value;
    data.endX = this.endX.value;
    data.endY = this.endY.value;
    data.duration = this.duration.value;
    data.p1 = this.cubicBezierPoints.p1.serialize();
    data.p2 = this.cubicBezierPoints.p2.serialize();
    data.easing = this.easingPresets.selectedItem.value;
    return data;
  }

  deserialize(data) {
    if (!data) return;
    super.deserialize(data);
    this.startX.deserialize(data.startX);
    this.startY.deserialize(data.startY);
    this.endX.deserialize(data.endX);
    this.endY.deserialize(data.endY);
    this.duration.deserialize(data.duration);
    this.cubicBezierPoints.p1.deserialize(data.p1);
    this.cubicBezierPoints.p2.deserialize(data.p2);
    this.easingPresets.selectedItem.value = data.easing || 'quad.easeInOut';
  }
}
