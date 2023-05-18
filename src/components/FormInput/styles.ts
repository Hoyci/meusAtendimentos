import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 1.2rem;
  }
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.lynch[800]};
  margin-bottom: 0.1rem;
`;

export const Input = styled.input``;
