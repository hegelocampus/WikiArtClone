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

10.times do
  email = Faker::Internet.unique.email
  password = Faker::Alphanumeric.alphanumeric(number: 10)

  User.create(email: email, password: password)
end

10.times do
  nat = Nationality.create(name: Faker::Nation.unique.nationality.singularize)
  nat.create_sel_type(selector_id: nat.id)
end

10.times do
  s = School.create(name: Faker::Verb.unique.past_participle)
  s.create_sel_type(selector_id: s.id)
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
  am = ArtMovement.create(name: name)
  am.create_sel_type(selector_id: am.id)
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
  f = Field.create(name: name)
  f.create_sel_type(selector_id: f.id)
end

wikis = HTTP.get('https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnlimit=50&rnnamespace=0').parse["query"]["random"]

photos = HTTP.get('https://dog.ceo/api/breed/retriever/images/random/50').parse["message"]

(0...50).each do |i|
  name = Faker::FunnyName.unique.name
  birth = Faker::Date.birthday(min_age: 16, max_age: 95)
  dead = [true, false, false, false].sample
  death = (dead ? Faker::Date.between(from: birth, to: Date.today) : nil)
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
  #img_caption = Faker::Hipster.sentence
  img_caption = Faker::Marketing.buzzwords

  Image.create(
    imageable_id: artist.id,
    caption: img_caption,
    imageable_type: Artist,
    url: img_url
  )
end

style_names = [
  "Art Deco",
  "Pop Art",
  "Kinetic Art",
  "Cyber Art",
  "Conceptual Art",
  "Minimalism",
  "Expressionism",
  "Abstract Expressionism",
  "Cubism",
  "Color Field Painting",
  "Northern Renaissance",
  "Baroque"
]

style_names.each do |name|
  am = Style.create(name: name)
  am.create_sel_type(selector_id: am.id)
end

genre_names = [
  "animal painting",
  "bird-and-flower painting",
  "caricature",
  "cityscape",
  "design",
  "installation",
  "illustration",
  "religious painting",
  "poster",
  "genre painting",
  "nude painting",
  "performance"
]

genre_names.each do |name|
  am = Genre.create(name: name)
  am.create_sel_type(selector_id: am.id)
end

art_photos = HTTP.get('https://dog.ceo/api/breeds/image/random/50').parse["message"]

(0..200).each do |i|
  name = Faker::TvShows::TwinPeaks.quote
  style = Style.all.sample.id
  genre = Genre.all.sample.id
  artist = Artist.all.sample
  famous = [true, false].sample
  date = Faker::Date.between(
    from: artist.birth_date,
    to: (artist.death_date || Date.today)
  ).year
  artwork = Artwork.create(
    name: name,
    date: date,
    famous: famous,
    style_id: style,
    genre_id: genre,
    artist_id: artist.id
  )

  img_url = art_photos[i % art_photos.length]
  img_caption = Faker::Marketing.buzzwords

  Image.create(
    imageable_id: artwork.id,
    caption: img_caption,
    imageable_type: Artwork,
    url: img_url
  )
end

