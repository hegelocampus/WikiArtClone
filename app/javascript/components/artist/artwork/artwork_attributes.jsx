import React from 'react';
import { Link } from 'react-router-dom';
import { useFetchAssociations } from '../../hooks/utils';

export default ({ artwork, artist }) => {
  const parsed = useFetchAssociations(artwork);

  if ((!artist) || (!artwork)) return <span>...</span>;
  return (
    <article className='artwork-attribute-section'>
      <h3
        className='artwork-name'
      >
        {artwork.name}
      </h3>
      <Link
        to={`/${artist.id}`}
        className='artwork-detail-artist-name'
      >
        {artist.name}
      </Link>
      <ul className='artwork-attributes'>
        <li className='artwork-attribute-item'>
          <s>Date:</s>
          <span>{artwork.date}</span>
        </li>
        <li className='artwork-attribute-item'>
          <s>Style:</s>
          <Link to={`/artworks-by-style/${artwork.styleId}`}>
            <span>{parsed.style}</span>
          </Link>
        </li>
        <li className='artwork-attribute-item'>
          <s>Genre:</s>
          <Link to={`/artworks-by-genre/${artwork.genreId}`}>
            <span>{parsed.genre}</span>
          </Link>
        </li>
      </ul>
    </article>
  );
};
