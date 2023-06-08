import {
  Container,
  PatientActions,
  PatientCategory,
  PatientInfos,
  PatientTitle,
  PatitentSubtitle,
} from './styles';

import { useNavigate } from 'react-router-dom';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { PatientInfosType } from '../../types';
import { deletePatientById } from '../../services/database';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { formatPhone } from '../../utils';

export default function PatientCard({
  patient,
}: {
  patient: PatientInfosType;
}) {
  const theme = useTheme();
  const navigate = useNavigate();
  const { id, name, phoneNumber, gender } = patient;
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: deletePatientById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['patients'] });
    },
  });

  const handleEditPatient = () => {
    navigate(`/patient/edit/${id}`);
  };

  const handleDeletePatient = async () => {
    // TODO: Show a modal to user decide if want to delete the user
    await mutateAsync(id);
    alert('Usuário deletado');
  };

  return (
    <Container>
      <PatientInfos>
        <PatientTitle>{name}</PatientTitle>
        <PatitentSubtitle>{formatPhone(phoneNumber)}</PatitentSubtitle>
        <PatientCategory>
          {`${gender.charAt(0).toUpperCase()}${gender.slice(1)}`}
        </PatientCategory>
      </PatientInfos>

      <PatientActions>
        <AiOutlineEdit
          style={{ cursor: 'pointer' }}
          fontSize={'2rem'}
          color={theme.colors.blue[900]}
          onClick={handleEditPatient}
        />
        <AiOutlineDelete
          style={{ cursor: 'pointer' }}
          fontSize={'2rem'}
          color={theme.colors.red.main}
          onClick={handleDeletePatient}
        />
      </PatientActions>
    </Container>
  );
}
