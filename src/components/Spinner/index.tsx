import { SpinnerContainer, SpinnerStyled } from './styles';
import { SpinnerComponentProps } from './types';

export default function Spinner({ variant, size = 10 }: SpinnerComponentProps) {
  return (
    <SpinnerContainer variant={variant}>
      <SpinnerStyled size={size} />
    </SpinnerContainer>
  );
}
