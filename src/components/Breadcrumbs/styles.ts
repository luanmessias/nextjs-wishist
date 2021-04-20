import styled from 'styled-components'

export const Container = styled.nav`
  padding: 10px 0px;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    width: 100%;

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
        div {
          &:before {
            color: #818181;
            content: '>';
            margin-right: 5px;
            font-size: 12px;
          }
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
