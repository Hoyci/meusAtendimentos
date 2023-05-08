import { Outlet } from 'react-router-dom';
import Aside from '../../components/Aside';
import { Container } from './styles';
import { signOut } from '../../services/auth';

export default function Dashboard() {
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <Container>
      <Aside />
      <Outlet />
      <button onClick={handleLogout}>Logout</button>
    </Container>
  );
}
