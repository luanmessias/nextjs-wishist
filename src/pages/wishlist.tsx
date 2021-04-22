import React, { useContext } from 'react'
import { Container } from '~/styles/pages/wishlist'
import { WihshListContext } from '~/contexts/WishListContext'
import ProductCard from '~/components/ProductCard'
import NotFound from '~/components/NotFound'
import LoadingSpinner from '~/components/LoadingSpinner'

function Wishlist() {
  const { wishlist, isInitialized } = useContext(WihshListContext)

  if (!isInitialized) return <LoadingSpinner />

  return (
    <Container>
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
