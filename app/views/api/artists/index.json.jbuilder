json.key_format! camelize: :lower
@artists.each do |artist|
  json.set! artist.id do
    json.partial! artist, as: :artist
  end
end

