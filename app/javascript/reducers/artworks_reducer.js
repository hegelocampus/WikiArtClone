import {
  RECEIVE_ARTWORK,
  RECEIVE_ARTWORKS,
  DELETE_ARTWORK
} from '../actions/artwork_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTWORK:
      let {artwork} = action;
      return merge({}, state, {
        [artwork.id]: artwork
      });
    case RECEIVE_ARTIST:
    case RECEIVE_ARTWORKS:
      return merge({}, action.artworks);
    case DELETE_ARTWORK:
      let newState = merge({}, state);
      delete newState[action.artworkId];
      return newState;
    default:
      return state;
  }
};

