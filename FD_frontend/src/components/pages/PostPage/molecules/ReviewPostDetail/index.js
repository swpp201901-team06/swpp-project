import React, { PropTypes } from 'react'
import styled from 'styled-components'
import ImageUpload from '../../../../../containers/PostPage/ImageUpload'
import PubStatusButton from '../../atoms/PubStatusButton'
import PostSubmitButton from '../../atoms/PostSubmitButton'
import RestConfirmButton from '../../atoms/RestConfirmButton'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: row;
`

const padding = {
  margin: 10,
}

const divtext = {
  color: '#e0ba7c',
  fontSize: 15,
}

class ReviewPostDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    if (this.props.children !== 'default') {
      this.props.onLoad(this.props.children)
    }
  }

  componentWillUnmount() {
    this.props.onUnmount()
  }

  render() {
    let publicStatusText
    let imgUrlText
    let dateText
    let scoreText
    let contentText
    let tagText
    let restIdText

    if (this.props.statefunction.PostPage.publicStatus &&
      this.props.statefunction.PostPage.publicStatus === 'True') {
      publicStatusText = 'Public'
    } else {
      publicStatusText = 'Private'
    }

    if (this.props.statefunction.PostPage.eatWhen) {
      dateText = this.props.statefunction.PostPage.eatWhen
    } else {
      dateText = ''
    }

    if (this.props.statefunction.PostPage.restId) {
      restIdText = this.props.statefunction.PostPage.restId
    } else {
      restIdText = ''
    }

    if (this.props.statefunction.PostPage.score) {
      scoreText = this.props.statefunction.PostPage.score
    } else {
      scoreText = ''
    }

    if (this.props.statefunction.PostPage.content) {
      contentText = this.props.statefunction.PostPage.content
    } else {
      contentText = ''
    }

    if (this.props.statefunction.PostPage.tags) {
      tagText = this.props.statefunction.PostPage.tags
    } else {
      tagText = ''
    }

    if (this.props.statefunction.PostPage.photo) {
      imgUrlText = this.props.statefunction.PostPage.photo
    } else {
      imgUrlText = ''
    }

    const onInputChange = (e) => {
      console.log('ReviewPostDetail onInputChange')
      console.log(e)
      console.log(typeof e.target)
      console.log(e.target)
      console.log(e.target.name)
      console.log(e.target.value)
      this.props.onChangeInput(e.target.name, e.target.value)
    }

    const onPubStatusChange = () => {
      if (this.props.statefunction.PostPage.publicStatus) {
        this.props.PubStatusChange(this.props.statefunction.PostPage.publicStatus)
      } else {
        this.props.PubStatusChange('False')
      }
    }

    const onClickRestConfirm = () => {
      const restName = 'some_restname'
      const address = 'some_addr'
      const latitude = 1.0
      const longitude = 2.0
      this.props.onConfirmRest(restName, address, latitude, longitude)
    }

    const onClickPostSubmit = () => {
      if (this.refs.restId.value && this.refs.date.value && this.refs.score.value &&
        this.refs.content.value) {
        this.props.onPostSubmit(
          this.props.children,
          this.props.statefunction.PostPage.nickname,
          this.refs.restId.value,
          this.refs.date.value,
          this.refs.tag.value,
          this.refs.score.value,
          this.refs.content.value,
          this.props.statefunction.PostPage.photo,
          this.props.statefunction.PostPage.publicStatus
        )
      }
    }

    return (
      <div style={divtext}>
        <Wrapper>
          <div style={padding}>
            Date{' '}
            <input
              value={dateText}
              onChange={(e) => onInputChange(e)}
              name="date"
              ref="date"
              style={{paddingleft:"100px"}}
            />
          </div>
          <div style={padding}>
            Restaurant ID{' '}
            <input
              value={restIdText}
              name="restId"
              ref="restId"
            />
            <RestConfirmButton onClick={onClickRestConfirm}>
              Confirm
            </RestConfirmButton>
          </div>
          <RowWrapper>
            Image{' '}
            <ImageUpload imageUrl={imgUrlText} style={padding}/>
          </RowWrapper>
          <div style={padding}>
            Score{' '}
            <input
              value={scoreText}
              onChange={(e) => onInputChange(e)}
              name="score"
              ref="score"
            />
          </div>
          <div style={padding}>
            Content{' '}
            <input
              value={contentText}
              onChange={(e) => onInputChange(e)}
              name="content"
              ref="content"
            />
          </div>
          <div style={padding}>
            Tag{' '}
            <input
              value={tagText}
              onChange={(e) => onInputChange(e)}
              name="tag"
              ref="tag"
            />
          </div>
          <div style={padding}>
            <PubStatusButton onClick={onPubStatusChange}>
              Public Status
            </PubStatusButton>
            {'  '}
            {publicStatusText}
          </div>
          <div style={padding}>
            <PostSubmitButton onClick={onClickPostSubmit}>
              Submit
            </PostSubmitButton>
          </div>
        </Wrapper>
      </div>
    )
  }
}

export default ReviewPostDetail
