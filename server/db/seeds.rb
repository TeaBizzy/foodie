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
