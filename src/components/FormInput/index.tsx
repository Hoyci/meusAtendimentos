import { InputHTMLAttributes } from 'react';
import { Container, Input, InputLabel } from './styles';

interface FormInputType extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  name: string;
  type: string;
  value: string;
}

export default function FormInput({
  labelText,
  name,
  type,
  value,
  onChange,
}: FormInputType) {
  return (
    <Container>
      <InputLabel htmlFor={name}>{labelText}</InputLabel>
      <Input name={name} type={type} value={value} onChange={onChange} />
    </Container>
  );
}
