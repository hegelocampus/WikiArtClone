# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
require 'http'
require_relative 'artist_seeds'
require_relative 'artwork_seeds'

#ActiveRecord::Base.connection.tables.each do |t|
#  ActiveRecord::Base.connection.reset_pk_sequence!(t)
#end

User.create(email: 'ExampleUser@example.com', password: 'testusr1')

10.times do
  email = Faker::Internet.unique.email
  password = Faker::Alphanumeric.alphanumeric(number: 10)

  User.create(email: email, password: password)
end

