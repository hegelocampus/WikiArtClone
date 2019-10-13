json.key_format! camelize: :lower

json.artist do
  json.id artist.id
  json.name artist.name
  json.birth_date artist.birth_date
  json.death_date artist.death_date
  json.wiki_url artist.wiki_url
  json.image_url (artist.image ? artist.image.url : nil)
  json.image_caption (artist.image ? artist.image.caption : nil)
  json.nationality_id (artist[:nationality_id] ? artist.nationality_id : nil)
  json.school_id (artist[:school_id] ? artist.school_id : nil)
  json.field_id (artist[:field_id] ? artist.field_id : nil)
  json.art_movement_id artist.art_movement_id
end
