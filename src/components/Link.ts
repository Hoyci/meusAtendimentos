import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
  color: ${({ theme }) => theme.colors.lynch[700]};
  text-decoration: none;

  &:hover {
    filter: opacity(80%);
  }
`;
