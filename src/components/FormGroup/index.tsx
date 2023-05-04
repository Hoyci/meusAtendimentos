import { Container, ErrorMessage } from './styles';

type FormGroupType = {
  children: React.ReactNode;
  error: string | undefined;
};

export default function FormGroup({ children, error }: FormGroupType) {
  return (
    <Container>
      {children}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}
