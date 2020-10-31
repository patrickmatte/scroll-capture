export default class EventHandler {

    constructor(eventTarget, type, eventHandler, enabled = true) {
        this.eventTarget = eventTarget;
        this.type = type;
        this.eventHandler = eventHandler;
        this.enabled = enabled;
    }

    set enabled(value) {
        this._enabled = value;
        if(value) {
            this.eventTarget.addEventListener(this.type, this.eventHandler);
        } else {
            this.eventTarget.removeEventListener(this.type, this.eventHandler);
        }
    }

    destroy() {
        this.enabled = false;
        this.eventTarget = null;
        this.type = null;
        this.eventHandler = null;
    }

}