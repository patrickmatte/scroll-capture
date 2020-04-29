export default class EventHandler {

    constructor(eventDispatcher, type, expression, scope) {
        this.eventDispatcher = eventDispatcher;
        this.type = type;
        this.eventHandler = new Function("event", expression).bind(scope);
        this.eventDispatcher.addEventListener(this.type, this.eventHandler);
    }

    destroy() {
        this.eventDispatcher.removeEventListener(this.type, this.eventHandler);
        this.eventDispatcher = null;
        this.type = null;
        this.eventHandler = null;
    }

}