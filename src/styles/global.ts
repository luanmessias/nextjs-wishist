import { createGlobalStyle } from 'styled-components'
import { ResetCSS } from '@globalStyles/reset'

export default createGlobalStyle`
  ${ResetCSS}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight: 400;
  }

`
