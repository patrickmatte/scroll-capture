import NumberData from '../../lib/tsunami/data/NumberData';
import ArrayData from '../../lib/tsunami/data/ArrayData';
import ActionTween from './ActionTween';
import StringData from '../../lib/tsunami/data/StringData';
import Point from '../../lib/tsunami/geom/Point';
import Data from '../../lib/tsunami/data/Data';
import { getScrollingTargets, isScrollable } from '../../lib/tsunami/window';

export default class ActionScroll extends ActionTween {
  constructor(units = 'px', x = 0, y = 0, duration = 1, delay = 0) {
    super(0, 0, 0, 0, duration, delay);
    this.type = 'ActionScroll';
    this.name.value = 'Scroll';
    this.description.value = 'Add a scroll animation';
    this.targets = new ArrayData();
    this.targets.value = getScrollingTargets();
    this.target = new StringData(this.targets.value[0]);
    this.target.addEventListener(Data.CHANGE, () => {
      this.captureAtInit();
    });
    this.unitX = new NumberData(x);
    this.unitY = new NumberData(y);
    this.units = new ArrayData('%', 'px');
    this.units.selectedItem.value = units;
    this.isCaptureable.value = true;
    this.isTestable.value = true;
    this.icon.value = 'fa-solid fa-scroll';
    this.targetStyle = '';

    this.doScroll = this.doScroll.bind(this);
    this.unitX.addEventListener(Data.CHANGE, this.doScroll);
    this.unitY.addEventListener(Data.CHANGE, this.doScroll);
  }

  get element() {
    const target = this.target.value;
    const isDocumentElement = target == 'window' || target == 'documentElement';
    return isDocumentElement ? document.documentElement : document.querySelector(target);
  }

  clone() {
    let action = new ActionScroll();
    action.copy(this);
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
    let scrollTarget = this.element;
    this.startX.value = scrollTarget.scrollLeft;
    this.startY.value = scrollTarget.scrollTop;

    let styleArrayFiltered = [];
    this.targetStyle = scrollTarget.getAttribute('style') || '';
    if (this.targetStyle) {
      styleArrayFiltered = this.targetStyle.split(';').filter((prop) => {
        return prop.indexOf('scroll-behavior') == -1;
      });
    }
    styleArrayFiltered.push('scroll-behavior:auto !important');
    scrollTarget.setAttribute('style', styleArrayFiltered.join(';'));

    if (this.units.selectedItem.value == 'px') {
      this.endX.copy(this.unitX);
      this.endY.copy(this.unitY);
    }
    if (this.units.selectedItem.value == '%') {
      const element = this.element;
      let maxScroll = { x: element.scrollWidth - element.clientWidth, y: element.scrollHeight - element.clientHeight };
      this.endX.value = Math.round((this.unitX.value / 100) * maxScroll.x);
      this.endY.value = Math.round((this.unitY.value / 100) * maxScroll.y);
    }
    return super.trigger();
  }

  doScroll() {
    this.pos.x = this.unitX.value;
    this.pos.y = this.unitY.value;
    this.tweenUpdateHandler();
  }

  tweenUpdateHandler() {
    const scrollTarget = this.element;
    scrollTarget.scrollLeft = this.pos.x;
    scrollTarget.scrollTop = this.pos.y;
  }

  tweenCompleteHandler(e) {
    super.tweenCompleteHandler(e);
    this.element.setAttribute('style', this.targetStyle);
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
    this.unitX.removeEventListener(Data.CHANGE, this.doScroll);
    this.unitY.removeEventListener(Data.CHANGE, this.doScroll);
    super.deserialize(data);
    this.target.deserialize(data.target);
    this.unitX.deserialize(data.unitX);
    this.unitY.deserialize(data.unitY);
    this.units.selectedItem.value = data.units;
    this.unitX.addEventListener(Data.CHANGE, this.doScroll);
    this.unitY.addEventListener(Data.CHANGE, this.doScroll);
  }

  capture() {
    super.capture();

    this.unitX.removeEventListener(Data.CHANGE, this.doScroll);
    this.unitY.removeEventListener(Data.CHANGE, this.doScroll);

    const element = this.element;
    let scroll = new Point(element.scrollLeft, element.scrollTop);
    let maxScroll = new Point(element.scrollWidth - element.clientWidth, element.scrollHeight - element.clientHeight);

    let unit = new Point();
    switch (this.units.selectedItem.value) {
      case 'px':
        unit.x = scroll.x;
        unit.y = scroll.y;
        break;
      case '%':
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
  }

  captureAtInit() {
    super.captureAtInit();
    this.capture();
  }
}
