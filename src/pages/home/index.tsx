import React from 'react'
import { Container } from './styles'
import { useGetProductsContext } from '~/contexts/GetProducts'
import ProductCard from '~/components/ProductCard'

function Home() {
  const { productsList } = useGetProductsContext()
  const { products } = productsList

  return (
    <>
      <Container>
        {products.map(({ id, sku }) => {
          return <ProductCard key={id} sku={sku} />
        })}
      </Container>
    </>
  )
}

export default Home
