class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    render json: @restaurants
  end

  def create_swipe
    puts 'Calling!'
    @restaurant_id = params[:restaurant_id]
    @is_approved = params[:is_approved]
    @restaurant = Restaurant.find_by(id: @restaurant_id)
    @swipe = @restaurant.swipes.new(is_approved: @is_approved)

    puts 'SAVING SWIPE'
    if(!@swipe.save)
      puts 'Something went wrong!'
      return
    end

    # Change the swiping users session status.
    @user_id = session[:current_user_id]
    @restaurant.session.user_sessions.find_by(user_id: @user_id).update(status: 1)


    # checks if the session is complete.
    @swipe_count = 0
    @restaurant.session.restaurants.each do |restaurant|
      @swipe_count += restaurant.swipes.length
    end

    puts 'user count:'
    puts @restaurant.session.users.length
    if(@swipe_count >= @restaurant.session.users.length * 2)
      puts 'SESSION COMPLETE'
      @restaurant.session.user_sessions.each do |user_session|
        user_session.status = 2
        puts user_session.update(status: 2)
      end
    end
  end
end
