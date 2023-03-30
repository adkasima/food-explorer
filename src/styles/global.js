import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.dark_400};
        color: white;

        overflow-x: hidden;

        --webkit-font-smoothing: antialiased;
        
    }

    body, html, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.light_100};
    }
    

    button, a {
        cursor: pointer;
        transition: all 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

`
