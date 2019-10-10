export default class Easing {

	constructor() {
		this.easeIn = this.easeIn.bind(this);
		this.easeOut = this.easeOut.bind(this);
		this.easeInOut = this.easeInOut.bind(this);
	}

	easeIn(t, b, c, d) {}

	easeOut(t, b, c, d) {}

	easeInOut(t, b, c, d) {}

}

export class Quadratic extends Easing {

	easeIn(t, b, c, d) {
		return c*(t/=d)*t + b;
	}

	easeOut(t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	}

	easeInOut(t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	}

}

export class Cubic extends Easing {

	easeIn(t, b, c, d) {
		return c*(t/=d)*t*t + b;
	}

	easeOut (t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	}

	easeInOut (t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	}

}

export class Quartic extends Easing {

	easeIn (t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	}

	easeOut (t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	}

	easeInOut (t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	}

}

export class Quintic extends Easing {

	easeIn (t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	}

	easeOut (t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	}

	easeInOut (t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	}

}

export class Sine extends Easing {

	easeIn (t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	}

	easeOut (t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	}

	easeInOut (t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	}

}

export class Exponential extends Easing {

	easeIn(t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	}

	easeOut(t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	}

	easeInOut (t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	}

}

export class Circular extends Easing {

	easeIn(t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	}

	easeOut(t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	}

	easeInOut(t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	}

}

export class Elastic extends Easing {

	constructor(s = 1.70158) {
		super();
		this.s = s;
	}

	easeIn (t, b, c, d) {
		var s = this.s;
		var p=0;
		var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	}

	easeOut (t, b, c, d) {
		var s = this.s;
		var p=0;
		var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	}

	easeInOut (t, b, c, d) {
		var s = this.s;
		var p=0;
		var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	}

}

export class Back extends Easing {

	constructor(s = 1.70158) {
		super();
		this.s = s;
	}

	easeIn (t, b, c, d, s) {
		if (s == undefined) s = this.s;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	}

	easeOut (t, b, c, d, s) {
		if (s == undefined) s = this.s;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}

	easeInOut (t, b, c, d, s) {
		if (s == undefined) s = this.s;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	}

}

export class Bounce extends Easing {

	easeOut(t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	}

	easeIn(t, b, c, d) {
		return c - this.easeOut(d-t, 0, c, d) + b;
	}

	easeInOut(t, b, c, d) {
		if (t < d/2) return this.easeIn(t*2, 0, c, d) * .5 + b;
		else return this.easeOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
	}

}

export class Linear {

	constructor() {
		this.ease = this.ease.bind(this);
	}

	ease(t, b, c, d) {
		return c * t / d + b;
	}

}

Easing.quadratic = new Quadratic();
Easing.cubic = new Cubic();
Easing.quartic = new Quartic();
Easing.quintic = new Quintic();
Easing.sine = new Sine();
Easing.exponential = new Exponential();
Easing.circular = new Circular();
Easing.elastic = new Elastic();
Easing.back = new Back();
Easing.bounce = new Bounce();
Easing.linear = new Linear();
