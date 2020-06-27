import * as actionsTypes from '../actions/actionTypes'
import initialState from './initialState'

export function loginUser (state = initialState.loginUser, action) {
  switch (action.type) {
    case actionsTypes.LOGIN_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        loginUserData: action.loginData
      })

    default:
      return state
  }
}
