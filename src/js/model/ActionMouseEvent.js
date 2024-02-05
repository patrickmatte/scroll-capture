import Action from './Action';
import NumberData from '../../lib/tsunami/data/NumberData';
import { isTouch } from '../../lib/tsunami/window';
import Point from '../../lib/tsunami/geom/Point';
import ArrayData from '../../lib/tsunami/data/ArrayData';
import StringData from '../../lib/tsunami/data/StringData';
import { events } from '../../lib/tsunami/events';

export default class ActionMouseEvent extends Action {
  constructor(eventType = 'click', x = 0, y = 0) {
    super('ActionMouseEvent', 'MouseEvent', 'Add a mouse event');
    this.x = new NumberData(x);
    this.y = new NumberData(y);
    this.eventTypes = new ArrayData(
      'click',
      'mousedown',
      'mouseup',
      'mouseover',
      'mouseout',
      'dblclick',
      'mousemove',
      'mouseenter',
      'mouseleave',
      'contextmenu',
      'touchstart',
      'touchmove',
      'touchend'
    );
    this.eventTypes.selectedItem.value = this.eventTypes.value[0];
    this.isTestable.value = true;
    this.isCaptureable.value = true;
    this.isDuplicateable.value = true;
    this.changeCursorOnCapture.value = true;
    this.captureMouseEventHandler = this.captureMouseEventHandler.bind(this);
    this.mouseEventHandler = this.mouseEventHandler.bind(this);
    this.icon.value = 'fa-solid fa-hand-pointer';
  }

  clone() {
    let action = new ActionMouseEvent();
    // action.copy(this);
    return action;
  }

  copy(action) {
    super.copy(action);
    this.eventTypes.selectedItem.value = action.eventTypes.selectedItem.value;
    this.x.value = action.x.value;
    this.y.value = action.y.value;
  }

  trigger() {
    let point = new Point(this.x.value - window.scrollX, this.y.value - window.scrollY);
    let el = document.elementFromPoint(point.x, point.y);
    const type = this.eventTypes.selectedItem.value;
    let event = new MouseEvent(type, {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: point.x,
      clientY: point.y,
      pageX: point.x,
      pageY: point.y,
      x: point.x,
      y: point.y,
    });
    const elements = document.elementsFromPoint(point.x, point.y);
    switch (type) {
      case 'mouseover':
        elements.forEach((el) => {
          el.classList.add('sc-hover');
        });
        break;
      case 'mouseout':
        elements.forEach((el) => {
          el.classList.remove('sc-hover');
        });
        break;
    }
    if (el) {
      el.dispatchEvent(event);
    } else {
      console.log('MouseEvent action cannot find element at pageX ' + this.x.value + ' and pageY ' + this.y.value);
    }
    return Promise.resolve();
  }

  serialize() {
    let data = super.serialize();
    data.eventType = this.eventTypes.selectedItem.value;
    data.x = this.x.value;
    data.y = this.y.value;
    return data;
  }

  deserialize(data) {
    if (!data) return;
    super.deserialize(data);
    this.eventTypes.selectedItem.value = data.eventType;
    this.x.deserialize(data.x);
    this.y.deserialize(data.y);
  }

  capture() {
    super.capture();
    setTimeout(() => {
      const activeElement = document.activeElement;
      if (activeElement) activeElement.blur();
      document.body.addEventListener(events.mousemove, this.mouseEventHandler);
      document.body.addEventListener('click', this.captureMouseEventHandler);
      document.body.addEventListener('keydown', this.captureMouseEventHandler);
    }, 33);
  }

  mouseEventHandler(event) {
    if (event.preventDefaut) {
      event.preventDefaut();
    }
    if (event.stopImmediatePropagation) {
      event.stopImmediatePropagation();
    }
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    let touch = event;
    if (isTouch) {
      touch = event.touches[0];
    }
    let point = new Point(touch.pageX, touch.pageY);
    this.x.value = point.x;
    this.y.value = point.y;
  }

  captureMouseEventHandler(event) {
    if (event.preventDefaut) {
      event.preventDefaut();
    }
    if (event.stopImmediatePropagation) {
      event.stopImmediatePropagation();
    }
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    document.body.removeEventListener(events.mousemove, this.mouseEventHandler);
    document.body.removeEventListener('click', this.captureMouseEventHandler);
    document.body.removeEventListener('keydown', this.captureMouseEventHandler);
    this.captureComplete();
  }

  captureAtInit() {
    super.captureAtInit();
    this.capture();
  }
}
