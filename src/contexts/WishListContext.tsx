import React, { createContext, useEffect, useState, useReducer } from 'react'
import WishlistReducer from '~/reducers/wishlistReducer'

interface IProduct {
  id: number
  sku: number
  title: string
  description: string
  availableSizes: number[] | string[]
  style: string
  price: number
  installments: number
  currencyId: string
  currencyFormat: string
  isFreeShipping: boolean
  image: string
}

type WishlistType = IProduct

type DispatchType = {
  type: string
  sku: number
}

type InitialStateType = {
  wishlist: WishlistType[]
  addProductToWishlist: React.Dispatch<DispatchType>
  removeProductFromWishlist: React.Dispatch<DispatchType>
  isInitialized: boolean
}

const initialState = {
  wishlist: []
}

export const WihshListContext = createContext<InitialStateType>(null)

const WishListContextProvider = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false)
  const [state, dispatch] = useReducer(WishlistReducer, initialState)

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
    }
  }, [state])

  const addProductToWishlist = product => {
    dispatch({ type: 'ADD_PRODUCT_TO_WISHLIST', payload: product })
  }

  const removeProductFromWishlist = product => {
    dispatch({ type: 'REMOVE_PRODUCT_FROM_WISHLIST', payload: product })
  }

  useEffect(() => {
    const currentData = JSON.parse(localStorage.getItem('wishlist'))
    if (currentData === null) {
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
    } else {
      currentData.map(product => addProductToWishlist(product))
    }

    setIsInitialized(true)
  }, [])

  return (
    <WihshListContext.Provider
      value={{
        wishlist: state.wishlist,
        addProductToWishlist,
        removeProductFromWishlist,
        isInitialized
      }}
    >
      {children}
    </WihshListContext.Provider>
  )
}

export default WishListContextProvider
