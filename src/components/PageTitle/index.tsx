import React from 'react'
import { useRouter } from 'next/router'
import { Container, Content, Title } from './styles'
import BreadCrumbs from '~/components/Breadcrumbs'

const PageTitle = () => {
  const { pathname } = useRouter()

  const getTitle = () => {
    switch (pathname) {
      case '/':
        return 'Catálogo de produtos'
        break
      case '/wishlist':
        return 'Lista de desejos'
        break
      case 'Papayas':
      default:
        return ''
    }
  }

  return (
    <Container data-testid="PageTitle">
      <Content>
        <Title>{getTitle()}</Title>
        <BreadCrumbs />
      </Content>
    </Container>
  )
}

export default PageTitle
