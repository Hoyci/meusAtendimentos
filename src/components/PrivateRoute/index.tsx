import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Header';
import { Container, ContentContainer } from './styles';

export default function PrivateRoute() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/');
    }
  }, [currentUser]);

  return (
    <Container>
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </Container>
  );
}
