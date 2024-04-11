import Section from './Section';
import template from '../../templates/capture-image.html';
import { define, importTemplate } from '../../lib/tsunami/tsunami';
import CaptureImageSettings from './CaptureImageSettings';
import { CaptureImageDownload } from './CaptureImageDownload';

export default class CaptureImage extends Section {
  constructor(element) {
    super(element);

    this.defaultChild = 'settings';
  }

  get scope() {
    return this._scope;
  }

  set scope(value) {
    super.scope = value;
    if (!value) return;

    this.childContainer = importTemplate(template, value);
    this.appendChild(this.childContainer);

    this.branches['settings'] = this.element.querySelector('sc-image-settings').component;
    this.branches['download'] = this.element.querySelector('sc-image-download').component;
    // this.branches['info'] = this.element.querySelector('sc-info').component;
  }
}

define('sc-image-settings', CaptureImageSettings);
define('sc-image-download', CaptureImageDownload);
