export const assign = {
  '=': (object, name, value, debug) => {
    if (debug) {
      console.log('assign object', object);
      console.log('assign name', name);
      console.log('assign value', value);
    }
    return (object[name] = value);
  },
  '+=': (object, name, value, debug) => {
    return (object[name] += value);
  },
  '-=': (object, name, value, debug) => {
    return (object[name] -= value);
  },
  '*=': (object, name, value, debug) => {
    return (object[name] *= value);
  },
  '/=': (object, name, value, debug) => {
    return (object[name] /= value);
  },
  '%=': (object, name, value, debug) => {
    return (object[name] %= value);
  },
  '**=': (object, name, value, debug) => {
    return (object[name] **= value);
  },
  '<<=': (object, name, value, debug) => {
    return (object[name] <<= value);
  },
  '>>=': (object, name, value, debug) => {
    return (object[name] >>= value);
  },
  '>>>=': (object, name, value, debug) => {
    return (object[name] >>>= value);
  },
  '&=': (object, name, value, debug) => {
    return (object[name] &= value);
  },
  '^=': (object, name, value, debug) => {
    return (object[name] ^= value);
  },
  '|=': (object, name, value, debug) => {
    return (object[name] |= value);
  },
  '&&=': (object, name, value, debug) => {
    return (object[name] &&= value);
  },
  '||=': (object, name, value, debug) => {
    return (object[name] ||= value);
  },
  '??=': (object, name, value, debug) => {
    return (object[name] ??= value);
  },
};
