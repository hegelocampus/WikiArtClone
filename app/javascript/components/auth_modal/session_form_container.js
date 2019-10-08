import { connect } from "react-redux";
import { login, signup } from "../../actions/session_actions";
import Form from "./session_form";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: ownProps.formType
})

const mapDispatchToProps = (dispatch, ownProps) => {
  let process = (ownProps.formType === 'login' ? login : signup);
  return { processForm: user => dispatch(process(user))};
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
