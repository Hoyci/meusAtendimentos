import { useState } from 'react';

export default function useLocalStorage() {
  const [value, setValue] = useState<string | null>(null);

  const setItem = (key: string, value: string) => {
    localStorage.setItem(key, value);
    setValue(value);
  };

  const getItem = (key: string) => {
    localStorage.getItem(key);
    setValue(value);
    return value;
  };

  const removeItem = (key: string) => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return { value, setItem, getItem, removeItem };
}
