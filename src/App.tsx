import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import EditPatient from './pages/EditPatient';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import NewPatient from './pages/NewPatient';
import RegisterPage from './pages/RegisterPage';

const router = createBrowserRouter([
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

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
