import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import {
  LoginPage,
  RegisterPage,
  Home,
  NewPatient,
  EditPatient,
} from './pages';

export default createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/signUp',
    element: <RegisterPage />,
  },
  {
    path: '/home',
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: '/patient/create',
    element: (
      <PrivateRoute>
        <NewPatient />
      </PrivateRoute>
    ),
  },
  {
    path: '/patient/edit/:id',
    element: (
      <PrivateRoute>
        <EditPatient />
      </PrivateRoute>
    ),
  },
]);
