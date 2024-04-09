import NumberData from '../../lib/tsunami/data/NumberData';
import { getElementSelector } from '../../lib/tsunami/window';
import StringData from '../../lib/tsunami/data/StringData';
import Easing from '../../lib/tsunami/animation/Easing';
import Action from './Action';
import Tween from '../../lib/tsunami/animation/Tween';
import TweenProperty from '../../lib/tsunami/animation/TweenProperty';

export class ActionTextInput extends Action {
  constructor() {
    super('ActionTextInput', 'Input Text', 'Input Text');

    this.focusInHandler = this.focusInHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);

    this.target = new StringData();
    this.text = new StringData();
    this.duration = new NumberData(1);

    this.isTestable.value = true;
    this.isCaptureable.value = true;
    this.isDuplicateable.value = true;
    this.changeCursorOnCapture.value = true;

    this.icon.value = 'fa-solid fa-keyboard';
  }

  clone() {
    let action = new ActionTextInput();
    // action.copy(this);
    return action;
  }

  copy(action) {
    super.copy(action);
    this.target.copy(action.target);
    this.text.copy(action.text);
    this.duration.copy(action.duration);
  }

  trigger() {
    this.selectedInput = document.querySelector(this.target.value);
    if (this.selectedInput) {
      this.selectedInput.focus();
      const length = this.text.length;
      if (this.duration.value > 0) {
        this.tween = new Tween(0, this.duration.value, [
          new TweenProperty(this, 'inputValue', 0, length, Easing.linear.ease),
          //   new TweenProperty(this.pos, 'y', this.startY.value, this.endY.value, this.cubicBezierPoints.easing.ease),
        ]);
        return this.tween.start();
      } else {
        this.inputValue = length;
        return Promise.resolve();
      }
    } else {
      return Promise.resolve();
    }
  }

  get inputValue() {
    return this._inputValue;
  }

  set inputValue(value) {
    this._inputValue = value;
    const textValue = this.text.value;
    const stringPart = textValue.substr(0, Math.round(value));
    this.selectedInput.value = stringPart;
  }

  serialize() {
    let data = super.serialize();
    data.target = this.target.serialize();
    data.text = this.text.serialize();
    data.duration = this.duration.serialize();
    return data;
  }

  deserialize(data) {
    if (!data) return;
    super.deserialize(data);
    this.target.deserialize(data.target);
    this.text.deserialize(data.text);
    this.duration.deserialize(data.duration);
  }

  capture() {
    super.capture();
    setTimeout(() => {
      const activeElement = document.activeElement;
      if (activeElement) activeElement.blur();
      document.body.addEventListener('focusin', this.focusInHandler);
      document.body.addEventListener('click', this.clickHandler);
    }, 33);
  }

  focusInHandler(event) {
    this.target.value = getElementSelector(event.target, null, ['type', 'placeholder', 'name', 'aria-label', 'jsname']);
    document.body.removeEventListener('focusin', this.focusInHandler);
    document.body.removeEventListener('click', this.clickHandler);
    const inputHandler = (event) => {
      this.text.value = event.target.value;
    };
    event.target.addEventListener('input', inputHandler);
    const blurHandler = (event) => {
      event.target.removeEventListener('input', inputHandler);
      event.target.removeEventListener('blur', blurHandler);
    };
    event.target.addEventListener('blur', blurHandler);
    this.captureComplete();
  }

  clickHandler(event) {
    document.body.removeEventListener('focusin', this.focusInHandler);
    document.body.removeEventListener('click', this.clickHandler);
    this.captureComplete();
  }

  captureAtInit() {
    super.captureAtInit();
    this.capture();
  }
}
