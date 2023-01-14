class ApplicationController < ActionController::API
  include ActionController::MimeResponds
  def user_session_data
    user_id = params.require(:user_id)
    sessions = User.find(user_id).sessions

    @results = []

    sessions.each do |session|
      @session_id = session.id
      @invited_users = session.users.select(:email, :first_name, :last_name, :img_url).where.not(id: user_id)
      .map do |user|
        {email: user[:email], first_name: user[:first_name], last_name: user[:last_name], img_url: user[:img_url]}
      end
      @session_status = session.user_sessions.find_by(user_id: user_id)[:status]
      @reservation = session.reservation
      @restaurant = nil
      if(@session_status == 2)


        @restaurant = session.restaurants.first
        @restaurant = {name: @restaurant[:name], address: @restaurant[:address], img_url: @restaurant[:img_url]}
      end
      @results.push({session_id: @session_id, status: @session_status, reservation: @reservation, invited_users: @invited_users, restaurant: @restaurant})
    end

    render json: @results
  end

  # Responds with restaurants that belong to the given session id.
  def session_restaurants
    @session = Session.find_by(id: params[:session_id])
    @user = @session.users.find_by(id: session[:current_user_id])
    # Only allows the invited & logged in user to get a response.
    if(!@user)
      render status: 401
      return
    end
    @restaurants = @session.restaurants.select(:id, :name, :address, :phone_number, :website , :rating, :img_url)
    @response = {session_id: @session.id, restaurants: @restaurants}
    render json: @response
  end
end
