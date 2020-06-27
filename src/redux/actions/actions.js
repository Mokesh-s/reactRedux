import * as actionTypes from './actionTypes'

export function loginUserRequest (loginRequestModel) {
  return {
    type: actionTypes.LOGIN_USER_REQUEST,
    loginData: loginRequestModel
  }
}
