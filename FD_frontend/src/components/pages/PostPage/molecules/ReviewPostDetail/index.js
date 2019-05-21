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
    console.log('component did mount')
    if (this.props.children != 'default') {
      console.log('not default')
      console.log(this.props.children)
      this.props.onLoad(this.props.children)
    }
  }
  
  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
   }

  render() {
    if (this.props.children != 'default') {
      console.log(this.props.statefunction.PostPage)
    }
    //let date
    let score
    let content
    let tag
    let publicStatusText
    let restId
    
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

    if(this.props.statefunction.PostPage.eatWhen){
      this.setState({date: this.props.statefunction.PostPage.eatWhen})
    }
    else{
      this.setState({date: ''})
    }
    
    const onDateChange = (e) => {
      date = e.target.value
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

    const onPubStatusChange = () => {
      if (this.props.statefunction.PostPage.publicStatus) {
        this.props.PubStatusChange(this.props.statefunction.PostPage.publicStatus)
      } else {
        this.props.PubStatusChange('False')
      }
      console.log(this.props.statefunction)
    }

    const onClickPostSubmit = () => {
      if (restId.value && date.value && score.value && content.value) {
        this.props.onPostSubmit(
          this.props.children,
          this.props.statefunction.PostPage.nickname,
          restId.value,
          this.refs.date.value,
          tag.value,
          score.value,
          content.value,
          this.props.statefunction.PostPage.photo,
          this.props.statefunction.PostPage.publicStatus
        )
      }
    }
    
    return (
      <div>
	      <h4>Date{' '}<input value = {this.state.date} onChange = {(e) => this.onChange(e)} name="date" ref="date" /></h4>
        <h4>Restaurant ID{' '}<input value = {restIdText} ref={node => {restId = node}} /></h4>
        <h4>Image{' '}<ImageUpload /></h4>
        <h4>Score{' '}<input value = {scoreText} ref={node => {score = node}} /></h4>
        <h4>Content{' '}<input value = {contentText} ref={node => {content = node}} /></h4>
        <h4>Tag{' '}<input value = {tagText} ref={node => {tag = node}} /></h4>
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
