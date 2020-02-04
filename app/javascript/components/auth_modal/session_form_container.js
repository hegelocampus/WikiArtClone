import { connect } from 'react-redux'
import { USER } from '../../actions/session_actions'
import Form from './session_form'

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  errors: state.errors.session,
  formType: ownProps.formType
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
  processForm: (userData) => dispatch({
    type: (ownProps.formType === 'login' ? USER.LOGIN : USER.SIGNUP),
    payload: { userData }
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
