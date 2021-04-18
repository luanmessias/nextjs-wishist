import { css } from 'styled-components'
import { deviceSizes } from '~/styles/device'

export const mainColor = '#5A2D82'

export const defaultTransition = css`
  transition: all 0.3s;
`
export const pageContainer = css`
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  margin: 0 auto;
  max-width: ${deviceSizes.laptop};
`
