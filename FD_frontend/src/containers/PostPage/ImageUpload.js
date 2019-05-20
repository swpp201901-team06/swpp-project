import { connect } from 'react-redux'
import ImageUpload from '../../components/pages/PostPage/atoms/ImageUpload'
import { uploadImage } from '../../store/PostPage/actions'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    passImageToState: (file) => {
      dispatch(uploadImage(file))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ImageUpload)
