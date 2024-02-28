import Branch from '../../lib/tsunami/Branch';
import { awaitTimeout } from '../../lib/tsunami/await';
import { app } from '../main';
import { sendTrackEventMessage } from '../model/GABridge';

export default class PlayState extends Branch {
  constructor() {
    super();
    this.trackName = 'play_actions';
    this.beforeUnloadHandler = this.beforeUnloadHandler.bind(this);
  }

  get endLocation() {
    return 'scroll-capture/video/scenario';
  }

  show() {
    // app.model.save('PlayState.show');

    window.addEventListener('beforeunload', this.beforeUnloadHandler);

    document.documentElement.setAttribute('data-sc-cursor', app.model.settings.showCursor.value);
    document.documentElement.setAttribute('data-sc-pointer-events', app.model.settings.pointerEvents.value);
    document.documentElement.setAttribute('data-sc-scrollbars', app.model.settings.showScrollbars.value);

    // app.model.setDefaultLocation(this.path).then(() => {
    app.model.getActionIndex().then((result) => {
      const index = isNaN(result.actionIndex) ? 0 : result.actionIndex;
      this.startActions(index);
    });
    // });
  }

  beforeUnloadHandler() {
    this.isPlaying = false;
  }

  startActions(index) {
    if (index == 0) {
      sendTrackEventMessage(this.trackName, { actionslength: app.model.actions.value.length });
    }
    if (app.model.actions.value.length > 0) {
      app.model.sendMessage({ type: 'scrollCaptureUpdatedTabListener', enabled: true, location: 'play', tabId: app.model.tabId.value });
    }
    this.isPlaying = true;
    this.triggerAction(index);
  }

  triggerAction(index) {
    if (index < app.model.actions.value.length) {
      app.model.actions.selectedIndex.value = index;
      let action = app.model.actions.selectedItem.value;
      this.currentAction = action;
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
    if (this.currentAction) {
      this.currentAction.interrupt();
      this.currentAction = null;
    }
    if (app.model.actions.value.length > 0) {
      app.model.sendMessage({ type: 'scrollCaptureUpdatedTabListener', enabled: false, location: 'play', tabId: app.model.tabId.value });
    }
    document.documentElement.removeAttribute('data-sc-cursor');
    document.documentElement.removeAttribute('data-sc-pointer-events');
    document.documentElement.removeAttribute('data-sc-scrollbars');

    app.model.save('PlayState.hide');

    return super.hide();
  }
}
