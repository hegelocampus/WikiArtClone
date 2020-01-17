import { call, put } from 'redux-saga/effects'
import * as UserApi from '../utils/session_api_util';

import { user } from '../actions/index';

function* fetchEntity(entity, apiFn, id) {
  yield put(entity.request(id));
  const { response, error } = yield call(apiFn, id);

  if (response) {
    yield put(entity.success(id, response));
  } else {
    yield put(entity.failure(id, error));
  }
}

/*
export function* login(action) {
  try {
    const currentUser = yield call(ApiUtil.login, action.payload.userId);
    yield put(receiveCurrentUser(currentUser));
  } catch (error) {
    yield put(receiveErrors(error));
  }
}
*/

function* watchLoadUserPage() {
  while(true) {
    const { login } = yield take(actions.LOAD_USER_PAGE);

    yield fork(loadUser, login);
  }
}

export const signup = formUser => dispatch => ApiUtil.signup(formUser).then(
  user => dispatch(receiveCurrentUser(user)),
  errors => dispatch(receiveErrors(errors.responseJSON))
);

export const logout = () => dispatch => ApiUtil.logout().then(
  () => dispatch(logoutCurrentUser()),
  errors => dispatch(receiveErrors(errors.responseJSON))
);

