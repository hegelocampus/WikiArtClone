import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={""}>Artists</Link>
      </li>
      <li>
        <Link to={""}>Artworks</Link>
      </li>
    </ul>
  )
}

const Artists = () => {

}

