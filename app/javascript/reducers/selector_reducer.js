import { RECEIVE_SELECTOR, RECEIVE_SELECTORS } from '../actions/selector_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SELECTOR:
      return merge({}, state, action.selector );
    case RECEIVE_ARTIST:
      return merge({}, state,  action.selectors);
    case RECEIVE_SELECTORS:
      return merge({}, state, action.selectors);
    default:
      return state;
  }
}

