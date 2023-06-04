import { InputHTMLAttributes } from 'react';
import { Container, Input, InputLabel } from './styles';

interface FormInputType extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  name: string;
  type: string;
  value: string | number;
  className?: string;
  disabled?: boolean;
}

export default function FormInput({
  labelText,
  name,
  type,
  value,
  onChange,
  className,
}: FormInputType) {
  return (
    <Container className={className}>
      <InputLabel htmlFor={name}>{labelText}</InputLabel>
      <Input name={name} type={type} value={value} onChange={onChange} />
    </Container>
  );
}
