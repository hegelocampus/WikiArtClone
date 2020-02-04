import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default ({ artistId }) => {
  const artist = useSelector(state => state.entities.artists[artistId]);
  const profileImage = useSelector(state => {
    if (artist && artist.profileImageId) {
      return state.entities.artworks[artist.profileImageId];
    }
  });

  return (
    <li
      key={`subject-${artist.id}`}
      className='subject-li'
    >
      {artist && profileImage && (
        <Link to={`/${artist.id}`}>
          <figure className='subject-li-fig'>
            <img
              src={profileImage.imageThumbUrl}
              alt={`${artist.name} profile image`}
            />
          </figure>
          <span>{artist.name}</span>
        </Link>
      )}
    </li>
  );
};
