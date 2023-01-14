class SessionsController < ApplicationController
  def create
    inputs = user_params

    if(!session[:current_user_id])
      return render status: 401
    end

    user_emails = inputs[:invites].split(',')
    creator_email = User.find_by(id: session[:current_user_id]).email

    user_emails.push(creator_email)

    # Gets all invited users, creating them if they do not exist.
    users = user_emails.map do |email|
      user = User.find_by_email(email.strip.downcase)
      if(!user)
        puts "User with email: #{email} doesn't exist!"
        puts "Creating Empty User"
        new_user = User.new(email: email)
        new_user.save(validate: false)
        new_user
      else 
        user
      end
    end

    session = Session.new(reservation: inputs[:reservation].to_time)
  
    if(!session.save)
      return render json: {errors: session.errors.full_messages}, status: 500
    end
    
    users.each do |user|
      new_user_session = UserSession.create(session_id: session.id, user_id: user.id, status: 0)
      UserMailer.with(user: user).invite_email.deliver_later
    end

    render json: session, status: 200
  end

    def user_params
      params.require(:session).permit(:reservation, :location, :radius, :invites)
    end
end
