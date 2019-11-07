import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../reducers/root";


export const prod = (preloadedState = {}) => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk)
);

export const dev = (preloadedState = {}) => createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
);

