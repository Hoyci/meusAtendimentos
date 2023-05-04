import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      text: string;
      background: string;
      gray: {
        100: string;
        300: string;
        500: string;
      };
      purple: {
        main: string;
        darker: string;
      };
      red: {
        light: string;
        main: string;
        dark: string;
      };
      white: string;
    };
  }
}

const defaultTheme: DefaultTheme = {
  colors: {
    text: '#131313',
    background: '#F4F4F4',
    gray: {
      100: '#F3F4F6',
      300: '#D1D5DB',
      500: '#6B7280',
    },
    red: {
      light: '#F97171',
      main: '#FC5050',
      dark: '#F63131',
    },
    white: '#FFF',
    purple: {
      main: '#6246EA',
      darker: '#5a42d1',
    },
  },
};

export default defaultTheme;
