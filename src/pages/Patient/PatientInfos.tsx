import { useQuery } from '@tanstack/react-query';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { LinkStyled } from '../../components/Link';
import { getPatientById } from '../../services/database';
import { formatPhone, getCurrentDateByTimestamp } from '../../utils';
import {
  Container,
  Content,
  ContentContainer,
  Header,
  HeaderTitle,
  InlineElements,
} from './styles';

const genderAdapter = {
  man: 'Masculino',
  woman: 'Feminino',
  others: 'Outro',
};

const maritalStatusAdapter = {
  single: 'Solteiro',
  married: 'Casado',
  divorced: 'Divorciado',
};

export const educationLevelAdapter = {
  unlettered: 'Analfabeto',
  elementaryIncompleted: 'Fundamental Incompleto',
  elementaryCompleted: 'Fundamental Completo',
  highSchoolIncompleted: 'Médio Incompleto',
  highSchoolCompleted: 'Médio Completo',
  ungraduated: 'Superior Incompleto',
  graduated: 'Superior Completo',
};

export default function PatientInfos() {
  const theme = useTheme();
  const { id: patientId } = useParams();

  const { data, isFetching } = useQuery({
    queryKey: ['patients', patientId],
    queryFn: ({ queryKey }) => getPatientById(queryKey[1] || ''),
  });

  console.log(data);

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
        <HeaderTitle>Informações do paciente</HeaderTitle>
      </Header>
      {!isFetching && (
        <ContentContainer>
          <Content>
            <span>Nome</span>
            <p>{data?.name}</p>
          </Content>

          <InlineElements>
            <Content>
              <span>Profissão</span>
              <p>{data?.occupation}</p>
            </Content>

            <Content>
              <span>Número de telefone</span>
              <p>{formatPhone(data?.phoneNumber)}</p>
            </Content>
          </InlineElements>

          <InlineElements>
            <Content>
              <span>Data de nascimento</span>
              <p>{getCurrentDateByTimestamp(data?.birthdayDate)}</p>
            </Content>

            <Content>
              <span>Sexo</span>
              <p>{genderAdapter[data?.gender]}</p>
            </Content>
          </InlineElements>

          <InlineElements>
            <Content>
              <span>Estado civil</span>
              <p>{maritalStatusAdapter[data?.maritalStatus]}</p>
            </Content>

            <Content>
              <span>Nível de escolaridade</span>
              <p>{educationLevelAdapter[data?.scholarity]}</p>
            </Content>
          </InlineElements>

          <Content>
            <span>Rua</span>
            <p>{data?.address.street}</p>
          </Content>

          <InlineElements>
            <Content>
              <span>Número da casa</span>
              <p>{data?.address.number}</p>
            </Content>

            <Content>
              <span>Cep</span>
              <p>{data?.address.cep}</p>
            </Content>
          </InlineElements>

          <InlineElements>
            <Content>
              <span>Cidade</span>
              <p>{data?.address.city}</p>
            </Content>

            <Content>
              <span>País</span>
              <p>{data?.address.country}</p>
            </Content>
          </InlineElements>
        </ContentContainer>
      )}
    </Container>
  );
}
