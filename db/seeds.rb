# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

User.create(email: 'example@example.com', password: 'testusr1')

25.times do
  email = Faker::Internet.unique.email
  password = Faker::Alphanumeric.alphanumeric(number: 10)

  User.create(email: email, password: password)
end

10.times do
  Selectors::Nationality.create(name: Faker::Nation.unique.nationality)
end

10.times do
  Selectors::School.create(name: Faker::Verb.unique.past_participle)
end

art_movement_names = [
  "Art Deco",
  "Art Nouveau",
  "Avant-garde",
  "Conceptual Art",
  "Expressionism",
  "Art burt",
  "Pop Art",
  "Realism"
]

art_movement_names.each do |name|
  Selectors::ArtMovement.create(name: name)
end

field_names = [
  "drawing",
  "etching",
  "assemblage",
  "collage",
  "printmaking",
  "lithography"
]

field_names.each do |name|
  Selectors::Field.create(name: name)
end



