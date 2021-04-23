import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useReducer
} from 'react'
import WishlistReducer from '~/reducers/wishlistReducer'

export interface IProduct {
  id: number
  sku: number
  title: string
  description: string
  availableSizes: AvailableSizes
  style: string
  price: number
  installments: number
  currencyId: string
  currencyFormat: string
  isFreeShipping: boolean
  image: string
}

interface AvailableSizes {
  S?: number | null
  G?: number | null
  GG?: number | null
  GGG?: number | null
  40?: number | null
  43?: number | null
  41?: number | null
}

interface DispatchType {
  type: string
  product: IProduct
}

interface InitialStateType {
  wishlist: IProduct[]
  addProductToWishlist: React.Dispatch<DispatchType>
  removeProductFromWishlist: React.Dispatch<DispatchType>
  isInitialized: boolean
}

const initialState = {
  wishlist: [],
  isInitialized: false,
  addProductToWishlist: null,
  removeProductFromWishlist: null
}

const WihshListContext = createContext<InitialStateType>(null)

const WishListProvider = ({ children }) => {
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

const useWishlistContext = () => {
  const context = useContext(WihshListContext)
  if (!context) {
    throw new Error(
      'useGetProductsContext must be used within a GetProductsProvider'
    )
  }
  return context
}

export { WishListProvider, useWishlistContext, WihshListContext }
