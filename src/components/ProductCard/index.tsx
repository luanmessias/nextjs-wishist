import React, { useContext, useState, useEffect } from 'react'
import { Container, WishListButton } from './styles'
import { useGetProductsContext } from '~/contexts/GetProductsContext'
import { WihshListContext } from '~/contexts/WishListContext'
import Image from 'next/image'
import { FormatPriceCents } from '~/utils/FormatPriceCents'
import NumberFormat from 'react-number-format'
import TruckSVG from '~/assets/svg/truck'
import HeartSVG from '~/assets/svg/heart'

function ProductCard({ sku }) {
  const { wishlist, dispatch } = useContext(WihshListContext)
  const { productsList } = useGetProductsContext()
  const [selectedWish, setSelectedWish] = useState(false)
  const product = productsList.products.find(prod => prod.sku === sku)
  const isFavorited = wishlist.find(e => e === sku)

  useEffect(() => {
    if (isFavorited !== undefined) {
      setSelectedWish(true)
    }
  }, [])

  const handleAddProduct = () => {
    if (isFavorited === undefined) {
      setSelectedWish(true)
      dispatch({ type: 'ADD_PRODUCT', sku })
    } else {
      setSelectedWish(false)
      dispatch({ type: 'REMOVE_PRODUCT', sku })
    }
  }

  const {
    availableSizes,
    currencyFormat,
    description,
    image,
    installments,
    isFreeShipping,
    price,
    title,
    style
  } = product

  const formattedPrice = FormatPriceCents(price)
  const availableSizeList = Object.keys(availableSizes)
  const installmentValue = FormatPriceCents(price / installments)

  return (
    <Container>
      <WishListButton onClick={handleAddProduct} data-selected={selectedWish}>
        <div className="svgContainer">
          <HeartSVG />
        </div>
      </WishListButton>
      <div className="product__photo">
        <Image src={image} layout="responsive" width="auto" height="auto" />
      </div>

      <span className="product__title">{title}</span>

      {(style || description) && (
        <span className="product__style">
          {style} {description}
        </span>
      )}

      <div className="product__price">
        <span className="product__price__currency">{currencyFormat}</span>
        <NumberFormat
          className="product__price__value"
          value={formattedPrice}
          displayType={'text'}
          decimalSeparator={','}
        />
        {installments > 0 && (
          <div className="product__price__parcel">
            {installments}x de {currencyFormat}
            <NumberFormat
              value={installmentValue}
              displayType={'text'}
              decimalSeparator={','}
              decimalScale={2}
            />
          </div>
        )}
      </div>

      <div className="product__sizes">
        <span className="product__sizes__title">Tamanhos</span>
        <ul>
          {availableSizeList.map(size => (
            <li key={size}>{size}</li>
          ))}
        </ul>
      </div>

      {isFreeShipping && (
        <div className="product__freeShipping">
          <TruckSVG /> <span>Frete Grátis</span>
        </div>
      )}
    </Container>
  )
}

export default ProductCard
