import { fork } from 'redux-saga/effects'
import userSaga from './session'

export default function * mainSaga () {
  yield fork(userSaga)
}
