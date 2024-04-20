import NumberData from '../../lib/tsunami/data/NumberData';
import ArrayData from '../../lib/tsunami/data/ArrayData';
import ActionTween from './ActionTween';
import StringData from '../../lib/tsunami/data/StringData';
import Point from '../../lib/tsunami/geom/Point';
import Data from '../../lib/tsunami/data/Data';
import { getScrollingTargets, isScrollable } from '../../lib/tsunami/window';
import { app } from '../main';
import EventHandler from '../../lib/tsunami/components/EventHandler';
import BooleanData from '../../lib/tsunami/data/BooleanData';

export default class ActionScroll extends ActionTween {
  constructor(units = 'px', x = 0, y = 0, duration = 1, delay = 0) {
    super(0, 0, 0, 0, duration, delay);
    this.type = 'ActionScroll';
    this.name.value = 'Scroll';
    this.description.value = 'Add a scroll animation';
    this.targets = new ArrayData();
    this.targets.value = getScrollingTargets(['sc-'], ['documentElement']);
    this.customJSMethod = 'Custom JS method';
    this.targets.push(this.customJSMethod);
    this.target = new StringData(this.targets.value[0]);
    this.isCustomJSMethod = new BooleanData(false);
    this.target.addEventListener(Data.CHANGE, () => {
      this.isCustomJSMethod.value = this.target.value == this.customJSMethod;
    });
    this.targetEventHandler = new EventHandler(this.target, Data.CHANGE, (event) => {
      this.captureAtInit();
    });
    const getScrollCode = `return {
  x:document.documentElement.scrollLeft,
  y:document.documentElement.scrollTop
};`;
    this.getScroll = new StringData(getScrollCode);
    const setScrollCode = `document.documentElement.scrollLeft = x;
document.documentElement.scrollTop = y;`;
    this.setScroll = new StringData(setScrollCode);
    this.unitX = new NumberData(x);
    this.unitY = new NumberData(y);
    this.units = new ArrayData('%', 'px');
    this.units.selectedItem.value = units;
    this.isCaptureable.value = true;
    this.isDuplicateable.value = true;
    this.isTestable.value = true;
    this.icon.value = 'fa-solid fa-scroll';
    this.targetStyle = '';

    this.doScroll = this.doScroll.bind(this);
    this.unitX.addEventListener(Data.CHANGE, this.doScroll);
    this.unitY.addEventListener(Data.CHANGE, this.doScroll);

    this.tweenType.addEventListener('id', (event) => {
      const obj = this.tweenTypes.find((item) => {
        return item.id == event.data;
      });
      ActionScroll.defaultTweenType = obj;
    });

    this.tweenType.addEventListener('property', (event) => {
      if (this.tweenType.id == 'speed') {
        const obj = this.tweenTypes.find((item) => {
          return item.id == this.tweenType.id;
        });
        obj.property = event.data;
      }
    });
  }

  get tweenTypes() {
    return ActionScroll.tweenTypes;
  }

  get defaultTweenType() {
    let type = ActionScroll.defaultTweenType;
    if (!type) {
      type = super.defaultTweenType;
    }
    return type;
  }

  get element() {
    const target = this.target.value;
    const isDocumentElement = target == 'window' || target == 'documentElement' || !target;
    return isDocumentElement ? document.documentElement : document.querySelector(target);
  }

  clone() {
    let action = new ActionScroll();
    // action.copy(this);
    return action;
  }

  copy(action) {
    this.unitX.removeEventListener(Data.CHANGE, this.doScroll);
    this.unitY.removeEventListener(Data.CHANGE, this.doScroll);
    super.copy(action);
    this.target.value = action.target.value;
    this.unitX.value = action.unitX.value;
    this.unitY.value = action.unitY.value;
    this.units.selectedItem.value = action.units.selectedItem.value;
    this.unitX.addEventListener(Data.CHANGE, this.doScroll);
    this.unitY.addEventListener(Data.CHANGE, this.doScroll);
  }

  trigger() {
    let element = this.element;
    const scrollPromise = this.sendGetScroll(element);
    const triggerPromise = scrollPromise.then((currentScroll) => {
      this.startX.value = currentScroll.x;
      this.startY.value = currentScroll.y;
      // this.startX.value = element.scrollLeft;
      // this.startY.value = element.scrollTop;

      if (this.target.value != this.customJSMethod) {
        let styleArrayFiltered = [];
        this.targetStyle = element.getAttribute('style') || '';
        if (this.targetStyle) {
          styleArrayFiltered = this.targetStyle.split(';').filter((prop) => {
            return prop.indexOf('scroll-behavior') == -1;
          });
        }
        styleArrayFiltered.push('scroll-behavior:auto !important');
        element.setAttribute('style', styleArrayFiltered.join(';'));
      }

      if (this.units.selectedItem.value == 'px') {
        this.endX.copy(this.unitX);
        this.endY.copy(this.unitY);
      }
      if (this.units.selectedItem.value == '%') {
        let maxScroll = { x: element.scrollWidth - element.clientWidth, y: element.scrollHeight - element.clientHeight };
        this.endX.value = Math.round((this.unitX.value / 100) * maxScroll.x);
        this.endY.value = Math.round((this.unitY.value / 100) * maxScroll.y);
      }
      return super.trigger();
    });
    return triggerPromise;
  }

  doScroll() {
    this.pos.x = this.unitX.value;
    this.pos.y = this.unitY.value;
    this.tweenUpdateHandler();
  }

  tweenUpdateHandler() {
    switch (this.target.value) {
      case this.customJSMethod:
        const promise = new Promise((resolve, reject) => {
          const message = {
            type: 'scrollCaptureSetScroll',
            code: this.setScroll.value,
            x: this.pos.x,
            y: this.pos.y,
            tabId: app.model.tabId.value,
          };
          chrome.runtime.sendMessage(message);
        });
        break;
      default:
        this.element.scrollLeft = this.pos.x;
        this.element.scrollTop = this.pos.y;
        break;
    }
  }

  tweenCompleteHandler(e) {
    super.tweenCompleteHandler(e);
    if (this.target.value != this.customJSMethod) {
      this.element.setAttribute('style', this.targetStyle);
    }
  }

  serialize() {
    let data = super.serialize();
    data.target = this.target.serialize();
    data.unitX = this.unitX.serialize();
    data.unitY = this.unitY.serialize();
    data.units = this.units.selectedItem.value;
    return data;
  }

  deserialize(data) {
    if (!data) return;
    this.targetEventHandler.enabled = false;
    this.unitX.removeEventListener(Data.CHANGE, this.doScroll);
    this.unitY.removeEventListener(Data.CHANGE, this.doScroll);
    super.deserialize(data);
    this.target.deserialize(data.target);
    this.unitX.deserialize(data.unitX);
    this.unitY.deserialize(data.unitY);
    this.units.selectedItem.value = data.units;
    this.unitX.addEventListener(Data.CHANGE, this.doScroll);
    this.unitY.addEventListener(Data.CHANGE, this.doScroll);
    this.targetEventHandler.enabled = true;
  }

  sendGetScroll(element) {
    let promise;
    switch (this.target.value) {
      case this.customJSMethod:
        promise = new Promise((resolve, reject) => {
          const message = {
            type: 'scrollCaptureGetScroll',
            code: this.getScroll.value,
            tabId: app.model.tabId.value,
          };
          chrome.runtime.sendMessage(message, (response) => {
            resolve(response);
          });
        });
        break;
      default:
        promise = Promise.resolve({ x: element.scrollLeft, y: element.scrollTop });
        break;
    }
    return promise;
  }

  capture() {
    super.capture();

    this.unitX.removeEventListener(Data.CHANGE, this.doScroll);
    this.unitY.removeEventListener(Data.CHANGE, this.doScroll);

    const element = this.element;
    this.sendGetScroll(element).then((currentScroll) => {
      // let scroll = new Point(element.scrollLeft, element.scrollTop);
      let scroll = new Point(currentScroll.x, currentScroll.y);

      let unit = new Point();
      switch (this.units.selectedItem.value) {
        case 'px':
          unit.x = scroll.x;
          unit.y = scroll.y;
          break;
        case '%':
          let maxScroll = new Point(element.scrollWidth - element.clientWidth, element.scrollHeight - element.clientHeight);
          unit.x = Math.round((scroll.x / maxScroll.x) * 100);
          unit.y = Math.round((scroll.y / maxScroll.y) * 100);
          break;
      }

      if (isNaN(unit.x)) unit.x = 0;
      if (isNaN(unit.y)) unit.y = 0;

      this.unitX.value = unit.x;
      this.unitY.value = unit.y;

      setTimeout(() => {
        this.unitX.addEventListener(Data.CHANGE, this.doScroll);
        this.unitY.addEventListener(Data.CHANGE, this.doScroll);
        this.captureComplete();
      }, 200);
    });
  }

  captureAtInit() {
    super.captureAtInit();
    this.capture();
  }
}

ActionScroll.tweenTypes = new ArrayData(
  { id: 'duration', option: 'Use Duration', name: 'Duration', property: 1, icon: 'fa-clock', unit: 's', step: 0.25 },
  { id: 'speed', option: 'Use Speed', name: 'Speed', property: 600, icon: 'fa-gauge-high', unit: 'px/s', step: 25 }
);
