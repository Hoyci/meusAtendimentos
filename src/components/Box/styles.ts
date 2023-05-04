import styled from 'styled-components';

export const Background = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const BoxContainer = styled.div`
  padding: 1.2rem;
  max-width: 42rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
`;

export const BoxHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.8rem 0 2.5rem 0;
`;

export const BoxFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 1.4rem;
`;
