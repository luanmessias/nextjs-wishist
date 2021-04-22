import { createGlobalStyle } from 'styled-components'
import { ResetCSS } from '~/styles/reset'
import { ToastfyStylesCSS } from '~/styles/toast'
import { maxDevice } from '~/styles/device'

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

    @media ${maxDevice.tabletS} {
      padding-top: 55px;
    }


  }

  ${ToastfyStylesCSS}

`
