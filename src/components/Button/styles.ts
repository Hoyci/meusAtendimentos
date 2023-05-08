import styled from 'styled-components';

export const ButtonStyled = styled.button``;

export const ButtonLink = styled.a`
  font-size: 1.4rem;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.blue.light};
  border-radius: 8px;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.colors.blue.dark};
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;
