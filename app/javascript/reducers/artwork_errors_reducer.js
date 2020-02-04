import {
  RECEIVE_ARTWORK,
  RECEIVE_ARTWORK_ERRORS
} from '../actions/artwork_actions';

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTWORK:
      return _nullErrors;
    case RECEIVE_ARTWORK_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
