import React, { useState, useEffect } from 'react'
import {
  Container,
  Content,
  Logo,
  MobMenu,
  HeaderLinksList,
  HeaderInfo,
  HeaderLink
} from './styles'
import Link from 'next/link'
import SearchBar from '~/components/SearchBar'
import LocationSVG from '~/assets/svg/location'
import HeartSVG from '~/assets/svg/heart'
import PhoneSVG from '~/assets/svg/phone'

function Header(): JSX.Element {
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const disableMobileMenu = () => {
      if (window.innerWidth > 430) {
        setMobileMenu(false)
      }
    }
    window.addEventListener('resize', disableMobileMenu)
  }, [])

  return (
    <Container>
      <Content className="header">
        <div className="header__col--logo">
          <Link href="/">
            <a href="">
              <Logo data-testid="logo" />
            </a>
          </Link>
        </div>
        <div className="header__col--mobmenu">
          <MobMenu
            data-active={mobileMenu}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <div />
          </MobMenu>
        </div>
        <div className="header__col--links" data-active={mobileMenu}>
          <HeaderLinksList>
            <HeaderInfo>
              <LocationSVG />
              <span>Cidade:</span>
              <strong>São Paulo</strong>
            </HeaderInfo>

            <Link href="/">
              <HeaderLink href="">
                <PhoneSVG />
                <span>Central de atendimento</span>
              </HeaderLink>
            </Link>

            <Link href="wishlist">
              <HeaderLink href="">
                <HeartSVG />
                <span>Lista de desejos</span>
              </HeaderLink>
            </Link>
          </HeaderLinksList>
          <div className="header__row">
            <SearchBar />
          </div>
        </div>
      </Content>
    </Container>
  )
}

export default Header
