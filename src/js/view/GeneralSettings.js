import UIComponent from '../../lib/tsunami/components/UIComponent';
import { importTemplate } from '../../lib/tsunami/tsunami';
import template from '../../templates/general-settings.html';

export class GeneralSettings extends UIComponent {
  constructor(element) {
    super(element);
  }

  get scope() {
    return this._scope;
  }

  set scope(value) {
    super.scope = value;
    this.childContainer = importTemplate(template, value);
    this.appendChild(this.childContainer);
  }
}
