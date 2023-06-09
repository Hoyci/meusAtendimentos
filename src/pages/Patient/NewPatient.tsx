import { useTheme } from 'styled-components';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { LinkStyled } from '../../components/Link';
import PatientForm, { PatientFormRef } from '../../components/PatientForm';
import { PatientInfosType } from '../../types';
import { createPatient, getPatientByName } from '../../services/database';
import { Container, Header, HeaderTitle } from './styles';
import { useRef } from 'react';
import toast from '../../utils/toast';

export default function NewPatient() {
  const newPatientRef = useRef<PatientFormRef>(null);
  const theme = useTheme();
  const { mutate, isLoading } = useMutation({
    mutationFn: createPatient,
  });

  const handleSubmit = async (patientInfo: PatientInfosType) => {
    const patientExists = await getPatientByName(patientInfo.name);

    if (patientExists) {
      toast({ variant: 'danger', text: 'Paciente já cadastrado' });
    } else {
      mutate(patientInfo);
      newPatientRef.current?.resetFields();
    }
  };

  return (
    <Container>
      <Header>
        <LinkStyled to="/home">
          <AiOutlineArrowLeft
            color={theme.colors.blue[800]}
            fontSize={'1.8rem'}
          />
          Voltar
        </LinkStyled>
        <HeaderTitle>Adicionar paciente</HeaderTitle>
      </Header>
      <PatientForm
        ref={newPatientRef}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </Container>
  );
}
