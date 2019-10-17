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

export default (props) => {
  const params = useParams();
  const { artworkId, artistId } = params
  const dispatch = useDispatch();
  const { artist } = props;

  //const artist = useSelector(state => (
  //  state.entities.artists[artistId]
  //));
  const artworks = useSelector(state => {
    return state.entities.artworks
  });

  console.log(artist);
  debugger
  const artistArtworks = (artist && artist['artworks']) ? (
    Object.values(artworks).filter(val => {
      return val.artistId === artist.id;
    })
  ) : [];

  const artworkLis = artistArtworks.map(work => (
    <li
      key={ work.id }
      className='artist-famous-artwork'
    >
      <figure
        className="famous-artwork-image-container"
      >
        <img
          src={ work.imageUrl }
          className="artwork-detail-image"
          alt={`image of ${ work.name }`}
        />
        <figcaption>
          <h5>{ work.name || '' }</h5>
          <span>{ work.date || '' }</span>
        </figcaption>
      </figure>
    </li>
  ));

  return (

    <div className="famous-works-container">
      <div className="famous-works-title-container">
        <h3>{ artist.name }</h3>
        <span>famous works</span>
      </div>
      <div className="famous-works-ul-container">
        <ul>
          { artworkLis }
        </ul>
      </div>
    </div>
  )
}

