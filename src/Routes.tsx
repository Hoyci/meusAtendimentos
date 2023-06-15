import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import {
  LoginPage,
  RegisterPage,
  Home,
  NewPatient,
  EditPatient,
  PatientInfos
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
      },
      {
        path: 'info/:id',
        element: <PatientInfos />
      }
    ]
  },
]);
