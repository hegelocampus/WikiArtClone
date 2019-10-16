import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import artistsReducer from './artists_reducer';
import artworksReducer from './artworks_reducer';
import wikisReducer from './wiki_reducer';
import selectorsReducer from './selector_reducer';

export default combineReducers({
  users: usersReducer,
  artists: artistsReducer,
  artworks: artworksReducer,
  wikis: wikisReducer,
  selectors: selectorsReducer,
});
