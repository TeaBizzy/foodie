

class UserMailer < ApplicationMailer
  default from: 'notifications@example.com'

  def welcome_email
    @user = params[:user]
    @url  = 'http://localhost:8080/login'
    mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end

  def invite_email
    @user = params[:user]
    puts @user
    puts "this is line 15"
    @url  = 'http://localhost:8080/login'
    mail(to: @user[:email], subject: 'Welcome to My Awesome Site')
  end
end