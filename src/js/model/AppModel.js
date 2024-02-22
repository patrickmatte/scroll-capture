import BooleanData from '../../lib/tsunami/data/BooleanData';
import Actions from './Actions';
import CaptureVideoModel from './CaptureVideoModel';
import BaseEvent from '../../lib/tsunami/events';
import DataModel from '../../lib/tsunami/data/DataModel';
import CaptureImageModel from './CaptureImageModel';
import StringData from '../../lib/tsunami/data/StringData';
import NumberData from '../../lib/tsunami/data/NumberData';
import { TestModel } from './TestModel';
import ArrayData from '../../lib/tsunami/data/ArrayData';

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

    this.settings = new CaptureVideoModel();
    this.actions = new Actions();
    this.imgCapSettings = new CaptureImageModel();
    this.tabId = new NumberData();
    this.test = new TestModel();
    this.ffmpegLogs = new ArrayData();

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

    this.actions.addEventListener('add', this.save);
    this.actions.addEventListener('remove', this.save);
  }

  get actions() {
    return this._actions;
  }

  set actions(value) {
    this._actions = value;
    this.dispatchEvent(new BaseEvent('change_actions', value));
  }

  sendMessage(message) {
    try {
      chrome.runtime.sendMessage(message);
    } catch (error) {
      console.log(error);
    }
  }

  save() {
    this.isSaving.value = true;
    let obj = {
      actions: this.actions.serialize(),
      settings: this.settings.serialize(),
      imgCapSettings: this.imgCapSettings.serialize(),
    };
    let json = JSON.stringify(obj);

    const saveHandler = () => {
      setTimeout(() => {
        this.isSaving.value = false;
      }, 100);
    };
    try {
      chrome.storage.local.set({ json: json }, saveHandler);
    } catch (error) {
      console.log(error);
    }
  }

  load() {
    let jsonPromise = chrome.storage.local.get(['json']).then((result) => {
      if (result.json) {
        let data = JSON.parse(result.json);
        this.actions.removeEventListener('add', this.save);
        this.actions.removeEventListener('remove', this.save);

        this.actions.deserialize(data.actions);
        this.settings.deserialize(data.settings);
        this.imgCapSettings.deserialize(data.imgCapSettings);

        this.actions.addEventListener('add', this.save);
        this.actions.addEventListener('remove', this.save);
      }
    });
    return jsonPromise;
  }

  setDefaultLocation(value) {
    return chrome.storage.local.set({ defaultLocation: value });
  }

  setActionIndex(value) {
    let promise = Promise.resolve();
    try {
      promise = chrome.storage.local.set({ actionIndex: value });
    } catch (error) {
      console.log(error);
    }
    return promise;
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
    this.actions.clear();
    this.save();
  }
}
