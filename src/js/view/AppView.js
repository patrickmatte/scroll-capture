import { importTemplate, define } from '../../lib/tsunami/tsunami';
import App from '../../lib/tsunami/App';
import ScrollCapture from './ScrollCapture';
import { loadStyle } from '../../lib/tsunami/load/loadStyle';
import RouterButton from './RouterButton';
import { app } from '../main';
import { attributeBind } from '../../lib/tsunami/directives/attributeDirective';

export default class AppView extends App {
  constructor() {
    super(document.body);

    // this.scope = app.model;
    this.scrollCapture = importTemplate(ScrollCapture.template, app.model).component;
    this.appendChild(this.scrollCapture.element);

    this.pointerCaptureBind = attributeBind(this, 'data-pointer-capture', '${showCaptureIcon.value}', app.model);
  }

  load() {
    let contentCSS = chrome.runtime.getURL('content.css');
    let contentCSSPromise = loadStyle(contentCSS);
    let fontawesomeCSS = chrome.runtime.getURL('fontawesome.css');
    let fontawesomeCSSPromise = loadStyle(fontawesomeCSS);
    return Promise.all([contentCSSPromise, fontawesomeCSSPromise]);
  }
}

define('router-button', RouterButton);
define('scroll-capture', ScrollCapture);
