import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;

  box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.colors.blue[100]};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.2rem;
`;

export const HeaderTitle = styled.h1`
  font-weight: 500;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.blue[800]};
`;