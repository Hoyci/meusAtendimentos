import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      background: string;
      asideBackground: string;
      blue: {
        dark: string;
        light: string;
      };
      red: {
        main: string;
      }
      text: {
        dark: string;
        light: string;
      };
      white: string;
    };
  }
}

const defaultTheme: DefaultTheme = {
  colors: {
    background: '#FFFFFF',
    asideBackground: '#FAFAFA',
    blue: {
      light: '#E4F1FF',
      dark: '#017AFF',
    },
    red: {
      main: '#FC5050'
    },
    text: {
      dark: '#222325',
      light: '#9B9B9B',
    },
    white: '#FFF',
  },
};

export default defaultTheme;
