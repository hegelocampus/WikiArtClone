import { RECEIVE_WIKI } from '../actions/wiki_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WIKI:
      return merge({}, state, {
        [action.artistId]: Object.values(action.wiki.query.pages)[0].extract
      });
    default:
      return state;
  }
}
