import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        font-size: 62.5%;
    }
    
    body {
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
        color: ${({ theme }) => theme.colors.lynch[900]};
        background-color: ${({ theme }) => theme.colors.background};
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h2, h4, h5, h6, strong {
        font-weight: 700;
    }
`;

export default GlobalStyles;
