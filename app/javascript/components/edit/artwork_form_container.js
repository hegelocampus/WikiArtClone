import { connect } from 'react-redux'
import {
  requestArtist
} from '../../actions/artist_actions'
import {
  requestArtwork,
  createArtwork,
  updateArtwork
} from '../../actions/artwork_actions'
import { requestAllSelectors } from '../../actions/selector_actions'
import { NEW, EDIT } from './edit'
import ArtworkForm from './artwork_form'
import { withRouter } from 'react-router'

const _nullArtwork = {
  name: '',
  date: '',
  genre: '',
  style: '',
  imageUrl: '',
  imageThumbUrl: '',
  imageCaption: ''
}

const mapStateToProps = (state, ownProps) => {
  const artwork = (ownProps.formType === NEW ? _nullArtwork : state.entities.artworks[ownProps.match.params.artworkId])
  const artist = state.entities.artworks[ownProps.match.params.artworkId]
  const selectors = state.entities.selectors

  return {
    artwork: artwork,
    artistId: ownProps.match.params.artistId,
    selectors: selectors,
    formType: ownProps.formType
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const formAction = (ownProps.formType === NEW ? createArtwork : updateArtwork)
  return {
    requestArtist: artistId => dispatch(requestArtist(artistId)),
    requestArtwork: (artworkId, artistId) => dispatch(requestArtwork(artworkId, artistId)),
    formAction: artwork => dispatch(formAction(artwork)),
    requestAllSelectors: type => dispatch(requestAllSelectors(type))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArtworkForm))
