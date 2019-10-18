import React, { useEffect, } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  Link,
  useParams
} from 'react-router-dom';
import { useFetchAssociations } from '../../hooks/utils';
import { requestArtwork } from '../../../actions/artwork_actions';
import ClipLoader from 'react-spinners/ClipLoader';
import FamousArtworks from './famous_artworks';
import useBreadcrumbs from '../../breadcrumbs';

//TODO Implement optional wikipedia page section for artworks

export default (props) => {
  const params = useParams();
  const { artworkId, artistId } = params
  const dispatch = useDispatch();

  const artwork = useSelector(state => (
    state.entities.artworks[artworkId]
  ));

  const crumbs = useBreadcrumbs();
  const artist = useSelector(state => (
    state.entities.artists[artistId]
  ));

  useEffect(() => {
    dispatch(requestArtwork(artistId, artworkId));
  },
  [params, artistId, artworkId]
  )

  let parsed = useFetchAssociations(artwork);

  return (
    <React.Fragment>
      { artwork ? (
        <>
          { crumbs }
          <div className="artwork-detail">
            <aside className="work-detail-image-container">
              <div>
                <img
                  src={ artwork.imageUrl }
                  className="artwork-detail-image"
                  alt={`image of ${ artwork.name }`}
                />
              </div>
              <span>
                { artwork.imageCaption ? artwork.imageCaption.toTitleCase() : '' }
              </span>
            </aside>
            <article className="artwork-attribute-section">
              <h3
                className="artwork-name"
              >
                { artwork.name }
              </h3>
              <Link
                to={ `/${ artist.id }` }
                className="artwork-detail-artist-name"
              >
                { artist.name }
              </Link>
              <ul className="artwork-attributes">
                            <li className="artwork-attribute-item">
                  <s>Date:</s>
                  <span>{ artwork.date }</span>
                </li>
                <li className="artwork-attribute-item">
                  <s>Style:</s>
                  <Link to={ `/artworks-by-style/${ artwork.styleId }` }>
                    <span>{ parsed.style }</span>
                  </Link>
                </li>
                <li className="artwork-attribute-item">
                  <s>Genre:</s>
                  <Link to={ `/artworks-by-genre/${ artwork.genreId }` }>
                    <span>{ parsed.genre }</span>
                  </Link>
                </li>
              </ul>
            </article>
            <section className="artist-famous-artworks">
              <FamousArtworks
                artist={ artist }
                currentArtworkId={ artwork.id }
              />
            </section>
          </div>
        </>
      ) : (
        <ClipLoader
            sizeUnit={"px"}
            size={150}
            loading={true}
        />
      )}
    </React.Fragment>
  )
}

