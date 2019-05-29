import { connect } from 'react-redux'
import { searchSubmit } from '../../store/GuestPage/actions'
import { GuestSearch } from '../../components/pages/GuestPage/molecules/GuestSearch'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchSubmit: (key, value) => {
      dispatch(searchSubmit(key, value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestSearch)
