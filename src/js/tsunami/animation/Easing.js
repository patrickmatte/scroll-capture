export default class Easing {
  constructor() {
    this.easeIn = this.easeIn.bind(this);
    this.easeOut = this.easeOut.bind(this);
    this.easeInOut = this.easeInOut.bind(this);
  }

  easeIn(t, b = 0, c = 1, d = 1) {}

  easeOut(t, b = 0, c = 1, d = 1) {}

  easeInOut(t, b = 0, c = 1, d = 1) {}
}

export class Quadratic extends Easing {
  easeIn(t, b = 0, c = 1, d = 1) {
    return c * (t /= d) * t + b;
  }

  easeOut(t, b = 0, c = 1, d = 1) {
    return -c * (t /= d) * (t - 2) + b;
  }

  easeInOut(t, b = 0, c = 1, d = 1) {
    if ((t /= d / 2) < 1) {
      return (c / 2) * t * t + b;
    }
    return (-c / 2) * (--t * (t - 2) - 1) + b;
  }
}

export class Cubic extends Easing {
  easeIn(t, b = 0, c = 1, d = 1) {
    return c * (t /= d) * t * t + b;
  }

  easeOut(t, b = 0, c = 1, d = 1) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }

  easeInOut(t, b = 0, c = 1, d = 1) {
    if ((t /= d / 2) < 1) {
      return (c / 2) * t * t * t + b;
    }
    return (c / 2) * ((t -= 2) * t * t + 2) + b;
  }
}

export class Quartic extends Easing {
  easeIn(t, b = 0, c = 1, d = 1) {
    return c * (t /= d) * t * t * t + b;
  }

  easeOut(t, b = 0, c = 1, d = 1) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  }

  easeInOut(t, b = 0, c = 1, d = 1) {
    if ((t /= d / 2) < 1) {
      return (c / 2) * t * t * t * t + b;
    }
    return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
  }
}

export class Quintic extends Easing {
  easeIn(t, b = 0, c = 1, d = 1) {
    return c * (t /= d) * t * t * t * t + b;
  }

  easeOut(t, b = 0, c = 1, d = 1) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  }

  easeInOut(t, b = 0, c = 1, d = 1) {
    if ((t /= d / 2) < 1) {
      return (c / 2) * t * t * t * t * t + b;
    }
    return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
  }
}

export class Sine extends Easing {
  easeIn(t, b = 0, c = 1, d = 1) {
    return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
  }

  easeOut(t, b = 0, c = 1, d = 1) {
    return c * Math.sin((t / d) * (Math.PI / 2)) + b;
  }

  easeInOut(t, b = 0, c = 1, d = 1) {
    return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
  }
}

export class Exponential extends Easing {
  easeIn(t, b = 0, c = 1, d = 1) {
    return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  }

  easeOut(t, b = 0, c = 1, d = 1) {
    return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
  }

  easeInOut(t, b = 0, c = 1, d = 1) {
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
    }
    return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
  }
}

export class Circular extends Easing {
  easeIn(t, b = 0, c = 1, d = 1) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  }

  easeOut(t, b = 0, c = 1, d = 1) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  }

  easeInOut(t, b = 0, c = 1, d = 1) {
    if ((t /= d / 2) < 1) {
      return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
    }
    return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  }
}

export class Elastic extends Easing {
  easeIn(t, b = 0, c = 1, d = 1, a, p) {
    if (t === 0) {
      return b;
    }
    if ((t /= d) === 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    let s;
    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = (p / (2 * Math.PI)) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
  }

  easeOut(t, b = 0, c = 1, d = 1, a, p) {
    if (t === 0) {
      return b;
    }
    if ((t /= d) === 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    let s;
    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = (p / (2 * Math.PI)) * Math.asin(c / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b;
  }

  easeInOut(t, b = 0, c = 1, d = 1, a, p) {
    if (t === 0) {
      return b;
    }
    if ((t /= d / 2) === 2) {
      return b + c;
    }
    if (!p) {
      p = d * (0.3 * 1.5);
    }
    let s;
    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = (p / (2 * Math.PI)) * Math.asin(c / a);
    }
    if (t < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
    }
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) * 0.5 + c + b;
  }
}

export class Back extends Easing {
  constructor(s = 1.70158) {
    super();
    this.s = s;
  }

  easeIn(t, b = 0, c = 1, d = 1, s) {
    if (s === undefined) {
      s = this.s;
    }
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  }

  easeOut(t, b = 0, c = 1, d = 1, s) {
    if (s === undefined) {
      s = this.s;
    }
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  }

  easeInOut(t, b = 0, c = 1, d = 1, s) {
    if (s === undefined) {
      s = this.s;
    }
    if ((t /= d / 2) < 1) {
      return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    }
    return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  }
}

export class Bounce extends Easing {
  easeOut(t, b = 0, c = 1, d = 1) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
  }

  easeIn(t, b = 0, c = 1, d = 1) {
    return c - this.easeOut(d - t, 0, c, d) + b;
  }

  easeInOut(t, b = 0, c = 1, d = 1) {
    if (t < d / 2) {
      return this.easeIn(t * 2, 0, c, d) * 0.5 + b;
    } else {
      return this.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    }
  }
}

export class Linear {
  constructor() {
    this.ease = this.ease.bind(this);
  }

  ease(t, b = 0, c = 1, d = 1) {
    return (c * t) / d + b;
  }
}

Easing.quad = new Quadratic();
Easing.cubic = new Cubic();
Easing.quart = new Quartic();
Easing.quint = new Quintic();
Easing.sine = new Sine();
Easing.expo = new Exponential();
Easing.circ = new Circular();
Easing.elastic = new Elastic();
Easing.back = new Back();
Easing.bounce = new Bounce();
Easing.linear = new Linear();
