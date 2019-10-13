import { connect } from 'react-redux';
import Artist from './artist';
import { requestArtist } from '../../actions/artist_actions';

// If I wanted to put the artist name in the url I'd have to pass the id as a params whenever I link to the artist page so that I can fetchArtistById, but I'd need to build in some conditional logic to handle a potential typed artist url which would require a fetchByArtistName
const mapStateToProps = (state, ownProps) => ({
  artist: state.entities.artists[ownProps.match.params.artistId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestArtist: id => dispatch(requestArtist(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Artist);

