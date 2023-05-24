import styled from 'styled-components';

export const Form = styled.form``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const InlineInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .allLine {
    grid-column: 1 / -1;
  }

  .first {
    grid-column: 1;
  }

  .second {
    grid-column: 2;
  }
`;
