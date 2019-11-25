import React, { useEffect, } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  Link,
  useParams
} from 'react-router-dom';
import ArtistWiki from './artist_wiki';
import { useFetchAssociations } from '../hooks/utils';
import { requestArtist } from '../../actions/artist_actions';
import FamousArtworks from './artwork/famous_artworks';
import useBreadcrumbs from '../breadcrumbs';

export default (props) => {
  const dispatch = useDispatch();
  const { artistId } = useParams();

  const artist = useSelector(state => (
    state.entities.artists[artistId] || {}
  ));

  const crumbs = useBreadcrumbs();

  useEffect(() => {
    dispatch(requestArtist(artistId));
  },
  [artistId]
  )

  let parsed = useFetchAssociations(artist);
  console.log(parsed);

  return (
    <React.Fragment>
      { crumbs }
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
        <article className="artist-attribute-section">
          <h3>{ artist['name'] }</h3>
          <ul className="artist-attributes">
            <li className="artist-attribute-item">
              <s>Born:</s>
              <span>{ artist['birthDate'] }</span>
            </li>
            <li className="artist-attribute-item">
              { artist['deathDate'] ? (
                <>
                  <s>Died:</s>
                  <span>{ artist['deathDate'] }</span>
                </>
              ) : (
                null
              )}
            </li>
            <li className="artist-attribute-item">
              <s>Nationality:</s>
              <Link to={ `/artists-by-nationality/${ artist['nationalityId'] }` }>
                <span>{ parsed['nationality'] }</span>
              </Link>
            </li>
            <li className="artist-attribute-item">
              <s>School:</s>
              <Link to={ `/artists-by-school/${ artist['schoolId'] }` }>
                <span>{ parsed['school'] }</span>
              </Link>
            </li>
            <li className="artist-attribute-item">
              <s>Field:</s>
              <Link to={ `/artists-by-field/${ artist['fieldId'] }` }>
                <span>{ parsed['field'] }</span>
              </Link>
            </li>
            <li className="artist-attribute-item">
              <s>Art Movement:</s>
              <Link to={ `/artists-by-art-movement/${ artist['artMovementId'] }` }>
                <span>{ parsed['artMovement'] }</span>
              </Link>
            </li>
            <li className="artist-attribute-item">
              <s>Wikipedia:</s>
              <a href={ artist['wikiUrl'] }>
                <span>{ artist['wikiUrl'] }</span>
              </a>
            </li>
          </ul>
        </article>
        { artist['wikiUrl'] ? (
          <ArtistWiki artistId={ artist['id'] } artistWiki={ artist['wikiUrl'] }/>
        ) : (
          null
        )}
      </div>
      <section className="artist-famous-artworks">
        <FamousArtworks />
      </section>
      {/*
      <section className="artist-related-artworks">
        <h2>Related Artworks</h2>
      </section>
      <section className="artist-featured-artworks">
        <h2>Featured Artworks</h2>
      </section>
      */}
    </React.Fragment>
  );
}
