import { useState } from 'react';
import {
  Container,
  Content,
  Image,
  PerfilContainer,
  PerfilModal,
} from './styles';
import userIcon from '../../assets/images/icons/user.svg';
import useAuth from '../../hooks/useAuth';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../../../firebaseConfig';

export default function Header() {
  const { signOut, currentUser } = useAuth();
  const [isPerfilModalOpen, setIsPerfilModalOpen] = useState(false);

  const handleTogglePerfilModal = () =>
    setIsPerfilModalOpen((prevState) => !prevState);

  const handleSignOut = async () => {
    await signOut();
    logEvent(analytics, 'user_logout', {
      userId: currentUser?.uid,
      userEmail: currentUser?.email,
      displayName: currentUser?.displayName,
    });
  };

  return (
    <Container>
      <Content>
        <p>Olá {currentUser?.displayName}</p>
        {/* <Image
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="User image"
        /> */}
        <PerfilContainer onClick={handleTogglePerfilModal}>
          <Image src={userIcon} alt="user image" />
          <PerfilModal
            isOpen={isPerfilModalOpen}
            className={isPerfilModalOpen ? 'visible' : ''}
          >
            <button type="button" onClick={handleSignOut}>
              Logout
            </button>
          </PerfilModal>
        </PerfilContainer>
      </Content>
    </Container>
  );
}
