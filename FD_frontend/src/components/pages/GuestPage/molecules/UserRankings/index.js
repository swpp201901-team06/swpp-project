import React, { PropTypes } from 'react'
import styled from 'styled-components'
import SearchResult from '../../../SearchPage/atoms/SearchResult'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  text-align:center;
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
      <Wrapper>
        {rankingstate.map((result) =>
            <SearchResult
              key={result.id}
              resultId={result.id}
              eatWhen={result.eatWhen}
              restaurantId={result.rest_name}
              score={result.score}
              content={result.content}
              photo={result.photo}
              hits={result.hits}
              onResultClick={this.props.onResultClick}
              sendResultIdFunc={this.props.sendResultId}
              archiveOwnerNickname={result.archive}
            />
      	)}
      </Wrapper>
    )
  }
}

UserRankings.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}
