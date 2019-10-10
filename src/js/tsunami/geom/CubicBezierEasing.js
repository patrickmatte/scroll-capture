import Point from "./Point";
import CubicBezier from "./CubicBezier";

export default class CubicBezierEasing {

	constructor(x1 = 0, y1 = 0, x2 = 1, y2 = 1, samples = 100) {
		this.ease = this.ease.bind(this);
		this.bezier = new CubicBezier(new Point(0, 0), new Point(x1, y1), new Point(x2, y2), new Point(1, 1), samples);
	}

	ease(t, b, c, d) {
		let point = this.bezier.getPointAtX(t / d);
		return c * point.y + b;
	}

}

CubicBezierEasing.ibm = {
	expressive:new CubicBezierEasing(0.4, 0.14, 0.3, 1 ).ease,
	productive:new CubicBezierEasing( 0.2, 0, 0.38, 0.9 ).ease
};

CubicBezierEasing.sine = {
	easeIn:new CubicBezierEasing(0.47, 0, 0.745, 0.715).ease,
	easeOut:new CubicBezierEasing( 0.39, 0.575, 0.565, 1 ).ease,
	easeInOut:new CubicBezierEasing( 0.445, 0.05, 0.55, 0.95 ).ease
};

CubicBezierEasing.quadratic = {
	easeIn:new CubicBezierEasing(0.55, 0.085, 0.68, 0.53).ease,
	easeOut:new CubicBezierEasing( 0.25, 0.46, 0.45, 0.94 ).ease,
	easeInOut:new CubicBezierEasing( 0.455, 0.03, 0.515, 0.955 ).ease
};

CubicBezierEasing.cubic = {
	easeIn:new CubicBezierEasing( 0.55, 0.055, 0.675, 0.19 ).ease,
	easeOut:new CubicBezierEasing( 0.215, 0.61, 0.355, 1 ).ease,
	easeInOut:new CubicBezierEasing( 0.645, 0.045, 0.355, 1 ).ease
};

CubicBezierEasing.quartic = {
	easeIn:new CubicBezierEasing( 0.895, 0.03, 0.685, 0.22 ).ease,
	easeOut:new CubicBezierEasing( 0.165, 0.84, 0.44, 1 ).ease,
	easeInOut:new CubicBezierEasing( 0.77, 0, 0.175, 1 ).ease
};

CubicBezierEasing.quintic = {
	easeIn:new CubicBezierEasing( 0.755, 0.05, 0.855, 0.06 ).ease,
	easeOut:new CubicBezierEasing( 0.23, 1, 0.32, 1 ).ease,
	easeInOut:new CubicBezierEasing( 0.86, 0, 0.07, 1 ).ease
};

CubicBezierEasing.exponential = {
	easeIn:new CubicBezierEasing( 0.95, 0.05, 0.795, 0.035 ).ease,
	easeOut:new CubicBezierEasing( 0.19, 1, 0.22, 1 ).ease,
	easeInOut:new CubicBezierEasing( 1, 0, 0, 1 ).ease
};

CubicBezierEasing.circular = {
	easeIn:new CubicBezierEasing( 0.6, 0.04, 0.98, 0.335 ).ease,
	easeOut:new CubicBezierEasing( 0.075, 0.82, 0.165, 1 ).ease,
	easeInOut:new CubicBezierEasing( 0.785, 0.135, 0.15, 0.86 ).ease
};

CubicBezierEasing.back = {
	easeIn:new CubicBezierEasing( 0.6, -0.28, 0.735, 0.045 ).ease,
	easeOut:new CubicBezierEasing( 0.175, 0.885, 0.32, 1.275 ).ease,
	easeInOut:new CubicBezierEasing( 0.68, -0.55, 0.265, 1.55 ).ease
};

CubicBezierEasing.linear = {
	ease:new CubicBezierEasing( 0, 0, 1, 1 ).ease
};
