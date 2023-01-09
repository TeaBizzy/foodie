require 'rails_helper'

RSpec.describe Session, type: :model do
  describe 'Validations' do
    it 'should give an error if the date is in the past' do
      session = Session.new(reservation: 1.days.ago)
      session.valid?
      expect(session.errors.full_messages[0]).to eq("Reservation can't be in the past")
      expect(session.errors.full_messages.length).to eq(1)
    end

    it 'should give an error if the date is missing' do
      session = Session.new()
      session.valid?
      expect(session.errors.full_messages[0]).to eq("Reservation can't be blank")
      expect(session.errors.full_messages.length).to eq(1)
    end
  end
end
