import { importTemplate, define } from '../../lib/tsunami/tsunami';
import App from '../../lib/tsunami/App';
import ScrollCapture from './ScrollCapture';
import { loadStyle } from '../../lib/tsunami/load/loadStyle';
import Data from '../../lib/tsunami/data/Data';
import RouterButton from './RouterButton';
import { app } from '../main';
import UIButton from '../../lib/tsunami/components/UIButton';

export default class AppView extends App {
  constructor(scope) {
    super(document.body);

    this.scope = app.model;
    this.scrollCapture = importTemplate(ScrollCapture.template, app.model).component;
    this.appendChild(this.scrollCapture.element);

    app.model.showCaptureIcon.addEventListener(Data.CHANGE, (event) => {
      this.element.setAttribute('is-capturing', event.data);
    });
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
