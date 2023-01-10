class Swipe < ApplicationRecord
  belongs_to :restaurant

  validates :is_approved, presence: { allow_nil: false }
end