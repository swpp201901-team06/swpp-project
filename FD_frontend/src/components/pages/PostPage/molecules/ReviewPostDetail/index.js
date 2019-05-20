import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import ImageUpload from '../../atoms/ImageUpload'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class ReviewPostDetail extends React.Component {

/*  const onImageUpload = image => {
    const files = Array.from(image.target.files)
    const formData = new FormData()
    files.forEach((file, i) => {
      formData.append(i, file)
    })*/
  componentDidMount() {
  	if(this.props.children != undefined) {
  		this.props.requestPostReview(this.props.children)
  	}
  render() {
		return (
			<div>
				<h4>Date{' '}
				<input ref={node => {date = node;}} /><h4>
				<h4>Image{' '}
				<ImageUpload /></h4>
				<h4>Score{' '}
		    <input ref={node => {score = node;}} /></h4>
		    <h4>Content{' '}
		    <input ref={node => {content = node;}} /></h4>
		    <h4>Nickname{' '}
				{input ref={node => {tag = node;}} /></h4>
				<pubStatusButton onClick={onPubStatusChange}
		)
	}
}

ReviewPostDetail.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default ReviewPostDetail
