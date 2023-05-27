import { useTheme } from 'styled-components';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { LinkStyled } from '../../components/Link';
import PatientForm from '../../components/PatientForm';
import { PatientInfosType } from '../../types';
import { createPatient, getPatientByName } from '../../services/database';
import { Container, Header, HeaderTitle } from './styles';

export default function NewPatient() {
  const theme = useTheme();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: createPatient,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['patients'] });
    },
  });

  // TODO pass the isLoading for the button component to show a spinner while saving or editing patient
  console.log('isLoading', isLoading);

  const handleSubmit = async (patientInfo: PatientInfosType) => {
    // TODO Check if different users can create patient with the same name
    const patientExists = await getPatientByName(patientInfo.name);

    if (patientExists) {
      // TODO change this to use toast
      alert('Paciente já existe no banco de dados');
    } else {
      mutate(patientInfo);
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
      <PatientForm onSubmit={handleSubmit} />
    </Container>
  );
}
