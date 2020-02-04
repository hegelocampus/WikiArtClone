import React from 'react'

export default class SessionForm extends React.Component {
  constructor (props) {
    super(props)

    const state = {
      email: '',
      password: ''
    }

    if (props.formType === 'signup') {
      state.passwordConfirmation = ''
    }
    this.state = state

    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
    this.handleGuestLogin = this.handleGuestLogin.bind(this)
  }

  handleSubmit (e) {
    if (e) {
      e.preventDefault()
    }

    this.props.processForm(this.state)
  }

  update (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleGuestLogin (e) {
    this.setState({
      email: 'ExampleUser@example.com',
      password: 'testusr1'
    }, () => this.handleSubmit())
  }

  render () {
    let errors
    if (this.props.errors && this.props.errors.length) {
      errors = this.props.errors.map((error, idx) => (
        <p key={idx}>{error}</p>
      ))
    };
    return (
      <>
        <div className='modal-content-errors-container'>
          {errors}
        </div>
        <form onSubmit={this.handleSubmit} className='modal-content-form'>
          <input
            name='email'
            placeholder='E-mail'
            autoComplete='username'
            type='text'
            required
            onChange={this.update}
            value={this.state.email}
          />
          <input
            name='password'
            placeholder='password'
            autoComplete='current-password'
            type='password'
            required
            onChange={this.update}
            value={this.state.password}
          />
          {(this.props.formType === 'signup' ? (
            <>
              <input
                name='passwordConfirmation'
                placeholder='Confirm'
                type='password'
                required onChange={this.update}
                value={this.state.passwordConfirmation}
              />
              <button type='submit' className='big-button'>Create Account</button>
            </>
          ) : (
            <>
              <button type='submit' className='big-button'>Sign In</button>
              <span>or sign in with</span>
              <button
                type='button'
                onClick={this.handleGuestLogin}
                className='big-button'
              >
                Guest Login
              </button>
            </>
          ))}
        </form>
      </>
    )
  }
}
