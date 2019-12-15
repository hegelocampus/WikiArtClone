STYLE_NAMES = [
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

STYLE_NAMES.each do |name|
  am = Style.create(name: name)
  am.create_sel_type(selector_id: am.id)
end

GENRE_NAMES = [
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

GENRE_NAMES.each do |name|
  am = Genre.create(name: name)
  am.create_sel_type(selector_id: am.id)
end

n = 0
while Artwork.count <= 400
  artworks = JSON.parse(
    HTTP.get(
      "https://aggregator-data.artic.edu/api/v1/artworks?limit=100&page=#{n + 1}&fields=title,thumbnail"
    )
  )

  artworks["data"].each.with_index do |fetched_artwork, i|
    next if fetched_artwork["thumbnail"].nil?

    style = Style.all.sample
    genre = Genre.all.sample
    artist = Artist.all.sample

    name = fetched_artwork["title"]

    famous = [true, false].sample

    date = Faker::Date.between(
      from: artist.birth_date,
      to: (artist.death_date || Date.today)
    ).year

    artwork = Artwork.create(
      name: name,
      date: date,
      famous: famous,
      style_id: style.id,
      genre_id: genre.id,
      artist_id: artist.id
    )

    Image.create(
      imageable_id: artwork.id,
      caption: fetched_artwork["thumbnail"]["alt_text"],
      imageable_type: Artwork,
      url: "#{ fetched_artwork["thumbnail"]["url"] }/full/full/0/default.jpg",
      thumb_url: "#{ fetched_artwork["thumbnail"]["url"] }/square/210,/0/default.jpg"
    )
  end
  n += 1
end

