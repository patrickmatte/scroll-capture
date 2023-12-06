import AppModel from './model/AppModel';
import AppView from './view/AppView';
import AppController from './controller/AppController';

export let app;

export default class Main {
  constructor() {
    app = this;
    this.model = new AppModel();
    this.view = new AppView();
    this.controller = new AppController();
  }
}

if (!window.scrollCaptureApp) {
  window.scrollCaptureApp = new Main();
}
app = window.scrollCaptureApp;
app.model.loadDefaultLocation().then(() => {
  app.controller.router.location = app.model.defaultLocation;
});
