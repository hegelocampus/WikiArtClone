import { USER } from '../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case USER.RECEIVE:
      let { id } = action.currentUser;
      return Object.assign({}, state, {
        [id]: action.currentUser
      });
    default:
      return state;
  }
};
