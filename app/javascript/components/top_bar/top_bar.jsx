import React from 'react';
import MainNav from './main_nav';
import AuthModal from '../auth_modal/auth_modal';
import UserMenu from './top_bar_user_menu';


export default ({logout, currentUser}) => {
  const authContent = (currentUser ? (
    <UserMenu currentUser={ currentUser } logout={ logout } />
      ) : (
    <AuthModal />
  ))
  return (
    <header>
      <nav className="top-nav">
        <MainNav />
        <div className="top-bar-logo-container">
          <img src={ window.logoURL } alt="WikiArt logo" className="top-bar-logo" />
        </div>
        { authContent }
      </nav>
    </header>
  )
}
