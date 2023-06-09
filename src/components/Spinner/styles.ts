import styled, { css, keyframes } from 'styled-components';
import { ImSpinner2 } from 'react-icons/im';
import { SpinnerContainerProps, SpinnerProps } from './types';

const spinnerVariants = {
  center: css`
    align-items: center;
    justify-content: center;
  `,
};

export const SpinnerContainer = styled.div<SpinnerContainerProps>`
  display: flex;

  ${({ variant }) => spinnerVariants[variant]}
`;

const spinnerAnimation = keyframes`
  to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
`;

export const SpinnerStyled = styled(ImSpinner2)`
  animation: ${spinnerAnimation} 1s linear infinite;
`;
