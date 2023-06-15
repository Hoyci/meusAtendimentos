import { MessageProps } from '../components/Toast/ToastMessage/types';

export default class EventManager {
  listeners: Map<any, any>;
  constructor() {
    this.listeners = new Map();
  }

  on(event: string, listener: (T: any) => void) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(listener);
  }

  emit(
    event: string,
    payload: { variant: string; text: string; duration: number }
  ) {
    if (!this.listeners.has(event)) {
      return;
    }
    this.listeners.get(event).forEach((listener: any) => {
      listener(payload);
    });
  }

  removeListener(
    event: string,
    listenerToRemove: ({ id, variant, text, duration }: MessageProps) => void
  ) {
    const listeners = this.listeners.get(event);
    if (!listeners) {
      return;
    }
    const filteredListeners = listeners.filter(
      (listener: any) => listener !== listenerToRemove
    );

    this.listeners.set(event, filteredListeners);
  }
}
