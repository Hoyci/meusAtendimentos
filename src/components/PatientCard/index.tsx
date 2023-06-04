import {
  Container,
  PatientActions,
  PatientCategory,
  PatientInfos,
  PatientTitle,
  PatitentSubtitle,
} from './styles';

import { useNavigate } from 'react-router-dom';
// import { daysOfTheWeek, getHours } from '../../utils';
// import { PatientProps } from '../../types';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { PatientInfosType } from '../../types';
import { deletePatientById } from '../../services/database';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function PatientCard({
  patient,
}: {
  patient: PatientInfosType;
}) {
  const theme = useTheme();
  const navigate = useNavigate();
  const { id, name, phoneNumber } = patient;
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: deletePatientById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['patients'] });
    },
  });
  // const patientSchedule = getHours(schedule.start, schedule.end);

  const handleEditPatient = () => {
    navigate(`/patient/edit/${id}`);
  };

  const handleDeletePatient = async () => {
    await mutateAsync(id);
    alert('Usuário deletado');
  };

  return (
    <Container>
      <PatientInfos>
        <PatientTitle>{name}</PatientTitle>
        {/* <PatitentSubtitle>
          {`${daysOfTheWeek[schedule.dayOfWeek]} - ${patientSchedule[0]} às ${
            patientSchedule[1]
          } `}
        </PatitentSubtitle> */}
        <PatitentSubtitle>{phoneNumber}</PatitentSubtitle>
        <PatientCategory>Social</PatientCategory>
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
