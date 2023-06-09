import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      background: string;
      asideBackground: string;
      blue: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      lynch: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      red: {
        main: string;
      };
      green: {
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
      50: '#eff7ff',
      100: '#e4f1ff',
      200: '#b8dfff',
      300: '#79c4ff',
      400: '#32a7fe',
      500: '#078cf0',
      600: '#006ece',
      700: '#0057a6',
      800: '#034a89',
      900: '#093f71',
      950: '#06274b',
    },
    lynch: {
      50: '#f6f7f9',
      100: '#ecedf2',
      200: '#d4d8e3',
      300: '#aeb6cb',
      400: '#828dae',
      500: '#647196',
      600: '#4e597b',
      700: '#404864',
      800: '#383e54',
      900: '#323748',
      950: '#212430',
    },
    red: {
      main: '#FC5050',
    },
    green: {
      main: '#51CA73',
    },
    text: {
      dark: '#222325',
      light: '#9B9B9B',
    },
    white: '#FFF',
  },
};

export default defaultTheme;
