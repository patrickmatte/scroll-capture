import UIList from '../../lib/tsunami/components/UIList';
import UIText from '../../lib/tsunami/components/UIText';
import ArrayData from '../../lib/tsunami/data/ArrayData';
import NumberData from '../../lib/tsunami/data/NumberData';
import StringData from '../../lib/tsunami/data/StringData';
import { events } from '../../lib/tsunami/events';
import Point from '../../lib/tsunami/geom/Point';
import { define } from '../../lib/tsunami/tsunami';
import { round1 } from '../../lib/tsunami/utils/number';
import { sendTrackEventMessage } from '../model/GABridge';

export default class Rating extends UIList {
  constructor(element) {
    super(element);
    const zero = 'fa-regular fa-star';
    const full = 'fa-solid fa-star';

    this.provider = new ArrayData(new StringData(zero), new StringData(zero), new StringData(zero), new StringData(zero), new StringData(zero));

    this.rating = new NumberData(0, [round1, (val) => Math.max(0, val)]);
    this.rating.addEventListener('value', (event) => {
      this.provider.value.forEach((star, i) => {
        star.value = event.data - i > 0 ? full : zero;
      });
    });

    element.addEventListener(events.mousemove, (event) => {
      const rect = this.element.getBoundingClientRect();
      const point = new Point(event.clientX - rect.left, event.clientY - rect.top);
      point.math(Math.round);
      this.rating.value = (point.x / rect.width) * 5;
    });

    element.addEventListener(events.click, (event) => {
      sendTrackEventMessage('rating', { value: Math.ceil(this.rating.value) });
    });
  }
}

class Star extends UIText {
  constructor(element) {
    super(element);
  }
}

define('sc-star', Star);
