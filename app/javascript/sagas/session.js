import { call, fork, put, take, takeLatest } from 'redux-saga/effects';
import * as ApiUtil from '../utils/session_api_util';
import {
  USER,
  receiveUser,
  logoutCurrentUser,
  receiveErrors
} from '../actions/session_actions';

function* loginUser({ payload: { userData }}) {
  try {
    const { response } = yield call(ApiUtil.login, userData);
    yield put(receiveUser(response));
  } catch (error) {
    console.log(error);
    yield put(receiveErrors(error));
  }
}

function* signupUser(action) {
  try {
    const { response } = yield call(ApiUtil.signup, action.payload.userData);
    yield put(receiveUser(response));
  } catch (error) {
    yield put(receiveErrors(error));
  }
}

function* logoutUser() {
  try {
    yield call(ApiUtil.logout);
    yield put(logoutCurrentUser());
  } catch (error) {
    yield put(receiveErrors(error));
  }
}

export default function* sessionWatcher() {
  yield takeLatest(USER.LOGIN, loginUser);
  yield takeLatest(USER.SIGNUP, signupUser);
  yield takeLatest(USER.LOGOUT, logoutUser);
}

