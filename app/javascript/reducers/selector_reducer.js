import { RECEIVE_SELECTOR, RECEIVE_SELECTORS } from '../actions/selector_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SELECTOR:
      console.log(action.selector);
      return merge({}, state,  action.selector);
    case RECEIVE_SELECTORS:
      console.log(action.selectors);
      let newState = merge({}, state);
      newState[action.selectorName] = action.selectors;
      return newState;
    default:
      return state;
  }
}

