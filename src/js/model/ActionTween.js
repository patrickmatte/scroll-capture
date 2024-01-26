import Action from './Action';
import NumberData from '../../lib/tsunami/data/NumberData';
import StringData from '../../lib/tsunami/data/StringData';
import ArrayData from '../../lib/tsunami/data/ArrayData';
import DataModel from '../../lib/tsunami/data/DataModel';
import Data from '../../lib/tsunami/data/Data';
import Tween from '../../lib/tsunami/animation/Tween';
import TweenProperty from '../../lib/tsunami/animation/TweenProperty';
import Point from '../../lib/tsunami/geom/Point';
import CubicBezierEasing from '../../lib/tsunami/animation/CubicBezierEasing';
import { getProperty } from '../../lib/tsunami/tsunami';
import CubicBezierPoints from './CubicBezierPoints';
import Easing from '../../lib/tsunami/animation/Easing';

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
    // this.easingPresets.selectedItem.debug = true;
    this.tweenType = new DataModel({ id: '', option: '', name: '', defaultValue: 0, icon: '', unit: '', step: 0, property: 0 });
    this.tweenType.addEventListener('id', (event) => {
      const obj = this.tweenTypes.find((item) => {
        return item.id == event.data;
      });
      this.tweenType.deserialize(obj);
    });
    const defaultType = this.defaultTweenType;
    this.tweenType.id = defaultType.id;

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

  get tweenTypes() {
    return ActionTween.tweenTypes;
  }

  get defaultTweenType() {
    return this.tweenTypes.value[0];
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
    // this.duration.value = action.duration.value;
    this.tweenType.id = action.tweenType.id;
    this.tweenType.property = action.tweenType.property;
    this.cubicBezierPoints.copy(action.cubicBezierPoints);
  }

  trigger() {
    switch (this.tweenType.id) {
      case 'duration':
        this.duration.value = this.tweenType.property;
        break;
      case 'speed':
        const speed = this.tweenType.property;
        const distance = Point.distance(new Point(this.startX.value, this.startY.value), new Point(this.endX.value, this.endY.value));
        let duration = distance / speed;
        let extraTime = 0;
        if (distance < speed) extraTime = (1 - distance / speed) * 0.66;
        this.duration.value = duration + extraTime;
        break;
    }
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
    data.tweenType = { id: this.tweenType.id, property: this.tweenType.property };
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
    if (data.hasOwnProperty('tweenType')) this.tweenType.deserialize(data.tweenType);
    if (data.hasOwnProperty('duration')) this.tweenType.deserialize({ property: data.duration, id: 'duration' });
    this.cubicBezierPoints.p1.deserialize(data.p1);
    this.cubicBezierPoints.p2.deserialize(data.p2);
    this.easingPresets.selectedItem.value = data.easing || 'quad.easeInOut';
  }
}

ActionTween.tweenTypes = new ArrayData({ id: 'duration', option: 'Use Duration', name: 'Duration', property: 1, icon: 'fa-clock', unit: 's', step: 0.25 });
