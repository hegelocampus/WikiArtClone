import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  return (
    <header>
      <nav className="top-menu">
        <Link to={ '/login' }>
          <button className="top-menu-auth">Log In</button>
        </Link>
      </nav>
    </header>
  )
};
