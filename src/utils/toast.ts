import { MessageProps } from '../components/Toast/ToastMessage/types';
import EventManager from '../lib/EventManager';

type ToastProps = {
  variant: MessageProps['variant'];
  text: MessageProps['text'];
  duration?: MessageProps['duration'];
};

export const toastEventManager = new EventManager();

export default function toast({ variant, text, duration = 7000 }: ToastProps) {
  toastEventManager.emit('addtoast', { variant, text, duration });
}
