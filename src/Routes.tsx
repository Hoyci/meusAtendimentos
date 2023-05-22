import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/Header';
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
    element: <PrivateRoute />,
    children: [
      {
        path: '/home',
        element: <Home />
      }
    ]
  },
  {
    path: '/patient',
    element: <PrivateRoute />,
    children: [
      {
        path: 'create',
        element: <NewPatient />,
      },
      {
        path: 'edit/:id',
        element: <EditPatient />
      }
    ]
  },
]);
