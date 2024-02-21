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
      if (value) {
        this.dispatcher.addEventListener(this.type, this.callback);
      } else {
        this.dispatcher.removeEventListener(this.type, this.callback);
      }
    }
  }

  get type() {
    return this._type;
  }

  set type(value) {
    if (value != this._type) {
      this.dispatcher.removeEventListener(this.type, this.callback);
      this._type = value;
      if (this.enabled) this.dispatcher.addEventListener(this.type, this.callback);
    }
  }

  destroy() {
    this.enabled = false;
    this.dispatcher = null;
    this.type = null;
    this.callback = null;
  }
}
