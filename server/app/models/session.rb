class Session < ApplicationRecord
  validates :reservation, presence: true
  validate :reservation_is_not_in_the_past

  def reservation_is_not_in_the_past
    if(!reservation.blank? && reservation.to_time < Time.now)
      errors.add(:reservation, "can't be in the past")
    end
  end
end
