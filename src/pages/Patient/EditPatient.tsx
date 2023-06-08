import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { LinkStyled } from '../../components/Link';
import PatientForm, { PatientFormRef } from '../../components/PatientForm';
import { getPatientById, updatePatientById } from '../../services/database';
import { PatientInfosType, PatientObject } from '../../types';
import { Container, Header, HeaderTitle } from './styles';

export default function EditPatient() {
  const theme = useTheme();
  const editPatientRef = useRef<PatientFormRef>(null);
  const { id: patientId } = useParams();

  const { data, isFetching } = useQuery({
    queryKey: ['patients', patientId],
    queryFn: ({ queryKey }) => getPatientById(queryKey[1] || ''),
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: updatePatientById,
  });

  useEffect(() => {
    if (data) {
      editPatientRef.current?.setFieldsValues(data as PatientInfosType);
    }
  }, [data]);

  const handleSomething = async (patientInfos: PatientObject) => {
    await mutateAsync({
      patientId: patientId || '',
      patientObject: patientInfos,
    });
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
        <HeaderTitle>Editar paciente</HeaderTitle>
      </Header>
      <PatientForm
        ref={editPatientRef}
        onSubmit={handleSomething}
        isLoading={isLoading || isFetching}
        isEditForm
      />
    </Container>
  );
}
