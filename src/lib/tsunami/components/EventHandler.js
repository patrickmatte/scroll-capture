export default class EventHandler {
  constructor(dispatcher, type, callback, debug = false) {
    this.debug = debug;
    this.dispatcher = dispatcher;
    this.type = type;
    this.callback = callback;
    this.enabled = true;
  }

  get enabled() {
    return this._enabled;
  }

  set enabled(value) {
    if (value != this._enabled) {
      this._enabled = value;
      if (!this.dispatcher) return;
      if (value) {
        this.dispatcher.addEventListener(this.type, this.callback);
      } else {
        this.dispatcher.removeEventListener(this.type, this.callback);
      }
    }
  }

  get callback() {
    return this._callback;
  }

  set callback(value) {
    if (value != this._callback) {
      const isEnabled = this.enabled;
      if (isEnabled) this.enabled = false;
      this._callback = value;
      this.enabled = isEnabled;
    }
  }

  get type() {
    return this._type;
  }

  set type(value) {
    if (value != this._type) {
      const isEnabled = this.enabled;
      if (isEnabled) this.enabled = false;
      this._type = value;
      this.enabled = isEnabled;
    }
  }

  get dispatcher() {
    return this._dispatcher;
  }

  set dispatcher(value) {
    if (value != this._dispatcher) {
      const isEnabled = this.enabled;
      if (isEnabled) this.enabled = false;
      this._dispatcher = value;
      this.enabled = isEnabled;
    }
  }

  destroy() {
    this.enabled = false;
    this.dispatcher = null;
    this.type = null;
    this.callback = null;
  }
}
