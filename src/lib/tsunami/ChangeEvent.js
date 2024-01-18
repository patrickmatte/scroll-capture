import BaseEvent from './events';

export class ChangeEvent extends BaseEvent {
  static dispatch(eventTarget, type, value) {
    eventTarget.dispatchEvent(new ChangeEvent(type, value));
  }
}
