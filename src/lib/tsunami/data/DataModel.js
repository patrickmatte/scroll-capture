import { ChangeEvent } from '../ChangeEvent';
import Data from './Data';

export default class DataModel extends Data {
  constructor(properties = {}, debug = false) {
    super();
    this.debug = debug;
    this.changeHandler = this.changeHandler.bind(this);
    this._properties = [];

    this.addProperties(properties);
  }

  addProperties(properties) {
    for (let name in properties) {
      this.addProperty(name, properties[name]);
    }
  }

  addProperty(name, val) {
    if (this._properties.indexOf(name) == -1) {
      this._properties.push(name);
      Object.defineProperty(this, name, {
        get: function () {
          return this['_' + name];
        },
        set: function (value) {
          if (this['_' + name] != value) {
            this['_' + name] = value;
            ChangeEvent.dispatch(this, name, value);
            this.changeHandler();
          }
        },
        enumerable: true,
        configurable: true,
      });
    }
    this['_' + name] = val;
  }

  get value() {
    return this;
  }

  changeHandler() {
    ChangeEvent.dispatch(this, 'value', this);
  }

  serialize() {
    let data = {};
    this._properties.forEach((name) => {
      data[name] = this[name];
    });
    if (this.debug) console.log('DataModel.serialize', data);
    return data;
  }

  deserialize(data = {}) {
    if (this.debug) console.log('DataModel.deserialize', data);
    this._properties.forEach((name, i) => {
      if (data.hasOwnProperty(name)) this[name] = data[name];
    });
  }

  destroy() {
    for (let i in this) {
      let data = this[i];
      if (data instanceof Data) {
        data.destroy();
      }
      this[i] = null;
    }
    return super.destroy();
  }
}
