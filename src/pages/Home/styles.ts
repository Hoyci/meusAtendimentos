import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContentContainer = styled.main`
  width: 100%;
  max-width: 76.7rem;
`;

export const ContentHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.blue.light};
  border-radius: 5px;
  padding: 1.4rem 2.4rem;
  margin-bottom: 2rem;
`;

export const ContentLabel = styled.p`
  color: ${({ theme }) => theme.colors.blue.test};
  font-size: 1.6rem;
  font-weight: 500;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.blue.darkGrey};
  }
`;

export const PatientList = styled.div``;