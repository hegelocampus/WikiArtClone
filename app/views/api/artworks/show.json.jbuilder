json.key_format! camelize: :lower

#json.artwork do
#  json.partial! @artwork, as: :artwork
#  json.image_caption (@artwork.image ? @artwork.image.caption : nil)
#  json.style_id (@artwork[:style_id] ? @artwork.style_id : nil)
#  json.genre_id (@artwork[:genre_id] ? @artwork.genre_id : nil)
#end

json.artist do
  json.partial! @artist, as: :artist
  json.art_movement_id @artist.art_movement_id
  json.artworks do
    json.array! @artist.artworks, :id
  end
end

json.artworks do
  @artist.artworks.where(famous: true).each do |f_art|
    json.set! f_art.id do
        json.partial! f_art, as: :artwork
    end
  end

  json.set! @artwork.id do
    json.partial! @artwork, as: :artwork
    json.image_caption (@artwork.image ? @artwork.image.caption : nil)
    json.style_id (@artwork[:style_id] ? @artwork.style_id : nil)
    json.genre_id (@artwork[:genre_id] ? @artwork.genre_id : nil)
  end
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

  json.art_movement do
    json.set! @artist.art_movement_id do
      json.id @artist.art_movement.id
      json.name @artist.art_movement.name
    end
  end
end

