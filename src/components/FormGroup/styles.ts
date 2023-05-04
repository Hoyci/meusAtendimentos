import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 1.2rem;
  }

  max-width: 42rem;
  width: 100%;
`;

export const ErrorMessage = styled.small`
  color: ${({ theme }) => theme.colors.red.main};
  font-size: 12px;
  margin-top: 8px;
`;
