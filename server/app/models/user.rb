class User < ApplicationRecord
  validates :first_name, presence: true, length: { maximum: 50 }
  validates :last_name, presence: true, length: { maximum: 50 }
  validates :email, presence: true, length: { maximum: 75 }, uniqueness: true
  validates :password, length: { minimum: 8 }
  has_secure_password
end
