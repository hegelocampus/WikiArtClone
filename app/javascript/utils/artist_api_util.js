export const fetchArtists = selectors => $.ajax({
  url: '/api/artists',
  data: { selectors }
})

export const fetchArtist = id => $.ajax({
  url: `/api/artists/${id}`
})

export const fetchRandomArtistId = () => $.ajax({
  url: '/api/random/'
})

export const createArtist = artist => $.ajax({
  url: 'api/artists',
  type: 'post',
  data: { artist }
})

export const updateArtist = artist => $.ajax({
  url: `api/artists/${artist.id}`,
  type: 'patch',
  data: { artist }
})

// TODO Implement delete artist
export const deleteArtist = artistId => $.ajax({
  url: `api/artists/${artistId}`,
  type: 'delete'
})
