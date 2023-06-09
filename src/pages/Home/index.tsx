import { ContentHeader, ContentLabel, LabelContainer } from './styles';
import { ButtonStyledLink } from '../../components/ButtonStyledLink';
import PatientCard from '../../components/PatientCard';
import { useQuery } from '@tanstack/react-query';
import { getPatients } from '../../services/database';
import useAuth from '../../hooks/useAuth';
import Spinner from '../../components/Spinner';

export default function Home() {
  const { currentUser } = useAuth();
  const userId = currentUser?.uid;
  const { isFetching, data } = useQuery({
    queryKey: ['patients', userId],
    queryFn: ({ queryKey }) => getPatients(queryKey[1] || ''),
  });

  return (
    <>
      <ContentHeader>
        <LabelContainer>
          <ContentLabel>{data?.length || 0} pacientes</ContentLabel>
        </LabelContainer>
        <ButtonStyledLink to="/patient/create">
          Adicionar paciente
        </ButtonStyledLink>
      </ContentHeader>

      {isFetching && <Spinner variant="center" size={25} />}

      {!isFetching &&
        data?.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
    </>
  );
}
