import Action from './Action';
import NumberData from '../../lib/tsunami/data/NumberData';
import { isTouch } from '../../lib/tsunami/window';
import Point from '../../lib/tsunami/geom/Point';
import ArrayData from '../../lib/tsunami/data/ArrayData';
import { events } from '../../lib/tsunami/events';
import StringData from '../../lib/tsunami/data/StringData';
import Vector2Data from '../../lib/tsunami/data/Vector2Data';
import { fontStyles, fontFamilies } from './utils';
import { getFonts } from './fonts';
import { app } from '../main';

export default class ActionText extends Action {
  constructor() {
    super('ActionText', 'Text', 'Add text');

    this.isTestable.value = false;
    this.isCaptureable.value = true;
    this.isDuplicateable.value = true;
    this.changeCursorOnCapture.value = false;
    this.icon.value = 'fa-solid fa-font';

    this.text = new StringData();
    this.position = new Vector2Data();
    this.size = new Vector2Data();
    this.fontFamily = new StringData();
    this.fontStyle = new StringData();

    this.fontStyles = new ArrayData();

    const familiesChangeHandler = (event) => {
      console.log('app.model.fontFamilies change this.fontFamily.value', this.fontFamily.value);
      if (app.model.fontFamilies.value.indexOf(this.fontFamily.value) == -1) {
        let index = app.model.fontFamilies.value.indexOf('Helvetica');
        if (index == -1) index = app.model.fontFamilies.value.indexOf('Arial');
        if (index == -1) index = 0;
        this.fontFamily.value = app.model.fontFamilies.value[index];
      }
    };

    app.model.fontFamilies.addEventListener('value', familiesChangeHandler);

    this.fontFamily.addEventListener('value', (event) => {
      console.log('fontFamily change', 'fontFamily.value=', this.fontFamily.value);
      this.fontStyles.value = app.model.fontStylesByFamily[this.fontFamily.value];
    });

    this.fontStyles.addEventListener('value', (event) => {
      console.log('fontStyles change', 'fontStyles.value', this.fontStyles.value);
      const fontStyleIndex = this.fontStyles.value.indexOf(this.fontStyle.value);
      console.log('fontStyleIndex', fontStyleIndex);
      if (fontStyleIndex == -1) {
        let index = this.fontStyles.value.indexOf('Regular');
        if (index == -1) index = this.fontStyles.value.indexOf('Book');
        if (index == -1) index = this.fontStyles.value.indexOf('Roman');
        if (index == -1) index = this.fontStyles.value.indexOf('Plain');
        if (index == -1) index = 0;
        this.fontStyle.value = this.fontStyles.value[index];
      }
    });

    this.fontStyle.addEventListener('value', (event) => {
      console.log('fontStyle change fontStyle.value=', this.fontStyle.value);
    });
  }

  clone() {
    return new ActionText();
  }

  copy(action) {
    super.copy(action);
    this.text.copy(action.text);
    this.position.copy(action.position);
    this.size.copy(action.size);
    this.fontFamily.copy(action.fontFamily);
    this.fontStyle.copy(action.fontStyle);
  }

  trigger() {
    return Promise.resolve();
  }

  serialize() {
    let data = super.serialize();
    data.text = this.text.serialize();
    data.position = this.position.serialize();
    data.size = this.position.serialize();
    data.fontFamily = this.fontFamily.serialize();
    data.fontStyle = this.fontStyle.serialize();
    return data;
  }

  deserialize(data) {
    if (!data) return;
    console.log('deserialize', data);
    super.deserialize(data);
    this.text.deserialize(data.text);
    this.position.deserialize(data.position);
    this.size.deserialize(data.size);
    this.fontFamily.deserialize(data.fontFamily);
    this.fontStyle.deserialize(data.fontStyle);
  }

  captureAtInit() {
    super.captureAtInit();
    console.log('captureAtInit setFonts');
    app.model.setFonts();
    // getFonts().then((result) => {
    //   const currentFontStyle = this.fontStyle.value;
    //   const currentFontFamily = this.fontFamily.value;
    //   console.log('captureAtInit currentFontStyle=', currentFontStyle, 'currentFontFamily=', currentFontFamily);
    //   this.fontStylesByFamily = result.styles;
    //   app.model.fontFamilies.value = result.families;
    //   if (currentFontFamily) this.fontFamily.value = currentFontFamily;
    //   if (currentFontStyle) this.fontStyle.value = currentFontStyle;
    // });
    this.capture();
  }
}
