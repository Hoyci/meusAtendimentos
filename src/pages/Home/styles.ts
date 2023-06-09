import styled from 'styled-components';

export const ContentHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border-radius: 5px;
  padding: 1.4rem 2.4rem;
  margin-bottom: 2rem;
`;

export const ContentLabel = styled.p`
  color: ${({ theme }) => theme.colors.blue[900]};
  font-size: 1.6rem;
  font-weight: 500;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;