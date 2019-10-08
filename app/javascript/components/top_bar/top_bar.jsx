import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from './main_nav';
import AuthModal from '../auth_modal/auth_modal';

export default ({logout, currentUser}) => {
  const content = (currentUser ? (
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
          <h1>WikiArt</h1>
          <h3>Visual Art Encyclopedia</h3>
        </div>
        <div className="nav-menu-auth">
          { content }
        </div>
      </nav>
    </header>
  )
}
