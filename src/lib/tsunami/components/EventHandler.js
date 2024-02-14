export default class EventHandler {
  constructor(eventTarget, type, eventHandler, enabled = true, debug = false) {
    this.debug = debug;
    this.eventTarget = eventTarget;
    this.type = type;
    this.eventHandler = eventHandler;
    this.enabled = enabled;
  }

  get enabled() {
    return this._enabled;
  }

  set enabled(value) {
    if (value != this._enabled) {
      this._enabled = value;
      if (value) {
        this.eventTarget.addEventListener(this.type, this.eventHandler);
      } else {
        this.eventTarget.removeEventListener(this.type, this.eventHandler);
      }
    }
  }

  get type() {
    return this._type;
  }

  set type(value) {
    if (value != this._type) {
      if (this.enabled) this.eventTarget.removeEventListener(this.type, this.eventHandler);
      this._type = value;
      if (this.enabled) this.eventTarget.addEventListener(this.type, this.eventHandler);
    }
  }

  destroy() {
    this.enabled = false;
    this.eventTarget = null;
    this.type = null;
    this.eventHandler = null;
  }
}
