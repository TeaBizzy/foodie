class Restaurant < ApplicationRecord
  has_many :hours
  has_many :pictures

  # No need for validations, as data doesn't come from users.
end
