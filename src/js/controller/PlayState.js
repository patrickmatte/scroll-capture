import Branch from '../../lib/tsunami/Branch';
import { awaitTimeout } from '../../lib/tsunami/await';
import { app } from '../main';

export default class PlayState extends Branch {
  constructor() {
    super();
    this.beforeUnloadHandler = this.beforeUnloadHandler.bind(this);
  }

  get endLocation() {
    return 'scroll-capture/video/scenario';
  }

  show() {
    app.model.save();

    window.addEventListener('beforeunload', this.beforeUnloadHandler);

    document.documentElement.setAttribute('data-sc-cursor', app.model.settings.showCursor.value);
    document.documentElement.setAttribute('data-sc-scrollbars', app.model.settings.showScrollbars.value);

    app.model.setDefaultLocation(this.path).then(() => {
      app.model.getActionIndex().then((result) => {
        const index = isNaN(result.actionIndex) ? 0 : result.actionIndex;
        this.startActions(index);
      });
    });
  }

  beforeUnloadHandler() {
    this.isPlaying = false;
  }

  startActions(index) {
    if (app.model.actions.value.length > 0) {
      app.model.sendMessage({ type: 'scrollCaptureUpdatedTabListener', enabled: true });
    }
    this.isPlaying = true;
    this.triggerAction(index);
  }

  triggerAction(index) {
    if (index < app.model.actions.value.length) {
      app.model.actions.selectedIndex.value = index;
      let action = app.model.actions.selectedItem.value;
      let promise = action.triggerDelay();
      promise.then(() => {
        app.model.setActionIndex(index + 1).then(() => {
          if (this.isPlaying) this.triggerAction(index + 1);
        });
      });
    } else {
      awaitTimeout(0.25).then(() => this.allComplete());
    }
  }

  allComplete() {
    this.router.location = this.endLocation;
  }

  hide() {
    window.removeEventListener('beforeunload', this.beforeUnloadHandler);
    this.isPlaying = false;
    if (app.model.actions.value.length > 0) {
      app.model.sendMessage({ type: 'scrollCaptureUpdatedTabListener', enabled: false });
    }
    document.documentElement.removeAttribute('data-sc-cursor');
    document.documentElement.removeAttribute('data-sc-scrollbars');
    return super.hide();
  }
}
