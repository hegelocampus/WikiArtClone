export const fetchArtworks = selectors => $.ajax({
  url: '/api/artworks',
  data: {selectors}
});

export const fetchArtwork = id => $.ajax({
  url: `/api/artworks/${id}`,
});

export const createArtwork = artwork => $.ajax({
  url: 'api/artworks',
  type: 'post',
  data: { artwork }
});

export const updateArtwork = artwork => $.ajax({
  url: `api/artworks/${artwork.id}`,
  type: 'patch',
  data: { artwork }
});

export const deleteArtwork = artworkId => $.ajax({
  url: `api/artworks/${artworkId}`,
  type: 'delete'
});

