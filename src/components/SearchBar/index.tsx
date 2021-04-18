import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Container,
  SearchBarContainer,
  SearchInput,
  SearchResultContainer,
  SearchResultCard
} from './styles'
import SearchSVG from '~/assets/svg/search'
import { useGetProductsContext } from '~/contexts/GetProducts'

const SearchBar = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const { productsList }: { productsList } = useGetProductsContext()

  const handleChange = event => {
    const inputValue = event.target.value.toLowerCase()
    setSearchTerm(inputValue)
    setSearchResults([])
  }

  useEffect(() => {
    const results = productsList.products.filter(
      ({ title }: { title: string }) => title.toLowerCase().includes(searchTerm)
    )

    if (searchTerm === '') {
      setSearchResults([])
      setShowResult(false)
    } else {
      setSearchResults(results)
      setShowResult(true)
    }
  }, [searchTerm])

  const searchResultRender = searchResults.map(
    ({ title, style, image }, index) => {
      return (
        <SearchResultCard className="product" key={index}>
          <div className="product__image">
            <Image src={image} width={50} height={50} />
          </div>
          <div className="product__info">
            <strong>{title}</strong>
            <span>{style}</span>
          </div>
          <div className="product__like"></div>
        </SearchResultCard>
      )
    }
  )

  return (
    <Container>
      <SearchBarContainer>
        <SearchSVG />
        <SearchInput
          onChange={handleChange}
          value={searchTerm}
          placeholder="Busca"
        />
      </SearchBarContainer>
      <SearchResultContainer data-active={showResult}>
        {searchResultRender}
      </SearchResultContainer>
    </Container>
  )
}

export default SearchBar
