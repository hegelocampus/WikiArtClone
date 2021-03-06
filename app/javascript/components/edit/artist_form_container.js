import { connect } from 'react-redux';
import {
  requestArtist,
  createArtist,
  updateArtist
} from '../../actions/artist_actions';
import { requestAllSelectors } from '../../actions/selector_actions';
import { NEW, EDIT } from './edit';
import ArtistForm from './new_artist_form';
import { withRouter } from 'react-router';

const _nullArtist = {
  name: '',
  nationality: '',
  school: '',
  birthDate: '',
  deathDate: '',
  field: '',
  artMovement: '',
  wikiUrl: '',
  imageUrl: '',
  imageCaption: ''
};

const mapStateToProps = (state, ownProps) => {
  const artist = (ownProps.formType === NEW ? _nullArtist : state.entities.artists[ownProps.match.params.artistId]);
  const selectors = state.entities.selectors;
  return {
    artist: artist,
    selectors: selectors,
    formType: ownProps.formType,
    errors: state.errors.artist
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formAction = (ownProps.formType === NEW ? createArtist : updateArtist);
  return {
    requestArtist: artistId => dispatch(requestArtist(artistId)),
    formAction: artist => dispatch(formAction(artist)),
    requestAllSelectors: type => dispatch(requestAllSelectors(type))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArtistForm));
