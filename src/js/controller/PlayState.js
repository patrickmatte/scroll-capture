import Branch from '../../lib/tsunami/Branch';
import { awaitTimeout } from '../../lib/tsunami/await';
import { app } from '../main';

export default class PlayState extends Branch {
  constructor() {
    super();
  }

  get endLocation() {
    return 'scroll-capture/scenario';
  }

  show() {
    app.model.save();

    document.documentElement.setAttribute('data-sc-cursor', app.model.settings.showCursor.value);
    document.documentElement.setAttribute('data-sc-scrollbars', app.model.settings.showScrollbars.value);

    app.model.setDefaultLocation(this.path).then(() => {
      app.model.getActionIndex().then((result) => {
        let index = result.actionIndex;
        if (isNaN(index)) index = 0;
        this.startActions(index);
      });
    });
  }

  startActions(index) {
    awaitTimeout(0.25).then(() => this.triggerAction(index));
  }

  triggerAction(index) {
    if (index < app.model.actions.value.length) {
      app.model.actions.selectedIndex.value = index;
      let action = app.model.actions.selectedItem.value;
      let promise = action.triggerDelay();
      promise.then(() => {
        app.model.setActionIndex(index + 1).then(() => {
          this.triggerAction(index + 1);
        });
      });
    } else {
      awaitTimeout(0.5).then(() => this.allComplete());
    }
  }

  allComplete() {
    this.router.location = this.endLocation;
  }

  hide() {
    document.documentElement.removeAttribute('data-sc-cursor');
    document.documentElement.removeAttribute('data-sc-scrollbars');
    return super.hide();
  }
}
