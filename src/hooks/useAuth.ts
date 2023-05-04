import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function useAuth() {
  const { currentUser, setCurrentUser, signIn, signUp, signOut } =
    useContext(AuthContext);

  return { currentUser, setCurrentUser, signIn, signUp, signOut };
}
