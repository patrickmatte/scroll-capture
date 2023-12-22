import UIComponent from '../../lib/tsunami/components/UIComponent';
import * as tsunami from '../../lib/tsunami/tsunami';
import { events } from '../../lib/tsunami/events';
import { app } from '../main';
import template from '../../templates/scroll-capture.html';
import CaptureVideo from './Capturevideo';
import CaptureImage from './CaptureImage';
import SectionTab from './SectionTab';

export default class ScrollCapture extends UIComponent {
  constructor(element) {
    super(element);

    this.position = null;

    this.dragStart = this.dragStart.bind(this);
    this.dragMove = this.dragMove.bind(this);
    this.dragEnd = this.dragEnd.bind(this);

    // let title = this.element.querySelector('.sc-window.sc-window-main > .sc-title');
    this.element.addEventListener(events.mousedown, this.dragStart);

    this.video = this.element.querySelector("[is='sc-capture-video']").component;
    this.image = this.element.querySelector("[is='sc-capture-image']").component;

    this.branches['video'] = this.video;
    this.branches['image'] = this.image;

    this.defaultChild = 'video';
  }

  dragStart(event) {
    if (event.which == 3) return;
    if (event.target.classList.contains('sc-drag-area')) {
      event.preventDefault();
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

tsunami.define('sc-capture-video', CaptureVideo);
tsunami.define('sc-capture-image', CaptureImage);
tsunami.define('sc-section-tab', SectionTab);
