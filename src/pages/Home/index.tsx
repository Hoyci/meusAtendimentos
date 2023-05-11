import {
  Container,
  ContentContainer,
  ContentHeader,
  ContentLabel,
  LabelContainer,
  PatientList,
} from './styles';
import Header from '../../components/Header';
import { StyledLink } from '../../components/StyledLink';
import PatientCard from '../../components/PatientCard';
import { mockPatients } from './mocks';

export default function Home() {
  return (
    <Container>
      <Header />

      <ContentContainer>
        <ContentHeader>
          <LabelContainer>
            <ContentLabel>{mockPatients.length} pacientes</ContentLabel>
            <p>Nome ↑</p>
          </LabelContainer>
          <StyledLink to="/patient/create">Adicionar paciente</StyledLink>
        </ContentHeader>

        <PatientList>
          {mockPatients.map((patient) => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </PatientList>
      </ContentContainer>
    </Container>
  );
}
