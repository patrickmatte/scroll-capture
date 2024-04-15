import UIComponent from '../../lib/tsunami/components/UIComponent';
import { define } from '../../lib/tsunami/tsunami';
import { events } from '../../lib/tsunami/events';
import { app } from '../main';
import template from '../../templates/scroll-capture.html';
import CaptureVideo from './CaptureVideo';
import CaptureImage from './CaptureImage';
import Info from './Info';
import SectionTab from './SectionTab';
import { hackHoverStates } from './hackHoverStates';
import CaptureTest from './CaptureTest';
import { ResizeArea } from './ResizeArea';
import SectionVideo from './SectionVideo';
import { CaptureImageDownload } from './CaptureImageDownload';

// import evaluate from 'simple-evaluate';
// import { parseExpressionAt } from 'acorn';
// import { evaluate } from '../../lib/tsunami/utils/estree-eval';

export default class ScrollCapture extends UIComponent {
  constructor(element) {
    super(element);

    // const scope = {
    //   test1: 5,
    //   test2: 10,
    //   test3: 4,
    // };
    // const expression = '`${test1 * 2} - 1 + 4` + test2 + test3';
    // const ast = parseExpressionAt(expression, 0);
    // const value = evaluate(ast, scope);
    // console.log('value', value); // answer is 10 - 1 + 4104

    // const result = evaluate({ scope: { index: 1, provider: ['yo0', 'yo1', 'yo2', 'yo3'] } }, 'scope.provider[scope.index]');
    // console.log('result', result);

    // const expression = '`${scope.test.list[scope.test.index1 + 1 + scope.test.index2 + scope.test.indices[0] + scope.test.func(0)]}`';
    // const expression = '`${scope.test.index1}`';
    // console.log('expression', expression);
    // const ast = parseExpressionAt(expression, 0, { ecmaVersion: 2020 });
    // console.log('ast', ast);
    // const context = { scope: app.model };
    // const value = evaluate(ast, context);
    // console.log('value', value);

    hackHoverStates();

    this.position = null;

    this.dragStart = this.dragStart.bind(this);
    this.dragMove = this.dragMove.bind(this);
    this.dragEnd = this.dragEnd.bind(this);

    this.element.addEventListener(events.mousedown, this.dragStart);

    this.test = this.element.querySelector('sc-test').component;
    this.video = this.element.querySelector('sc-capture-video').component;
    this.image = this.element.querySelector('sc-capture-image').component;
    this.info = this.element.querySelector('sc-info').component;

    this.branches['test'] = this.test;
    this.branches['video'] = this.video;
    this.branches['image'] = this.image;
    this.branches['info'] = this.info;
    this.branches['video-download'] = this.element.querySelector('sc-video').component;
    this.branches['image-download'] = this.element.querySelector('sc-image-download').component;

    this.defaultChild = 'video';
  }

  dragStart(event) {
    if (event.which == 3) return;
    if (event.target.classList.contains('sc-drag-area')) {
      event.preventDefault();
      this.startPosition = this.position.serialize();
      this.startPoint = this.getTouchPoint(event).math(Math.round);
      document.body.addEventListener(events.mousemove, this.dragMove);
      document.body.addEventListener(events.mouseup, this.dragEnd);
    }
  }

  dragMove(event) {
    let point = this.getTouchPoint(event).math(Math.round);
    let diff = this.startPoint.subtract(point);
    this.position.x.value = this.startPosition.x + diff.x;
    this.position.y.value = this.startPosition.y - diff.y;
  }

  dragEnd(event) {
    document.body.removeEventListener(events.mousemove, this.dragMove);
    document.body.removeEventListener(events.mouseup, this.dragEnd);
    app.model.save('ScrollCapture.dragEnd');
  }
}

ScrollCapture.template = template;

define('sc-test', CaptureTest);
define('sc-capture-video', CaptureVideo);
define('sc-capture-image', CaptureImage);
define('sc-info', Info);
define('sc-section-tab', SectionTab);
define('sc-resize-area', ResizeArea);
define('sc-video', SectionVideo);
define('sc-image-download', CaptureImageDownload);
