import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;

  box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.colors.blue[100]};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.2rem;
`;

export const HeaderTitle = styled.h1`
  font-weight: 500;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.blue[800]};
`;

export const InlineElements = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

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

export const ContentContainer = styled.main``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  span {
    color: ${({ theme }) => theme.colors.lynch[600]};
    margin-bottom: 0.4rem;
  }
`;