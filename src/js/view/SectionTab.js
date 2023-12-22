import Router from '../../lib/tsunami/Router';
import UIComponent from '../../lib/tsunami/components/UIComponent';
import { app } from '../main';

export default class SectionTab extends UIComponent {
  constructor(element) {
    super(element);

    this._path = null;
    // this.locationChangeHandler = this.locationChangeHandler.bind(this);
  }

  get path() {
    return this._path;
  }

  set path(value) {
    this._path = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
    // console.log('location', value);
    if (value.indexOf(this.path) != -1) {
      this.element.classList.add('sc-title-tab');
    } else {
      this.element.classList.remove('sc-title-tab');
    }
  }

  //   locationChangeHandler() {
  //     if (app.controller.router.path.indexOf(this.path) != -1) {
  //       this.element.classList.add('sc-title-tab');
  //     } else {
  //       this.element.classList.remove('sc-title-tab');
  //     }
  //   }

  //   elementAdded() {
  //     console.log('elementAdded', this.path);
  //     app.controller.router.addEventListener(Router.CHANGE, this.locationChangeHandler);
  //     return super.elementAdded();
  //   }

  //   elementRemoved() {
  //     console.log('elementRemoved', this.path);
  //     app.controller.router.removeEventListener(Router.CHANGE, this.locationChangeHandler);
  //     return super.elementRemoved();
  //   }
}
