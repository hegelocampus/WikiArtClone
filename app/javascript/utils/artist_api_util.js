export const fetchArtists = selectors => $.ajax({
  url: '/api/artists',
  data: {selectors}
});

export const fetchArtist = id => $.ajax({
  url: `/api/artists/${id}`,
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
