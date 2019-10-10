import { connect } from 'react-redux';

mapStateToProps = (state, ownProps) => ({
  artist: state.artists[ownProps.match.artistId]
})
