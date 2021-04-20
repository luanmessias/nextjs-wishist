import React, { useContext } from 'react'
import { Container } from '~/styles/pages/wishlist'
import { WihshListContext } from '~/contexts/WishListContext'
import ProductCard from '~/components/ProductCard'
import NotFound from '~/components/NotFound'

function Wishlist() {
  const { wishlist } = useContext(WihshListContext)

  return (
    <>
      <Container>
        {wishlist.length > 0 &&
          wishlist.map(sku => {
            return <ProductCard key={sku} sku={sku} />
          })}

        {wishlist.length === 0 && (
          <NotFound msg="Nenhum produto adicionado à lista de desejos" />
        )}
      </Container>
    </>
  )
}

export default Wishlist
