import React from 'react';
import { Link } from 'react-router-dom';
// Use this modal to render the sign up from in the future
import Modal from 'react-modal';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = (this.props.formType === 'signup' ? {
        email: "",
        username: "",
        password: ""
      } : {
        email: "",
        password: ""
    })
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
   debugger
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let errors = this.props.errors.map((error, idx) => (
      <p key={ idx }>{error}</p>
    ));
    return (
      <div className="modal-content">
        <ul>
          { errors }
        </ul>
        <form onSubmit={ this.handleSubmit }>
          <input name='email' type='text' onChange={ this.update } value={ this.state.email } />
          <input name='password' type='password' onChange={ this.update } value={ this.state.password } />
          <input type='submit' value="Submit" />
          { this.props.formType === 'signup' ? (
              <input name='username' type='text' onChange={ this.update } value={ this.state.username } />
            ) : nul
          }
        </form>
        {this.props.formType === 'signup' ? (
            <span>Don't have an account?
              <Link to='/sign-up'>
                Sign up
              </Link>
            </span>
          ) : (
            <span>Already have an account?
              <Link to='/login'>
                Sign In
              </Link>
            </span>
          )
        }
      </div>
    )
  }
}
