import EventHandler from '../../lib/tsunami/components/EventHandler';
import UIComponent from '../../lib/tsunami/components/UIComponent';
import ArrayData from '../../lib/tsunami/data/ArrayData';

export class VideoScrollpane extends UIComponent {
  constructor(element) {
    super(element);

    this.addEventHandler = new EventHandler(null, ArrayData.ADD, (event) => {
      const actionId = event.data.value[0].id;
      const selector = `sc-action[data-id='${actionId}']`;
      let element = this.querySelector(selector).element;
      this.scrollToElement(element, 0.5);
    });
  }

  get actions() {
    return this._actions;
  }

  set actions(value) {
    this._actions = value;
    this.addEventHandler.dispatcher = value;
  }
}
