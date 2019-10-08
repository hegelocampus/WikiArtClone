import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let { id } = action.currentUser;
      return Object.assign({}, state, {
        [id]: action.currentUser
      });
    default:
      return state;
  }
};
