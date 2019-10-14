json.key_format! camelize: :lower

json.artist do
  json.partial! @artist, as: :artist
  json.wiki_url @artist.wiki_url
  json.image_caption (@artist.image ? @artist.image.caption : nil)
  json.school_id (@artist[:school_id] ? @artist.school_id : nil)
  json.field_id (@artist[:field_id] ? @artist.field_id : nil)
  json.art_movement_id @artist.art_movement_id
end


json.selectors do
  json.nationality do
    json.set! @artist.nationality_id, @artist.nationality.name
  end

  json.school do
    json.set! @artist.school_id, @artist.school.name
  end

  json.field do
    json.set! @artist.field_id, @artist.field.name
  end

  json.art_movement do
    json.set! @artist.art_movement_id, @artist.art_movement.name
  end
end

#Artist artworks will be added to this when they are implemented

