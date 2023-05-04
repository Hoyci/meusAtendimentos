import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../services/user';
import useAuth from '../../hooks/useAuth';

// This logic need to be a PrivateRoute component
export default function Dashboard() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/');
    }
  }, [currentUser]);

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <>
      <h1>dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
