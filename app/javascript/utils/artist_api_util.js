export const fetchArtists = selectors => $.ajax({
  url: '/api/artists',
  data: {selectors}
});

export const fetchArtist = id => $.ajax({
  url: `/api/artists/${id}`,
});

// The following haven't been setup in the controllers yet

export const createArtist = artist => $.ajax({
  url: 'api/artists',
  type: 'post',
  data: { artist }
});

export const updateArtist = artist => $.ajax({
  url: `api/artists/${artist.id}`,
  type: 'patch',
  data: { artist }
});

export const deleteArtist = artistId => $.ajax({
  url: `api/artists/${artistId}`,
  type: 'delete'
});
