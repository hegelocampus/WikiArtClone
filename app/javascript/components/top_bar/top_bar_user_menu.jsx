import React, { useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import { useActionOnOutsideClick } from '../hooks/utils';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { logout } from "../../actions/session_actions";

//const emailGrab = /(.+)(?=\@)/;

export default (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.entities.users[state.session.id]);
  const [visable, setVisable] = useState(false);
  const dropDown = useRef(null);

  useActionOnOutsideClick(dropDown, () => setVisable(false));

  return (
    <div className="top-menu-user-menu-wrapper" ref={ dropDown }>
      <a className="top-menu-user-menu"
        onClick={ () => visable ? setVisable(false) : setVisable(true) }
      />
      { visable ? (
        <ul className="top-menu-user-menu-list">
          <li>
            <a className="display-name">
              { currentUser.username || currentUser.email.match(/(.+)(?=\@)/)[0] }
            </a>
          </li>
          {/*
          <li>
            <Link
              to={`/profile/${currentUser.id}`}
              onClick={ () => setVisable(false) }
              className="user-menu-link"
            >
              My account
            </Link>
          </li>
          <li>
            <Link
              to={`/profile/${currentUser.id}/albums`}
              className="user-menu-link"
            >
              My albums
            </Link>
          </li>
          */}
          <li>
            <Link
              to='/edit/new' className="user-menu-link">Add artist</Link>
          </li>
          <li>
            <a onClick={ () => dispatch(logout()) } className="user-menu-link">Sign Out</a>
          </li>
        </ul>
      ) : (
        null
      )
    }
    </div>
  )
}

