import * as ApiUtil from '../utils/session_api_util';

export const USER = {
  SIGNUP: 'REQUEST_SIGNUP',
  LOGIN: 'REQUEST_LOGIN',
  RECEIVE: 'RECEIVE_CURRENT_USER',
  REQUEST_LOGOUT: 'REQUEST_LOGOUT',
  LOGOUT: 'LOGOUT_CURRENT_USER',
  ERRORS: 'RECEIVE_ERRORS',
  CLEAR_ERRORS: 'CLEAR_ERRORS'
}

export const receiveUser = currentUser => ({
  type: USER.RECEIVE,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: USER.LOGOUT
});

export const receiveErrors = errors => ({
  type: USER.ERRORS,
  errors
});

const oldLogin = formUser => dispatch => ApiUtil.login(formUser).then(
  user => dispatch(receiveCurrentUser(user)),
  errors => dispatch(receiveErrors(errors.responseJSON))
);

