import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './context/AuthContext';
import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';
import Routes from './Routes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <AuthProvider>
        <RouterProvider router={Routes} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
