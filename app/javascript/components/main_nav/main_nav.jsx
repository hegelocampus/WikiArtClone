import React from 'react';
import { Link } from 'react-router-dom';
import ArtistMenu from './artist_menu';
import ArtworkMenu from './artwork_menu';

export default (props) => {
  return (
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <ArtistMenu />
      </li>
      <li>
        <ArtworkMenu />
      </li>
    </ul>
  )
}

