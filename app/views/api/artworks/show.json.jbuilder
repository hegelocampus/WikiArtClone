json.key_format! camelize: :lower

json.artwork do
  json.partial! @artwork, as: :artwork
  json.image_caption (@artwork.image ? @artwork.image.caption : nil)
  json.style_id (@artwork[:style_id] ? @artwork.style_id : nil)
  json.genre_id (@artwork[:genre_id] ? @artwork.genre_id : nil)
end

json.artist do
  json.partial! @artwork.artist, as: :artist
end


json.selectors do
  if @artwork.style
    json.style do
      json.set! @artwork.style_id do
        json.id @artwork.style.id
        json.name @artwork.style.name
      end
    end
  end

  if @artwork.genre
    json.genre do
      json.set! @artwork.genre_id do
        json.id @artwork.genre.id
        json.name @artwork.genre.name
      end
    end
  end
end

