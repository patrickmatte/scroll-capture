export default class EventDispatcher {

    constructor() {
        this.listeners = [];
        this._debug = false;
    };

    addEventListener(type, func) {
        this.listeners.push({type:type, func:func});
    }

    removeEventListener(type, func) {
        let newListeners = [];

        let listeners = this.listeners.slice();
        for (let i = 0; i < listeners.length; i++) {
            let listener = listeners[i];
            let sameType = (listener.type == type);
            let sameFunc = (listener.func == func);
            if (sameType && sameFunc) {
            } else {
                newListeners.push(listener);
            }
        }
        this.listeners = newListeners;
    }

    dispatchEvent(event) {
        event.target = this;
        if (!event.currentTarget) {
            event.currentTarget = this;
        }
        let listeners = this.listeners.slice();
        for (let i = 0 ; i < listeners.length; i++) {
            let listener = listeners[i];
			if (listener.type == event.type) {
				let index = this.listeners.indexOf(listener);
				if (index != -1) {
					listener.func(event);
				}
			}
        }
    }

	set debug(value) {
		this._debug = value;
	}

	get debug() {
		return this._debug;
	}

	destroy() {
        this.listeners = [];
    }

}
