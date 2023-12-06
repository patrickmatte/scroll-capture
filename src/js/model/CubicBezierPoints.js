import Vector2Data from '../../lib/tsunami/data/Vector2Data';
import CubicBezierEasing from '../../lib/tsunami/animation/CubicBezierEasing';
import { round2 } from '../../lib/tsunami/utils/number';
import Easing from '../../lib/tsunami/animation/Easing';
import DataModel from '../../lib/tsunami/data/DataModel';

export default class CubicBezierPoints extends DataModel {
  constructor() {
    super();

    this._value = this;

    this.p0 = new Vector2Data(0, 0);
    this.p1 = new Vector2Data(0, 0);
    this.p2 = new Vector2Data(1, 1);
    this.p3 = new Vector2Data(1, 1);
    this.p0.addEventListener('value', this.changeHandler);
    this.p1.addEventListener('value', this.changeHandler);
    this.p2.addEventListener('value', this.changeHandler);
    this.p3.addEventListener('value', this.changeHandler);
    for (let i = 0; i < 4; i++) {
      let vec = this['p' + i];
      vec.x.modifiers = [round2];
      vec.y.modifiers = [round2];
    }

    this.controlPoints = [this.p1, this.p2];
    this.controlPointsLines = [
      [this.p0, this.p1],
      [this.p3, this.p2],
    ];

    this.easing = new CubicBezierEasing();
    this.debugEasing = Easing.quad.easeInOut;

    this.changeHandler();
  }

  copy(obj) {
    if (!obj) return;
    this.p0.copy(obj.p0);
    this.p1.copy(obj.p1);
    this.p2.copy(obj.p2);
    this.p3.copy(obj.p3);
  }

  changeHandler() {
    this.easing.p1.x = this.p1.x.value;
    this.easing.p1.y = this.p1.y.value;
    this.easing.p2.x = this.p2.x.value;
    this.easing.p2.y = this.p2.y.value;
    this.easing.calculateLength();
    super.changeHandler();
  }
}
