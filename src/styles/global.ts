import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  body{
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-text']};
    -webkit-font-smoothing: antialised;
  }

  body, input, button{
    font: 400 1rem Nunito, sans-serif;
  }

  h1,h2,h3{
    color: ${props => props.theme['base-title']}
  }

  h1{
    font-size: 24px;
    font-weight: 130%;
  }
  h2{
    font-size: 20px;
    font-weight: 160%;
  }
  h3{
    font-size: 18px;
    font-weight: 160%;
  }

  span{
    font-size: 14px;
    font-weight: 160%;
  }

  p{
    font-size: 16px;
    font-weight: 160%;
  }
`