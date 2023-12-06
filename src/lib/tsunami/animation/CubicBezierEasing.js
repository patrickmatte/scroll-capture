import Point from '../geom/Point';
import CubicBezier from '../geom/CubicBezier';
import { capitalize } from '../utils/string';

export default class CubicBezierEasing extends CubicBezier {
  constructor(x1 = 0, y1 = 0, x2 = 1, y2 = 1, samples = 100) {
    super(new Point(0, 0), new Point(x1, y1), new Point(x2, y2), new Point(1, 1), samples);
    this.ease = this.ease.bind(this);
  }

  ease(t, b, c, d) {
    const point = this.getPointAtX(t / d);
    return c * point.y + b;
  }

  clone() {
    return new CubicBezierEasing(this.p1.x, this.p1.y, this.p2.x, this.p1.y, this.samples);
  }
}

CubicBezierEasing.linear = {
  ease: new CubicBezierEasing(0, 0, 1, 1),
};

CubicBezierEasing.sine = {
  easeInOut: new CubicBezierEasing(0.37, 0, 0.63, 1),
  easeIn: new CubicBezierEasing(0.12, 0, 0.39, 0),
  easeOut: new CubicBezierEasing(0.61, 1, 0.88, 1),
};

CubicBezierEasing.quad = {
  easeInOut: new CubicBezierEasing(0.45, 0, 0.55, 1),
  easeIn: new CubicBezierEasing(0.11, 0, 0.5, 0),
  easeOut: new CubicBezierEasing(0.5, 1, 0.89, 1),
};

CubicBezierEasing.cubic = {
  easeInOut: new CubicBezierEasing(0.65, 0, 0.35, 1),
  easeIn: new CubicBezierEasing(0.32, 0, 0.67, 0),
  easeOut: new CubicBezierEasing(0.33, 1, 0.68, 1),
};

CubicBezierEasing.quart = {
  easeInOut: new CubicBezierEasing(0.76, 0, 0.24, 1),
  easeIn: new CubicBezierEasing(0.5, 0, 0.75, 0),
  easeOut: new CubicBezierEasing(0.25, 1, 0.5, 1),
};

CubicBezierEasing.quint = {
  easeInOut: new CubicBezierEasing(0.83, 0, 0.17, 1),
  easeIn: new CubicBezierEasing(0.64, 0, 0.78, 0),
  easeOut: new CubicBezierEasing(0.22, 1, 0.36, 1),
};

CubicBezierEasing.expo = {
  easeInOut: new CubicBezierEasing(0.87, 0, 0.13, 1),
  easeIn: new CubicBezierEasing(0.7, 0, 0.84, 0),
  easeOut: new CubicBezierEasing(0.16, 1, 0.3, 1),
};

CubicBezierEasing.back = {
  easeInOut: new CubicBezierEasing(0.68, -0.6, 0.32, 1.6),
  easeIn: new CubicBezierEasing(0.36, 0, 0.66, -0.56),
  easeOut: new CubicBezierEasing(0.34, 1.56, 0.64, 1),
};

CubicBezierEasing.circ = {
  easeInOut: new CubicBezierEasing(0.85, 0, 0.15, 1),
  easeIn: new CubicBezierEasing(0.55, 0, 1, 0.45),
  easeOut: new CubicBezierEasing(0, 0.55, 0.45, 1),
};

// let cssVariables = "";
// for(let i in CubicBezierEasing) {
// 	let easingClass = CubicBezierEasing[i];
// 	for(let j in easingClass) {
// 		let cubicBezier = easingClass[j];
// 		let easeClassName = capitalize(i);
// 		let easeNameArray = j.split("ease");
// 		easeNameArray.shift();
// 		let easeName = capitalize(easeNameArray.join(""));
// 		let variable = `$ease${easeClassName}${easeName}: cubic-bezier(${cubicBezier.p1.x}, ${cubicBezier.p1.y}, ${cubicBezier.p2.x}, ${cubicBezier.p2.y});`;
// 		cssVariables = cssVariables + variable;
// 	}
// }
// console.log(cssVariables);
