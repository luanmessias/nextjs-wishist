import styled, { keyframes } from 'styled-components'
import { mainColor } from '~/styles/placeholders'

const pulse = keyframes`
 0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`

export const Container = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  position: fixed;
  width: 80px;
  height: 80px;
  div {
    position: absolute;
    border: 4px solid ${mainColor};
    opacity: 1;
    border-radius: 50%;
    animation: ${pulse} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
`
