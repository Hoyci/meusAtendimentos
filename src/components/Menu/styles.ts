import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitleContainer = styled.div``;

export const HeaderTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.dark};
`;

export const HeaderSubtitle = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text.light};
`;

// export const PatientList = styled.div``;

// export const Patient = styled.div``;
