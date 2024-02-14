import { ChangeEvent } from '../ChangeEvent';
import EventHandler from '../components/EventHandler';
import { getProperty } from '../tsunami';
import { EventDispatcher } from '../EventDispatcher';

export default class Bind {
  constructor(scope1, path1, scope2, path2, debug = false) {
    if (debug) console.log('!!!!!! Bind', path1, path2);
    this.debug = debug;
    this.path1 = path1;
    this.path2 = path2;
    this.changeHandler1 = this.changeHandler1.bind(this);
    this.changeHandler2 = this.changeHandler2.bind(this);
    this.eventHandler1 = this.createEventHandler(scope1, path1, this.changeHandler1, debug);
    this.eventHandler2 = this.createEventHandler(scope2, path2, this.changeHandler2, debug);
    this.changeHandler2(new ChangeEvent(this.eventHandler2.type, this.eventHandler2.eventTarget[this.eventHandler2.type]));
  }

  changeHandler1(event) {
    if (this.debug) console.log('changeHandler1', event);
    this.eventHandler2.enabled = false;
    this.eventHandler2.eventTarget[this.eventHandler2.type] = event.data;
    this.eventHandler2.enabled = true;
  }

  changeHandler2(event) {
    if (this.debug) console.log('changeHandler2', event);
    // console.log("changeHandler2", this.path1, this.path2);
    this.eventHandler1.enabled = false;
    this.eventHandler1.eventTarget[this.eventHandler1.type] = event.data;
    this.eventHandler1.enabled = true;
  }

  createEventHandler(scope, path, callback, debug = false) {
    if (debug) console.log('createEventHandler scope', scope);
    if (debug) console.log('createEventHandler path', path);
    let slugs = path.split('.');
    if (debug) console.log('slugs', slugs);
    let target = scope;
    if (debug) console.log('target', target);
    let type = slugs.pop();
    if (debug) console.log('type', type);
    if (debug) console.log('slugs', slugs);

    // if(slugs.length > 0) target = new Function().bind(scope)();
    const propPath = slugs.join('.');
    if (debug) console.log('propPath', propPath);
    if (slugs.length > 0) target = getProperty(propPath, scope, debug);
    if (debug) console.log('target', target);
    let handler;
    const isDispatcher = target instanceof EventDispatcher || target instanceof EventTarget;
    if (debug) console.log('isDispatcher', isDispatcher);
    if (isDispatcher) {
      handler = new EventHandler(target, type, callback, true, this.debug);
    } else {
      console.log("Object is not an instance of EventDispatcher or EventTarget, cannot add event listener type '" + type + "'");
    }
    return handler;
  }

  destroy() {
    this.eventHandler1.destroy();
    this.eventHandler2.destroy();
  }
}
