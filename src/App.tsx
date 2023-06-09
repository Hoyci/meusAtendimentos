import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './context/AuthContext';
import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';
import Routes from './Routes';
import ToastContainer from './components/Toast/ToastContainer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />
        <AuthProvider>
          <RouterProvider router={Routes} />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
