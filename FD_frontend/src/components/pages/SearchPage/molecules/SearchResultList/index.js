import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import SearchResult from '../../atoms/SearchResult'
import Dropdown from 'react-dropdown'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class SearchResultList extends React.Component {
  componentDidMount() {
    this.props.requestResults(this.props.children[0], this.props.children[1])
  }

  render() {
    const searchstate = this.props.statefunction.SearchPage.results

    return (
      <div>
        {searchstate.map((result) =>
          <SearchResult
            key={result.id}
            resultId={result.id}
            eatWhen={result.eatWhen}
            restaurantId={result.restaurantId}
            score={result.score}
            content={result.content}
            photo={result.photo}
            onResultClick={this.props.onResultClick}
            sendResultIdFunc={this.props.sendResultId}
            archiveOwnerNickname={result.archive}
          />
        )}
      </div>
    )
  }
}

SearchResultList.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default SearchResultList
