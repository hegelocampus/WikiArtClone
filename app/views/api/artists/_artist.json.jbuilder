json.artist do
  json.name artist.name
  json.birth_date artist.birth_date
  json.death_date artist.death_date
  json.wiki_url artist.wiki_url
  json.image_url artist.image.url
  json.nationality_id artist.nationality.id
  json.school_id artist.school.id
  json.field_id artist.field.id
  json.art_movement_id artist.art_movement.id
end
