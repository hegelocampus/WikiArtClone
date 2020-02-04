import { USER } from '../actions/session_actions'

const _nullErrors = []

export default (state = _nullErrors, action) => {
  Object.freeze(state)
  switch (action.type) {
    case USER.RECEIVE:
      return _nullErrors
    case USER.ERRORS:
      return action.errors
    case USER.CLEAR_ERRORS:
      return _nullErrors
    default:
      return state
  }
}
