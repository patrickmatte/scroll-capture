import UIComponent from '../../lib/tsunami/components/UIComponent';
import * as tsunami from '../../lib/tsunami/tsunami';
import { events } from '../../lib/tsunami/events';
import { app } from '../main';
import ActionsView from './ActionsView';
import template from '../../templates/scroll-capture.html';
import WindowContentMain from './WindowContentMain';

export default class ScrollCapture extends UIComponent {
  constructor(element) {
    super(element);

    this.position = null;

    this.dragStart = this.dragStart.bind(this);
    this.dragMove = this.dragMove.bind(this);
    this.dragEnd = this.dragEnd.bind(this);

    let title = this.element.querySelector('.sc-window.sc-window-main > .sc-title');
    title.addEventListener(events.mousedown, this.dragStart);

    this.windowContent = this.element.querySelector(".sc-window-content[is='sc-window-content-main']").component;

    this.branches['scenario'] = this.windowContent.scenario;
    this.branches['video'] = this.windowContent.video;
    this.branches['settings'] = this.windowContent.settings;
  }

  hide() {
    console.log('ScrollCapture hide');
    const promise = app.model.setActionIndex(0);
    const promise2 = promise.then(() => {
      console.log('ScrollCapture hide complete');
      return super.hide();
    });
    return promise2;
  }

  dragStart(event) {
    event.preventDefault();
    if (event.target.classList.contains('sc-drag-area')) {
      this.startPosition = this.position.serialize();
      this.startPoint = this.getTouchPoint(event);
      document.body.addEventListener(events.mousemove, this.dragMove);
      document.body.addEventListener(events.mouseup, this.dragEnd);
    }
  }

  dragMove(event) {
    let point = this.getTouchPoint(event);
    let diff = this.startPoint.subtract(point);
    this.position.x.value = this.startPosition.x + diff.x;
    this.position.y.value = this.startPosition.y - diff.y;
  }

  dragEnd(event) {
    document.body.removeEventListener(events.mousemove, this.dragMove);
    document.body.removeEventListener(events.mouseup, this.dragEnd);
    app.model.save();
  }
}

ScrollCapture.template = template;

tsunami.define('sc-actions-view', ActionsView);
tsunami.define('sc-window-content-main', WindowContentMain);
