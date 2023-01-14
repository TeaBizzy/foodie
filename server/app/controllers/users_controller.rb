require 'dotenv'
Dotenv.load
class UsersController < ApplicationController
 

  # POST /users
  def create
    @user = User.new(user_params)
    
    if @user.save
        
        # Tell the UserMailer to send a welcome email after save
         UserMailer.with(user: @user).welcome_email.deliver_later
         session[:current_user_id] = @user.id
         render json: {id: @user.id} 
          
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
      inputs = params.require(:user).permit(:first_name, :last_name, :email, :password)
      inputs[:img_url] = get_random_img
      return inputs
    end

    # Returns a random user image url.
    def get_random_img
      imgs = [
        'https://i.imgur.com/avMgDEG.png',
        'https://i.imgur.com/vMY7lhj.png',
        'https://i.imgur.com/6U9WNtQ.png',
        'https://i.imgur.com/bVrBJ3i.png',
        'https://i.imgur.com/AK54oyB.png',
        'https://i.imgur.com/JJCFZEc.png',
        'https://i.imgur.com/AK54oyB.png',
      ]

      imgs[rand(imgs.length)]
    end
end
