import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonStyledLink = styled(Link)`
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.blue[600]};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  border: 2px solid transparent;

  &:hover {
    cursor: pointer;
    filter: opacity(80%);
  }
`;
