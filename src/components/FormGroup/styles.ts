import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1.4rem;
  width: 100%;
`;

export const ErrorMessage = styled.small`
  color: ${({ theme }) => theme.colors.red.main};
  font-size: 12px;
  margin-top: 8px;
`;
