class Restaurant < ApplicationRecord
  has_many :operating_times, dependent: :destroy
<<<<<<< HEAD

=======
>>>>>>> 521c31e404bc5d4abfc9f3d16cbcf667e58654ad
  has_many :swipes, dependent: :destroy

  belongs_to :session
  # No need for validations, as data doesn't come from users.
end
