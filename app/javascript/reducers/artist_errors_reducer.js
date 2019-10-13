import {
  RECEIVE_ARTIST,
  RECEIVE_ARTIST_ERRORS,
} from '../actions/artist_actions';

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTIST:
      return _nullErrors;
    case RECEIVE_ARTIST_ERRORS:
      return action.errors;
    default:
      return state;
  }
}
