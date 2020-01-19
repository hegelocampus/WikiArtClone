import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "../reducers/root";

export const sagaMiddleware = createSagaMiddleware()
export const prod = (preloadedState = {}) => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, sagaMiddleware)
);

export const dev = (preloadedState = {}) => createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(
    applyMiddleware(thunk, sagaMiddleware, logger)
  )
);

