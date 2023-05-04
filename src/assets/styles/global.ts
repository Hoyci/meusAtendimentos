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
        color: ${({ theme }) => theme.colors.text}
    }
`;

export default GlobalStyles;
