import Vector2Data from '../../lib/tsunami/data/Vector2Data';
import ArrayData from '../../lib/tsunami/data/ArrayData';
import BooleanData from '../../lib/tsunami/data/BooleanData';
import Data from '../../lib/tsunami/data/Data';
import { app } from '../main';
import NumberData from '../../lib/tsunami/data/NumberData';
import { supportedFormatsAndCodecs } from './FormatsAndCodecs';
import Point from '../../lib/tsunami/geom/Point';
import { round1, decimalToPlace } from '../../lib/tsunami/utils/number';

export default class CaptureVideoModel {
  constructor() {
    const supportedFormats = supportedFormatsAndCodecs;

    this.darkModeChangeHandler = this.darkModeChangeHandler.bind(this);

    this.showScrollbars = new BooleanData(false);
    this.showCursor = new BooleanData(true);
    // this.pointerEvents = new BooleanData(true);

    this.position = new Vector2Data(50, 50);
    this.devicePixelRatio = new NumberData(decimalToPlace(window.devicePixelRatio, 2, Math.floor));

    this.windowSizeChangeHandler = this.windowSizeChangeHandler.bind(this);
    this.windowResizeHandler = this.windowResizeHandler.bind(this);

    this.windowSize = new Vector2Data();
    this.windowSize.addEventListener(Data.CHANGE, this.windowSizeChangeHandler);

    this.windowSizeMax = new Vector2Data();
    this.innerSize = new Point();
    this.outerSize = new Point();
    this.availSize = new Point();
    this.diffSize = new Point();

    window.addEventListener('resize', this.windowResizeHandler);

    // this.format = new ArrayData();
    // this.format.addEventListener('value', (event) => {
    //   this.format.selectedItem.value = this.format.value[0];
    // });
    // this.format.selectedItem.addEventListener('value', (event) => {
    //   const format = supportedFormats.video.find((supportedFormat) => {
    //     return supportedFormat.name == this.format.selectedItem.value;
    //   });
    //   this.extension = format.ext;
    //   this.videoCodecs.value = format.video;
    //   this.audioCodecs.value = format.audio;
    // });

    this.exportVideo = new BooleanData(true);
    this.exportVideo.addEventListener('value', (event) => {
      if (!this.exportVideo.value && !this.exportAudio.value) this.exportAudio.value = true;
    });

    // this.videoCodecs = new ArrayData();
    // this.videoCodecs.addEventListener('value', (event) => {
    //   this.videoCodecs.selectedItem.value = this.videoCodecs.value[0];
    // });

    this.videoBitsPerSecond = new NumberData(16);

    this.exportAudio = new BooleanData(false);
    this.exportAudio.addEventListener('value', (event) => {
      if (!this.exportVideo.value && !this.exportAudio.value) this.exportVideo.value = true;
    });

    // this.audioCodecs = new ArrayData();
    // this.audioCodecs.addEventListener('value', (event) => {
    //   this.audioCodecs.selectedItem.value = this.audioCodecs.value[0];
    // });

    this.audioBitsPerSecond = new NumberData(256);

    // // set formats
    // const formats = supportedFormats.video;
    // const names = formats.map((format) => {
    //   return format.name;
    // });
    // this.format.value = names;

    this.darkModeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)');

    this.isColorThemeLight = new BooleanData();
    this.isColorThemeLight.addEventListener(Data.CHANGE, (event) => {
      let msg = {
        type: 'scrollCaptureColorTheme',
        isColorThemeLight: event.data,
      };
      app.model.sendMessage(msg);
    });

    this.colorThemes = new ArrayData('Dark', 'Light', 'Auto');
    this.colorThemes.selectedItem.value = 'Dark';
    this.switchColorTheme();
    this.colorThemes.selectedItem.addEventListener(Data.CHANGE, () => {
      this.switchColorTheme();
    });

    this.pixelRatio = new NumberData(this.devicePixelRatio);

    this.windowResizeHandler();
  }

  windowResizeHandler() {
    // const ratio = this.pixelRatio.value / this.devicePixelRatio.value;
    this.devicePixelRatio.value = decimalToPlace(window.devicePixelRatio, 2, Math.floor);
    this.pixelRatio.value = Math.min(this.pixelRatio.value, this.devicePixelRatio.value);
    this.innerSize.set(window.innerWidth, window.innerHeight);
    this.outerSize.set(window.outerWidth, window.outerHeight);
    this.availSize.set(screen.availWidth, screen.availHeight);
    this.diffSize = this.outerSize.subtract(this.innerSize);
    this.windowSizeMax.deserialize(this.availSize.subtract(this.diffSize));

    this.windowSize.removeEventListener(Data.CHANGE, this.windowSizeChangeHandler);
    this.windowSize.x.value = window.innerWidth;
    this.windowSize.y.value = window.innerHeight;
    this.windowSize.addEventListener(Data.CHANGE, this.windowSizeChangeHandler);
  }

  windowSizeChangeHandler() {
    const msg = {
      type: 'scrollCaptureResizeWindow',
      width: this.windowSize.x.value + this.diffSize.x,
      height: this.windowSize.y.value + this.diffSize.y,
    };
    app.model.sendMessage(msg);
  }

  switchColorTheme() {
    let colorTheme = this.colorThemes.selectedItem.value;
    switch (colorTheme) {
      case 'Dark':
      case 'Light':
        this.darkModeMatchMedia.removeEventListener('change', this.darkModeChangeHandler);
        this.isColorThemeLight.value = colorTheme == 'Light';
        break;
      default:
        this.darkModeMatchMedia.addEventListener('change', this.darkModeChangeHandler);
        this.darkModeChangeHandler();
        break;
    }
  }

  darkModeChangeHandler() {
    let isDarkMode = this.darkModeMatchMedia.matches;
    this.isColorThemeLight.value = !isDarkMode;
  }

  serialize() {
    return {
      showCursor: this.showCursor.serialize(),
      // pointerEvents: this.pointerEvents.serialize(),
      showScrollbars: this.showScrollbars.serialize(),
      position: this.position.serialize(),
      // format: this.format.selectedItem.serialize(),
      videoBitsPerSecond: this.videoBitsPerSecond.serialize(),
      // videoCodec: this.videoCodecs.selectedItem.serialize(),
      audioBitsPerSecond: this.audioBitsPerSecond.serialize(),
      // audioCodec: this.audioCodecs.selectedItem.serialize(),
      colorThemes: this.colorThemes.selectedItem.value,
      pixelRatio: this.pixelRatio.serialize(),
      exportAudio: this.exportAudio.serialize(),
      exportVideo: this.exportVideo.serialize(),
      windowSize: this.windowSize.serialize(),
    };
  }

  deserialize(data) {
    if (!data) return;
    if (data.hasOwnProperty('showCursor')) this.showCursor.deserialize(data.showCursor);
    // if (data.hasOwnProperty('pointerEvents')) this.pointerEvents.deserialize(data.pointerEvents);
    if (data.hasOwnProperty('showScrollbars')) this.showScrollbars.deserialize(data.showScrollbars);
    if (data.hasOwnProperty('position')) this.position.deserialize(data.position);
    // if (data.hasOwnProperty('format')) this.format.selectedItem.deserialize(data.format);
    if (data.hasOwnProperty('videoBitsPerSecond')) this.videoBitsPerSecond.deserialize(data.videoBitsPerSecond);
    // if (data.hasOwnProperty('videoCodec')) this.videoCodecs.selectedItem.deserialize(data.videoCodec);
    if (data.hasOwnProperty('audioBitsPerSecond')) this.audioBitsPerSecond.deserialize(data.audioBitsPerSecond);
    // if (data.hasOwnProperty('audioCodec')) this.audioCodecs.selectedItem.deserialize(data.audioCodec);
    if (data.hasOwnProperty('colorThemes')) this.colorThemes.selectedItem.value = data.colorThemes;
    if (data.hasOwnProperty('pixelRatio')) this.pixelRatio.deserialize(Math.min(data.pixelRatio, this.devicePixelRatio.value));
    if (data.hasOwnProperty('exportAudio')) this.exportAudio.deserialize(data.exportAudio);
    if (data.hasOwnProperty('exportVideo')) this.exportVideo.deserialize(data.exportVideo);
    // if (data.hasOwnProperty('windowSize')) this.windowSize.deserialize(data.windowSize);
  }

  getSettingsForRecording() {
    const settings = {
      // format: this.format.selectedItem.value,
      videoBitsPerSecond: this.videoBitsPerSecond.value,
      audioBitsPerSecond: this.audioBitsPerSecond.value,
      // videoCodec: this.videoCodecs.selectedItem.value,
      // audioCodec: this.audioCodecs.selectedItem.value,
      pixelRatio: this.pixelRatio.value,
      tabWidth: this.windowSize.x.value,
      tabHeight: this.windowSize.y.value,
      extension: this.extension,
      exportAudio: this.exportAudio.value,
      exportVideo: this.exportVideo.value,
      zoomLevel: window.outerWidth / window.innerWidth,
      tabId: app.model.tabId.value,
    };
    return settings;
  }
}
