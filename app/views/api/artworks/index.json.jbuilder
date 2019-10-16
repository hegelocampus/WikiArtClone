json.key_format! camelize: :lower
@artworks.each do |artwork|
  json.artworks do
    json.set! artwork.id do
      json.partial! artwork, as: :artwork
    end
  end

  json.artists do
    json.set! artwork.artist.id do
      json.id artwork.artist.id
      json.name artwork.artist.name
    end
  end
end

