import BooleanData from '../../lib/tsunami/data/BooleanData';
import NumberData from '../../lib/tsunami/data/NumberData';
import { awaitTimeout } from '../../lib/tsunami/await';
import StringData from '../../lib/tsunami/data/StringData';
import Data from '../../lib/tsunami/data/Data';
import { app } from '../main';
import BaseEvent from '../../lib/tsunami/events';
import { EventDispatcher } from '../../lib/tsunami/EventDispatcher';

export default class Action extends EventDispatcher {
  constructor(type = 'Action', name = 'Action', description = 'Add an Action') {
    super();
    this.capture = this.capture.bind(this);
    this.play = this.play.bind(this);
    this.reCapture = this.reCapture.bind(this);

    this.type = type;
    this.name = new StringData();
    this.name.addEventListener(Data.CHANGE, () => {
      this.name.length.value = Math.max(this.name.value.length, 4);
    });
    this.name.value = name;
    this.icon = new StringData();
    this.description = new StringData(description);
    this.captureDescription = new StringData();
    this.isTestable = new BooleanData();
    this.isDuplicateable = new BooleanData();
    this.isCaptureable = new BooleanData();
    this.isCapturing = new BooleanData();
    this.changeCursorOnCapture = new BooleanData();
    this.isCapturing.addEventListener(Data.CHANGE, (event) => {
      if (this.changeCursorOnCapture.value) app.model.showCaptureIcon.value = event.data;
    });
    this.isPlaying = new BooleanData();
    this.delay = new NumberData(0);
    this.isSelectedItem = new BooleanData();

    this._array = [this];
  }

  get array() {
    return this._array;
  }

  set array(value) {
    this._array = value;
    this.dispatchEvent(new BaseEvent('change_array', value));
  }

  clone() {}

  copy(action) {
    if (!action) return;
    this.delay.copy(action.delay);
  }

  triggerDelay() {
    let promise1 = awaitTimeout(this.delay.value);
    let promise2 = promise1.then(() => {
      return this.trigger();
    });
    return promise2;
  }

  trigger() {
    return Promise.resolve();
  }

  serialize() {
    return {
      type: this.type,
      delay: this.delay.serialize(),
      name: this.name.serialize(),
    };
  }

  deserialize(data) {
    if (!data) return;
    this.type = data.type;
    this.delay.deserialize(data.delay);
    this.name.deserialize(data.name);
  }

  capture() {
    this.isCapturing.value = true;
  }

  reCapture() {
    this.capture();
  }

  captureComplete() {
    this.isCapturing.value = false;
    app.model.save(this);
  }

  captureAtInit() {}

  play() {
    this.isPlaying.value = true;
    let promise1 = this.trigger();
    let promise2 = promise1.then(() => {
      this.isPlaying.value = false;
      app.model.save('Action.play');
    });
    return promise2;
  }
}
