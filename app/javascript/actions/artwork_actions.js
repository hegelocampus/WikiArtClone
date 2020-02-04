import * as ArtworkApiUtil from '../utils/artwork_api_util';

export const RECEIVE_ARTWORKS = 'RECEIVE_ARTWORKS';
export const RECEIVE_ARTWORK = 'RECEIVE_ARTWORK';
export const DELETE_ARTWORK = 'DELETE_ARTWORK';
export const RECEIVE_ARTWORK_ERRORS = 'RECEIVE_ARTWORK_ERRORS';

const receiveArtwork = ({ artworks, artist, selectors }) => ({
  type: RECEIVE_ARTWORK,
  artworks,
  artist,
  selectors
});

const receiveArtworks = ({ artworks, artists }) => ({
  type: RECEIVE_ARTWORKS,
  artworks,
  artists
});

const removeArtwork = (artworkId) => ({
  type: DELETE_ARTWORK,
  artworkId
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ARTWORK_ERRORS,
  errors
});

export const requestArtwork = (artistId, artworkId) => (dispatch) => ArtworkApiUtil.fetchArtwork(artistId, artworkId)
  .then(
    (query) => dispatch(receiveArtwork(query))
  );

export const requestArtworks = (selectors) => (dispatch) => ArtworkApiUtil.fetchArtworks(selectors)
  .then(
    artworks => dispatch(receiveArtworks(artworks))
  );

export const requestArtworksBySelector = (selectors) => (dispatch) => ArtworkApiUtil.fetchArtworks(selectors)
  .then(
    artworks => dispatch(receiveArtworks(artworks))
  );

export const createArtwork = (newArtwork) => (dispatch) => ArtworkApiUtil.createArtwork(newArtwork)
  .then(
    artwork => {
      dispatch(receiveArtwork(artwork));
      return artwork;
    },
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const updateArtwork = (newArtwork) => (dispatch) => ArtworkApiUtil.updateArtwork(newArtwork)
  .then(
    (artwork) => dispatch(receiveArtwork(artwork)),
    errors => dispatch(receiveErrors(errors))
  );

export const deleteArtsit = (artworkId) => (dispatch) => ArtworkApiUtil.deleteArtwork(artworkId)
  .then(
    () => dispatch(removeArtwork(artworkId))
  );
