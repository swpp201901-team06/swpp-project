import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Dropdown from 'react-dropdown'
import SearchButton from '../../atoms/SearchButton'
/*import 'react-dropdown/style.css'*/

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

export const GuestSearch = ({ onSearchSubmit }) => {
  const options = [
    'restaurant', 'author', 'tag'
  ]
  
  const defaultOption = options[0]

  let searchKey;
  let searchValue;
  searchKey = 'restaurant'
  
  const onCategoryChange = (e) => {
    searchKey = e.value;
  }
  
  const onSubmitClick = () => {
    onSearchSubmit(searchKey, searchValue)
  }
  
  return (
    <div>
      <h4><input ref={node => {searchValue = node;}} />{'    '}
      <SearchButton onClick={onSubmitClick}>Search</SearchButton></h4>
      <Dropdown options={options} onChange={onCategoryChange} value={defaultOption} placeholder="Select an option" />
    </div>
  )
}

GuestSearch.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

