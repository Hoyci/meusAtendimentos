import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.lynch[700]};
  text-decoration: none;
  gap: 1rem;

  &:hover {
    filter: opacity(80%);
  }
`;
