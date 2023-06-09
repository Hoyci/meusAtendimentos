import { useEffect } from 'react';
import { Container } from './styles';
import { ToastMessageProps } from './types';
import { ImCheckmark, ImCross } from 'react-icons/im';

export default function ToastMessage({
  message,
  onRemoveMessage,
}: ToastMessageProps) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemoveMessage]);

  const handleRemoveToast = () => {
    onRemoveMessage(message.id);
  };

  return (
    <Container
      variant={message.variant}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
    >
      {message.variant === 'danger' && <ImCross />}
      {message.variant === 'success' && <ImCheckmark />}
      <strong>{message.text}</strong>
    </Container>
  );
}
