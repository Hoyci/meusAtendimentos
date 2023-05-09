import { Container } from './styles';
// import { signOut } from '../../services/auth';
import Menu from '../../components/Menu';
import Header from '../../components/Header';

export default function Home() {
  // const handleLogout = async () => {
  //   await signOut();
  // };

  return (
    <Container>
      <Header />
      {/* <Menu /> */}
      {/* <button onClick={handleLogout}>Logout</button> */}
    </Container>
  );
}
