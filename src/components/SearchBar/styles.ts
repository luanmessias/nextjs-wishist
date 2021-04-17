import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  padding: 5px 20px 5px 20px;
  background-color: #fff;

  svg {
    width: 20px;
    path {
      fill: #4f4f4f;
    }
  }
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 0px;

  &:focus,
  &:focus,
  &:focus {
    outline: none;
  }
`
