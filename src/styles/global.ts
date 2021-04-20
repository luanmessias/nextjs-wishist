import { createGlobalStyle } from 'styled-components'
import { ResetCSS } from '~/styles/reset'
import { ToastfyStylesCSS } from '~/styles/toast'

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

  ${ToastfyStylesCSS}

`
