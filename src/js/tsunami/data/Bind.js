import ChangeEvent from "../ChangeEvent";
import EventHandler from "../components/EventHandler";
import { getProperty } from "../tsunami";

export default class Bind {

    constructor(scope1, path1, scope2, path2) {
        this.changeHandler1 = this.changeHandler1.bind(this);
        this.changeHandler2 = this.changeHandler2.bind(this);
        this.eventHandler1 = this.createEventHandler(scope1, path1, this.changeHandler1);
        this.eventHandler2 = this.createEventHandler(scope2, path2, this.changeHandler2.bind(this));
        this.changeHandler2(new ChangeEvent(this.eventHandler2.type, this.eventHandler2.eventTarget[this.eventHandler2.type]));
    }

    changeHandler1(event) {
        this.eventHandler2.enabled = false;
        this.eventHandler2.eventTarget[this.eventHandler2.type] = event.data;
        this.eventHandler2.enabled = true;
    }

    changeHandler2(event) {
        this.eventHandler1.enabled = false;
        this.eventHandler1.eventTarget[this.eventHandler1.type] = event.data;
        this.eventHandler1.enabled = true;
    }

    createEventHandler(scope, path, callback) {
        let slugs = path.split(".");
        let target = scope;
        let type = slugs.pop();
        // if(slugs.length > 0) target = new Function().bind(scope)();
        if(slugs.length > 0) target = getProperty(slugs.join("."), scope);
        let handler;
        if(target instanceof EventTarget) {
            handler = new EventHandler(target, type, callback);
        } else {
            console.log("Object is not an instance of EventTarget, cannot add event listener type '" + type + "'");
        }
        return handler;
    }

    destroy() {
        this.eventHandler1.destroy();
        this.eventHandler2.destroy();
    }
}