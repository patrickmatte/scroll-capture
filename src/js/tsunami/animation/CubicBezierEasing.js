import Point from "../geom/Point";
import CubicBezier from "../geom/CubicBezier";
import {capitalize} from "../utils/string";

export default class CubicBezierEasing extends CubicBezier {

	constructor(p1 = null, p2 = null, samples = 100) {
		super(null, p1, p2, null, samples);
		this.ease = this.ease.bind(this);
	}

	ease(t, b, c, d) {
		let point = this.getPointAtX(t / d);
		return c * point.y + b;
	}

}

CubicBezierEasing.quadratic = {
	easeInOut:new CubicBezierEasing( new Point(0.45, 0), new Point(0.55, 1) ),
	easeIn:new CubicBezierEasing( new Point(0.41, 0), new Point(0.75, 0.5) ),
	easeOut:new CubicBezierEasing( new Point(0.25, 0.5), new Point(0.59, 1) )
};

CubicBezierEasing.cubic = {
	easeInOut:new CubicBezierEasing( new Point(0.66, 0), new Point(0.34, 1) ),
	easeIn:new CubicBezierEasing( new Point(0.44, 0), new Point(0.68, 0.09) ),
	easeOut:new CubicBezierEasing( new Point(0.32, 0.91), new Point(0.56, 1) )
};

CubicBezierEasing.quartic = {
	easeInOut:new CubicBezierEasing( new Point(0.8, 0), new Point(0.2, 1) ),
	easeIn:new CubicBezierEasing( new Point(0.5, 0), new Point(0.75, 0) ),
	easeOut:new CubicBezierEasing( new Point(0.25, 1), new Point(0.5, 1) )
};

CubicBezierEasing.quintic = {
	easeInOut:new CubicBezierEasing( new Point(0.86, 0), new Point(0.14, 1) ),
	easeIn:new CubicBezierEasing( new Point(0.58, 0), new Point(0.78, -0.05) ),
	easeOut:new CubicBezierEasing( new Point(0.22, 1.05), new Point(0.42, 1) )
};

CubicBezierEasing.sine = {
	easeInOut:new CubicBezierEasing( new Point(0.37, 0), new Point(0.63, 1) ),
	easeIn:new CubicBezierEasing( new Point(0.38, 0), new Point(0.69, 0.53) ),
	easeOut:new CubicBezierEasing( new Point(0.31, 0.47), new Point(0.62, 1 ) )
};

CubicBezierEasing.exponential = {
	easeInOut:new CubicBezierEasing( new Point(0.9, 0), new Point(0.1, 1) ),
	easeIn:new CubicBezierEasing( new Point(0.76, 0), new Point(0.84, 0.06) ),
	easeOut:new CubicBezierEasing( new Point(0.16, 0.94), new Point(0.24, 1) )
};

CubicBezierEasing.circular = {
	easeInOut:new CubicBezierEasing( new Point(0.81, 0), new Point(0.19, 1) ),
	easeIn:new CubicBezierEasing( new Point(0.55, 0), new Point(1, 0.45) ),
	easeOut:new CubicBezierEasing( new Point(0, 0.55), new Point(0.45, 1) )
};

CubicBezierEasing.back = {
	easeInOut:new CubicBezierEasing( new Point(0.68, -0.6), new Point(0.32, 1.6) ),
	easeIn:new CubicBezierEasing( new Point(0.36, 0), new Point(0.66, -0.56) ),
	easeOut:new CubicBezierEasing( new Point(0.34, 1.56), new Point(0.64, 1) )
};

CubicBezierEasing.linear = {
	ease:new CubicBezierEasing( new Point(0, 0), new Point(1, 1) )
};

CubicBezierEasing.ibm = {
	easeExpressive:new CubicBezierEasing( new Point(0.4, 0.14), new Point(0.3, 1) ),
	easeProductive:new CubicBezierEasing( new Point(0.2, 0), new Point(0.38, 0.9) )
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
// 		let variable = `$ease${easeClassName}${easeName}: cubic-bezier(${cubicBezier.p1.x}, ${cubicBezier.p1.y}, ${cubicBezier.p2.x}, ${cubicBezier.p2.x});`;
// 		cssVariables = cssVariables + variable;
// 	}
// }
// console.log(cssVariables);