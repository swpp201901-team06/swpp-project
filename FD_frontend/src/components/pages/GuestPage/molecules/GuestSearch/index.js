import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router' 
import Dropdown from 'react-dropdown'
import SearchButton from '../../atoms/SearchButton'
/*import 'react-dropdown/style.css'*/

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-top: 0em
  margin-left: 0em
`

export class GuestSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchKey: 'restaurant',
      searchValue: ''
    }
  }
  
  onCategoryChange = (e) => {
    this.setState({searchKey: e.value})
  }
  
  onValueChange = (e) => {
    this.setState({searchValue: e.target.value})
  }
    
  render() {
    const options = [
      'restaurant', 'author', 'tag'
    ]
    
    const defaultOption = this.state.searchKey

    
    const onSubmitClick = () => {
      this.props.onSearchSubmit(this.state.searchKey, this.state.searchValue)
    }
    
    return (
      <Wrapper>
         <h4><Dropdown options={options} onChange={this.onCategoryChange} value={defaultOption} placeholder="Select an option" />
	      <input onChange={(e) => this.onValueChange(e)} />{'    '}
          <SearchButton onClick = { onSubmitClick } >Search</SearchButton>
        </h4>
      </Wrapper>
    )
  }
}

GuestSearch.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

