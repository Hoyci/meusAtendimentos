import { ButtonStyled } from './styles';
import { ButtonProps } from './types';

export default function Button({
  outlined = false,
  maxWidth = '6rem',
  children,
  ...props
}: ButtonProps) {
  console.log(props);
  return (
    <ButtonStyled outlined={outlined} maxWidth={maxWidth} {...props}>
      {children}
    </ButtonStyled>
  );
}
