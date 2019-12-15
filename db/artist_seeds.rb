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

  Image.create(
    imageable_id: artist.id,
    caption: Faker::Marketing.buzzwords,
    imageable_type: Artist,
    url: 'a url'
  )
end
