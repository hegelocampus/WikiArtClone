import { fork } from 'redux-saga/effects';
import userSaga from './session';

export default function* mainSaga(entity, apiFn, id) {
  while (true) {
    yield fork(userSaga);
  }
}

