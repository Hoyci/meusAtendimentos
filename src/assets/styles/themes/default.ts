import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      background: string;
      asideBackground: string;
      blue: {
        dark: string;
        darkGrey: string;
        darkGreyHover: string;
        light: string;
      };
      red: {
        main: string;
      };
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
    background: '#F7F8FD',
    asideBackground: '#FAFAFA',
    blue: {
      dark: '#017AFF',
      darkGrey: '#3A4374',
      darkGreyHover: '#656EA3',
      light: '#E4F1FF',
    },
    red: {
      main: '#FC5050',
    },
    text: {
      dark: '#222325',
      light: '#9B9B9B',
    },
    white: '#FFF',
  },
};

export default defaultTheme;
