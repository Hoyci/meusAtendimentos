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
        test: string;
        anotherVariation: string;
        secondVariation: string;
      };
      gray: {
        main: string;
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
      test: '#4661e6',
      anotherVariation: '#647196',
      secondVariation: '#f2f4ff',
    },
    gray: {
      main: '#f2f4fe',
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
