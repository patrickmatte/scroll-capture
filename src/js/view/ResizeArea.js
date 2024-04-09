import UIComponent from '../../lib/tsunami/components/UIComponent';
import { events } from '../../lib/tsunami/events';
import { app } from '../main';

export class ResizeArea extends UIComponent {
  constructor(element) {
    super(element);

    this.dragStart = this.dragStart.bind(this);
    this.dragMove = this.dragMove.bind(this);
    this.dragEnd = this.dragEnd.bind(this);

    this.element.addEventListener(events.mousedown, this.dragStart);
  }

  dragStart(event) {
    if (event.which == 3) return;
    event.preventDefault();
    this.resizeH = event.target.getAttribute('data-h');
    this.resizeV = event.target.getAttribute('data-v');
    this.startPosition = this.position.serialize();
    this.startSize = this.size.serialize();
    this.startPoint = this.getTouchPoint(event);
    document.body.addEventListener(events.mousemove, this.dragMove);
    document.body.addEventListener(events.mouseup, this.dragEnd);
  }

  dragMove(event) {
    let point = this.getTouchPoint(event);
    let diff = point.subtract(this.startPoint);
    const minWidth = 240;
    const minHeight = 100;

    switch (this.resizeH) {
      case 'left':
        this.size.x.value = Math.max(this.startSize.x - diff.x, minWidth);
        break;
      case 'right':
        this.size.x.value = Math.max(this.startSize.x + diff.x, minWidth);
        this.position.x.value = this.startPosition.x - (this.size.x.value - this.startSize.x);
        break;
    }
    switch (this.resizeV) {
      case 'top':
        this.size.y.value = Math.max(this.startSize.y - diff.y, minHeight);
        this.position.y.value = this.startPosition.y - (this.size.y.value - this.startSize.y);
        break;
      case 'bottom':
        this.size.y.value = Math.max(this.startSize.y + diff.y, minHeight);
        break;
    }
  }

  dragEnd(event) {
    document.body.removeEventListener(events.mousemove, this.dragMove);
    document.body.removeEventListener(events.mouseup, this.dragEnd);
    app.model.save('ScrollCapture.resizeEnd');
  }
}
