import styled from 'styled-components'
import { darken } from 'polished'
import { mainColor, defaultTransition } from '~/styles/placeholders'

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  background-color: #f2f2f2;
  border-radius: 5px;
  margin: 0px auto;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    max-width: 100px;
    path {
      fill: #888888;
    }
  }

  > div {
    margin: 25px 0px;
  }

  a {
    padding: 10px 20px;
    background-color: ${mainColor};
    text-transform: uppercase;
    border-radius: 5px;
    color: #fff;
    text-decoration: none;
    ${defaultTransition}

    &:hover {
      transform: scale(1.1);
      background-color: ${darken(0.1, mainColor)};
    }
  }
`
