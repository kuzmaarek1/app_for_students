import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        box-sizing:border-box;
    }
    body{
        padding:0px;
        margin:0px;
        font-family: 'Montserrat',sans-serif;
        overflow: hidden;
    }
`;
export default GlobalStyle;
