import { useCallback, useEffect, useState } from 'react';
import { toastEventManager } from '../../../utils/toast';
import ToastMessage from '../ToastMessage';
import { MessageProps } from '../ToastMessage/types';
import { Container } from './styles';

export default function ToastContainer() {
  const [messages, setMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    const handleAddToast = ({ variant, text, duration }: MessageProps) => {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          variant,
          text,
          duration,
        },
      ]);
    };

    toastEventManager.on('addtoast', handleAddToast);
    return () => toastEventManager.removeListener('addtoast', handleAddToast);
  }, []);

  const handleRemoveMessage = useCallback((id: MessageProps['id']) => {
    setMessages((prevState) =>
      prevState.filter((message) => message.id !== id)
    );
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </Container>
  );
}
