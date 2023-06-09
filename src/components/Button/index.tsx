import { ButtonStyled } from './styles';
import { ButtonProps } from './types';
import Spinner from '../Spinner';

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
      {isLoading ? <Spinner variant="center" size={15} /> : children}
    </ButtonStyled>
  );
}
