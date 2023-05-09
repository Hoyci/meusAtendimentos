import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

//TODO: separar o que é autenticação do que é de usuário e criar um hook useUser
export default function useAuth() {
  const {
    userProfileInfos,
    setUserProfileInfos,
    currentUser,
    setCurrentUser,
    signIn,
    signUp,
    signOut,
  } = useContext(AuthContext);

  return {
    userProfileInfos,
    setUserProfileInfos,
    currentUser,
    setCurrentUser,
    signIn,
    signUp,
    signOut,
  };
}
