import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.lynch[600]};
  margin-bottom: 0.4rem;
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.lynch[600]};
  &,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.lynch[600]};
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.background}
      inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.blue[500]};
  }
`;
