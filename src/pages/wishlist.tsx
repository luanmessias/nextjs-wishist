import React from 'react'
import { Container } from '~/styles/pages/wishlist'
import { useWishlistContext } from '~/contexts/WishListContext'
import ProductCard from '~/components/ProductCard'
import NotFound from '~/components/NotFound'
import LoadingSpinner from '~/components/LoadingSpinner'

const Wishlist = () => {
  const { wishlist, isInitialized } = useWishlistContext()

  if (!isInitialized) return <LoadingSpinner />

  return (
    <Container data-testid="WishlistPage">
      {wishlist.length > 0 ? (
        wishlist.map(({ sku }, index) => {
          return <ProductCard key={index} sku={sku} />
        })
      ) : (
        <NotFound msg="Nenhum produto adicionado à lista de desejos" />
      )}
    </Container>
  )
}

export default Wishlist
