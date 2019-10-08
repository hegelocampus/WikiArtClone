import React from 'react';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    let state = {
      email: "",
      password: ""
    }

    if (props.formType === 'signup') {
      state.passwordConfirmation = "";
    }
    this.state = state;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(e) {
    this.setState({[e.target.name]: e.target.value });
  }

  render() {
    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map((error, idx) => (
        <p key={ idx }>{error}</p>
      ));
    };
    return (
      <div className="modal-content-form">
        <form onSubmit={ this.handleSubmit }>
          <input
            name='email'
            placeholder='E-mail'
            type='text'
            required
            onChange={ this.update }
            value={ this.state.email }
          />
          <input
            name='password'
            placeholder='password'
            type='password'
            required
            onChange={ this.update }
            value={ this.state.password }
          />
          { (this.props.formType === 'signup' ? (
            <>
              <input
                name='passwordConfirmation'
                placeholder='Confirm'
                type='password'
                required onChange={ this.update }
                value={ this.state.passwordConfirmation} 
              />
              <input type='submit' value="Create Account" />
            </>
          ) : (
            <input type='submit' value="Sign In" />
          ))}
        </form>
      </div>
    );
  }
}
