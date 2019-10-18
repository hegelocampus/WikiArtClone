import React from 'react';
import {
  Link,
} from 'react-router-dom';

export default ({ artist, artwork }) => {
  return (
    <React.Fragment>
      { artist && artwork ? (
        <div
          key={ artwork.id }
          className='artist-famous-work'
        >
          <div
            className="work-image-container"
          >
            <Link to={ `/${ artist.id }/${ artwork.id }` }>
              <img
                src={ artwork.imageUrl }
                className="work-detail-image"
                alt={`image of ${ artwork.name }`}
              />
            </Link>
          </div>
          <div
            className="famous-work-caption"
          >
            <Link to={ `/${ artist.id }/${ artwork.id }` }>
              <span>{ artwork.name || '' }</span>
            </Link>
            <Link to={ `/${ artist.id }` }>
              <span>{ artist.name || '' }</span>
            </Link>
            <span>{ artwork.date || '' }</span>
          </div>
        </div>
      ) : (
        null
      )}
    </React.Fragment>
  )
}

