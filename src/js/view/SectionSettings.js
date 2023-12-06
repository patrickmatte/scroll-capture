import Section from './Section';
import { app } from '../main';

export default class SectionSettings extends Section {
  constructor(element) {
    super(element);
  }

  showDelayComplete() {
    let promise = super.showDelayComplete();

    app.model.setDefaultLocation(this.path);
    // this.router.redirect('default', () => {
    //   return this.path;
    // });

    app.model.save();

    return promise;
  }
}
