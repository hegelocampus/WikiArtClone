import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from './main_nav';
import AuthModal from '../auth_modal/auth_modal';

export default ({logout, currentUser}) => {
  const authContent = (currentUser ? (
    <React.Fragment>
      <button onClick={ logout }>Sign Out</button>
    </React.Fragment>
  ) : (
    <AuthModal />
  ))
  return (
    <header>
      <nav className="top-nav">
        <MainNav />
        <div className="top-bar-logo-container">
          <img src={window.logoURL} alt="WikiArt logo" className="top-bar-logo" />
        </div>
        { authContent }
      </nav>
    </header>
  )
}
