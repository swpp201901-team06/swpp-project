import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: null,imagePreviewUrl: ''};
    console.log('state of this')
    console.log(this.state)
    console.log(this.props)
  }

  componentDidMount() {
    this.props.passImageToState(this.state.file)
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
      this.props.passImageToState(this.state.file);
    }

    reader.readAsDataURL(file)
  }

  render() {
    let imagePreviewUrl;
    if(this.state.imagePreviewUrl == ''){
      if(this.props.statefunction.PostPage.photoUrl){
        imagePreviewUrl = this.props.statefunction.PostPage.photoUrl
      }
      else{
        imagePreviewUrl = null
      }
    }
    else{
      imagePreviewUrl = this.state.imagePreviewUrl
    }
    console.log('debug check!')
    console.log(this.state.imagePreviewUrl)
    console.log(this.props.statefunction.PostPage.photoUrl)
    console.log(imagePreviewUrl)

    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}

ImageUpload.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

ImageUpload.defaultProps = {
  palette: 'grayscale',
}

export default ImageUpload
