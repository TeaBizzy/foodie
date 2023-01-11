class Restaurant < ApplicationRecord
  has_many :operating_times, dependent: :destroy
  has_many :pictures, dependent: :destroy
  has_many :swipes, dependent: :destroy

  # No need for validations, as data doesn't come from users.
end
