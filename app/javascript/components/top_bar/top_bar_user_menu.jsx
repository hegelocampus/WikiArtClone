import React, { useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import { actionOnOutsideClick } from '../hooks/utils';

//const emailGrab = /(.+)(?=\@)/;

export default ({ currentUser, logout }) => {
  const [visable, setVisable] = useState(false);
  const dropDown = useRef(null);

  actionOnOutsideClick(dropDown, () => setVisable(false));

  return (
    <div className="top-menu-user-menu-wrapper" ref={ dropDown }>
      <a className="top-menu-user-menu"
        onClick={ () => visable ? setVisable(false) : setVisable(true) }
      />
      { visable ? (
        <ul className="top-menu-user-menu-list">
          <li>
            <a className="display-name">{ currentUser.username || currentUser.email.match(/(.+)(?=\@)/)[0] }</a>
          </li>
          <li>
            <Link to={`/profile/${currentUser.id}`} className="user-menu-link">My account</Link>
          </li>
          <li>
            <Link to={`/profile/${currentUser.id}/albums`} className="user-menu-link">My albums</Link>
          </li>
          <li>
            <Link to='/edit/new' className="user-menu-link">Add artist</Link>
          </li>
          <li>
            <a onClick={ logout } className="user-menu-link">Sign Out</a>
          </li>
        </ul>
      ) : (
        null
      )
    }
    </div>
  )
}

