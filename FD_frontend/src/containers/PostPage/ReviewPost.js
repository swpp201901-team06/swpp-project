import { connect } from 'react-redux'
import ReviewPostDetail from '../../components/pages/PostPage/molecules/ReviewPostDetail'
import { changePubStatus } from '../../store/PostPage/actions'

const mapStateToProps = (state) => {
  return {
    statefunction: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    PubStatusChange: (pubStatus) => {
      dispatch(changePublicStatus(pubStatus))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewPostDetail)
