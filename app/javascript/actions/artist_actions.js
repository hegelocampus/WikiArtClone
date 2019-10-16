import * as ArtistApiUtil from '../utils/artist_api_util';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const DELETE_ARTIST = 'DELETE_ARTIST';
export const RECEIVE_ARTIST_ERRORS = 'RECEIVE_ARTIST_ERRORS';

const receiveArtist = ({artist, selectors, artworks}) => ({
  type: RECEIVE_ARTIST,
  artist,
  selectors,
  artworks,
});

const receiveArtists = (artists) => ({
  type: RECEIVE_ARTISTS,
  artists
});

const removeArtist = (artistId) => ({
  type: DELETE_ARTIST,
  artistId
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ARTIST_ERRORS,
  errors
});

export const requestArtist = (id) => (dispatch) => ArtistApiUtil.fetchArtist(id)
  .then(
    (query) => dispatch(receiveArtist(query))
  );

export const requestArtists = (selectors) => (dispatch) => ArtistApiUtil.fetchArtists(selectors)
  .then(
    artists => dispatch(receiveArtists(artists))
  );

export const requestArtistsBySelector = (selectors) => (dispatch) => ArtistApiUtil.fetchArtists(selectors)
  .then(
    artists => dispatch(receiveArtists(artists))
  );

export const createArtist = (newArtist) => (dispatch) => ArtistApiUtil.createArtist(newArtist)
  .then(
    artist => {
      dispatch(receiveArtist(artist));
      return artist;
    },
    errors => dispatch(receiveErrors(errors))
  );

export const updateArtist = (newArtist) => (dispatch) => ArtistApiUtil.updateArtist(newArtist)
  .then(
    (artist) => dispatch(receiveArtist(artist)),
    errors => dispatch(receiveErrors(errors))
  );

export const deleteArtsit = (artistId) => (dispatch) => ArtistApiUtil.deleteArtist(artistId)
  .then(
    () => dispatch(removeArtist(artistId))
  );

