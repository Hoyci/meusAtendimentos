import { ContentHeader, ContentLabel, LabelContainer } from './styles';
import { ButtonStyledLink } from '../../components/ButtonStyledLink';
import PatientCard from '../../components/PatientCard';
import { useQuery } from '@tanstack/react-query';
import { getPatients } from '../../services/database';
import useAuth from '../../hooks/useAuth';

export default function Home() {
  const { currentUser } = useAuth();
  const userId = currentUser?.uid;
  const { isLoading, data } = useQuery({
    queryKey: ['patients', userId],
    queryFn: ({ queryKey }) => getPatients(queryKey[1] || ''),
  });
  console.log('isLoading', isLoading);
  console.log('data', data);
  return (
    <>
      <ContentHeader>
        <LabelContainer>
          <ContentLabel>{data?.length} pacientes</ContentLabel>
          <p>Nome ↑</p>
        </LabelContainer>
        <ButtonStyledLink to="/patient/create">
          Adicionar paciente
        </ButtonStyledLink>
      </ContentHeader>

      {isLoading && <h1>Carregando...</h1>}

      {!isLoading &&
        data?.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
    </>
  );
}
