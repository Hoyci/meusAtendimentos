import { Link } from 'react-router-dom';
import { PatientInfosType } from '../../types';
import { deletePatientById } from '../../services/database';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { formatPhone } from '../../utils';

import {
  Container,
  DeleteIcon,
  EditIcon,
  PatientActions,
  PatientCategory,
  PatientInfos,
  PatientTitle,
  PatitentSubtitle,
} from './styles';
import React from 'react';

export default function PatientCard({
  patient,
}: {
  patient: PatientInfosType;
}) {
  const { id, name, phoneNumber, gender } = patient;
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: deletePatientById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['patients'] });
    },
  });

  const handleDeletePatient = async (event: React.MouseEvent<SVGElement>) => {
    event.preventDefault();
    // TODO: Show a modal to user decide if want to delete the user
    await mutateAsync(id);
    alert('Usuário deletado');
  };

  return (
    <Container to={`/patient/info/${id}`}>
      <PatientInfos>
        <PatientTitle>{name}</PatientTitle>
        <PatitentSubtitle>{formatPhone(phoneNumber)}</PatitentSubtitle>
        <PatientCategory>
          {`${gender.charAt(0).toUpperCase()}${gender.slice(1)}`}
        </PatientCategory>
      </PatientInfos>

      <PatientActions>
        <Link to={`/patient/edit/${id}`}>
          <EditIcon />
        </Link>
        <DeleteIcon onClick={handleDeletePatient} />
      </PatientActions>
    </Container>
  );
}
