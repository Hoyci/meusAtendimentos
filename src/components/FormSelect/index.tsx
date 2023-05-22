import { SelectHTMLAttributes } from 'react';
import { Container, InputLabel, Select } from './styles';

interface FormSelectType extends SelectHTMLAttributes<HTMLSelectElement> {
  labelText: string;
  name: string;
  options: {
    text: string;
    value: string;
  }[];
}

export default function FormSelect({
  labelText,
  name,
  options,
  onChange,
}: FormSelectType) {
  return (
    <Container>
      <InputLabel htmlFor={name}>{labelText}</InputLabel>
      <Select name={name} onChange={onChange}>
        {options.map(({ text, value }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </Select>
    </Container>
  );
}
