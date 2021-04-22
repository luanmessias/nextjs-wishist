import React from 'react'
import { Container } from '~/styles/pages/home'
import { useGetProductsContext } from '~/contexts/GetProductsContext'
import ProductCard from '~/components/ProductCard'
import LoadingSpinner from '~/components/LoadingSpinner'

function Home() {
  const { productsList } = useGetProductsContext()
  const { products } = productsList

  if (!products) return <LoadingSpinner />

  return (
    <Container>
      {productsList.products.map(({ sku }, index) => {
        return <ProductCard key={index} sku={sku} />
      })}
    </Container>
  )
}

export default Home
