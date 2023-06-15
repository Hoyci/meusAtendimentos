import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function useAuth() {
  const { currentUser, setCurrentUser } =
    useContext(AuthContext);

  return {
    currentUser,
    setCurrentUser,
  };
}
