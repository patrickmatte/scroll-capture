import EventHandler from "../components/EventHandler";

export default class Bind {

    constructor(scope1, path1, scope2, path2) {
        console.log("scope1=", scope1, "path1=", path1);
        console.log("scope2=", scope2, "path2=", path2);
        this.changeHandler1 = this.changeHandler1.bind(this);
        this.changeHandler2 = this.changeHandler2.bind(this);
        this.eventHandler1 = this.createEventHandler(scope1, path1, this.changeHandler1);
        this.eventHandler2 = this.createEventHandler(scope2, path2, this.changeHandler2.bind(this));
        this.changeHandler2();
    }

    changeHandler1(event) {
        this.eventHandler2.enabled = false;
        this.eventHandler2.eventTarget[this.eventHandler2.type] = this.eventHandler1.eventTarget[this.eventHandler1.type];
        this.eventHandler2.enabled = true;
    }

    changeHandler2(event) {
        this.eventHandler1.enabled = false;
        this.eventHandler1.eventTarget[this.eventHandler1.type] = this.eventHandler2.eventTarget[this.eventHandler2.type];
        this.eventHandler1.enabled = true;
    }

    createEventHandler(scope, path, callback) {
        let slugs = path.split(".");
        let target = scope;
        let type = slugs.pop();
        if(slugs.length > 0) target = new Function("return " + slugs.join(".")).bind(scope)();
        let handler;
        if(target instanceof EventTarget && target[type] != undefined) {
            handler = new EventHandler(target, type, callback);
        } else {
            throw new Error("Object is not an instance of EventTarget, cannot add event listener type '" + type + "'");
        }
        return handler;
    }

    destroy() {
        this.eventHandler1.destroy();
        this.eventHandler2.destroy();
    }
}