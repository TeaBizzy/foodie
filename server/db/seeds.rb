# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

## Seeds example data, can be removed safetly.
puts "Create examples!"
Example.destroy_all
ex1 = Example.create(name: 'Ruby', price_cents: 100000, is_rare: true)
ex2 = Example.create(name: 'Topaz', price_cents: 800, is_rare: false)
ex3 = Example.create(name: 'Sapphire', price_cents: 80000, is_rare: true)

## Create users.
puts "Creating users!"
User.destroy_all

## Do not touch these accounts as tests rely on them.
user1 = User.create(first_name: 'John', last_name: 'Doe', email: 'john_doe@email.com', password: 'password', img_url: 'https://imgur.com/avMgDEG')
user2 = User.create(first_name: 'Jane', last_name: 'Smith', email: 'jane_smith@email.com', password: 'password', img_url: 'https://imgur.com/AK54oyB')

## The below can be modified safely.
user3 = User.create(first_name: 'Kelvin', last_name: 'Huang', email: 'kelvin.huang98@hotmail.com', password: 'password', img_url: 'https://imgur.com/bVrBJ3i')
user4 = User.create(first_name: 'Stefan', last_name: 'Talbot', email: 'satalbot@protonmail.com', password: 'password', img_url: 'https://imgur.com/vMY7lhj')
user5 = User.create(first_name: 'Rahim', last_name: 'Jamal', email: 'rahimj2196@gmail.com', password: 'password', img_url: 'https://imgur.com/YNVkpBM')