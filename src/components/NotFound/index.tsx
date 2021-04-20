import React from 'react'
import Link from 'next/link'
import { Container } from './styles'
import BlockSVG from '~/assets/svg/block'

function NotFound({ msg }) {
  return (
    <Container data-testid="NotFound">
      <BlockSVG />
      <div>{msg}</div>
      <Link href="/">
        <a href="">VOLTAR PARA PÁGINA PRINCIPAL</a>
      </Link>
    </Container>
  )
}

export default NotFound
