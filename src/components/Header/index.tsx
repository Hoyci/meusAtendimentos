import { useEffect, useRef, useState } from 'react';
import { Container, Content, PerfilContainer, PerfilModal } from './styles';
import useAuth from '../../hooks/useAuth';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../../../firebaseConfig';
import { AiOutlineUser } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import Button from '../Button';
import { useMutation } from '@tanstack/react-query';
import { signOut } from '../../services/auth';

export default function Header() {
  const { currentUser } = useAuth();
  const [isPerfilModalOpen, setIsPerfilModalOpen] = useState(false);
  const perfilModalRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const { mutateAsync } = useMutation({
    mutationFn: signOut,
  });

  const handleTogglePerfilModal = () =>
    setIsPerfilModalOpen((prevState) => !prevState);

  const handleSignOut = async () => {
    await mutateAsync();
    logEvent(analytics, 'user_logout', {
      userId: currentUser?.uid,
      userEmail: currentUser?.email,
      displayName: currentUser?.displayName,
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        perfilModalRef.current &&
        !perfilModalRef.current.contains(event.target as Node)
      ) {
        setIsPerfilModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Content>
        <p>Seja bem-vindo {currentUser?.displayName}</p>
        {/* <Image
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="User image"
        /> */}
        <PerfilContainer onClick={handleTogglePerfilModal}>
          <AiOutlineUser
            fontSize={'3rem'}
            color={theme.colors.lynch[100]}
            style={{
              backgroundColor: theme.colors.blue[700],
              borderRadius: '50%',
              cursor: 'pointer',
            }}
          />
          <PerfilModal
            isOpen={isPerfilModalOpen}
            className={isPerfilModalOpen ? 'visible' : ''}
            ref={perfilModalRef}
          >
            <Button
              maxWidth="10rem"
              outlined
              type="button"
              onClick={handleSignOut}
            >
              Logout
            </Button>
          </PerfilModal>
        </PerfilContainer>
      </Content>
    </Container>
  );
}
