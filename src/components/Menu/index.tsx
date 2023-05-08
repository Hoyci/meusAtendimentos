import Button from '../Button';
import {
  Container,
  Header,
  HeaderSubtitle,
  HeaderTitle,
  HeaderTitleContainer,
} from './styles';

export default function Menu() {
  return (
    <Container>
      <Header>
        <HeaderTitleContainer>
          <HeaderTitle>Bem-vindo</HeaderTitle>
          <HeaderSubtitle>Sua lista de pacientes</HeaderSubtitle>
        </HeaderTitleContainer>
        <Button label="Novo paciente" href="/dashboard/1" isLink />
      </Header>
    </Container>
  );
}
