import { useTheme } from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { LinkStyled } from '../../components/Link';
import PatientForm from '../../components/PatientForm';
import { PatientInfosType } from '../../types';
import { createPatient } from '../../services/database';
import { Container, Header, HeaderTitle } from './styles';

export default function NewPatient() {
  const theme = useTheme();

  const handleSubmit = async (patientInfo: PatientInfosType) => {
    await createPatient(patientInfo);
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
