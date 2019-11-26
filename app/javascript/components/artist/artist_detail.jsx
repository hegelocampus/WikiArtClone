import React, { useEffect, } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { useParams } from 'react-router-dom';
import ArtistWiki from './artist_wiki';
import { requestArtist } from '../../actions/artist_actions';
import ArtistAttributes from './artist_attributes';
import FamousArtworks from './artwork/famous_artworks';
import Breadcrumbs from '../breadcrumbs';

export default (props) => {
  const dispatch = useDispatch();
  const { artistId } = useParams();


  const artist = useSelector(state => (
    state.entities.artists[artistId] || {}
  ));

  useEffect(() => {
    dispatch(requestArtist(artistId));
  },
  [artistId]
  )

  return (
    <React.Fragment>
      <Breadcrumbs />
      <div className="artist-detail">
        <aside className="work-detail-image-container">
          <div>
            <img
              src={artist['imageUrl']}
              className="artist-detail-image"
              alt={`image of ${ artist['name'] }`}
            />
          </div>
          <span>
            { artist['imageCaption'] ? artist['imageCaption'].toTitleCase() : '' }
          </span>
        </aside>
        <ArtistAttributes artist={ artist } />
        { artist['wikiUrl'] ? (
          <ArtistWiki artistId={ artist['id'] } artistWiki={ artist['wikiUrl'] }/>
        ) : (
          null
        )}
      </div>
      <section className="artist-famous-artworks">
        <FamousArtworks />
      </section>
    </React.Fragment>
  );
}

