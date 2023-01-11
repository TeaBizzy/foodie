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
      inputs = params.require(:user).permit(:first_name, :last_name, :email, :password)
      inputs[:img_url] = get_random_img
      return inputs
    end

    # Returns a random user image url.
    def get_random_img
      imgs = [
        'https://imgur.com/xBu564e',
        'https://imgur.com/avMgDEG',
        'https://imgur.com/6U9WNtQ',
        'https://imgur.com/oHajDVW',
        'https://imgur.com/Hpa47PC',
        'https://imgur.com/GvDavl9',
        'https://imgur.com/JJCFZEc',
        'https://imgur.com/bVrBJ3i',
        'https://imgur.com/vMY7lhj',
        'https://imgur.com/Igx6E8H',
        'https://imgur.com/YNVkpBM'
      ]

      imgs[rand(imgs.length)]
    end
end
