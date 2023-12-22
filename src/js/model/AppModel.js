import { sendTrackEventMessage } from './GABridge';
import BooleanData from '../../lib/tsunami/data/BooleanData';
import Actions from './Actions';
import Settings from './Settings';
import BaseEvent from '../../lib/tsunami/events';
import DataModel from '../../lib/tsunami/data/DataModel';

export default class AppModel extends DataModel {
  constructor() {
    super({
      selectedAction: 'Pause',
      location: '',
    });
    this.save = this.save.bind(this);
    // this.playSelected = this.playSelected.bind(this);
    // this.captureSelected = this.captureSelected.bind(this);
    // this.deleteSelected = this.deleteSelected.bind(this);
    // this.clearActions = this.clearActions.bind(this);

    this.showCaptureIcon = new BooleanData();
    this.isSaving = new BooleanData();
    // this.isPlayingSelected = new BooleanData();
    // this.isCapturingSelected = new BooleanData();

    this.settings = new Settings();
    this.actions = new Actions();

    // this.addEventListener("selectedAction", (event) => {
    //     console.log("selectedAction change", this.selectedAction);
    // });

    // this.actions.value = [
    // 	new ActionSwipe([new Vector2Data(150, 250), new Vector2Data(400, 450)]),
    // 	new ActionScroll("window", "px", 0, 500),
    // 	new ActionMouseEvent("click", 0, 0),
    // 	// new ActionScroll(".scrollpane", "%", 0, 100),
    // 	// new ActionMouseEvent("click", 0, 0),
    // ];

    this.actions.addEventListener('add', (event) => {
      this.save();
    });
    this.actions.addEventListener('remove', (event) => {
      this.save();
    });
  }

  get actions() {
    return this._actions;
  }

  set actions(value) {
    this._actions = value;
    this.dispatchEvent(new BaseEvent('change_actions', value));
  }

  sendMessage(message) {
    chrome.runtime.sendMessage(message);
  }

  save() {
    this.isSaving.value = true;
    let obj = {
      actions: this.actions.serialize(),
      settings: this.settings.serialize(),
    };
    let json = JSON.stringify(obj);
    chrome.storage.local.set({ json: json }, () => {
      setTimeout(() => {
        this.isSaving.value = false;
      }, 100);
    });
  }

  load() {
    let jsonPromise = chrome.storage.local.get(['json']).then((result) => {
      if (result.json) {
        let data = JSON.parse(result.json);
        this.actions.deserialize(data.actions);
        this.settings.deserialize(data.settings);
      }
    });
    return jsonPromise;
  }

  loadDefaultLocation() {
    const promise = chrome.storage.local.get(['defaultLocation']).then((result) => {
      this._defaultLocation = result.defaultLocation || 'scroll-capture/video/scenario';
    });
    return promise;
  }

  setDefaultLocation(value) {
    this._defaultLocation = value;
    return chrome.storage.local.set({ defaultLocation: value });
  }

  get defaultLocation() {
    return this._defaultLocation;
  }

  setActionIndex(value) {
    return chrome.storage.local.set({ actionIndex: value });
  }

  getActionIndex() {
    return chrome.storage.local.get(['actionIndex']);
  }

  // playSelected() {
  // 	this.isPlayingSelected.value = true;
  // 	let promise = this.actions.selectedItem.value.play();
  // 	promise.then(()=> {
  // 		this.isPlayingSelected.value = false;
  // 		this.save();
  // 	});
  // }

  // captureSelected() {

  // }

  // deleteSelected() {
  // 	this.actions.selectedItem.value.deleteAction();
  // }

  clearActions() {
    sendTrackEventMessage('clearActions', 'click');
    this.actions.clear();
    this.save();
  }
}
