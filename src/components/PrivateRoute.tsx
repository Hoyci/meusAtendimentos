import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

type PrivateRouteType = {
  children: React.ReactNode;
};

export default function PrivateRoute({ children }: PrivateRouteType) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/');
    }
  }, [currentUser]);

  return <>{children}</>;
}
