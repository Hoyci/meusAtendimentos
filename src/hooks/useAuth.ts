import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function useAuth() {
  const { userProfileInfos, setUserProfileInfos, currentUser, setCurrentUser } =
    useContext(AuthContext);

  return {
    userProfileInfos,
    setUserProfileInfos,
    currentUser,
    setCurrentUser,
  };
}
