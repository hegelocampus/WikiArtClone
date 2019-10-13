import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import artistReducer from './artists_reducer';
import wikisReducer from './wiki_reducer';
import selectorsReducer from './selector_reducer';

export default combineReducers({
  users: usersReducer,
  artists: artistReducer,
  wikis: wikisReducer,
  selectors: selectorsReducer,
});
