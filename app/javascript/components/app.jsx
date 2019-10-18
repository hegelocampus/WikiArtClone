import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import TopBar from './top_bar/top_bar';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import AuthModal from './auth_modal/auth_modal.jsx';
import Artist from './artist/artist';
import MainNav from './main_nav/main_nav';
import Edit from './edit/edit.jsx';
import Selector from './selector/selector';


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
        <ProtectedRoute path={'/edit'} component={ Edit } />
        <Route
          path={'/artworks-by-:selector'}>
          <Selector type="artworks" />
        </Route>
        <Route
          path={'/artists-by-:selector'}>
          <Selector type="artists" />
        </Route>
        <Route path={'/:artistId(\\d+)'} component={ Artist } />
        <Route path="/" component={ Splash }>
          <Redirect
            to={`/${ Math.floor(Math.random() * (Math.floor(20) - Math.floor(1))) }`}
          />
        </Route>
      </Switch>
    </main>
  </React.Fragment>
);
