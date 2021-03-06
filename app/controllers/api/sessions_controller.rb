class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by(email: user_params[:email])
      .try(:authenticate, user_params[:password])
    if @user && log_in(@user)
      render "api/users/show", status: 201
    else
      render json: ["Incorrect Email/Password combination"], status: :unprocessable_entity
    end
  end

  def destroy
    if sign_out(current_user)
      render json: { "message": "User successfully signed out" }, status: 201
    else
      render json: ["I don't know how you just did that, but you can't do that"], status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
