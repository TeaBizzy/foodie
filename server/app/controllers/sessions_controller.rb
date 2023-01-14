class SessionsController < ApplicationController
  
  def create
    # Make sure user is logged in first.
    if(!session[:current_user_id])
      return render status: 401
    end

    @params = params.require(:session).permit(:reservation, :location, :radius, :invites)

    # Stop execution if any parameters are invalid.
    if(!is_valid_parameters)
      return
    end

    user_emails = @params[:invites].split(',')

    creator_email = User.find_by(id: session[:current_user_id]).email
    user_emails.push(creator_email)

    # Gets all invited users, creating them if they do not exist.
    users = user_emails.map do |email|
      user = User.find_by_email(email.strip.downcase)
      if(!user)
        new_user = User.new(email: email)
        new_user.save(validate: false)
        new_user
      else 
        user
      end
    end

    # Create and validate session.
    session = Session.new(reservation: @params[:reservation].to_time)
    if(!session.save)
      return render json: {error: session.errors.full_messages[0]}, status: 500
    end
    
    # Create restaurants.
    restaurants = Restaurant.all.sample(6)

    restaurants.each do |restaurant|
      name, address, phone_number, rating, img_url, website, lat, lng = restaurant.values_at(:name, :address, :phone_number, :rating, :img_url, :website, :lat, :lng)
      session.restaurants.create(name: name, address: address, phone_number: phone_number, rating: rating, img_url: img_url, website: website, lat: lat, lng: lng)
    end

    # Sends invite email to each user.
    users.each do |user|
      new_user_session = UserSession.create(session_id: session.id, user_id: user.id, status: 0)
      UserMailer.with(user: user).invite_email.deliver_later
    end

    render json: session, status: 200
  end


  # Checks for bad parameters, and sends back an error response.
  def is_valid_parameters 
    if @params[:reservation].blank?
      render json: {error: "Reservation can't be blank"}, status: 500
      return false
    end

    if @params[:location].blank?
      render json: {error: "Location can't be blank"}, status: 500
      return false
    end

    if @params[:invites].blank?
      render json: {error: "Number of invited users can't be 0"}, status: 500
      return false
    end

    return true
  end


  def destroy
    # Make sure user is logged in first.
    if(!session[:current_user_id])
      return render status: 401
    end
    
    user_id = session[:current_user_id]
    session_id = params[:id]
    session = Session.find_by(id: session_id)

    if(session.users.length < 2)
      session.destroy()
    else
      user_session = session.user_sessions.find_by(user_id: user_id)
      user_session.destroy()
      # TODO: Perhaps just have the whole session deleted?
    end
  end


  # Determines the winner of a session.
  def resolve_session
    @session = Session.find_by(id: params[:id])
    @num_users = @session.users.length

    # Get all swipe results.
    results = @session.restaurants.map do |restaurant|
      votes = 0
      restaurant.swipes.each do |swipe|
        if (swipe.is_approved)
          votes += 1
        end
      end
      {restaurant_id: restaurant.id, votes: votes}
    end

    # Filters only results that have 1+ votes.
    approved_restaurants = results.select do |result|
      if(result[:votes] > 0)
        result
      end
    end

    # Filters only restaurants that have votes == number of invited users.
    winners = approved_restaurants.select do |restaurant|
      if restaurant[:votes] == @num_users
        restaurant
      end
    end
    
    if !winners.empty? # 1 or more restaurants all received yes.
      @winner = winners.sample
      puts "Winner is: #{@winner}"
    elsif !approved_restaurants.empty? # 1 or more restaurant received at least 1 yes
      @winner = approved_restaurants.sample
      puts "No restaurant was a clear winner, picking random accept restaurnt... Winner is: #{@winner}"
    else
      @winner = results.sample
      puts "All restaurants were denied, selecting random restaurant... Winner is: #{@winner}"
    end

    @session.update(restaurant_id: @winner[:restaurant_id])
    render status: 204
  end
end
