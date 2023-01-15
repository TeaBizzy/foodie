class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    render json: @restaurants
  end

  def create_swipe
    restaurant_id = params[:restaurant_id]
    is_approved = params[:is_approved]
    restaurant = Restaurant.find_by(id: restaurant_id)
    puts "is_approved == #{is_approved}"
    # Create the swipe.
    swipe = restaurant.swipes.new(is_approved: is_approved)
    swipe.save
    puts "new swipe = #{swipe}"
  end
end
