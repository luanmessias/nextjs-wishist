import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import {
  Container,
  SearchBarContainer,
  SearchInput,
  SearchResultContainer,
  SearchResultCard
} from './styles'
import SearchSVG from '~/assets/svg/search'
import { useGetProductsContext } from '~/contexts/GetProductsContext'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const { productsList } = useGetProductsContext()
  const { products } = productsList

  const isFirstRun = useRef(true)
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }

    const results = products.filter(({ title }) =>
      title.toLowerCase().includes(searchTerm)
    )

    if (searchTerm === '') {
      setSearchResults([])
      setShowResult(false)
    } else {
      setSearchResults(results)
      setShowResult(true)
    }
  }, [searchTerm])

  if (!products) return <></>

  const handleChange = event => {
    const inputValue = event.target.value.toLowerCase()
    setSearchTerm(inputValue)
    setSearchResults([])
  }

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
    <Container data-testid="SearchBar">
      <SearchBarContainer>
        <SearchSVG />
        <SearchInput
          onChange={handleChange}
          value={searchTerm}
          placeholder="Busca"
        />
      </SearchBarContainer>
      <SearchResultContainer
        data-testid="SearchResult"
        data-active={showResult}
      >
        {searchResultRender}
      </SearchResultContainer>
    </Container>
  )
}

export default SearchBar
