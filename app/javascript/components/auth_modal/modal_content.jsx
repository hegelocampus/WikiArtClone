import React from 'react';
import SessionForm from './session_form_container.js';

export default class ModalContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { formType: "login"}

    this.changeForm = this.changeForm.bind(this);
  }

  changeForm(type) {
    return (e) => {
      e.preventDefault();
      this.setState({formType: type});
    }
  }

  render() {
    let headerContent, footer;
    if (this.state.formType === 'login') {
      headerContent = "Sign In";
      footer = (
        <span>Don't have an account?
          <a href='#' onClick={ this.changeForm("signup") } >
            Sign up
          </a>
        </span>
      )
    } else {
      headerContent = "Sign up";
      footer = (
        <span>Already have an account?
          <a href='#' onClick={ this.changeForm("login") } >
            Sign In
          </a>
        </span>
      );
    }
    return (
      <div className="modal-content">
        <h3 className="modal-header-title">
          { headerContent }
        </h3>
        <SessionForm formType={ this.state.formType } />
        { footer }
      </div>
    );
  }
}
