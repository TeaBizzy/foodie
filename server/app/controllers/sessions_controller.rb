class SessionsController < ApplicationController
  def only
  end

  def create
    
    @user = user_params
    UserMailer.with(user: @user).invite_email.deliver_later
    render json: @user 
    end

    def user_params
      inputs = params.require(:user).permit(:first_name, :last_name, :email)
      return inputs
    end
end
