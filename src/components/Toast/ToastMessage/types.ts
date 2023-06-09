export type MessageVariant = 'default' | 'danger' | 'success';

export interface MessageProps {
  id: number;
  text: string;
  variant: MessageVariant;
  duration: number;
}

export type ToastMessageProps = {
  message: MessageProps;
  onRemoveMessage: (id: MessageProps['id']) => void;
};
