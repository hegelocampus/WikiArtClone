json.key_format! camelize: :lower

json.artist do
  json.partial! @artist, as: :artist
  json.wiki_url @artist.wiki_url
  json.image_caption (@artist.image ? @artist.image.caption : nil)
  json.school_id (@artist[:school_id] ? @artist.school_id : nil)
  json.field_id (@artist[:field_id] ? @artist.field_id : nil)
  json.art_movement_id @artist.art_movement_id
  json.artworks do
    json.array! @artist.artworks, :id
  end
end

#Artist artworks will be added to this when they are implemented
json.artworks do
  @artworks.each do |artwork|
    json.set! artwork.id do
      json.partial! artwork
    end
  end
end

json.selectors do
  if @artist.nationality
    json.nationality do
      json.set! @artist.nationality_id do
        json.id @artist.nationality.id
        json.name @artist.nationality.name
      end
    end
  end

  if @artist.school
    json.school do
      json.set! @artist.school_id do
        json.id @artist.school.id
        json.name @artist.school.name
      end
    end
  end

  if @artist.field
    json.field do
      json.set! @artist.field_id do
        json.id @artist.field.id
        json.name @artist.field.name
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

