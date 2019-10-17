import {
  RECEIVE_ARTIST,
  RECEIVE_ARTISTS,
  DELETE_ARTIST
} from '../actions/artist_actions';
import {
  RECEIVE_ARTWORK,
  RECEIVE_ARTWORKS,
} from '../actions/artwork_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTWORK:
    case RECEIVE_ARTIST:
      let {artist} = action;
      return merge({}, state, {
        [artist.id]: artist
      });
    case RECEIVE_ARTISTS:
    case RECEIVE_ARTWORKS:
      return merge({}, action.artists)
    case DELETE_ARTIST:
      let newState = merge({}, state);
      delete newState[action.artistId];
      return newState;
    default:
      return state;
  }
};

