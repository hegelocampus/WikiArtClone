import { connect } from 'react-redux';
import ArtistWiki from './artist_wiki';
import { fetchWiki } from '../../actions/wiki_actions';

const mapStateToProps = (state, ownProps) => ({
  artistId: ownProps.artistId,
  artistWikiUrl: ownProps.artistWiki,
  wikiText: state.entities.wikis[ownProps.artistId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchWiki: (wikiUrl, artistId) => dispatch(fetchWiki(wikiUrl, artistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistWiki);
