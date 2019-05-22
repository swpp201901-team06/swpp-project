/* eslint-disable react/prop-types */
import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import ImageUpload from '../../../../../containers/PostPage/ImageUpload'
import PubStatusButton from '../../atoms/PubStatusButton'
import PostSubmitButton from '../../atoms/PostSubmitButton'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class ReviewPostDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // TODO: get nickname
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
    if (this.props.children != 'default') {
      console.log(this.props.statefunction.PostPage)
    }
    //let date
    let score
    let content
    let tag
    let publicStatusText
    let restId

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
    
    if(this.props.statefunction.PostPage.eatWhen){
      dateText = this.props.statefunction.PostPage.eatWhen
    }
    else{
      dateText = ''
    }    
    
    if(this.props.statefunction.PostPage.restId){
      restIdText = this.props.statefunction.PostPage.restId
    }
    else{
      restIdText = ''
    }
    
    if(this.props.statefunction.PostPage.score){
      scoreText = this.props.statefunction.PostPage.score
    }
    else{
      scoreText = ''
    }
    
    if(this.props.statefunction.PostPage.content){
      contentText = this.props.statefunction.PostPage.content
    }
    else{
      contentText = ''
    }
    
    if(this.props.statefunction.PostPage.tags){
      tagText = this.props.statefunction.PostPage.tags
    }
    else{
      tagText = ''
    }

    if(this.props.statefunction.PostPage.photo){
      imgUrlText = this.props.statefunction.PostPage.photo
    }
    else{
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
      <div>
	      <h4>Date{' '}<input value = {dateText} onChange = {(e) => onInputChange(e)} name="date" ref="date" /></h4>
        <h4>Restaurant ID{' '}<input value = {restIdText} onChange = {(e) => onInputChange(e)} name="restId" ref="restId" /></h4>
        <h4>Image{' '}<ImageUpload imageUrl = {imgUrlText}/></h4>
        <h4>Score{' '}<input value = {scoreText} onChange = {(e) => onInputChange(e)} name="score" ref="score" /></h4>
        <h4>Content{' '}<input value = {contentText} onChange = {(e) => onInputChange(e)} name="content" ref="content" /></h4>
        <h4>Tag{' '}<input value = {tagText} onChange = {(e) => onInputChange(e)} name="tag" ref="tag" /></h4>
        <h4>
          <PubStatusButton onClick={onPubStatusChange}>
            Public Status
          </PubStatusButton>
          {'  '}
          {publicStatusText}
        </h4>
        <h4>
          <PostSubmitButton onClick={onClickPostSubmit}>
            Submit
          </PostSubmitButton>
        </h4>
      </div>
    )
  }
}

ReviewPostDetail.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default ReviewPostDetail
