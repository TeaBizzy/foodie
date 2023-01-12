class User < ApplicationRecord
  validates :first_name, presence: true, length: { maximum: 50 }
  validates :last_name, presence: true, length: { maximum: 50 }
  validates :email, presence: true, length: { maximum: 75 }, uniqueness: true
  validates :password, length: { minimum: 8 }
  has_secure_password
  has_many :user_sessions
  has_many :sessions, through: :user_sessions

  def self.authenticate_with_credentials(email,password)
    if(email)
      user = User.find_by_email(email.strip.downcase) 
  
      if(user && user.authenticate(password))
       
        return user

      end

    end

  end

end
