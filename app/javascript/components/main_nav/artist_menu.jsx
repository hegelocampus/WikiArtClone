import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default () => {
  const [visable, setVisable] = useState(false);

  return (
    <React.Fragment>
      <a onClick={ () => visable ? setVisable(false) : setVisable(true) }>
        <h4>Artists</h4>
      </a>
      { visable ? (
        <ul>
          <li>
            <Link to="/artists-by-art-movement">
              <h5>Art movements</h5>
            </Link>
          </li>
          <li>
            <Link to="/artists-by-field">
              <h5>Fields</h5>
            </Link>
          </li>
          <li>
            <Link to="/artists-by-nationality">
              <h5>Nationalities</h5>
            </Link>
          </li>
          <li>
            <Link to="/artists-by-school">
              <h5>Art institutions</h5>
            </Link>
          </li>
        </ul>
      ):(
        null
      )}
    </React.Fragment>
  )
}

