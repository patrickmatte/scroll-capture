import Section from './Section';

export default class CaptureImage extends Section {
  constructor(element) {
    super(element);

    this.defaultChild = 'settings';
  }
}
