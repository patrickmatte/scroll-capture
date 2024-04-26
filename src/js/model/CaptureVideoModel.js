import Vector2Data from '../../lib/tsunami/data/Vector2Data';
import ArrayData from '../../lib/tsunami/data/ArrayData';
import BooleanData from '../../lib/tsunami/data/BooleanData';
import Data from '../../lib/tsunami/data/Data';
import { app } from '../main';
import NumberData from '../../lib/tsunami/data/NumberData';
import { getSupportedFormatsAndCodecs } from '../../lib/tsunami/utils/FormatsAndCodecs';
import Point from '../../lib/tsunami/geom/Point';
import { decimalToPlace, round1 } from '../../lib/tsunami/utils/number';
import StringData from '../../lib/tsunami/data/StringData';
import ObjectData from '../../lib/tsunami/data/ObjectData';
import { ChangeEvent } from '../../lib/tsunami/ChangeEvent';

export default class CaptureVideoModel {
  constructor() {
    const supportedFormats = getSupportedFormatsAndCodecs();
    const mp4Format = supportedFormats.video.find((format) => {
      return format.ext == 'mp4';
    });
    if (!mp4Format) {
      supportedFormats.video.unshift({ name: 'mp4', ext: 'mp4', video: ['h264', 'avc1'], audio: ['aac', 'mp3'], ffmpeg: true });
      supportedFormats.audio.unshift({ name: 'mp3', ext: 'mp3', video: [], audio: ['mp3'], ffmpeg: true });
      supportedFormats.audio.unshift({ name: 'm4a', ext: 'm4a', video: [], audio: ['aac'], ffmpeg: true });
    }
    // console.log('supportedFormats', JSON.stringify(supportedFormats));

    this.darkModeChangeHandler = this.darkModeChangeHandler.bind(this);

    this.showScrollbars = new BooleanData(false);
    this.showCursor = new BooleanData(true);

    this.fontSize = new NumberData();
    this.position = new Vector2Data(50, 50);
    this.size = new Vector2Data(414, 460);
    this.size.addEventListener('value', () => {
      sizeChangeHandler();
    });
    const sizeChangeHandler = () => {
      this.fontSize.value = round1((this.size.x.value / 414) * 15);
    };
    sizeChangeHandler();

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

    this.mediaSources = [
      { name: 'tab', text: 'tab', icon: 'fa-brands fa-chrome' },
      { name: 'desktop', text: 'desktop', icon: 'fa-solid fa-desktop' },
    ];
    this.mediaSourceIcon = new StringData();
    this.mediaSource = new StringData();
    ChangeEvent.addEventListener(this.mediaSource, 'value', (event) => {
      const selectedMedia = this.mediaSources.find((source) => {
        return source.name == this.mediaSource.value;
      });
      this.mediaSourceIcon.value = selectedMedia.icon;
    });
    this.mediaSource.value = this.mediaSources[0].name;

    this.formats = new ArrayData();
    this.formats.addEventListener('value', (event) => {
      if (this.formats.value.indexOf(this.format.value) == -1) {
        this.format.value = this.formats[0];
      }
    });
    this.format = new StringData();
    this.format.addEventListener('value', (event) => {
      setCodecs();
    });

    this.mediaTrackIcon = new StringData();
    this.mediaTrackName = new StringData('video');

    const setCodecs = () => {
      let formats = this.exportVideo.value ? supportedFormats.video : supportedFormats.audio;
      const format = formats.find((supportedFormat) => {
        return supportedFormat.name == this.format.value;
      });
      this.extension = format.ext;
      this.needsFFMPEG = format.ffmpeg == true;
      this.videoCodecs.value = format.video;
      this.audioCodecs.value = format.audio;
    };

    const setFormats = () => {
      this.mediaTrackName.value = this.exportVideo.value ? 'Video' : 'Audio';
      this.mediaTrackIcon.value = this.exportVideo.value ? 'fa-file-video' : 'fa-file-audio';
      let formats = this.exportVideo.value ? supportedFormats.video : supportedFormats.audio;
      const names = formats.map((format) => {
        return format.name;
      });
      this.formats.value = names;
    };

    const mediaChangeHandler = (event) => {
      setFormats();
      setCodecs();
    };

    this.exportVideo = new BooleanData(true);
    this.exportVideo.addEventListener('value', (event) => {
      if (!this.exportVideo.value && !this.exportAudio.value) this.exportAudio.value = true;
      mediaChangeHandler(event);
    });

    this.videoCodec = new StringData();
    this.videoCodecs = new ArrayData();
    this.videoCodecs.addEventListener('value', (event) => {
      if (this.videoCodecs.value.indexOf(this.videoCodec.value) == -1) {
        this.videoCodec.value = this.videoCodecs.value[0];
      }
    });

    this.videoBitsPerSecond = new NumberData(16);

    this.exportAudio = new BooleanData(false);
    this.exportAudio.addEventListener('value', (event) => {
      if (!this.exportVideo.value && !this.exportAudio.value) this.exportVideo.value = true;
      mediaChangeHandler(event);
    });

    this.audioCodec = new StringData();
    this.audioCodecs = new ArrayData();
    this.audioCodecs.addEventListener('value', (event) => {
      if (this.audioCodecs.value.indexOf(this.audioCodec.value) == -1) {
        this.audioCodec.value = this.audioCodecs.value[0];
      }
    });

    this.audioBitsPerSecond = new NumberData(256);

    mediaChangeHandler();

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

    this.pixelRatio = new NumberData(1);

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
      showScrollbars: this.showScrollbars.serialize(),
      position: this.position.serialize(),
      size: this.size.serialize(),
      format: this.format.serialize(),
      videoBitsPerSecond: this.videoBitsPerSecond.serialize(),
      videoCodec: this.videoCodec.serialize(),
      audioBitsPerSecond: this.audioBitsPerSecond.serialize(),
      audioCodec: this.audioCodec.serialize(),
      colorThemes: this.colorThemes.selectedItem.value,
      pixelRatio: this.pixelRatio.serialize(),
      exportAudio: this.exportAudio.serialize(),
      exportVideo: this.exportVideo.serialize(),
      windowSize: this.windowSize.serialize(),
      mediaSource: this.mediaSource.serialize(),
    };
  }

  deserialize(data) {
    if (!data) return;
    if (data.hasOwnProperty('showCursor')) this.showCursor.deserialize(data.showCursor);
    if (data.hasOwnProperty('showScrollbars')) this.showScrollbars.deserialize(data.showScrollbars);
    if (data.hasOwnProperty('position')) this.position.deserialize(data.position);
    if (data.hasOwnProperty('size')) this.size.deserialize(data.size);
    if (data.hasOwnProperty('videoBitsPerSecond')) this.videoBitsPerSecond.deserialize(data.videoBitsPerSecond);
    if (data.hasOwnProperty('videoCodec')) this.videoCodec.deserialize(data.videoCodec);
    if (data.hasOwnProperty('audioBitsPerSecond')) this.audioBitsPerSecond.deserialize(data.audioBitsPerSecond);
    if (data.hasOwnProperty('audioCodec')) this.audioCodec.deserialize(data.audioCodec);
    if (data.hasOwnProperty('colorThemes')) this.colorThemes.selectedItem.value = data.colorThemes;
    if (data.hasOwnProperty('pixelRatio')) this.pixelRatio.deserialize(Math.min(data.pixelRatio, this.devicePixelRatio.value));
    if (data.hasOwnProperty('exportAudio')) this.exportAudio.deserialize(data.exportAudio);
    if (data.hasOwnProperty('exportVideo')) this.exportVideo.deserialize(data.exportVideo);
    if (data.hasOwnProperty('format')) this.format.deserialize(data.format);
    if (data.hasOwnProperty('mediaSource')) this.mediaSource.deserialize(data.mediaSource);
    this.position.math(Math.round);
    this.size.math(Math.round);
    // if (data.hasOwnProperty('windowSize')) this.windowSize.deserialize(data.windowSize);
  }

  getSettingsForRecording() {
    const settings = {
      format: this.format.value,
      videoBitsPerSecond: this.videoBitsPerSecond.value,
      audioBitsPerSecond: this.audioBitsPerSecond.value,
      videoCodec: this.videoCodec.value,
      audioCodec: this.audioCodec.value,
      pixelRatio: this.pixelRatio.value,
      tabWidth: this.windowSize.x.value,
      tabHeight: this.windowSize.y.value,
      extension: this.extension,
      exportAudio: this.exportAudio.value,
      exportVideo: this.exportVideo.value,
      zoomLevel: window.outerWidth / window.innerWidth,
      tabId: app.model.tabId.value,
      needsFFMPEG: this.needsFFMPEG,
      mediaSource: this.mediaSource.value,
    };
    return settings;
  }
}
