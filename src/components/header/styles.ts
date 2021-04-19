import styled from 'styled-components'
import { deviceSizes, maxDevice } from '~/styles/device'
import { mainColor, defaultTransition } from '~/styles/placeholders'
import { darken } from 'polished'
import LogoSVG from '~/assets/svg/logo'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  background-color: ${mainColor};
  border-top: 8px solid ${darken(0.15, mainColor)};
  height: 150px;
  z-index: 999;

  @media ${maxDevice.laptop} {
    height: auto;
  }

  @media ${maxDevice.mobileL} {
    height: 55px;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80%;
  max-width: ${deviceSizes.laptop};

  @media ${maxDevice.laptop} {
    flex-direction: column;
    height: auto;
  }

  @media ${maxDevice.mobileL} {
    flex-direction: row;
  }

  .header {
    &__col {
      &--logo {
      }
      &--links {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        max-width: 700px;
        height: 100%;
        z-index: 999;

        @media ${maxDevice.laptop} {
          margin: 10px 0px;
        }

        @media ${maxDevice.mobileL} {
          flex-direction: column-reverse;
          visibility: hidden;
          padding: 10px;
          top: 50px;
          height: auto;
          position: fixed;
          top: 55px;
          right: -100%;
          width: 100%;
          margin: 0px;
          opacity: 0;
          background-color: ${mainColor};
          ${defaultTransition}

          &[data-active='true'] {
            visibility: visible;
            opacity: 1;
            right: 0;
            top: 55px;
          }
        }
      }
    }
    &__row {
    }
  }
`

export const Logo = styled(LogoSVG)`
  width: 150px;

  @media ${maxDevice.mobileL} {
    width: 100px;
  }
`
export const HeaderLinksList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${maxDevice.mobileL} {
    flex-direction: column;
    align-items: flex-start;
  }

  @media ${maxDevice.laptop} {
    margin: 10px 0px;
  }
`

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  transition: all 0.3s;

  @media ${maxDevice.mobileL} {
    align-items: flex-start;
    padding: 10px 5px;
    width: 100%;
  }

  svg {
    width: 15px;
    height: auto;
    margin-right: 5px;
  }
`

export const HeaderLink = styled.a`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;

  @media ${maxDevice.mobileL} {
    align-items: flex-start;
    padding: 10px 5px;
    width: 100%;
  }

  svg {
    width: 15px;
    height: auto;
    margin-right: 5px;
  }
`
export const MobMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 20px;
  cursor: pointer;
  position: relative;
  ${defaultTransition}

  &:before,
  &:after,
  div {
    width: 100%;
    height: 10%;
    background-color: #fff;
    ${defaultTransition}
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
  }

  &:before {
    top: 0px;
  }

  &:after {
    bottom: 0px;
  }

  @media ${maxDevice.mobileL} {
    display: flex;
  }

  &[data-active='true'] {
    div {
      visibility: hidden;
      opacity: 0;
    }
    &:before {
      position: absolute;
      top: 50%;
      transform: rotate(45deg);
    }
    &:after {
      position: absolute;
      top: 50%;
      transform: rotate(-45deg);
    }
  }
`
