import React from 'react';
import { Link } from 'react-router-dom';
import ArtistMenu from './artist_menu';
import ArtworkMenu from './artwork_menu';

export default (props) => {
  return (
    <ul className='main-nav'>
      <li>
        <Link className='main-nav-main-cat' to='/'>Home</Link>
      </li>
      <li>
        <ArtistMenu />
      </li>
      <li>
        <ArtworkMenu />
      </li>
    </ul>
  );
};
