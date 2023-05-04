import { useState } from 'react';

type Error = {
  field: string;
  message: string;
};

export default function useErrors() {
  const [errors, setErrors] = useState<Error[]>([]);

  const setError = ({ field, message }: Error) => {
    const errorAlreadyExists = errors.find((error) => error.field === field);

    if (errorAlreadyExists) {
      return;
    }

    setErrors((prevState) => [...prevState, { field, message }]);
  };

  const removeError = (fieldName: string) => {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== fieldName)
    );
  };

  const getErrorByFieldName = (fieldName: string) =>
    errors.find((error) => error.field === fieldName)?.message;

  return {
    errors,
    getErrorByFieldName,
    setError,
    removeError,
  };
}
