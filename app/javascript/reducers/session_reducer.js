import { USER } from '../actions/session_actions';

const _nullSession = {
  id: null,
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case USER.RECEIVE:
      return { id: action.currentUser.id };
    case USER.LOGOUT:
      return _nullSession;
    default:
      return state;
  }
}
