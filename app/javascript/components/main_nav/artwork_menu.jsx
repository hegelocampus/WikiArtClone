import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default () => {
  const [visable, setVisable] = useState(false);

  return (
    <React.Fragment>
      <a onClick={ () => visable ? setVisable(false) : setVisable(true) }>
        <h4>Artworks</h4>
      </a>
      { visable ? (
        <ul>
          <li>
            <Link to="/artworks-by-style">
              <h5>Styles</h5>
            </Link>
          </li>
          <li>
            <Link to="/artist-by-genre">
              <h5>Genres</h5>
            </Link>
          </li>
          <li>
            <Link to="/artist-by-media">
              <h5>Media</h5>
            </Link>
          </li>
        </ul>
      ):(
        null
      )}
    </React.Fragment>
  )
}

