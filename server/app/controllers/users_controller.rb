class UsersController < ApplicationController
 
  # POST /users
  def create
    @inputs = user_params
    
    # Registers an invted user.
    if is_empty_user
      @existing_user.password = @inputs[:password]
      @existing_user.first_name = @inputs[:first_name]
      @existing_user.last_name = @inputs[:last_name]
      @existing_user.img_url = @inputs[:img_url]
      @new_user = @existing_user
    else
      # Create new user.
      @new_user = User.new(@inputs)
    end

    # Validate inputs.
    if(!@new_user.save)
      return render json: {error: @existing_user.errors.full_messages[0]}, status: 500
    end

    # Tell the UserMailer to send a welcome email after save.
    UserMailer.with(user: @new_user).welcome_email.deliver_later

    # Create session cookie.
    session[:current_user_id] = @new_user.id

    render status: 204
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

    # Checks if email exists on the database, but the user hasn't been registered.
    def is_empty_user
      @existing_user = User.find_by(email: @inputs[:email])
      if(@existing_user && !@existing_user[:password_digest] && !@existing_user[:first_name] && !@existing_user[:last_name])
        true
      else
        false
      end
    end

    # Generates a random profile img.
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
