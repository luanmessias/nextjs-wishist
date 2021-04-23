import React from 'react'
import Link from 'next/link'
import { Container } from './styles'
import BlockSVG from '~/assets/svg/block'

const NotFound = ({ msg }) => {
  return (
    <Container data-testid="NotFound">
      <BlockSVG data-testid="BlockSVG" />
      <div>{msg}</div>
      <Link href="/">
        <a href="">VOLTAR PARA PÁGINA PRINCIPAL</a>
      </Link>
    </Container>
  )
}

export default NotFound
