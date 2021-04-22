import React, { createContext, useState, useContext, useEffect } from 'react'

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

  useEffect(() => {
    if (productsList.length === 0) {
      fetch(
        'https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e/products'
      )
        .then(response => response.json())
        .then(data => setProductList(data))
    }
  }, [])

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
