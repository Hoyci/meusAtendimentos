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
        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.colors.text.dark}
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h2, h4, h5, h6, strong {
        font-weight: 600;
    }
`;

export default GlobalStyles;
