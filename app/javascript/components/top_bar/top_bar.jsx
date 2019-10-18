import React from 'react';
import AuthModal from '../auth_modal/auth_modal';
import UserMenu from './top_bar_user_menu';
import EditMenu from './top_bar_edit_artist';

import {
  useSelector,
} from 'react-redux';

export default (props) => {
  const currentUser = useSelector(state => state.entities.users[state.session.id]);
  const authContent = (currentUser ? (
    <UserMenu currentUser={ currentUser } />
  ) : (
    <AuthModal />
  ))
  return (
    <header>
      <nav className="top-nav">
        <div className="top-bar-logo-container">
          <img src={ window.logoURL } alt="WikiArt logo" className="top-bar-logo" />
        </div>
        <div className="top-bar-side-nav">
          <EditMenu />
          { authContent }
        </div>
      </nav>
    </header>
  )
}

