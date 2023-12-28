import Vector2Data from '../../lib/tsunami/data/Vector2Data';
import ArrayData from '../../lib/tsunami/data/ArrayData';
import BooleanData from '../../lib/tsunami/data/BooleanData';
import Data from '../../lib/tsunami/data/Data';
import { app } from '../main';
import { sendTrackEventMessage } from './GABridge';
import Throttle from '../../lib/tsunami/utils/Throttle';
import NumberData from '../../lib/tsunami/data/NumberData';
import { getSupportedFormatsAndCodecs } from './FormatsAndCodecs';
import Point from '../../lib/tsunami/geom/Point';

export default class Settings {
  constructor() {
    const supportedFormats = getSupportedFormatsAndCodecs();

    this.darkModeChangeHandler = this.darkModeChangeHandler.bind(this);

    this.showCursor = new BooleanData(true);
    this.showScrollbars = new BooleanData(true);

    this.position = new Vector2Data(50, 50);
    this.devicePixelRatio = window.devicePixelRatio || 1;

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

    this.trackers = {};

    this.format = new ArrayData();
    this.format.addEventListener('value', (event) => {
      this.format.selectedItem.value = this.format.value[0];
    });
    this.format.selectedItem.addEventListener('value', (event) => {
      const format = supportedFormats.video.find((supportedFormat) => {
        return supportedFormat.name == this.format.selectedItem.value;
      });
      this.extension = format.ext;
      this.videoCodecs.value = format.video;
      this.audioCodecs.value = format.audio;
    });

    this.exportVideo = new BooleanData(true);

    this.videoCodecs = new ArrayData();
    this.videoCodecs.addEventListener('value', (event) => {
      this.videoCodecs.selectedItem.value = this.videoCodecs.value[0];
    });

    this.videoBitsPerSecond = new NumberData(16);
    this.trackers.videoBitsPerSecond = new Throttle(() => {
      sendTrackEventMessage('settings', 'videoBitsPerSecond', this.videoBitsPerSecond.value);
    });

    this.exportAudio = new BooleanData(true);

    this.audioCodecs = new ArrayData();
    this.audioCodecs.addEventListener('value', (event) => {
      this.audioCodecs.selectedItem.value = this.audioCodecs.value[0];
    });

    this.audioBitsPerSecond = new NumberData(256);
    this.trackers.audioBitsPerSecond = new Throttle(() => {
      sendTrackEventMessage('settings', 'audioBitsPerSecond', this.audioBitsPerSecond.value);
    }, 1000);

    // set formats
    const formats = supportedFormats.video;
    const names = formats.map((format) => {
      return format.name;
    });
    this.format.value = names;

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
    this.trackers.colorThemes = new Throttle(() => {
      sendTrackEventMessage('settings', 'colorTheme', this.colorThemes.selectedItem.value);
    });

    this.pixelRatio = new NumberData(this.devicePixelRatio);
    this.trackers.pixelRatio = new Throttle(() => {
      sendTrackEventMessage('settings', 'pixelRatio', this.pixelRatio.value);
    });

    this.windowResizeHandler();

    this.enableTracking();
  }

  enableTracking() {
    this.videoBitsPerSecond.addEventListener(Data.CHANGE, this.trackers.videoBitsPerSecond.throttle);
    this.audioBitsPerSecond.addEventListener(Data.CHANGE, this.trackers.audioBitsPerSecond.throttle);
    this.colorThemes.selectedItem.addEventListener(Data.CHANGE, this.trackers.colorThemes.throttle);
    this.pixelRatio.addEventListener(Data.CHANGE, this.trackers.pixelRatio.throttle);
  }

  disableTracking() {
    this.videoBitsPerSecond.removeEventListener(Data.CHANGE, this.trackers.videoBitsPerSecond.throttle);
    this.audioBitsPerSecond.removeEventListener(Data.CHANGE, this.trackers.audioBitsPerSecond.throttle);
    this.colorThemes.selectedItem.removeEventListener(Data.CHANGE, this.trackers.colorThemes.throttle);
    this.pixelRatio.removeEventListener(Data.CHANGE, this.trackers.pixelRatio.throttle);
  }

  windowResizeHandler() {
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
    console.log('windowSizeChangeHandler');
    // const innerSize = new Point(window.innerWidth, window.innerHeight);
    // const outerSize = new Point(window.outerWidth, window.outerHeight);
    // const availSize = new Point(screen.availWidth, screen.availHeight);
    // const diffSize = this.outerSize.subtract(this.innerSize);
    const msg = {
      type: 'scrollCaptureResizeWindow',
      width: this.windowSize.x.value + this.diffSize.x,
      height: this.windowSize.y.value + this.diffSize.y,
    };
    console.log('msg', msg);
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
      showScrollbars: this.showScrollbars.serialize(),
      position: this.position.serialize(),
      format: this.format.selectedItem.serialize(),
      videoBitsPerSecond: this.videoBitsPerSecond.serialize(),
      videoCodec: this.videoCodecs.selectedItem.serialize(),
      audioBitsPerSecond: this.audioBitsPerSecond.serialize(),
      audioCodec: this.audioCodecs.selectedItem.serialize(),
      colorThemes: this.colorThemes.selectedItem.value,
      pixelRatio: this.pixelRatio.serialize(),
      exportAudio: this.exportAudio.serialize(),
      exportVideo: this.exportVideo.serialize(),
    };
  }

  deserialize(data) {
    if (!data) return;
    this.disableTracking();
    if (data.hasOwnProperty('showCursor')) this.showCursor.deserialize(data.showCursor);
    if (data.hasOwnProperty('showScrollbars')) this.showScrollbars.deserialize(data.showScrollbars);
    if (data.hasOwnProperty('position')) this.position.deserialize(data.position);
    if (data.hasOwnProperty('format')) this.format.selectedItem.deserialize(data.format);
    if (data.hasOwnProperty('videoBitsPerSecond')) this.videoBitsPerSecond.deserialize(data.videoBitsPerSecond);
    if (data.hasOwnProperty('videoCodec')) this.videoCodecs.selectedItem.deserialize(data.videoCodec);
    if (data.hasOwnProperty('audioBitsPerSecond')) this.audioBitsPerSecond.deserialize(data.audioBitsPerSecond);
    if (data.hasOwnProperty('audioCodec')) this.audioCodecs.selectedItem.deserialize(data.audioCodec);
    if (data.hasOwnProperty('colorThemes')) this.colorThemes.selectedItem.value = data.colorThemes;
    if (data.hasOwnProperty('pixelRatio')) this.pixelRatio.deserialize(data.pixelRatio);
    if (data.hasOwnProperty('exportAudio')) this.exportAudio.deserialize(data.exportAudio);
    if (data.hasOwnProperty('exportVideo')) this.exportVideo.deserialize(data.exportVideo);
    this.enableTracking();
  }

  getSettingsForRecording() {
    const settings = {
      format: this.format.selectedItem.value,
      videoBitsPerSecond: this.videoBitsPerSecond.value,
      audioBitsPerSecond: this.audioBitsPerSecond.value,
      videoCodec: this.videoCodecs.selectedItem.value,
      audioCodec: this.audioCodecs.selectedItem.value,
      pixelRatio: this.pixelRatio.value,
      tabWidth: this.windowSize.x.value,
      tabHeight: this.windowSize.y.value,
      mimetype: this.getMimeType(),
      extension: this.extension,
      exportAudio: this.exportAudio.value,
      exportVideo: this.exportVideo.value,
    };
    return settings;
  }

  getMimeType() {
    const format = this.format.selectedItem.value;
    let mimetype;
    if (this.exportVideo.value && !this.exportAudio.value) {
      mimetype = `video/${format};codecs=${this.videoCodecs.selectedItem.value}`;
    } else if (!this.exportVideo.value && this.exportAudio.value) {
      mimetype = `audio/${format};codecs=${this.audioCodecs.selectedItem.value}`;
    } else {
      mimetype = `video/${format};codecs=${this.videoCodecs.selectedItem.value},${this.audioCodecs.selectedItem.value}`;
    }
    return mimetype;
  }
}
