import React from 'react';
import {
  Link
} from 'react-router-dom';

export default ({ artist, artwork }) => {
  let artworkName = '';
  if (artwork.name && artwork.name.length > 60) {
    artworkName = `${artwork.name.substring(0, 50)}...`;
  } else if (artwork.name) {
    artworkName = artwork.name;
  }

  return (
    <>
      {artist && artwork ? (
        <div
          key={artwork.id}
          className='artist-famous-work'
        >
          <div
            className='work-image-container'
          >
            <Link to={`/${artist.id}/${artwork.id}`}>
              <img
                src={artwork.imageThumbUrl}
                className='work-detail-image'
                alt={`image of ${artwork.name}`}
              />
            </Link>
          </div>
          <div
            className='famous-work-caption'
          >
            <Link className='artwork-tile-title' to={`/${artist.id}/${artwork.id}`}>
              <span>{artworkName}</span>
            </Link>
            <Link className='artwork-tile-artist' to={`/${artist.id}`}>
              <span>{artist.name || ''} • </span>
              <span className='artwork-tile-date'>{artwork.date || ''}</span>
            </Link>
          </div>
        </div>
      ) : (
        null
      )}
    </>
  );
};
