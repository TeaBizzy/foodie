class UsersController < ApplicationController
 

  # POST /users
  def create
    @user = User.new(user_params)
    

    if @user.save
      render json: @user.id
    else
      render json: @user.errors.full_messages
    end 

  end



  def index
    @users = User.all
    render json: @users
  end
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password)
    end
end
