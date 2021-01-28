import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  a{
    color:currentColor;
    text-decoration: none;

    &:hover{
      color:currentColor;
    text-decoration: none;
    }
  }

  h1,h2,h3,h4,h5,h6{
    font-family: Archivo;
    font-weight: 400;

  }
`
