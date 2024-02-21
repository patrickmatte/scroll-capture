import BaseEvent from './events';

export class ChangeEvent extends BaseEvent {
  static dispatchEvent(eventTarget, type, value) {
    eventTarget.dispatchEvent(new ChangeEvent(type, value));
  }
  static addEventListener(eventTarget, type, handler) {
    eventTarget.addEventListener(type, handler);
  }
  static removeEventListener(eventTarget, type, handler) {
    eventTarget.removeEventListener(type, handler);
  }
}
