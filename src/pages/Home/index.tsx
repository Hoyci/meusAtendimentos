import { ContentHeader, ContentLabel, LabelContainer } from './styles';
import { ButtonStyledLink } from '../../components/ButtonStyledLink';
import PatientCard from '../../components/PatientCard';
import { mockPatients } from './mocks';

export default function Home() {
  return (
    <>
      <ContentHeader>
        <LabelContainer>
          <ContentLabel>{mockPatients.length} pacientes</ContentLabel>
          <p>Nome ↑</p>
        </LabelContainer>
        <ButtonStyledLink to="/patient/create">
          Adicionar paciente
        </ButtonStyledLink>
      </ContentHeader>

      {mockPatients.map((patient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </>
  );
}
