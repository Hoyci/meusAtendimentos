import styled, { css } from 'styled-components';
import { MessageVariant } from './types';

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.lynch[200]};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.green.main};
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.red.main};
  `,
};

type ContainerVariant = {
  variant: MessageVariant;
};

export const Container = styled.div<ContainerVariant>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;

  ${({ variant }) => containerVariants[variant] || containerVariants.default}

  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);

  & + & {
    margin-top: 12px;
  }

  strong {
    margin-left: 8px;
  }
`;
