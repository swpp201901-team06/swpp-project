import React from 'react'
import styled from 'styled-components'
import { font } from 'styled-theme'

const Styledli = styled.li`
  font-family: ${font('primary')};
`

const Review = styled.li`
  background-color: #e0ba7c;
  margin-bottom:0em;
  padding : 1em;
  &:hover, &:focus, &:active {
    background-color: #ff8d06;
  }
  text-align : center;
  width: 70%;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-top: 3em
  margin-left: 0em
`

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-top: 3em
  margin-left: 0em
`
const backendUrl = 'http://localhost:8000'

class SearchResult extends React.Component {
  render() {
    const resultId = this.props.resultId
    const eatWhen = this.props.eatWhen
    const restaurantId = this.props.restaurantId
    const score = this.props.score
    const content = this.props.content
    const photo = this.props.photo
    const hits = this.props.hits
    const onResultClick = this.props.onResultClick
    const sendResultId = this.props.sendResultIdFunc
    const archiveOwnerNickname = this.props.archiveOwnerNickname
    const onClickThis = () => {
      sendResultId(resultId)
      onResultClick(resultId, archiveOwnerNickname)
    }

    const eatWhenDate = new Date(eatWhen).toLocaleString('ko-KR', { timeZone: 'UTC' })

    if (photo) {
      return (
        <Review onClick={() => { onClickThis() }}>
          <h4>
            {'by: '}{archiveOwnerNickname}{'   '}
            {'view: '}{hits}{'   '}
          </h4>
          <h4>
            {'date: '}{eatWhenDate}{'   '}</h4>
          <h4>
            {'where: '}{restaurantId}{'   '}
            {'score: '}{score}{'   '}
          </h4>
          <img src={`${backendUrl}${photo}`} width="100" height="100" />
        </Review>
      )
    }

    return (
      <Review onClick={() => { onClickThis() }}>
        <h4>
          <h4>
            {'by: '}{archiveOwnerNickname}{'   '}
            {'view: '}{hits}{'   '}
          </h4>
          <h4>
            {'date: '}{eatWhenDate}{'   '}</h4>
          <h4>
            {'where: '}{restaurantId}{'   '}
            {'score: '}{score}{'   '}
          </h4>
        </h4>
      </Review>
    )
  }
}

SearchResult.defaultProps = {
  palette: 'grayscale',
}

export default SearchResult
