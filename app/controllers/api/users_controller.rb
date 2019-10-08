class Api::UsersController < ApplicationController
  def show
    @user = User.find_by(id: params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render :show, status: :created
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
