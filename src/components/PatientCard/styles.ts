import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 1rem 2.4rem;

  text-decoration: none;

  box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.colors.blue[100]};

  & + & {
    margin-top: 1rem;
  }

  &:hover {
    box-shadow: 0px 0px 4px 4px ${({ theme }) => theme.colors.blue[100]};
    cursor: pointer;
  }
`;

export const PatientInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PatientTitle = styled.strong`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.blue[800]};
  margin-bottom: 0.8rem;
`;

export const PatitentSubtitle = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.lynch[400]};
  margin-bottom: 0.8rem;
`;

export const PatientCategory = styled.div`
  display: flex;
  justify-content: center;
  width: 10rem;
  padding: 0.25rem 0;
  background-color: ${({ theme }) => theme.colors.blue[50]};
  border-radius: 5px;
  font-weight: 500;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.blue[700]};
`;

export const PatientActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 2rem;

    &:hover {
      cursor: pointer;
    }
  }

  .edit {
    filter: invert(23%) sepia(15%) saturate(2164%) hue-rotate(193deg)
      brightness(97%) contrast(85%);
  }

  .delete {
    filter: invert(46%) sepia(30%) saturate(5734%) hue-rotate(331deg)
      brightness(100%) contrast(99%);
  }
`;

export const EditIcon = styled(AiOutlineEdit)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.blue[900]};
  box-sizing: content-box;
  padding: 1rem;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 4px 4px ${({ theme }) => theme.colors.blue[100]};
  }
`;

export const DeleteIcon = styled(AiOutlineDelete)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.red.main};
  box-sizing: content-box;
  padding: 1rem;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 4px 4px ${({ theme }) => theme.colors.blue[100]};
  }
`;
