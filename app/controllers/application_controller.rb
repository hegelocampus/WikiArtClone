class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  def current_user
    @user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!@user
  end

  def log_in(user)
    user.regenerate_session_token
    session[:session_token] = user.session_token
    user.session_token
  end

  def sign_out(user)
    if session[:session_token]
      session[:session_token] = nil
      user.regenerate_session_token
      return true
    else
      return false
    end
  end
end
