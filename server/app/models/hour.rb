class Hour < ApplicationRecord
  belongs_to: :restaurant

  # No need for validations, as data doesn't come from users.
end
