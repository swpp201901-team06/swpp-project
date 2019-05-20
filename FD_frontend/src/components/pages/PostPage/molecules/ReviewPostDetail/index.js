import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import ImageUpload from '../../atoms/ImageUpload'
import PubStatusButton from '../../atoms/PubStatusButton'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class ReviewPostDetail extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
  	if(this.props.children != 'default') {
  		this.props.requestPostReview(this.props.children)
  	}
  }
  
  render() {
  	let date;
  	let score;
  	let content;
  	let tag;
    let publicStatusText;
  	if(this.props.statefunction.PostPage.publicStatus) {
      publicStatusText = this.props.statefunction.PostPage.publicStatus;
    }
    else{
      publicStatusText = 'private';
    }

  	const onPubStatusChange = () => {
      if(this.props.statefunction.PostPage.publicStatus) {
  		  this.props.PubStatusChange(this.props.statefunction.PostPage.publicStatus);
      }
      else{
        this.props.PubStatusChange('private');
      }
      console.log(this.props.statefunction);
  	}
		return (
			<div>
				<h4>Date{' '}
				<input ref={node => {date = node;}} /></h4>
				<h4>Image{' '}
				<ImageUpload /></h4>
				<h4>Score{' '}
		    <input ref={node => {score = node;}} /></h4>
		    <h4>Content{' '}
		    <input ref={node => {content = node;}} /></h4>
		    <h4>Tag{' '}
				<input ref={node => {tag = node;}} /></h4>
				<h4><PubStatusButton onClick={onPubStatusChange}>Public Status</PubStatusButton>{'  '}{publicStatusText}</h4>
			</div>
		)
	};
}

ReviewPostDetail.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default ReviewPostDetail
