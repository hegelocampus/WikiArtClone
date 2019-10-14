json.key_format! camelize: :lower

json.id artist.id
json.name artist.name
json.birth_date artist.birth_date
json.death_date artist.death_date
json.image_url (artist.image ? artist.image.url : nil)
json.nationality_id (artist[:nationality_id] ? artist.nationality_id : nil)

