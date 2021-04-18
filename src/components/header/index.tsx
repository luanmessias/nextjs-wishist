import React, { useState, useEffect } from 'react'
import {
  Container,
  Content,
  Logo,
  MobMenu,
  HeaderLinksList,
  HeaderLink
} from './styles'
import Link from 'next/link'
import SearchBar from '@components/SearchBar'
import LocationSVG from '@svg/location'
import HeartSVG from '@svg/heart'
import PhoneSVG from '@svg/phone'

const headerLinks = [
  {
    order: 1,
    text: 'Cidade: São Paulo',
    icon: <LocationSVG />,
    href: '#'
  },
  {
    order: 2,
    text: 'Central de atendimento',
    icon: <PhoneSVG />,
    href: '#'
  },
  {
    order: 3,
    text: 'Lista de desejos',
    icon: <HeartSVG />,
    href: '#'
  }
]

function Header(): JSX.Element {
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const disableMobileMenu = () => {
      setMobileMenu(false)
    }

    window.addEventListener('resize', disableMobileMenu)
  }, [])

  return (
    <Container>
      <Content className="header">
        <div className="header__col--logo">
          <Logo data-testid="logo" />
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
            {headerLinks.map(({ order, text, icon, href }) => (
              <Link href={href} key={order}>
                <HeaderLink href="">
                  {icon}
                  {text}
                </HeaderLink>
              </Link>
            ))}
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
