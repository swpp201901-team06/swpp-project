import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router' 
import Dropdown from 'react-dropdown'
import SearchButton from '../../atoms/SearchButton'
/*import 'react-dropdown/style.css'*/

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
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
    console.log(this.state.searchValue)
  }
    
  render() {
    const options = [
      'restaurant', 'author', 'tag'
    ]
    
    const defaultOption = this.state.searchKey

    
    const onSubmitClick = () => {
      onSearchSubmit(this.state.searchKey, this.state.searchValue)
    }
    
    return (
      <div>
         <h4><Dropdown options={options} onChange={this.onCategoryChange} value={defaultOption} placeholder="Select an option" />
	      <input onChange={(e) => this.onValueChange(e)} />{'    '}
        <Link to={"/search/"+this.state.searchKey+"/"+this.state.searchValue}>
          <SearchButton>Search</SearchButton>
        </Link>
        </h4>
      </div>
    )
  }
}

GuestSearch.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

