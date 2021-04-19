import styled from 'styled-components'
import { mainColor, defaultTransition } from '~/styles/placeholders'

export const Container = styled.div`
  display: flex;
  position: relative;
  z-index: 999;
`

export const SearchBarContainer = styled.div`
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

export const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  box-sizing: border-box;
  top: 85px;
  opacity: 0;
  visibility: hidden;
  width: 100%;
  border-radius: 5px;
  background-color: #fff;
  overflow-y: auto;
  max-height: 400px;
  ${defaultTransition}

  &[data-active='true'] {
    top: 55px;
    opacity: 1;
    visibility: visible;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: #ccc;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: ${mainColor};
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #000;
  }
`

export const SearchResultCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  margin: 10px 0px;
  border-bottom: 1px solid #f1f1f1;

  .product {
    &__image {
      margin-right: 15px;
    }
    &__info {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      height: 100%;
      strong {
        font-size: 14px;
      }

      span {
        font-size: 12px;
      }
    }
    &__like {
    }
  }
`
