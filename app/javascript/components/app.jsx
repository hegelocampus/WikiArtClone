import React from 'react';
import { Route } from 'react-router-dom';
import TopBar from './top_bar/top_bar_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import AuthModal from './auth_modal/auth_modal.jsx';


const splash = () => (
  <h1>Splash</h1>
)

export default () => (
  <React.Fragment>
    <TopBar />
    <Route path="/" component={ splash } />
    <AuthRoute path={["/login", "/sign-up"]} component={ AuthModal } />
  </React.Fragment>
);
