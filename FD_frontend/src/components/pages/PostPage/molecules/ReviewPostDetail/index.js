import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

export const ReviewPostDetail = ({ children, ...props }) => {

/*  const onImageUpload = image => {
    const files = Array.from(image.target.files)
    const formData = new FormData()
    files.forEach((file, i) => {
      formData.append(i, file)
    })*/
  return (
    <Wrapper {...props}>
      <img refs={imgElement => image = imgElement}/>
      <input type='file' multiple/>
      {children}
    </Wrapper>
  )
}

ReviewPostDetail.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

/*export default ReviewPostDetail*/
