import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import Login from '../../components/login/login'

const mapPropsToState = (state, ownProps) => {
  return {
    user: state.loginUser.loginUserData.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveLoginData: (data) => {
      dispatch(actions.loginUserRequest(data))
    }
  }
}

const loginContainer = connect(
  mapPropsToState,
  mapDispatchToProps
)(Login)

export default loginContainer
