import styled from 'styled-components'
import { pageContainer } from '~/styles/placeholders'

export const Container = styled.nav`
  ${pageContainer}
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    width: 100%;
    border-bottom: 1px solid #ccc;

    li {
      display: flex;
      flex-direction: row;
      justify-content: center;
      & + li {
        margin-left: 5px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        &:before {
          color: #818181;
          content: '|';
          margin-right: 5px;
          font-size: 12px;
        }
      }

      &:last-child {
        a {
          font-weight: bold;
        }
      }

      a {
        text-decoration: none;
        font-size: 14px;
        color: #818181;
        &:first-letter {
          text-transform: uppercase;
        }
      }
    }
  }
`
