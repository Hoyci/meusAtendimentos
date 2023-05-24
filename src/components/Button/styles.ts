import styled, { css } from 'styled-components';
import { ButtonProps } from './types';

export const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.blue[800]};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};

  &:focus {
    outline-color: ${({ theme }) => theme.colors.blue[500]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue[700]};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.lynch[300]};
    cursor: default;
  }

  ${({ outlined }) =>
    outlined &&
    css`
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.colors.blue[400]};

      &:hover {
        background-color: ${({ theme }) => theme.colors.blue[400]};
      }
    `}
`;
