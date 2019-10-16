import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TopBar from './top_bar/top_bar_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import AuthModal from './auth_modal/auth_modal.jsx';
import Artist from './artist/artist';
import MainNav from './main_nav/main_nav';
import Selector from './selector/selector';
import Edit from './edit/edit.jsx';


const Splash = () => (
  <h1>Splish Splash</h1>
)

export default () => (
  <React.Fragment>
    <TopBar />
    <main>
      <MainNav />
      <Switch>
        <Route path={'/profile/:userId'}>
          <h1>User show page</h1>
        </Route>
        <Route path={'/artists-by-:selector'} component={ Selector } />
        <Route path={'/edit'}>
          <Edit />
        </Route>
        <Route path={'/:artistId'} component={ Artist } />
        <Route path="/" component={ Splash } />
      </Switch>
    </main>
  </React.Fragment>
);
