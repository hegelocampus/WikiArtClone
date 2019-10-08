import React from 'react';
import { Route } from 'react-router-dom';
import TopBar from './top_bar/top_bar';
import AuthModal from './auth_modal/sign_in_container.js';

const head = () => (
  <h1>WikiArt</h1>
)

export default () => (
  <React.Fragment>
    <TopBar />
    <Route path="/" component={ head } />
    <Route path={["/login", "/sign-up"]} component={ AuthModal } />
  </React.Fragment>
);
