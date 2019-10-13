import { RECEIVE_SELECTOR, RECEIVE_SELECTORS } from '../actions/selector_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTIST:
      return merge({}, state,  action.selectors);
    case RECEIVE_SELECTORS:
      let newState = merge({}, state);
      newState[action.selectorName] = action.selectors;
      return newState;
    default:
      return state;
  }
}

