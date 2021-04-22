import React, { createContext, useEffect, useState, useReducer } from 'react'
import WishlistReducer from '~/reducers/wishlistReducer'

type WishlistType = number

type DispatchType = {
  type: string
  sku: number
}

type InitialStateType = {
  wishlist: WishlistType[]
  dispatch: React.Dispatch<DispatchType>
  addProductToWishlist: WishlistType[]
  removeProductFromWishlist: WishlistType[]
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
    currentData.map(product => addProductToWishlist(product))
    setIsInitialized(true)
  }, [])

  return (
    <WihshListContext.Provider
      value={{
        wishlist: state.wishlist,
        addProductToWishlist,
        removeProductFromWishlist
      }}
    >
      {children}
    </WihshListContext.Provider>
  )
}

export default WishListContextProvider
