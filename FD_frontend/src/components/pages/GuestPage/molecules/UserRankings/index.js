import React, { PropTypes } from 'react'
import styled from 'styled-components'
import SearchResult from '../../../SearchPage/atoms/SearchResult'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

export class UserRankings extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.props.requestPopularReviews()
  }
  
  render() {
    let rankingstate = this.props.statefunction.GuestPage.rankedReviews
    return (
      <div>
        {rankingstate.map((result) =>
            <SearchResult
              key={result.hits}
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

UserRankings.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}
