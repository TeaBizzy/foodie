class LoginController < ApplicationController

  def create
    # If the user exists AND the password entered is correct.
      if user = User.authenticate_with_credentials(params[:user][:email].downcase, params[:user][:password])
        # success logic, log them in
        session[:current_user_id] = user.id
        render status: 204
      else
        # failure, render login form
        render json: {error: "Email or Password is incorrect! 🐧 "},status: 500
      end

  end

  def is_logged_in
    if session[:current_user_id]
      user = User.find session[:current_user_id]
      render json: user
    else
      render status: 401
    end
  end

  def logout
    session[:current_user_id] = nil
  end

end