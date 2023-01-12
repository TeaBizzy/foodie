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
end
