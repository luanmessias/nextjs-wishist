import React, { createContext, useState, useContext } from 'react'
import getApiData from '~/services/api'

interface ChildrenPropTtypes {
  children: React.ReactNode
}

interface ContextType {
  productsList: ProductsList | any
}

interface ProductsList {
  products: Product[]
}

interface Product {
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

const GetProductsContext = createContext<ContextType>(null)

const GetProductsProvider = ({
  children
}: ChildrenPropTtypes): React.ReactElement => {
  const [productsList, setProductList] = useState([])
  const { data, error } = getApiData('products')

  if (error) return <h1>Erro ao carregar produtos</h1>
  if (!data) return <h1>Loading...</h1>

  if (data && productsList.length === 0) {
    setProductList(data)
  }

  return (
    <GetProductsContext.Provider value={{ productsList }}>
      {children}
    </GetProductsContext.Provider>
  )
}

const useGetProductsContext = (): ContextType => {
  const context = useContext(GetProductsContext)
  if (!context) {
    throw new Error(
      'useGetProductsContext must be used within a GetProductsProvider'
    )
  }
  return context
}

export { useGetProductsContext, GetProductsProvider, GetProductsContext }
