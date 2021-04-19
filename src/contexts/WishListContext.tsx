import React, { createContext, useEffect, useReducer } from 'react'
import { wishlistReducer } from '~/reducers/wishlistReducer'

type WishlistType = number

type DispatchType = {
  type: string
  sku: number
}

type InitialStateType = {
  wishlist: WishlistType[]
  dispatch: React.Dispatch<DispatchType>
}

const initialState = {
  wishlist: [],
  dispatch: null
}

export const WihshListContext = createContext<InitialStateType>(initialState)

const WishListContextProvider = ({ children }) => {
  const [wishlist, dispatch] = useReducer(wishlistReducer, [], () => {
    if (typeof window !== 'undefined') {
      const localData = localStorage.getItem('wishlist')
      return localData ? JSON.parse(localData) : []
    }
  })

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  return (
    <WihshListContext.Provider value={{ wishlist, dispatch }}>
      {children}
    </WihshListContext.Provider>
  )
}

export default WishListContextProvider
