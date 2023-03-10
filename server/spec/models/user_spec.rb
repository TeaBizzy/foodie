require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'Validations' do
    it 'should give an error if e-mail is blank' do
      user = User.new(first_name: "Mike", last_name: "Smith", email: nil, password: "password")
      user.valid?
      expect(user.errors.full_messages[0]).to eq("Email can't be blank")
      expect(user.errors.full_messages.length).to eq(1)
    end

    it "should give an error if first name is blank" do
      user = User.new(first_name: nil, last_name: "Smith", email: "example@email.com", password: "password")
      user.valid?
      expect(user.errors.full_messages[0]).to eq("First name can't be blank")
      expect(user.errors.full_messages.length).to eq(1)
    end

    it "should give an error if last name is blank" do
      user = User.new(first_name: "Mike", last_name: nil, email: "example@email.com", password: "password")
      user.valid?
      expect(user.errors.full_messages[0]).to eq("Last name can't be blank")
      expect(user.errors.full_messages.length).to eq(1)
    end

    it "should give an error if password is blank" do
      user = User.new(first_name: "Mike", last_name: "Smith", email: "example@email.com", password: nil)
      user.valid?
      expect(user.errors.full_messages.include? "Password can't be blank").to eq(true)
      expect(user.errors.full_messages.length).to eq(2)
    end

    it "should give an error if password length is less than 8" do
      user = User.new(first_name: "Mike", last_name: "Smith", email: "example@email.com", password: "qwerty")
      user.valid?
      expect(user.errors.full_messages[0]).to eq("Password is too short (minimum is 8 characters)")
      expect(user.errors.full_messages.length).to eq(1)
    end

    it "should give an error if password and password_confirmation do not match" do
      user = User.new(first_name: "John", last_name: "Doe", email: "example@email.com", password: "password", password_confirmation: "pasword")
      user.valid?
      expect(user.errors.full_messages[0]).to eq("Password confirmation doesn't match Password")
      expect(user.errors.full_messages.length).to eq(1)
    end

    it "should give an error if e-mail isn't unique" do
      user = User.new(first_name: "John", last_name: "Doe", email: "john_doe@email.com", password: "password")
      user.valid?
      expect(user.errors.full_messages[0]).to eq("Email has already been taken")
      expect(user.errors.full_messages.length).to eq(1)
    end
  end
end
