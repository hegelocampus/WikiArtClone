import { combineReducers } from 'redux'
import sessionErrorsReducer from './session_errors_reducer'
import artistErrorsReducer from './artist_errors_reducer'
import artworkErrorsReducer from './artwork_errors_reducer'

export default combineReducers({
  session: sessionErrorsReducer,
  artist: artistErrorsReducer,
  artwork: artworkErrorsReducer
})
