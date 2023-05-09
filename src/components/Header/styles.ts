import styled, { css } from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.blue.darkGrey};
  width: 100%;
  max-width: 76.7rem;

  box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.colors.blue.darkGrey};

  @media (min-width: 767px) {
    border-radius: 0 0 5px 5px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 2.4rem;

  p {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const PerfilContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  object-fit: cover;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;

interface PerfilModalProps {
  isOpen: boolean;
}

export const PerfilModal = styled.div<PerfilModalProps>`
  position: absolute;
  right: 0;
  padding: 0.5rem 2rem;
  top: calc(100% + 1.8rem);
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.blue.darkGrey};
  border-radius: 5px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.25s ease 0s, visibility 0.25s ease 0s;

  ${({ isOpen }) =>
    isOpen &&
    css`
      visibility: visible;
      opacity: 1;
    `}

  &:before {
    content: '';
    position: absolute;
    top: -8px;
    right: 14px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0 8px 8px;
    border-color: transparent transparent
      ${({ theme }) => theme.colors.blue.darkGrey};
  }
`;
