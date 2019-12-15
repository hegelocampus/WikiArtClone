json.key_format! camelize: :lower
@artists.each do |artist|
  json.artists do
    json.set! artist.id do
      json.partial! artist, as: :artist
    end
  end
  json.artworks do
    json.set! artist.profile_image.id do
      json.partial! artist.profile_image
    end
  end
end


