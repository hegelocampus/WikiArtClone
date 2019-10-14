# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
require 'http'

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

User.create(email: 'ExampleUser@example.com', password: 'testusr1')

25.times do
  email = Faker::Internet.unique.email
  password = Faker::Alphanumeric.alphanumeric(number: 10)

  User.create(email: email, password: password)
end

5.times do
  Nationality.create(name: Faker::Nation.unique.nationality.singularize)
end

5.times do
  School.create(name: Faker::Verb.unique.past_participle)
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
  ArtMovement.create(name: name)
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
  Field.create(name: name)
end

wikis = HTTP.get('https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnlimit=15&rnnamespace=0').parse["query"]["random"]

photos = HTTP.get('https://dog.ceo/api/breed/retriever/images/random/15').parse["message"]

(0...15).each do |i|
  name = Faker::FunnyName.unique.name
  birth = Faker::Date.backward
  death = Faker::Date.between(from: birth, to: Date.today)
  wiki_url = "https://en.wikipedia.org/wiki/#{ wikis[i]['title'].split(' ').join('_') }"
  nationality = Nationality.all.sample.id
  school = School.all.sample.id
  field = Field.all.sample.id
  art_movement = ArtMovement.all.sample.id
  artist = Artist.create(
    name: name,
    birth_date: birth,
    death_date: death,
    wiki_url: wiki_url,
    nationality_id: nationality,
    school_id: school,
    field_id: field,
    art_movement_id: art_movement
  )

  img_url = photos[i]
  img_caption = Faker::Hipster.sentence

  Image.create(imageable_id: artist.id, caption: img_caption, imageable_type: Artist, url: img_url)
end

