json.key_format! camelize: :lower

json.id artwork.id
json.name artwork.name
json.date artwork.date
json.artist_id artwork.artist.id
json.image_url (artwork.image ? artwork.image.url : nil)

