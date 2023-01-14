class UserSession < ApplicationRecord
  belongs_to :user
  belongs_to :session
  
  validates :status, presence: true, length: { minimum: 0, maximum: 2 }

  attribute :status, default: 0
end
