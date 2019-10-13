json.partial! @artist, as: :artist

json.selectors do
  json.nationality do
    json.set! @artist.nationality_id do
      json.name @artist.nationality.name
    end
  end

  json.school do
    json.set! @artist.school_id do
      json.name @artist.school.name
    end
  end

  json.field do
    json.set! @artist.field_id do
      json.name @artist.field.name
    end
  end

  json.art_movement do
    json.set! @artist.art_movement_id do
      json.name @artist.art_movement.name
    end
  end
end

#Artist artworks will be added to this when they are implemented

