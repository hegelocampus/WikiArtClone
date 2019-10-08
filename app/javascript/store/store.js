import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "../reducers/root";

export default (preloadedState = {}) => createStore(
  rootReducer, preloadedState, composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
);

