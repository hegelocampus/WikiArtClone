import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import errorsReducer from './entities_reducer';

export default combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
});

