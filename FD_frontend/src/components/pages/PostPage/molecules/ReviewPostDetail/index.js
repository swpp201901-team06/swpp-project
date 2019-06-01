import React, { PropTypes } from 'react'
import styled from 'styled-components'
import ImageUpload from '../../../../../containers/PostPage/ImageUpload'
import PubStatusButton from '../../atoms/PubStatusButton'
import PostSubmitButton from '../../atoms/PostSubmitButton'

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
};

class ReviewPostDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log('ReviewPostDetail componentDidMount')
    if (this.props.children !== 'default') {
      console.log('not default')
      console.log(this.props.children)
      this.props.onLoad(this.props.children)
    }
  }

  componentWillUnmount() {
    this.props.onUnmount()
  }

  render() {
    console.log('ReviewPostDetail render start')
    console.log(this.props)
    if (this.props.children !== 'default') {
      console.log(this.props.statefunction.PostPage)
    }
    let publicStatusText

    let imgUrlText
    let dateText
    let scoreText
    let contentText
    let tagText
    let restIdText

    if (this.props.statefunction.PostPage.publicStatus && this.props.statefunction.PostPage.publicStatus == 'True') {
      publicStatusText = 'Public'
    } else {
      publicStatusText = 'Private'
    }

    const onInputChange = (e) => {
      this.props.onChangeInput(e.target.name, e.target.value)
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
    console.log('image url!')
    console.log(imgUrlText)

    const onPubStatusChange = () => {
      if (this.props.statefunction.PostPage.publicStatus) {
        this.props.PubStatusChange(this.props.statefunction.PostPage.publicStatus)
      } else {
        this.props.PubStatusChange('False')
      }
      console.log(this.props.statefunction)
    }

    const onClickPostSubmit = () => {
      if (this.refs.restId.value && this.refs.date.value && this.refs.score.value && this.refs.content.value) {
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
              onChange={(e) => onInputChange(e)}
              name="restId"
              ref="restId"
            />
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
