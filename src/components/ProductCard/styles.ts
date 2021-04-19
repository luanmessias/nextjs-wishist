import styled from 'styled-components'
import { deviceSizes, maxDevice, minDevice } from '~/styles/device'
import { mainColor, defaultTransition } from '~/styles/placeholders'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid #ccc;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  border-radius: 3px;

  @media ${minDevice.laptop} {
    width: calc((100% / 4) - 10px);
    margin-bottom: 15px;
  }

  @media screen and (min-width: ${deviceSizes.mobileL}) and (max-width: ${deviceSizes.laptop}) {
    width: calc((100% / 3) - 15px);
    margin-bottom: 20px;
  }

  @media ${maxDevice.tablet} {
    width: calc((100% / 2) - 5px);
    margin-bottom: 10px;
  }

  .product {
    &__photo {
      width: 100%;
      height: auto;
    }
    &__title {
      width: 100%;
      box-sizing: border-box;
      font-weight: 300;
      padding: 10px 10px 0px 10px;
      font-size: 16px;
      text-align: left;
      color: #000;
    }
    &__style {
      width: 100%;
      box-sizing: border-box;
      font-weight: 300;
      padding: 5px 0px 10px 10px;
      font-size: 12px;
      text-align: left;
      color: #818181;
    }
    &__price {
      //background-color: ${mainColor};
      width: 100%;
      padding: 5px 10px;
      &__currency {
        font-weight: 800;
        font-size: 24px;
      }
      &__value {
        font-weight: 800;
        font-size: 24px;
      }
      &__parcel {
        font-size: 16px;
      }
    }
    &__sizes {
      box-sizing: border-box;
      width: 100%;
      padding: 5px 10px;
      text-transform: uppercase;
      font-size: 11px;
      color: #000;

      ul {
        display: flex;
        align-items: flex-start;
        flex-direction: row;
        box-sizing: border-box;
        width: 100%;
        list-style: none;
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          box-sizing: border-box;
          font-weight: 300;
          padding: 5px;
          background-color: #f2f2f2;
          color: #8a8a8a;

          & + li {
            margin-left: 5px;
          }
        }
      }
    }
    &__freeShipping {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: ${mainColor};
      box-sizing: border-box;
      padding: 0px 5px;
      width: 100%;
      margin-top: auto;

      span {
        color: #fff;
        font-size: 10px;
        text-transform: uppercase;
      }

      svg {
        width: 25px;
        margin-right: 10px;
      }
    }
  }
`

export const WishListButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5px;
  right: 5px;
  position: absolute;
  z-index: 9;
  background-color: #919191;
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  ${defaultTransition}

  .svgContainer {
    width: 15px;
    height: 15px;
    position: absolute;
    z-index: 10;
    ${defaultTransition}

    svg {
      width: 100%;
      ${defaultTransition}
    }
  }

  &:hover {
    background-color: #000;
    transform: scale(1.1);
    .svgContainer {
      width: 15px;
      height: 15px;

      svg {
        transform: scale(1.3);
        path {
          fill: red;
        }
      }
    }
  }

  &[data-selected='true'] {
    background-color: #000;
    .svgContainer {
      svg {
        path {
          fill: red;
        }
      }
    }
  }
`
