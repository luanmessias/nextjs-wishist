import React from 'react'
import { SearchContainer, SearchInput } from './styles'
import SearchSVG from '@svg/search.svg'

const SearchBar = (): JSX.Element => {
  return (
    <SearchContainer>
      <SearchSVG />
      <SearchInput placeholder="Busca" />
    </SearchContainer>
  )
}

export default SearchBar
