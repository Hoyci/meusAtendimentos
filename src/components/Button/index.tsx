import { ButtonStyled } from './styles';
import { ButtonProps } from './types';
import { ImSpinner2 } from 'react-icons/im';

export default function Button({
  outlined = false,
  maxWidth = '6rem',
  isLoading,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonStyled
      outlined={outlined}
      maxWidth={maxWidth}
      isLoading={isLoading}
      {...props}
    >
      {isLoading ? <ImSpinner2 className="spinner" /> : children}
    </ButtonStyled>
  );
}
