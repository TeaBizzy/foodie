class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    render json: @restaurants
  end

  def create_swipe
    restaurant_id = params[:restaurant_id]
    is_approved = params[:is_approved]
    restaurant = Restaurant.find_by(id: restaurant_id)
    @session = restaurant.session
    
    # Create the swipe.
    swipe = restaurant.swipes.create(is_approved: is_approved)

    if(is_session_finished)
      set_session_to_finished
    else
      set_current_user_session_to_pending # Must run first
    end
  end

  # Sets the logged in users session status to Pending.
  def set_current_user_session_to_pending
    logged_in_user = session[:current_user_id]
    user_session = @session.user_sessions.find_by(user_id: logged_in_user)
    
    if (user_session.status == 0)
      user_session.update(status: 1)
    end
  end

  # Checks if all invited users have swipped
  def is_session_finished
    swipe_count = 0
    @session.restaurants.each do |restaurant|
      swipe_count += restaurant.swipes.length
    end

    if(swipe_count >= @session.users.length * 2)
      true
    else
      false
    end
  end

  # Updates the status for all invited users to Finished.
  def set_session_to_finished
    @session.user_sessions.each do |user_session|
      user_session.update(status: 2)
    end
  end
end
