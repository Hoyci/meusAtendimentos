import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.lynch[600]};
  margin-bottom: 0.4rem;
`;

export const Select = styled.select`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.lynch[600]};

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.blue[500]};
  }
`;
